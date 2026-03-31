# Site backlog

Parking lot for planned work. **Not committed to scope or timeline.**

---

## Git-based CMS (Decap-style) — light complexity

**Intent:** Web UI that edits content in this repo and publishes via Netlify (rebuild on commit). Layout/styling stay in HTML/CSS unless we refactor to templates.

**Tradeoffs (accepted for this approach):**

- Editors use Git provider auth (e.g. GitHub OAuth); every publish is a **deploy**, not instant in-browser without a build.
- Plain HTML does not merge CMS files by itself — we need a **small build step** or a minimal SSG (e.g. Eleventy).

**Reference stack:** Decap CMS (formerly Netlify CMS) or similar; GitHub/GitLab backend with OAuth.

---

### Decisions (before implementation)

- [ ] **Content storage:** **Option A** — JSON file(s) under `content/` + small Node build that generates HTML; **Option B** — Markdown + Eleventy (or similar) for longer-term maintainability.
- [ ] **Scope of v1:** Which pages are CMS-editable first (`index.html` only vs. resume, portfolio, capacity planner too).

---

### Phase 1 — Content model and build

- [ ] Inventory all copy (and images) to make editable across target pages.
- [ ] Define schema (JSON shape or MD front matter) for home and any other v1 pages.
- [ ] Add `package.json` and a `build` script that reads content and outputs to a publish directory (e.g. `dist/`).
- [ ] Move current HTML into templates or a repeatable generation path; verify built output matches the live site (diff or visual check).
- [ ] Update `netlify.toml`: `command` = build, `publish` = output directory (not raw repo root unless we keep a flat structure on purpose).

---

### Phase 2 — Decap CMS (or chosen tool)

- [ ] Create OAuth app on GitHub (or GitLab) per current Decap backend docs; set callback URLs for local + production.
- [ ] Add `admin/index.html` + `admin/config.yml` (backend, repo, branch, collections matching content files).
- [ ] Configure Netlify environment variables for OAuth client ID/secret (names per Decap version in use).
- [ ] Test `/admin/` login and save → commit on correct branch; confirm Netlify rebuilds and site updates.

---

### Phase 3 — Hardening and docs

- [ ] Image upload / media folder strategy if needed (Decap media library + `public/` or `static/` path).
- [ ] Optional: editorial workflow (drafts, branch previews) — only if needed.
- [ ] Short maintainer note: how to edit, where content files live, that publish waits for deploy.

---

### Risks and gotchas

- OAuth redirect URL mismatches between local, Netlify preview, and production.
- Wrong `publish` path → blank or stale site.
- Merge conflicts in a single large JSON file if multiple editors (low risk for a solo portfolio).

---

### Rough effort (when picked up)

| Area | Ballpark (first time) |
|------|------------------------|
| Schema + templates + build | 4–8 hours |
| Decap + OAuth + Netlify | 2–4 hours |
| Polish (media, previews, workflow) | +2–6 hours |

---

## Resume page — match updated site visual language

**Intent:** Bring `resume.html` in line with the **current portfolio look** (Sol LeWitt grid, Inter, K/I nav, dark/light toggle, purple accents, ~800px editorial column, 2px section rules) and with whatever becomes the **canonical home** (`index.html` vs `index-v2-standalone.html`), without breaking **print / Save as PDF**.

**Current state:** Resume already loads `styles.css` + `resume.css` and shares nav + theme toggle with the main site. Gaps to close when you pick this up: small inconsistencies (e.g. logo target `index.html` vs `/`), possible drift from newer home patterns (kickers, rules, link treatments), and **print** behavior after any layout change.

---

### Decisions (before implementation)

- [ ] **Canonical home URL:** Should the K/I logo and any “back to site” link go to `/`, `/index.html`, or a future merged home path?
- [ ] **Reference design:** Match **`index.html` + `styles.css`** only, or also borrow patterns from **`index-v2-standalone.html`** (e.g. hero rule, kicker styling, contact-style links)?
- [ ] **Scope of change:** **Light touch** (tokens, borders, nav, links only) vs **section redesign** (restructure headings/spacing to mirror the new home).

---

### Phase 1 — Audit and shared tokens

- [ ] Compare `resume.css` overrides against `styles.css` variables (`--text-*`, `--border-color`, link colors in light/dark).
- [ ] List resume-only rules that fight the global grid (backgrounds, borders, max-width) and decide keep vs align.
- [ ] Align **internal links** with routing plan (`/resume`, `/portfolio`, `/` as decided for the rest of the site).

---

### Phase 2 — Visual alignment (screen)

- [ ] Unify **nav** with home (logo href, optional same spacing as `index.html`).
- [ ] Match **hero block** rhythm to home if desired (name/title/contact line; optional thin rule under title).
- [ ] Apply consistent **section titles** and **2px separators** between major blocks (Summary / Experience / Education).
- [ ] Ensure **links** (email, LinkedIn, any future links) use the same purple / dark-mode treatment as `index.html`.
- [ ] Quick pass on **mobile** breakpoints so the resume doesn’t feel narrower or “off” compared to home.

---

### Phase 3 — Print and accessibility

- [ ] Re-test **Print** / “Save as PDF” after changes; adjust `@media print` in `resume.css` so margins, type size, and link visibility stay professional (hide or simplify nav/print chrome if needed).
- [ ] Confirm **focus states** and **contrast** for interactive elements in both themes.

---

### Risks and gotchas

- Heavy visual effects (animations, translucent cards) can **clutter PDF output** — keep print styles explicit.
- Duplicating large chunks of CSS from a standalone home file increases drift; prefer **shared `styles.css`** + minimal `resume.css` deltas.

---

### Rough effort (when picked up)

| Area | Ballpark |
|------|----------|
| Light token + nav + link alignment | 1–2 hours |
| Fuller section/visual parity + responsive | 3–5 hours |
| Print regression pass | 30–60 minutes |

---

*Added so we can resume this initiative without re-deriving the plan from chat.*
