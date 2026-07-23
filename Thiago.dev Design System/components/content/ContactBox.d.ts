import { ReactNode } from "react";

export interface ContactBoxProps {
  /** Mono kicker; defaults to "contato". */
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Button(s) row. */
  actions?: ReactNode;
}

/**
 * Amber-bordered CTA panel — the "hook for someone who wants a service" section.
 * @startingPoint section="Content" subtitle="Amber CTA / contact panel" viewport="700x300"
 */
export function ContactBox(props: ContactBoxProps): JSX.Element;
