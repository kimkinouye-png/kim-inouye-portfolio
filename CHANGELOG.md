# Changelog — Kim Inouye Portfolio

All notable changes to this project are documented here.

---

## [Unreleased]

### Added
- **Capacity Planner case study page** (`capacity-planner.html`)
  - Standalone case study with dark theme (cyan accent, GitHub-like palette)
  - Hero with meta chips, SHE-framework stories (3 sections), screenshots, feature cards, tech badges
  - Links to live app (capacity-planner.netlify.app) and back to home
- **Case study assets**
  - `images/scenarios-comparison.png` — scenario comparison screenshot
  - `images/capacity-dashboard.png` — capacity vs. demand dashboard screenshot
- **Figma Make export package** (`figma-make-export/`)
  - `FIGMA-MAKE-CONTEXT.md` — context for Figma Make
  - `design-spec.json` — design tokens
  - `capacity-planner-standalone.html` — self-contained preview
  - `HANDOFF-BACK-TO-CURSOR.md` — handoff instructions
  - `00-START-HERE.md` — quick start
  - `figma-make-export.zip` — downloadable package
- **Main site link to case study**
  - "View case study" link in Building Tools section on `index.html` → `capacity-planner.html`

### Changed
- **Index**
  - Section "My Documents" (was "My Resume"); "View Portfolio" (was "My Portfolio")
  - Capacity planner copy and "View case study" link in Building Tools
- **Resume** (`resume.html`, `resume.css`)
  - Header: removed address/phone; kept email and LinkedIn
  - Removed Grainger role (Program Manager, Technology, 2012–2014)
  - Education: single-line per credential; tightened spacing
  - Experience: date range on same line as company (e.g. "PayPal, 2024–Present")
  - Print layout: summary + experience on page 1; 2-page fit
- **Portfolio** (`portfolio.html`)
  - Password-protected (sessionStorage); dark-theme project cards
  - Password prompt accessibility improvements (border, shadow, focus, error state)
- **Styles**
  - Link colors: purple (light), hot pink (dark); resume/portfolio link clickability (cursor, z-index)

### Fixed
- Resume and portfolio link clickability (z-index, cursor)
- Case study readability in dark mode (removed opaque story card box; content on page background)

---

## Earlier history (from git log)

- **2026-01-21** — My Documents / View Portfolio; password prompt; resume formatting; resume link fix; portfolio page with 5 projects
- **2026-01-14** — Initial commit: portfolio site (index, resume, styles, script, netlify.toml)

---

## Notes

- **Capacity Planner app** (the live tool at capacity-planner.netlify.app / capacity-planning-2.netlify.app) is a **separate codebase** and is not in this repo. Session data isolation and architecture changes for that app are tracked in its own repo; see `PERPLEXITY-CONTEXT.md` for files to provide for architecture analysis.
