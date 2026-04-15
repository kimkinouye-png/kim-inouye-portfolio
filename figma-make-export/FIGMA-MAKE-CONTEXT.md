# Figma Make — Context for Capacity Planner Case Study

**Copy the content below and paste it into Figma Make when prompted for context.**

---

## What you're looking at

This is a **portfolio case study page** for a web application called "Capacity Planner" — a scenario-based planning tool for design teams. The page lives in a personal portfolio site (Kim Inouye) and uses the same design system as the homepage: dark/light mode toggle, Sol LeWitt–inspired grid background, Inter font, purple accents.

**Page type:** Long-form case study with hero + 3 story sections. Each story uses the SHE framework (Situation, Hindrance, Effect, What I Did).

---

## Design system

### Typography
- **Font:** Inter (weights 300, 400, 500, 600, 700)
- **Hero title:** clamp(2.2rem, 6vw, 3.5rem), weight 700, letter-spacing -0.03em
- **Hero subtitle:** 1.15rem, secondary color, max-width 600px
- **Section label (e.g. "SHE STORY 01"):** 0.8rem, weight 600, uppercase, letter-spacing 0.08em
- **Section heading (h2):** Large, bold
- **Body text:** 1rem, line-height 1.75
- **Small labels (Situation, Hindrance, etc.):** 0.75rem, uppercase, weight 600

### Colors (light mode)
- **Primary text:** #000000
- **Secondary text:** #666666
- **Muted text:** #999999
- **Accent / labels / links:** #8b5cf6
- **Accent hover:** #7c3aed
- **Border:** #e5e5e5
- **Background:** #ffffff

### Colors (dark mode)
- **Primary text:** #ffffff
- **Secondary text:** #b3b3b3
- **Muted text:** #808080
- **Accent / labels / links:** #a78bfa
- **Accent hover:** #c4b5fd
- **Border:** #404040
- **Background:** #1a1a1a

### Layout
- **Max content width:** 800px, centered
- **Main padding:** 8rem 2rem 4rem (top accounts for fixed nav)
- **Section spacing:** 5rem bottom, 4rem padding-bottom
- **Hero:** 6rem margin-bottom, border-bottom 2px
- **Grid pattern:** 40px grid with subtle Sol LeWitt–style line motifs; radial gradient overlay softens center

### Components
1. **Nav:** Fixed top, centered links (K/I logo, Story 1, Story 2, Story 3), dark mode toggle right
2. **Hero:** Eyebrow label, large H1, subtitle, "View Live App" link with underline
3. **Section:** Label, H2, intro paragraph, story card
4. **Story card:** Title with bottom border, then SHE rows (label left, text right in 100px + 1fr grid)
5. **Two-col layout:** Left = screenshots + captions; right = "Why scenario cards?" + callout grid
6. **Callouts:** 2-column grid, thin border, icon + title + body
7. **Badges:** Pills (Cursor, React, Netlify, etc.), transparent bg, thin border
8. **Footer:** Centered "← Back to home" link

### Responsive
- 768px: two-col becomes single column; SHE rows stack
- 480px: hero title smaller; nav tighter

---

## Page structure (top to bottom)

1. **Nav**
2. **Hero** — "Portfolio Case Study" / "Making design capacity visible and defensible" / subtitle / View Live App
3. **Section 1 (story1)** — SHE Story 01: Systematizing subjective capacity  
   - Story card (Situation, Hindrance, What I Did, Effect)  
   - Two-col: screenshots (scenario comparison, capacity dashboard) | "Why scenario cards?" + 2 callouts
4. **Section 2 (story2)** — SHE Story 02: Making invisible work visible  
   - Story card only
5. **Section 3 (story3)** — SHE Story 03 (Technical): Prototyping to validate at enterprise speed  
   - Story card + badge row
6. **Footer** — "← Back to home"

---

## Notes for design iteration

- **No content boxes** — story cards, callouts, badges use transparent backgrounds and thin borders so content sits on the page background (like the homepage).
- **Dark mode** is toggled manually; the page supports both themes.
- **Images:** Two screenshots in Story 1 — scenario comparison view and capacity vs. demand dashboard.
- **Links:** Hero CTA goes to live app; footer goes to index (home).
