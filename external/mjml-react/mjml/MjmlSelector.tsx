/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils/index.ts";

export interface IMjmlSelectorProps {
  children?: React.ReactNode;
  path?: string;
}

export function MjmlSelector({
  children,
  ...props
}: IMjmlSelectorProps): JSX.Element {
  return React.createElement(
    "mj-selector",
    convertPropsToMjmlAttributes(props),
    children
  );
}
