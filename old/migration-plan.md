# CV HTML → React + Vite + YAML Content Migration Plan

## 1. Extract Current Structure

1. Parse the existing static HTML page.
2. Identify all visual sections (e.g., Header, Summary, Experience, Education, Skills, Projects, Contact, Footer).
3. Map each visual block to a logical data structure (YAML) while preserving order and hierarchy.
4. Document all CSS rules, spacing, typography, line-heights, and layout constraints currently used.

## 2. Define the YAML Schema

Create a top-level YAML file `cv.yaml` with strongly typed sections.

All text fields must support Markdown.

Example structure (to refine after extraction):

```yaml
name: ""
role: ""
location: ""
contact:
  email: ""
  phone: ""
  website: ""
summary: |
  Markdown text...
experience:
  - company: ""
    role: ""
    dates: ""
    bullets: |
      - Bullet 1
      - Bullet 2
education:
  - institution: ""
    degree: ""
    dates: ""
skills:
  - category: ""
    items:
      - ""
projects:
  - name: ""
    description: |
      Markdown text...
footer: |
  Markdown text...

```

## 3. Move Visuals to a Pure Template Layer

1. Create a clean React template that mirrors the existing HTML structure but contains **zero raw text**.
2. Replace text blocks with props fed from parsed YAML.
3. Keep all class names and layout wrappers identical to current HTML to preserve look.

## 4. Setup Vite + React Project

1. Scaffold project: `npm create vite@latest cv -- --template react-ts`.
2. Add dependencies:
    - `gray-matter` (optional, for YAML loading)
    - `js-yaml` (parse YAML)
    - `react-markdown`
    - `remark-gfm`
3. Create a `content/` folder and place `cv.yaml` inside.
4. Load YAML at build time or via static import.

## 5. Reproduce Global Styles

1. Copy all existing CSS into the new project under `src/styles/`.
2. Resolve any selector differences from React’s DOM structure.
3. Maintain exact spacing, fonts, and layout.
4. If the old project used global fonts, include them in `index.html` or via CSS `@import`.

## 6. Build Components

Break one React component per section. Examples:

- `<Header />`
- `<Summary />`
- `<Experience />`
- `<Education />`
- `<Skills />`
- `<Projects />`
- `<Footer />`

Each component:

1. Accepts parsed YAML data via props.
2. Renders Markdown using `<ReactMarkdown>` where needed.
3. Keeps existing class names for visual fidelity.
4. Avoids logic; purely presentational.

## 7. Markdown Rendering Rules

For each Markdown-supported field:

1. Wrap with `<ReactMarkdown remarkPlugins={[remarkGfm]}>`.
2. Style Markdown elements (`p`, `ul`, `li`, `strong`) using CSS to match original HTML exactly.
3. Neutralize default Markdown spacing to avoid layout drift.

## 8. Validate Visual Fidelity

1. Render old HTML page and new React page side-by-side.
2. Compare spacing, fonts, line heights, section breaks.
3. Adjust CSS until pixel-aligned (or accept small tolerances).

## 9. Generate Print-Ready Version (If Required)

If the original CV was print-optimized:

1. Mirror existing `@media print` styles.
2. Add `<link>` or inline print CSS identical to the original.
3. Validate in Chrome print preview.

## 10. Final Integration

1. Export final React app as a static build (`vite build`).
2. Serve through GitHub Pages or similar static host.
3. Keep `cv.yaml` editable so content updates do not require component changes.