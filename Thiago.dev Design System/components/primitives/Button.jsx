import React from "react";

/**
 * Button — primary (amber fill) or secondary (outline) action.
 * Mirrors the site's role="button" anchors.
 */
export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  ...rest
}) {
  const pads = {
    sm: "0.4rem 0.85rem",
    md: "0.65rem 1.25rem",
    lg: "0.8rem 1.6rem",
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontFamily: "var(--font-sans)",
    fontSize: size === "sm" ? "0.9rem" : "1rem",
    fontWeight: "var(--fw-medium)",
    lineHeight: 1.2,
    padding: pads[size],
    borderRadius: "var(--radius-lg)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    textDecoration: "none",
    transition: "background-color var(--dur-hover) var(--ease), border-color var(--dur-hover) var(--ease), color var(--dur-hover) var(--ease)",
    whiteSpace: "nowrap",
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--accent-inverse)",
      borderColor: "var(--accent)",
    },
    secondary: {
      background: "transparent",
      color: "var(--text-body)",
      borderColor: "var(--border)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      borderColor: "transparent",
    },
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: { background: "var(--accent-hover)", borderColor: "var(--accent-hover)" },
    secondary: { borderColor: "var(--border-hover)", color: "var(--text-h1)" },
    ghost: { color: "var(--text-body)" },
  }[variant] : {};

  const style = { ...base, ...variants[variant], ...hoverStyle };
  const Tag = href && !disabled ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
