export interface WordmarkProps {
  /** Link target for the mark. */
  href?: string;
  /** Path to the TH logo SVG (defaults to the amber mark). */
  logoSrc?: string;
}

/**
 * The "thiago.dev" wordmark lockup (TH mark + monospace text, amber ".dev").
 * @startingPoint section="Brand" subtitle="TH mark + thiago.dev lockup" viewport="700x150"
 */
export function Wordmark(props: WordmarkProps): JSX.Element;
