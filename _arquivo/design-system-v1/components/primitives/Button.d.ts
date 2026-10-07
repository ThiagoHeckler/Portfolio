import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  /** Renders as <a> when set, otherwise <button>. */
  href?: string;
  /** primary = amber fill, secondary = outline, ghost = text only. */
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Primary/secondary action button matching the thiago.dev site.
 * @startingPoint section="Primitives" subtitle="Amber & outline actions" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
