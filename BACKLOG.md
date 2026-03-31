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

*Added so we can resume this initiative without re-deriving the plan from chat.*
