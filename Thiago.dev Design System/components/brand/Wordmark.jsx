import React from "react";

/**
 * Wordmark — the TH mark plus "thiago.dev" lockup. Uses the amber logo by default.
 */
export function Wordmark({ href = "/", logoSrc = "assets/logo-th.svg", ...rest }) {
  return (
    <a
      href={href}
      aria-label="Thiago Heckler - início"
      style={{
        fontFamily: "var(--font-mono)",
        fontWeight: "var(--fw-semibold)",
        fontSize: "1.05rem",
        color: "var(--text-body)",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.55rem",
      }}
      {...rest}
    >
      <img src={logoSrc} alt="" width="28" height="28" style={{ width: "1.6em", height: "1.6em", display: "block" }} />
      <span>thiago<span style={{ color: "var(--accent)" }}>.dev</span></span>
    </a>
  );
}
