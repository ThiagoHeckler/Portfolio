---
name: thiago-dev-design
description: Use this skill to generate well-branded interfaces and assets for thiago.dev (Thiago Heckler's backend-developer portfolio), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick orientation:
- **Tokens**: `styles.css` imports everything in `tokens/`. Dark-only theme, amber accent `#e0a458`, PostgreSQL-blue `#7db8e8` and MongoDB-green `#6fd89b` semantics.
- **Voice**: Brazilian Portuguese, informal-technical, first person, no emoji; lowercase `// ` eyebrows; monospace for infra texture.
- **Components**: `components/{brand,primitives,content}/` — Wordmark, Eyebrow, Button, Badge, Tag, ArchStat, WhyBlock, ProjectCard, ContactBox.
- **UI kit**: `ui_kits/portfolio/` recreates the full landing page.
- **Assets**: `assets/` (TH logo mark, profile photo). No icon set is used — see README ICONOGRAPHY.
