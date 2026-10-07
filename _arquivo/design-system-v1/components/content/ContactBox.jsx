import React from "react";
import { Eyebrow } from "../brand/Eyebrow.jsx";
import { Button } from "../primitives/Button.jsx";

/**
 * ContactBox — amber-bordered call-to-action panel (the "gancho para serviço").
 */
export function ContactBox({ eyebrow = "contato", title, lead, actions, ...rest }) {
  return (
    <div
      style={{
        border: "1px solid var(--accent)",
        background: "var(--wash-featured)",
        borderRadius: "var(--radius-lg)",
        padding: "clamp(1.75rem, 4vw, 2.75rem)",
      }}
      {...rest}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 style={{ fontSize: "var(--fs-h2)", letterSpacing: "var(--tracking-h2)", color: "var(--text-h1)", margin: "0 0 0.35rem" }}>{title}</h2>
      {lead && <p style={{ color: "var(--text-muted)", maxWidth: "60ch", marginBottom: "1.5rem" }}>{lead}</p>}
      {actions && <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>{actions}</div>}
    </div>
  );
}
