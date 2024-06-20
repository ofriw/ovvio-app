import { BloomFilter } from '../base/bloom.ts';
import { uniqueId } from '../base/common.ts';
import { CoreValue, Encodable, Encoder } from '../base/core-types/base.ts';
import {
  JSONCyclicalDecoder,
  JSONCyclicalEncoder,
} from '../base/core-types/encoding/json.ts';
import {
  ConstructorDecoderConfig,
  Decodable,
  DecodedValue,
  Decoder,
  ReadonlyDecodedArray,
} from '../base/core-types/encoding/types.ts';
import { isDecoderConfig } from '../base/core-types/encoding/utils.ts';
import { ReadonlyJSONObject } from '../base/interfaces.ts';
import { VersionNumber } from '../base/version-number.ts';
import { NormalizedLogEntry } from '../logging/entry.ts';
import { Commit } from '../repo/commit.ts';
import { getOvvioConfig } from '../server/config.ts';

export const K_DEFAULT_TTL_MS = 30 * 24 * 60 * 60 * 1000;

export type SyncValueType = Commit | NormalizedLogEntry;

export interface SyncMessageConfig<T extends SyncValueType> {
  filter: BloomFilter;
  size: number;
  orgId: string;
  values?: T[];
  accessDenied?: Iterable<string>;
  buildVersion?: VersionNumber;
}

export enum SyncValueFlag {
  Object = 0,
  Commit = 1,
}

export interface SyncMessageDecoderConfig extends ConstructorDecoderConfig {
  orgId: string;
}

export class SyncMessage<T extends SyncValueType>
  implements Encodable, Decodable
{
  readonly orgId: string;
  private _buildVersion!: VersionNumber;
  private _filter!: BloomFilter;
  private _size!: number;
  private _values!: T[];
  private _accessDenied?: string[];

  constructor(config: SyncMessageDecoderConfig | SyncMessageConfig<T>) {
    if (isDecoderConfig(config)) {
      this.orgId = config.orgId;
      this.deserialize(config.decoder);
    } else {
      this._filter = config.filter;
      this._size = config.size;
      this.orgId = config.orgId;
      this._values = config.values || [];
      if (config.accessDenied) {
        this._accessDenied = Array.from(config.accessDenied);
      }
      this._buildVersion = config.buildVersion || getOvvioConfig().version;
    }
  }

  get buildVersion(): VersionNumber {
    return this._buildVersion;
  }

  get filter(): BloomFilter {
    return this._filter;
  }

  get size(): number {
    return this._size;
  }

  get values(): T[] {
    return this._values;
  }

  protected set values(v: T[]) {
    this._values = v;
  }

  get accessDenied(): string[] {
    return this._accessDenied || [];
  }

  get valueFlag(): SyncValueFlag {
    const values = this.values;
    if (values.length > 0 && values[0] instanceof Commit) {
      return SyncValueFlag.Commit;
    }
    return SyncValueFlag.Object;
  }

  serialize(
    encoder: Encoder<string, CoreValue, CoreValue, unknown>,
    _options?: unknown,
  ): void {
    encoder.set('ver', this.buildVersion);
    encoder.set('f', this.filter);
    encoder.set('s', this.size);
    switch (this.valueFlag) {
      case SyncValueFlag.Commit:
        encoder.set(
          'c',
          (this.values as Commit[]).map((c) => c.toJS()),
        );
        break;

      case SyncValueFlag.Object:
        encoder.set('v', this.values);
        break;
    }
    if (this.accessDenied) {
      encoder.set('ad', this.accessDenied);
    }
  }

  deserialize(
    decoder: Decoder<string, DecodedValue>,
    _options?: unknown,
  ): void {
    this._buildVersion = decoder.get<VersionNumber>('ver')!;
    if (!this._filter) {
      this._filter = new BloomFilter({ size: 1, fpr: 0.5 });
    }
    this._filter.deserialize(decoder.getDecoder('f'));
    this._size = decoder.get<number>('s')!;
    this._accessDenied = decoder.get('ad', []);
    if (decoder.has('c')) {
      const values: Commit[] = [];
      for (const obj of decoder.get<ReadonlyDecodedArray>('c', [])!) {
        try {
          values.push(Commit.fromJS(this.orgId, obj as ReadonlyJSONObject));
        } catch (e: unknown) {}
      }
      this._values = values as T[];
    } else {
      this._values = decoder.get('v')! as T[];
    }
  }

  static build<T extends SyncValueType>(
    peerFilter: BloomFilter | undefined,
    values: Iterable<[id: string, value: T]>,
    localSize: number,
    peerSize: number,
    expectedSyncCycles: number,
    orgId: string,
    includeMissing = true,
    lowAccuracy = false,
  ): SyncMessage<T> {
    const numberOfEntries = Math.max(1, localSize, peerSize);
    const fpr = lowAccuracy
      ? 0.5
      : Math.min(
          0.5,
          1 / Math.pow(numberOfEntries, 1 / (0.5 * expectedSyncCycles)),
        );
    const localFilter = new BloomFilter({
      size: numberOfEntries,
      fpr,
    });
    const missingPeerValues: T[] = [];
    if (peerFilter && includeMissing) {
      localSize = 0;
      for (const [id, v] of values) {
        localFilter.add(id);
        ++localSize;
        if (!peerFilter.has(id)) {
          missingPeerValues.push(v);
        }
      }
    }
    return new this({
      filter: localFilter,
      size: localSize,
      orgId,
      values: missingPeerValues,
    });
  }
}

export function generateSessionId(userId: string): string {
  return `${userId}/${uniqueId()}`;
}
