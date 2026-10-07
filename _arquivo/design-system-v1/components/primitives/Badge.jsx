import React from "react";

/**
 * Badge — monospace database label. Semantic: PostgreSQL (blue) or MongoDB (green).
 */
export function Badge({ children, db = "pg", ...rest }) {
  const colors = {
    pg: { color: "var(--db-pg)", background: "var(--db-pg-bg)", borderColor: "var(--db-pg-border)" },
    mongo: { color: "var(--db-mongo)", background: "var(--db-mongo-bg)", borderColor: "var(--db-mongo-border)" },
    accent: { color: "var(--accent)", background: "var(--accent-tint)", borderColor: "var(--accent-underline)" },
  };
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-badge)",
        fontWeight: "var(--fw-medium)",
        letterSpacing: "var(--tracking-badge)",
        padding: "0.16rem 0.55rem",
        borderRadius: "var(--radius-sm)",
        border: "1px solid transparent",
        ...colors[db],
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
