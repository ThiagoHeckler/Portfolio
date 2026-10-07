import { ReactNode } from "react";

export interface WhyBlockProps {
  /** Hue of the left border + wash. */
  db?: "pg" | "mongo" | "both";
  /** Badge(s) + the justification paragraph. */
  children: ReactNode;
}

/** Left-bordered tinted block that justifies a database choice inside a project card. */
export function WhyBlock(props: WhyBlockProps): JSX.Element;
