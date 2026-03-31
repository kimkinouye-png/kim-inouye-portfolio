# Perplexity Context — Capacity Planner App Architecture

Use this when working with Perplexity to plan or implement **session isolation** (and related architecture) for the Capacity Planner app.

---

## Problem to solve

**Symptom:** Session data is shared across all visitors. When another person opens the app (e.g. https://capacity-planner.netlify.app/ or https://capacity-planning-2.netlify.app/), they see the same scenarios and data as the original user.

**Cause:** The app persists data (e.g. via Neon or another backend) without scoping by user or session. There is no per-visitor identity, so everyone reads/writes the same store.

**Goal:** Each visitor gets isolated data (e.g. anonymous session id in localStorage/cookie; all backend reads/writes filtered by that id).

---

## Files to provide Perplexity (from the Capacity Planner app repo)

Provide these from the **Capacity Planner application** codebase (the repo that deploys to capacity-planner.netlify.app / capacity-planning-2.netlify.app), **not** from this portfolio repo.

### 1. Entry and routing
- Main entry file (e.g. `src/main.tsx`, `src/index.tsx`, or `index.html` + script)
- Router or top-level app component (if applicable)

### 2. State management and data loading
- Where scenarios/roadmap/planning state is stored (Redux, Zustand, React state, Context, etc.)
- Any hooks or services that load/save data (e.g. `useScenarios`, `api.ts`, `loadPlan()`)
- Initial load / hydration logic (where data is fetched on first visit)

### 3. Backend / persistence
- Netlify serverless functions or API routes (e.g. `netlify/functions/*.ts` or `api/*.ts`)
- Database client or ORM usage (e.g. Neon, Supabase, or other Postgres client)
- Schema or migrations (e.g. `schema.sql`, `migrations/`, or schema definitions in code)
- Any environment variables or config that point to the DB

### 4. Auth / identity (if any)
- Login, auth context, or user/session middleware
- If none exists, that’s the gap — Perplexity can propose where to add a session id

### 5. Config and deployment
- `netlify.toml` (redirects, functions, env)
- `package.json` (scripts, dependencies)
- Any env example (e.g. `.env.example`) that shows required keys

### 6. Optional but useful
- README or architecture notes
- Types or interfaces for scenarios/roadmap/planning data (so Perplexity knows the data shape)

---

## Suggested prompt for Perplexity

You can paste something like:

> I have a Capacity Planning app (React, deployed on Netlify, persistence via Neon). Right now every visitor sees the same data because nothing is scoped by user or session. I’m attaching [list the files you’re providing]. Please analyze the current architecture and propose a plan to add anonymous session isolation: each visitor gets a session id (e.g. in localStorage), and all reads/writes to the backend/DB are scoped by that id so users only see their own data. Include where to generate the id, where to send it (headers, request body), and how to change the DB/API to filter by it.

---

## What is in this repo (portfolio) vs. the app

| In this repo (kim-inouye-portfolio) | In the Capacity Planner app repo |
|-------------------------------------|-----------------------------------|
| Portfolio site (index, resume, portfolio) | The actual planning UI and logic |
| Case study page (`capacity-planner.html`) | State management, API calls, DB access |
| Links to live app | Netlify functions, Neon (or other) persistence |
| **Do not send these for app architecture** | **Send these for Perplexity architecture analysis** |

This file lives in the portfolio repo for reference; the code Perplexity needs is in the **Capacity Planner app** repository.
