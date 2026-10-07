import React from "react";
import { Badge } from "../primitives/Badge.jsx";
import { Tag } from "../primitives/Tag.jsx";
import { WhyBlock } from "./WhyBlock.jsx";

/**
 * ProjectCard — a portfolio project: title, subdomain, description, the
 * database "why" motive, and a stack tag row. Lifts on hover.
 */
export function ProjectCard({
  title,
  url,
  urlLabel,
  description,
  db = "pg",
  dbLabel,
  why,
  tags = [],
  featured = false,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const badges = Array.isArray(dbLabel)
    ? dbLabel
    : dbLabel
    ? [{ db, label: dbLabel }]
    : [];
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem",
        background: "var(--surface-card)",
        border: `1px solid ${hover ? "var(--border-hover)" : "var(--border)"}`,
        borderRadius: "var(--radius-lg)",
        padding: "1.25rem",
        transform: hover ? "translateY(-3px)" : "none",
        transition: "var(--transition-card)",
        gridColumn: featured ? "1 / -1" : undefined,
      }}
      {...rest}
    >
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "0.75rem" }}>
        <h3 style={{ margin: 0, fontSize: "var(--fs-h3)", color: "var(--text-h3)" }}>{title}</h3>
        {url && (
          <a href={url} target="_blank" rel="noopener" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-url)", color: "var(--text-muted)", textDecoration: "none", whiteSpace: "nowrap" }}>
            {urlLabel}
          </a>
        )}
      </div>
      <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "var(--fs-body)", flexGrow: 1 }}>{description}</p>
      {why && (
        <WhyBlock db={db}>
          <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
            {badges.map((b, i) => (
              <Badge key={i} db={b.db}>{b.label}</Badge>
            ))}
          </div>
          <p style={{ margin: "0.45rem 0 0", fontSize: "var(--fs-small)", color: "var(--text-body)" }}>{why}</p>
        </WhyBlock>
      )}
      {tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
    </article>
  );
}
