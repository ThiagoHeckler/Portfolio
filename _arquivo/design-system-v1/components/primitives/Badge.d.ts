import { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  /** Semantic database hue. */
  db?: "pg" | "mongo" | "accent";
}

/** Monospace database label (PostgreSQL blue / MongoDB green / amber). */
export function Badge(props: BadgeProps): JSX.Element;
