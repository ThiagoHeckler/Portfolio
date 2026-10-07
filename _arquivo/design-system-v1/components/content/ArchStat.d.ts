import { ReactNode } from "react";

export interface ArchStatProps {
  /** The headline value, shown in monospace (e.g. "1 vCPU · 4 GB"). */
  stat: ReactNode;
  /** Muted caption below it. */
  label: ReactNode;
}

/** Key/value stat pair for the infrastructure ("como isto roda") strip. */
export function ArchStat(props: ArchStatProps): JSX.Element;
