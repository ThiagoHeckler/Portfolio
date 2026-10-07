import { ReactNode } from "react";

export interface EyebrowProps {
  children: ReactNode;
}

/** Monospace kicker with a "// " accent prefix, sits above section titles. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
