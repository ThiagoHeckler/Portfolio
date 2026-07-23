import React from "react";

/**
 * ArchStat — a monospace key over a muted value, for the "how this runs" strip.
 */
export function ArchStat({ stat, label, ...rest }) {
  return (
    <div {...rest}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-stat)", color: "var(--text-body)" }}>{stat}</div>
      <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>{label}</div>
    </div>
  );
}
