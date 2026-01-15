- All English copy in the project should be natural, casual, and idiomatic to native English speakers.
- Do not add any code comments or documentation.

# OmniContext CLI Landing

Docusaurus-based documentation site with custom landing pages for omx - a terminal-based AI coding assistant.

## Quick Start

```bash
npm install
npm start          # Run local dev server at http://localhost:3000/omni-context-cli-landing/
npm run docs       # Build Docusaurus docs to docs/ directory
```

Edit `markdown/*.md` files for documentation content, run `npm run docs` to rebuild.

## Architecture

This is a **static site generator** setup combining:

- **Custom landing pages** (`index.html`, `zh-Hans/index.html`) - Hero, features, agentic tools grid
- **Docusaurus documentation** - Builds from `markdown/` source to static HTML in `docs/`
- **Bilingual content** - English (default) and Chinese Simplified (zh-Hans)
- **Simple dev server** - Node.js server at port 3000 with base path routing

**Data flow:**
1. Edit markdown in `markdown/` (English) and `i18n/zh-Hans/` (Chinese)
2. Run `npm run docs` → Docusaurus builds to `docs/`
3. `npm start` serves everything under `/omni-context-cli-landing/` base path

**Deployment:** GitHub Pages at `bluenoah1991.github.io/omni-context-cli-landing`

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Docusaurus (React-based static site generator)
- **Languages:** Markdown, HTML/CSS/JavaScript, TypeScript (config)
- **Styling:** Custom CSS with CSS variables, dark theme
- **Icons:** Lucide icon library
- **Fonts:** Inter font family (weights 300-900)
- **Code highlighting:** prism-react-renderer (GitHub light, Dracula dark)

**Key dependencies:**
- `@docusaurus/core`, `@docusaurus/preset-classic`
- `react`, `react-dom`
- `@mdx-js/react`
- `prism-react-renderer`

## Development

**Edit documentation:**
- English: `markdown/*.md`
- Chinese: `i18n/zh-Hans/docusaurus-plugin-content-docs/current/*.md`
- Frontmatter controls sidebar: `slug`, `title`, `sidebar_label`, `sidebar_position`

**Edit landing page:**
- English: `index.html`
- Chinese: `zh-Hans/index.html`
- Styles: `assets/css/style.css`
- Scripts: `assets/js/script.js`

**Build workflow:**
```bash
# After editing markdown docs
npm run docs        # Rebuild Docusaurus to docs/

# Test locally
npm start          # Starts server at http://localhost:3000/omni-context-cli-landing/
```

**Update translations:**
- Chinese files mirror English structure exactly
- Keep frontmatter in sync (same slugs, positions)
- Translation path: `i18n/zh-Hans/docusaurus-plugin-content-docs/current/`

## Key Files

**Configuration:**
- `docusaurus.config.ts` - Site title, nav, i18n, docs source path, theme
- `package.json` - Scripts and dependencies
- `server.js` - Local dev server (port 3000, base path routing)

**Content:**
- `markdown/*.md` - English documentation source (12 files)
- `i18n/zh-Hans/docusaurus-plugin-content-docs/current/*.md` - Chinese translations
- `index.html` - English landing page
- `zh-Hans/index.html` - Chinese landing page

**Assets:**
- `assets/css/style.css` - Landing page styles
- `assets/css/docs.css` - Docusaurus theme customization
- `assets/js/script.js` - Landing page interactions
- `assets/js/lucide.js` - Icon library
- `assets/fonts/` - Inter font files

**Output:**
- `docs/` - Generated Docusaurus HTML (English)
- `docs/zh-Hans/` - Generated Docusaurus HTML (Chinese)

## Conventions

**Frontmatter format (all markdown files):**
```yaml
---
slug: /              # URL path
title: Getting Started
sidebar_label: Quick Start
sidebar_position: 1  # Order in sidebar (1-12)
---
```

**File naming:**
- Markdown: lowercase-with-dashes.md
- Use existing file positions when adding new docs (fill gaps sequentially)

**Landing page structure:**
- Hero section with gradient background
- Install command with copy-to-clipboard
- Feature sections with scroll reveal animations
- Agentic tools grid (10 tools, 2 columns x 5 rows)

**Code blocks:**
- Use triple backticks with language identifier
- Bash commands use `npm install -g omni-context-cli`
- Tool names in lowercase: craft, sculpt, weave, etc.

**Translation sync:**
- Chinese files must match English structure exactly
- Same slugs, same sidebar_position values
- Keep headings and code blocks aligned

**Styling patterns:**
- CSS custom properties for colors (dark theme base)
- Responsive grid layouts
- Scroll reveal animations using `.reveal` class
- Lucide icons with `data-lucide` attribute

**Base path:**
- All URLs prefixed with `/omni-context-cli-landing/`
- Server enforces this in `server.js`
- Docusaurus config sets `baseUrl: '/omni-context-cli-landing/docs/'`
