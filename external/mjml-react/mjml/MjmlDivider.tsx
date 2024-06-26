/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils/index.ts";

export interface IMjmlDividerProps {
  borderColor?: React.CSSProperties["borderColor"];
  borderStyle?: React.CSSProperties["borderStyle"];
  borderWidth?: string | number;
  containerBackgroundColor?: string;
  /** MJML default value: 10px 25px */
  padding?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: 100% */
  width?: string | number;
  /** MJML default value: center */
  align?: "left" | "center" | "right";
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export function MjmlDivider(props: IMjmlDividerProps): JSX.Element {
  return React.createElement("mj-divider", convertPropsToMjmlAttributes(props));
}
