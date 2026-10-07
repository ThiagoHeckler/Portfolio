# Thiago.dev Design System

The design language of **thiagoheckler.com.br** — the personal portfolio of
Thiago Heckler, a backend developer. The site is a single dark-themed page that
presents seven live Spring Boot projects, each running on one small VPS, with the
engineering rationale for every decision made explicit. This design system
extracts that language so new pages, decks and mocks stay on-brand.

## Sources

Built from the author's own repository (read-only reference — you may not have
access, kept here for provenance):

- **GitHub — ThiagoHeckler/Portfolio**: https://github.com/ThiagoHeckler/Portfolio
  The infra repo. `site/index.html` + `site/css/custom.css` are the live static
  site (built on **Pico.css**, dark theme forced); `CLAUDE.md` documents the
  architecture, the seven projects and their database choices; `site/img/` and
  `site/favicon.svg` hold the brand assets copied into `assets/` here.

Explore that repo for deeper context on the projects and the VPS setup.

## The product in one paragraph

A backend engineer's portfolio that treats *constraints* as the story: seven
Java 25 / Spring Boot 4 apps live on subdomains of one 1 vCPU / 4 GB VPS,
orchestrated by a single `docker-compose.yml` behind Caddy, sharing one
PostgreSQL and one MongoDB instance. The site's job is to show the work **and**
explain the reasoning — which database, why, and how seven JVMs fit in 4 GB.

## Content fundamentals

- **Language: Brazilian Portuguese**, informal-technical. First person ("eu"),
  addresses the reader as "você".
- **Tone**: plain-spoken, confident, engineering-first. Explains the *why*, never
  hypes. Example headline: *"Sete projetos Spring Boot no ar, numa única VPS de
  1 vCPU."* Example rationale: *"A escolha do banco vem da forma do dado, não da
  moda."*
- **Casing**: sentence case everywhere. Section kickers (eyebrows) are
  **lowercase** and prefixed with `// ` (a code-comment motif) — e.g. `// projetos`,
  `// como isto roda`.
- **Copy is terse and concrete.** Card descriptions are one line; database
  rationales are one sentence naming the real reason ("CRUD relacional clássico,
  JPA limpo"; "Mensagem é documento; escrita intensa").
- **No emoji.** Texture comes from monospace type, not decoration.
- **Numbers matter**: memory limits, vCPU counts and RAM budgets are shown
  proudly ("384 MB / app", "1 vCPU · 4 GB") — they *are* the pitch.

## Visual foundations

- **Dark only, by decision.** The page forces a dark theme regardless of the
  visitor's OS. Page `#12151c`, cards `#1a1e27`, hairline borders `#262b36`.
- **Amber accent** `#e0a458` (hover `#ecb977`) — deliberately distinct from the
  two database hues. Used for the wordmark ".dev", eyebrow prefix, primary
  buttons, the avatar ring and the contact box border.
- **Two semantic database colours** carry meaning throughout: **PostgreSQL blue**
  `#7db8e8` and **MongoDB green** `#6fd89b`, each with a 12%-alpha background and a
  35%-alpha border. They appear on badges and as the tint + left border of the
  "why this database" block on every project card.
- **Type**: a native **system sans** for prose and a **monospace** family for the
  "infrastructure texture" — wordmark, eyebrows, tags, badges, URLs and stat
  keys. Headlines are fluid (`clamp`) with tight tracking (-0.02em); body is
  muted grey `#9aa0aa` for secondary text.
- **Backgrounds**: flat dark surfaces, no imagery or patterns. The only gradients
  are faint directional *washes*: a 90° tint behind the database-rationale block
  and a 135° amber wash inside the contact box. No full-bleed photography (the
  one image is the circular profile photo).
- **Corners**: 10px on cards/buttons/contact box; 5–6px on tags, badges and the
  rationale block.
- **Borders over shadows.** Elevation is expressed with 1px borders that brighten
  on hover (`#262b36` → `#333946`); the only real shadow is the amber glow ring
  on the profile avatar.
- **Motion is minimal**: project cards lift `translateY(-3px)` and brighten their
  border over `0.18s ease` on hover; respects `prefers-reduced-motion`. No
  bounces, no entrance animations.
- **Blur**: the sticky header uses `backdrop-filter: saturate(140%) blur(10px)`
  over a translucent page colour — the only use of transparency + blur.
- **Layout**: centered `1024px` container; responsive auto-fill/auto-fit grids
  for projects (min 290px) and the architecture strip (min 150px); the poliglota
  project spans full width.

## Iconography

- **No icon set.** The site ships no icon font, sprite or inline SVG icons. The
  only vector asset is the **TH logo mark** (`assets/logo-th.svg`, amber circle +
  dark "TH"; `assets/logo-th-inverted.svg` reverses it). Favicon PNGs come from
  the same mark.
- **No emoji, no unicode-glyph icons.** Where other sites use icons, this design
  uses monospace labels and the `// ` comment prefix instead.
- If a future surface genuinely needs icons, add a CDN set with a thin stroke
  (e.g. Lucide) and document the addition here — do not invent a bespoke set.

## Fonts — substitution note

The site inherits **Pico.css's system font stacks** (no webfonts are shipped).
This design system keeps that choice: `--font-sans` is a `system-ui` stack and
`--font-mono` a `ui-monospace` stack, so text renders in the visitor's native UI
and monospace fonts. **No font files are bundled and none need uploading.** If you
want a fixed brand monospace (e.g. JetBrains Mono), provide the file and we'll add
an `@font-face`.

## Components

Reusable primitives, grouped by concern. Namespace: `window.ThiagoDevDesignSystem_*`.

**Brand** (`components/brand/`)
- **Wordmark** — the TH mark + "thiago.dev" lockup (amber ".dev").
- **Eyebrow** — monospace section kicker with the `// ` amber prefix.

**Primitives** (`components/primitives/`)
- **Button** — primary (amber), secondary (outline) and ghost actions.
- **Badge** — monospace database label (PostgreSQL blue / MongoDB green / amber).
- **Tag** — monospace outline chip for a stack keyword.

**Content** (`components/content/`)
- **ArchStat** — mono stat + muted caption for the "onde isso roda" strip.
- **WhyBlock** — left-bordered, tinted block justifying a database choice.
- **ProjectCard** — a project: title, subdomain, description, WhyBlock + Badge,
  stack Tags; lifts on hover; `featured` full-width variant.
- **ContactBox** — amber-bordered CTA panel (the "gancho para serviço").

## UI kits

- **`ui_kits/portfolio/`** — full recreation of the portfolio landing page:
  sticky header, hero (Apresentação), architecture strip (Onde isso roda / VPS),
  projects grid (Projetos), stacks section (Stacks que uso), about, and the
  contact CTA (Gancho + Contato). `index.html` mounts the interactive page;
  `Sections.jsx` holds the factored sections; `projects.js` holds the data.

## Index / manifest

```
styles.css              → imports all token files (link this one file)
tokens/
  colors.css            → surfaces, text, amber accent, PG/Mongo semantics
  typography.css        → sans + mono families, sizes, tracking, weights
  spacing.css           → spacing scale, radii, layout tokens
  effects.css           → borders, avatar glow, header blur, motion
assets/
  logo-th.svg           → amber TH mark
  logo-th-inverted.svg  → dark TH mark on amber
  profile.png           → circular profile photo
  apple-touch-icon.png
components/{brand,primitives,content}/  → React primitives + cards
guidelines/*.card.html  → foundation specimen cards (Colors, Type, Spacing, Brand)
ui_kits/portfolio/      → portfolio landing recreation
thumbnail.html          → homepage tile
SKILL.md                → Agent-Skills entry point
```

## Notes

- No logo was invented — the real TH mark from the source repo is used throughout.
- The site is static (no framework) on the live domain; the UI kit recreates it in
  React purely to compose the design-system primitives.
