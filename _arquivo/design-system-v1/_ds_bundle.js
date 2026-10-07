/* @ds-bundle: {"format":4,"namespace":"ThiagoDevDesignSystem_3d553a","components":[{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"ArchStat","sourcePath":"components/content/ArchStat.jsx"},{"name":"ContactBox","sourcePath":"components/content/ContactBox.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"WhyBlock","sourcePath":"components/content/WhyBlock.jsx"},{"name":"Badge","sourcePath":"components/primitives/Badge.jsx"},{"name":"Button","sourcePath":"components/primitives/Button.jsx"},{"name":"Tag","sourcePath":"components/primitives/Tag.jsx"}],"sourceHashes":{"components/brand/Eyebrow.jsx":"b41b54baac13","components/brand/Wordmark.jsx":"5310c06f5cd8","components/content/ArchStat.jsx":"99e10dc2bbd4","components/content/ContactBox.jsx":"061f1062374b","components/content/ProjectCard.jsx":"febe50ef54fc","components/content/WhyBlock.jsx":"815109b5b624","components/primitives/Badge.jsx":"09aae3af6be4","components/primitives/Button.jsx":"433dece21744","components/primitives/Tag.jsx":"fbf6f916c690","ui_kits/portfolio/Sections.jsx":"fbacf610c51e","ui_kits/portfolio/projects.js":"3bacbceb2eff"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ThiagoDevDesignSystem_3d553a = window.ThiagoDevDesignSystem_3d553a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — monospace kicker label. Prefixed with "// " in the accent color,
 * the recurring "code comment" motif above section headings.
 */
function Eyebrow({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-eyebrow)",
      letterSpacing: "var(--tracking-mono)",
      color: "var(--text-muted)",
      margin: "0 0 var(--space-3)"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "// "), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wordmark — the TH mark plus "thiago.dev" lockup. Uses the amber logo by default.
 */
function Wordmark({
  href = "/",
  logoSrc = "assets/logo-th.svg",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    "aria-label": "Thiago Heckler - in\xEDcio",
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "1.05rem",
      color: "var(--text-body)",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.55rem"
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    width: "28",
    height: "28",
    style: {
      width: "1.6em",
      height: "1.6em",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", null, "thiago", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, ".dev")));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/content/ArchStat.jsx
try { (() => {
/**
 * ArchStat — a monospace key over a muted value, for the "how this runs" strip.
 */
function ArchStat({
  stat,
  label,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", rest, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-stat)",
      color: "var(--text-body)"
    }
  }, stat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.82rem",
      color: "var(--text-muted)",
      marginTop: "0.15rem"
    }
  }, label));
}
Object.assign(__ds_scope, { ArchStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ArchStat.jsx", error: String((e && e.message) || e) }); }

// components/content/WhyBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * WhyBlock — the "motive" anchor: a left-bordered, tinted block explaining a
 * database choice. Hue driven by the db prop.
 */
function WhyBlock({
  db = "pg",
  children,
  ...rest
}) {
  const map = {
    pg: {
      border: "var(--db-pg-border)",
      bg: "var(--db-pg-bg)"
    },
    mongo: {
      border: "var(--db-mongo-border)",
      bg: "var(--db-mongo-bg)"
    },
    both: {
      border: "var(--accent)",
      bg: "var(--accent-tint)"
    }
  };
  const {
    border,
    bg
  } = map[db];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderLeft: `3px solid ${border}`,
      padding: "0.6rem 0 0.6rem 0.85rem",
      background: `linear-gradient(90deg, ${bg}, transparent 85%)`,
      borderRadius: "0 var(--radius-md) var(--radius-md) 0"
    }
  }, rest), children);
}
Object.assign(__ds_scope, { WhyBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/WhyBlock.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — monospace database label. Semantic: PostgreSQL (blue) or MongoDB (green).
 */
function Badge({
  children,
  db = "pg",
  ...rest
}) {
  const colors = {
    pg: {
      color: "var(--db-pg)",
      background: "var(--db-pg-bg)",
      borderColor: "var(--db-pg-border)"
    },
    mongo: {
      color: "var(--db-mongo)",
      background: "var(--db-mongo-bg)",
      borderColor: "var(--db-mongo-border)"
    },
    accent: {
      color: "var(--accent)",
      background: "var(--accent-tint)",
      borderColor: "var(--accent-underline)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-badge)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: "var(--tracking-badge)",
      padding: "0.16rem 0.55rem",
      borderRadius: "var(--radius-sm)",
      border: "1px solid transparent",
      ...colors[db]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Badge.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary (amber fill) or secondary (outline) action.
 * Mirrors the site's role="button" anchors.
 */
function Button({
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
    lg: "0.8rem 1.6rem"
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
    whiteSpace: "nowrap"
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--accent-inverse)",
      borderColor: "var(--accent)"
    },
    secondary: {
      background: "transparent",
      color: "var(--text-body)",
      borderColor: "var(--border)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      borderColor: "transparent"
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: "var(--accent-hover)",
      borderColor: "var(--accent-hover)"
    },
    secondary: {
      borderColor: "var(--border-hover)",
      color: "var(--text-h1)"
    },
    ghost: {
      color: "var(--text-body)"
    }
  }[variant] : {};
  const style = {
    ...base,
    ...variants[variant],
    ...hoverStyle
  };
  const Tag = href && !disabled ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    style: style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/ContactBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ContactBox — amber-bordered call-to-action panel (the "gancho para serviço").
 */
function ContactBox({
  eyebrow = "contato",
  title,
  lead,
  actions,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid var(--accent)",
      background: "var(--wash-featured)",
      borderRadius: "var(--radius-lg)",
      padding: "clamp(1.75rem, 4vw, 2.75rem)"
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      letterSpacing: "var(--tracking-h2)",
      color: "var(--text-h1)",
      margin: "0 0 0.35rem"
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      maxWidth: "60ch",
      marginBottom: "1.5rem"
    }
  }, lead), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem"
    }
  }, actions));
}
Object.assign(__ds_scope, { ContactBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ContactBox.jsx", error: String((e && e.message) || e) }); }

// components/primitives/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — monospace outline chip for a tech-stack keyword.
 */
function Tag({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-tag)",
      color: "var(--text-muted)",
      border: "1px solid var(--border)",
      padding: "0.12rem 0.5rem",
      borderRadius: "var(--radius-sm)",
      display: "inline-block"
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProjectCard — a portfolio project: title, subdomain, description, the
 * database "why" motive, and a stack tag row. Lifts on hover.
 */
function ProjectCard({
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
  const badges = Array.isArray(dbLabel) ? dbLabel : dbLabel ? [{
    db,
    label: dbLabel
  }] : [];
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      gridColumn: featured ? "1 / -1" : undefined
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--fs-h3)",
      color: "var(--text-h3)"
    }
  }, title), url && /*#__PURE__*/React.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-url)",
      color: "var(--text-muted)",
      textDecoration: "none",
      whiteSpace: "nowrap"
    }
  }, urlLabel)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)",
      fontSize: "var(--fs-body)",
      flexGrow: 1
    }
  }, description), why && /*#__PURE__*/React.createElement(__ds_scope.WhyBlock, {
    db: db
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "0.35rem",
      flexWrap: "wrap"
    }
  }, badges.map((b, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: i,
    db: b.db
  }, b.label))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0.45rem 0 0",
      fontSize: "var(--fs-small)",
      color: "var(--text-body)"
    }
  }, why)), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.4rem"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Sections.jsx — layout sections for the thiago.dev portfolio kit.
// Order follows the site outline: Apresentação · Projetos · Onde isso roda ·
// Stacks que uso · Gancho · Contato para trabalho.
const DS = window.ThiagoDevDesignSystem_3d553a;
const {
  Wordmark,
  Eyebrow,
  Button,
  ProjectCard,
  ArchStat,
  ContactBox,
  Tag,
  Badge
} = DS;
function Header({
  onNav
}) {
  const links = [["projetos", "Projetos"], ["arquitetura", "Onde roda"], ["stacks", "Stacks"], ["gancho", "Serviço"], ["contato", "Contato"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "var(--surface-header)",
      backdropFilter: "var(--blur-header)",
      WebkitBackdropFilter: "var(--blur-header)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0.55rem 1.25rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    href: "#top",
    logoSrc: "../../assets/logo-th.svg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "1.25rem",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#" + id,
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      color: "var(--text-muted)",
      textDecoration: "none",
      fontSize: "0.95rem"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--text-body)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--text-muted)"
  }, label)), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/ThiagoHeckler",
    target: "_blank",
    rel: "noopener",
    style: {
      color: "var(--text-muted)",
      textDecoration: "none",
      fontSize: "0.95rem"
    }
  }, "GitHub"))));
}

// 1 — Apresentação: intro + foto num único bloco.
function Apresentacao({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "apresentacao",
    style: {
      padding: "var(--pad-hero) 0"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "apresenta\xE7\xE3o"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) auto",
      gap: "clamp(1.5rem, 5vw, 3.5rem)",
      alignItems: "center"
    },
    className: "apresentacao-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h1)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--tracking-h1)",
      margin: "0 0 1.1rem",
      color: "var(--text-h1)"
    }
  }, "Thiago Heckler \u2014 sete projetos Spring Boot no ar, numa \xFAnica VPS."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-lead)",
      color: "var(--text-muted)",
      maxWidth: "56ch",
      marginBottom: "1.5rem"
    }
  }, "Sou desenvolvedor backend focado em Java e no ecossistema Spring. Gosto de problemas onde a decis\xE3o certa n\xE3o \xE9 a mais nova, e sim a que cabe na restri\xE7\xE3o, de or\xE7amento de mem\xF3ria \xE0 forma do dado. Este portf\xF3lio \xE9 isso na pr\xE1tica: sistemas reais, no ar, constru\xEDdos e explicados um a um."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: "#projetos",
    onClick: e => {
      e.preventDefault();
      onNav("projetos");
    }
  }, "Ver projetos"), /*#__PURE__*/React.createElement(Button, {
    href: "https://github.com/ThiagoHeckler",
    target: "_blank",
    rel: "noopener",
    variant: "secondary"
  }, "GitHub"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/profile.png",
    alt: "Thiago Heckler",
    width: "180",
    height: "180",
    style: {
      flexShrink: 0,
      width: 180,
      height: 180,
      borderRadius: "50%",
      objectFit: "cover",
      border: "4px solid var(--accent)",
      boxShadow: "var(--shadow-avatar)"
    }
  })));
}

// 2 — Projetos.
function Projects() {
  return /*#__PURE__*/React.createElement("section", {
    id: "projetos",
    style: {
      padding: "var(--pad-section) 0"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "projetos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      letterSpacing: "var(--tracking-h2)",
      margin: "0 0 0.35rem",
      color: "var(--text-h1)"
    }
  }, "Sete projetos, sete decis\xF5es de banco"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      maxWidth: "60ch",
      marginBottom: "2.5rem"
    }
  }, "A escolha do banco vem da forma do dado, n\xE3o da moda. Postgres quando a consist\xEAncia manda; Mongo quando o dado \xE9 documento. Cada card diz o porqu\xEA."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(var(--project-min), 1fr))",
      gap: "1.25rem"
    }
  }, window.PORTFOLIO_PROJECTS.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.title
  }, p))), /*#__PURE__*/React.createElement(ProjectCard, window.PORTFOLIO_FEATURED)));
}

// 3 — Onde isso roda (VPS).
function ArchStrip() {
  return /*#__PURE__*/React.createElement("section", {
    id: "arquitetura",
    style: {
      padding: "var(--pad-section) 0"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "onde isso roda \xB7 vps"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      letterSpacing: "var(--tracking-h2)",
      margin: "0 0 0.35rem",
      color: "var(--text-h1)"
    }
  }, "Tudo numa VPS de 1 vCPU e 4 GB"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      maxWidth: "60ch",
      marginBottom: "2.5rem"
    }
  }, "Sete JVMs, um PostgreSQL e um MongoDB, orquestrados por um \xFAnico Docker Compose atr\xE1s do Caddy. Fazer isso caber \xE9 parte do projeto, n\xE3o um detalhe."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(var(--arch-min), 1fr))",
      gap: "1.25rem 2rem",
      padding: "1.5rem 0",
      borderBlock: "1px solid var(--border)"
    }
  }, window.PORTFOLIO_ARCH.map(a => /*#__PURE__*/React.createElement(ArchStat, {
    key: a.stat,
    stat: a.stat,
    label: a.label
  }))));
}

// 4 — Stacks que uso.
function Stacks() {
  return /*#__PURE__*/React.createElement("section", {
    id: "stacks",
    style: {
      padding: "var(--pad-section) 0"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "stacks que uso"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      letterSpacing: "var(--tracking-h2)",
      margin: "0 0 0.35rem",
      color: "var(--text-h1)"
    }
  }, "A stack, fixa e por um motivo"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      maxWidth: "60ch",
      marginBottom: "2.5rem"
    }
  }, "Java e o ecossistema Spring do backend ao deploy. Nada aqui \xE9 moda: cada pe\xE7a foi dimensionada pra rodar barato e previs\xEDvel numa VPS pequena."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: "1.25rem"
    }
  }, window.PORTFOLIO_STACK.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.group,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      padding: "1.1rem 1.2rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.78rem",
      color: "var(--accent)",
      marginBottom: "0.75rem"
    }
  }, "// " + s.group), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.4rem"
    }
  }, s.items.map(i => /*#__PURE__*/React.createElement(Tag, {
    key: i
  }, i)))))));
}

// 5 — Gancho para quem quer um serviço meu.
function Gancho() {
  return /*#__PURE__*/React.createElement("section", {
    id: "gancho",
    style: {
      padding: "var(--pad-section) 0"
    }
  }, /*#__PURE__*/React.createElement(ContactBox, {
    eyebrow: "quer um servi\xE7o meu?",
    title: "Precisa de uma solu\xE7\xE3o sob medida?",
    lead: "Se algum destes projetos se parece com um problema que voc\xEA tem, eu construo o seu do mesmo jeito: uma decis\xE3o de engenharia de cada vez, rodando barato e sem sustos. API, painel, integra\xE7\xE3o ou o sistema inteiro.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      href: "#contato",
      onClick: e => {
        e.preventDefault();
        document.getElementById("contato").scrollIntoView({
          behavior: "smooth"
        });
      }
    }, "Quero um or\xE7amento"), /*#__PURE__*/React.createElement(Button, {
      href: "https://github.com/ThiagoHeckler",
      target: "_blank",
      rel: "noopener",
      variant: "secondary"
    }, "Ver o c\xF3digo"))
  }));
}

// 6 — Contato para trabalho.
function Contato() {
  const rows = [["e-mail", "thiagoecheckler@gmail.com", "mailto:thiagoecheckler@gmail.com"], ["linkedin", "in/thiago-heckler", "https://www.linkedin.com/in/thiago-heckler/"], ["github", "github.com/ThiagoHeckler", "https://github.com/ThiagoHeckler"]];
  return /*#__PURE__*/React.createElement("section", {
    id: "contato",
    style: {
      padding: "var(--pad-section) 0"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "contato para trabalho"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      letterSpacing: "var(--tracking-h2)",
      margin: "0 0 0.35rem",
      color: "var(--text-h1)"
    }
  }, "Vamos conversar sobre o seu projeto"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      maxWidth: "60ch",
      marginBottom: "2rem"
    }
  }, "Me manda uma linha sobre o que voc\xEA precisa. Respondo com as perguntas certas e um pr\xF3ximo passo, sem enrola\xE7\xE3o."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
      gap: "1rem",
      marginBottom: "2rem"
    }
  }, rows.map(([k, v, href]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: href,
    target: href.startsWith("http") ? "_blank" : undefined,
    rel: "noopener",
    style: {
      display: "block",
      background: "var(--surface-card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      padding: "1rem 1.15rem",
      textDecoration: "none",
      transition: "var(--transition-card)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = "var(--border-hover)";
      e.currentTarget.style.transform = "translateY(-3px)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "var(--border)";
      e.currentTarget.style.transform = "none";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.75rem",
      color: "var(--accent)",
      marginBottom: "0.35rem"
    }
  }, "// " + k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.9rem",
      color: "var(--text-body)"
    }
  }, v)))), /*#__PURE__*/React.createElement(Button, {
    href: "mailto:thiagoecheckler@gmail.com"
  }, "Falar sobre meu projeto"));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border)",
      padding: "2.5rem 0",
      marginTop: "2rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.78rem",
      color: "var(--text-muted)",
      marginBottom: "0.75rem"
    }
  }, "Java 25 \xB7 Spring Boot 4 \xB7 PostgreSQL 17 \xB7 MongoDB 8 \xB7 Docker \xB7 Caddy"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "1.25rem",
      flexWrap: "wrap",
      marginBottom: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/ThiagoHeckler",
    target: "_blank",
    rel: "noopener",
    style: {
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, "GitHub"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/thiago-heckler/",
    target: "_blank",
    rel: "noopener",
    style: {
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:thiagoecheckler@gmail.com",
    style: {
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, "Email")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.8rem",
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Site est\xE1tico, servido direto pelo Caddy."));
}
Object.assign(window, {
  Header,
  Apresentacao,
  Projects,
  ArchStrip,
  Stacks,
  Gancho,
  Contato,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/projects.js
try { (() => {
// projects.js — portfolio project data (from CLAUDE.md / live site)
window.PORTFOLIO_PROJECTS = [{
  title: "Task API",
  url: "https://tasks.thiagoheckler.com.br",
  urlLabel: "tasks.",
  description: "API REST de tarefas, com Swagger UI pra testar ao vivo.",
  db: "pg",
  dbLabel: "PostgreSQL",
  why: "CRUD relacional clássico, o caso pra mostrar JPA limpo.",
  tags: ["Spring Boot 4", "JPA", "OpenAPI"]
}, {
  title: "Mercado Virtual",
  url: "https://loja.thiagoheckler.com.br",
  urlLabel: "loja.",
  description: "E-commerce com catálogo de produtos, carrinho e pedidos.",
  db: "pg",
  dbLabel: "PostgreSQL",
  why: "Carrinho, estoque e pagamento exigem transações atômicas, não se vende o que acabou.",
  tags: ["Spring Boot 4", "JPA", "Thymeleaf"]
}, {
  title: "Link Shortener",
  url: "https://links.thiagoheckler.com.br",
  urlLabel: "links.",
  description: "Encurtador de URLs com analytics de cliques.",
  db: "mongo",
  dbLabel: "MongoDB",
  why: "Documentos simples, leitura intensa e contadores de clique.",
  tags: ["Spring Boot 4", "Spring Data Mongo"]
}, {
  title: "Estoque Dashboard",
  url: "https://estoque.thiagoheckler.com.br",
  urlLabel: "estoque.",
  description: "Painel de estoque com relatórios e gráficos.",
  db: "pg",
  dbLabel: "PostgreSQL",
  why: "Relatórios pedem agregações SQL e joins entre tabelas.",
  tags: ["Spring Boot 4", "JPA", "Thymeleaf"]
}, {
  title: "Chat em tempo real",
  url: "https://chat.thiagoheckler.com.br",
  urlLabel: "chat.",
  description: "Mensagens ao vivo via WebSocket / STOMP.",
  db: "mongo",
  dbLabel: "MongoDB",
  why: "Mensagem é documento; escrita intensa e schema flexível.",
  tags: ["Spring Boot 4", "WebSocket", "STOMP"]
}, {
  title: "Auth Service",
  url: "https://auth.thiagoheckler.com.br",
  urlLabel: "auth.",
  description: "Autenticação e autorização com JWT.",
  db: "pg",
  dbLabel: "PostgreSQL",
  why: "Usuários, roles e tokens exigem consistência forte.",
  tags: ["Spring Boot 4", "Spring Security", "JWT"]
}];
window.PORTFOLIO_FEATURED = {
  title: "Pizzaria Bollo",
  url: "https://pizzaria.thiagoheckler.com.br",
  urlLabel: "pizzaria.",
  description: "O projeto que junta os dois mundos: recebe pedidos e serve um cardápio. Persistência poliglota, cada banco no que faz melhor.",
  db: "both",
  dbLabel: [{
    db: "pg",
    label: "PostgreSQL"
  }, {
    db: "mongo",
    label: "MongoDB"
  }],
  why: "Pedidos vão pro Postgres, onde a transação garante que nada se perde. O cardápio vive no Mongo, com documentos aninhados (ingredientes, tamanhos, variações) sem virar dez tabelas.",
  tags: ["Spring Boot 4", "JPA", "Spring Data Mongo", "Thymeleaf"],
  featured: true
};
window.PORTFOLIO_ARCH = [{
  stat: "1 vCPU · 4 GB",
  label: "VPS única, com 2 GB de swap"
}, {
  stat: "Docker Compose",
  label: "tudo orquestrado num arquivo"
}, {
  stat: "1 PG + 1 Mongo",
  label: "uma instância de cada, um DB por projeto"
}, {
  stat: "384 MB / app",
  label: "limite de RAM por container"
}, {
  stat: "Caddy",
  label: "HTTPS automático por subdomínio"
}];
window.PORTFOLIO_STACK = [{
  group: "Linguagem & framework",
  items: ["Java 25 LTS", "Spring Boot 4", "Spring Framework 7", "Jakarta EE 11"]
}, {
  group: "Persistência",
  items: ["Spring Data JPA", "Hibernate ORM 7", "Spring Data MongoDB", "Flyway"]
}, {
  group: "Bancos",
  items: ["PostgreSQL 17", "MongoDB 8.0"]
}, {
  group: "Infra & deploy",
  items: ["Docker", "Docker Compose", "Caddy", "VPS Hostinger"]
}, {
  group: "Testes",
  items: ["JUnit 5", "Mockito", "Testcontainers"]
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/projects.js", error: String((e && e.message) || e) }); }

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.ArchStat = __ds_scope.ArchStat;

__ds_ns.ContactBox = __ds_scope.ContactBox;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.WhyBlock = __ds_scope.WhyBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

})();
