/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils/index.ts";

export interface IMjmlAccordionTitleProps {
  backgroundColor?: React.CSSProperties["backgroundColor"];
  color?: React.CSSProperties["color"];
  fontSize?: string | number;
  fontFamily?: string;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: 16px */
  padding?: string | number;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

export function MjmlAccordionTitle({
  children,
  ...props
}: IMjmlAccordionTitleProps): JSX.Element {
  return React.createElement(
    "mj-accordion-title",
    convertPropsToMjmlAttributes(props),
    children
  );
}
