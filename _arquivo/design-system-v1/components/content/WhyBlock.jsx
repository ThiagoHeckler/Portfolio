import React from "react";

/**
 * WhyBlock — the "motive" anchor: a left-bordered, tinted block explaining a
 * database choice. Hue driven by the db prop.
 */
export function WhyBlock({ db = "pg", children, ...rest }) {
  const map = {
    pg: { border: "var(--db-pg-border)", bg: "var(--db-pg-bg)" },
    mongo: { border: "var(--db-mongo-border)", bg: "var(--db-mongo-bg)" },
    both: { border: "var(--accent)", bg: "var(--accent-tint)" },
  };
  const { border, bg } = map[db];
  return (
    <div
      style={{
        borderLeft: `3px solid ${border}`,
        padding: "0.6rem 0 0.6rem 0.85rem",
        background: `linear-gradient(90deg, ${bg}, transparent 85%)`,
        borderRadius: "0 var(--radius-md) var(--radius-md) 0",
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
