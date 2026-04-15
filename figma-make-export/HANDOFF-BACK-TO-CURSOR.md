# Transferring Design Changes from Figma Back to Cursor

After you've made design and content adjustments in Figma Make, you'll need to bring those changes back into your Cursor project. Here's how.

---

## Option A: You changed content (copy, headings, sections)

1. **Export or copy text from Figma**
   - Select text frames in Figma and copy the content.
   - Or use Figma's Inspect panel / Dev Mode to see the text.

2. **Update the HTML in Cursor**
   - Open `capacity-planner.html` in your project.
   - Find the corresponding `<div class="she-text">`, `<h1>`, `<p class="hero-subtitle">`, etc.
   - Replace with your new copy. Keep the HTML structure (e.g. `<strong>`, `<a>`) intact.

3. **Example:** If you rewrote the "Situation" paragraph in Story 1:
   - In Cursor, edit the `<div class="she-text">` inside the first `.she-row` of Story 1.
   - Paste your new text, preserving any `<strong>...</strong>` tags for emphasis.

---

## Option B: You changed layout, spacing, or typography

1. **Get values from Figma**
   - Use Figma Inspect / Dev Mode to see:
     - Font size, weight, line-height
     - Spacing (padding, margin, gap)
     - Colors (hex values)

2. **Update the CSS in Cursor**
   - Case study–specific styles are in the `<style>` block inside `capacity-planner.html`.
   - Base styles (nav, body, section) are in `styles.css`.
   - Match your Figma values to the corresponding CSS properties.

3. **Example:** If you changed the hero title size from 3.5rem to 4rem:
   - In `capacity-planner.html`, find `.hero h1 { font-size: clamp(...) }`.
   - Update the `clamp(2.2rem, 6vw, 3.5rem)` to `clamp(2.2rem, 6vw, 4rem)`.

---

## Option C: Figma exported code (HTML/CSS)

If Figma or a plugin gave you HTML/CSS output:

1. **HTML:** Compare the structure with `capacity-planner.html`. Copy over:
   - New or changed section structure
   - Updated class names if you renamed components
   - Keep links to `index.html`, `styles.css`, `script.js`, and image paths (`images/...`).

2. **CSS:** Merge into the right place:
   - New classes or overrides → add to the `<style>` block in `capacity-planner.html`.
   - Changes to nav, body, main → update `styles.css` if they affect the whole site.
   - Preserve `body.dark-mode` overrides if you support dark mode.

3. **Image paths:** Ensure screenshots still point to:
   - `images/scenarios-comparison.png`
   - `images/capacity-dashboard.png`

---

## Files to update in Cursor

| What changed | File(s) to edit |
|--------------|-----------------|
| Hero, section titles, story copy | `capacity-planner.html` |
| Case study layout, typography, colors | `<style>` block in `capacity-planner.html` |
| Nav, body background, global typography | `styles.css` |
| New images | Add to `images/` folder, update `src` in HTML |

---

## Quick Cursor prompts you can use

After pasting your Figma changes into the files, you can ask Cursor:

- *"I updated the hero subtitle in capacity-planner.html — make sure it matches the design spec."*
- *"Apply these CSS changes from my Figma export to capacity-planner.html."*
- *"I changed the section spacing; update the .section and .story-card styles to use [X]rem margin and [Y]rem padding."*

---

## Checklist before deploying

- [ ] All text edits are in `capacity-planner.html`
- [ ] CSS changes are in the correct file (`capacity-planner.html` vs `styles.css`)
- [ ] Dark mode still looks correct (toggle and check)
- [ ] Links work: View Live App, Back to home, Story anchors
- [ ] Images load (`images/scenarios-comparison.png`, `images/capacity-dashboard.png`)
- [ ] Responsive breakpoints (768px, 480px) still work if you changed layout
