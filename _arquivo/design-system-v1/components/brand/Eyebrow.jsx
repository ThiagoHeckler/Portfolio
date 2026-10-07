import React from "react";

/**
 * Eyebrow — monospace kicker label. Prefixed with "// " in the accent color,
 * the recurring "code comment" motif above section headings.
 */
export function Eyebrow({ children, ...rest }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-eyebrow)",
        letterSpacing: "var(--tracking-mono)",
        color: "var(--text-muted)",
        margin: "0 0 var(--space-3)",
      }}
      {...rest}
    >
      <span style={{ color: "var(--accent)" }}>// </span>
      {children}
    </p>
  );
}
