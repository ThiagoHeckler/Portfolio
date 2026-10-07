import React from "react";

/**
 * Tag — monospace outline chip for a tech-stack keyword.
 */
export function Tag({ children, ...rest }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-tag)",
        color: "var(--text-muted)",
        border: "1px solid var(--border)",
        padding: "0.12rem 0.5rem",
        borderRadius: "var(--radius-sm)",
        display: "inline-block",
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
