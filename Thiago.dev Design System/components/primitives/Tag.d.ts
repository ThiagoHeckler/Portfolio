import { ReactNode } from "react";

export interface TagProps {
  children: ReactNode;
}

/** Monospace outline chip for a stack keyword (Spring Boot 4, JPA, …). */
export function Tag(props: TagProps): JSX.Element;
