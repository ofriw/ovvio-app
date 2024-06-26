/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils/index.ts";

export interface IMjmlSpacerProps {
  border?: React.CSSProperties["border"];
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  containerBackgroundColor?: string;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  padding?: string | number;
  /** MJML default value: 20px */
  height?: string | number;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export function MjmlSpacer(props: IMjmlSpacerProps): JSX.Element {
  return React.createElement("mj-spacer", convertPropsToMjmlAttributes(props));
}
