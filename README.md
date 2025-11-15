# Headless CV Builder

A React + Vite implementation of my personal CV designed to separate **content** from **presentation**. All copy lives in YAML/Markdown (`content/cv.yaml`) while Tailwind-driven React components render a faithful web layout that can be printed to PDF. This avoids the layout limits of `@react-pdf/renderer` so you have the full power of HTML+CSS for styling. It keeps the content portable for future templates.

## Why this project?
- **Headless content**: The CV data is structured in YAML (contact info, skills, experience, etc.) so prose updates never touch JSX.
- **Web-first rendering**: Running in a browser gives precise typography, native fonts, and browser print preview for PDF export. Plus more layout freedom than PDF-focused libraries.
- **Template flexibility**: Each visual block—header, profile, details, experience, etc.—is a dedicated React component. Swapping or extending templates is as simple as composing different components around the same content payload.
- **Markdown everywhere**: Narrative sections use Markdown plus `react-markdown`/`remark-gfm`, ensuring bullets and emphasis render consistently.

## Tech stack
| Layer | Details |
| --- | --- |
| Framework | [React 19](https://react.dev/) + [Vite](https://vite.dev/) (TypeScript) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) with custom theme + print utilities |
| Content parsing | [`js-yaml`](https://eemeli.org/js-yaml/) + custom TypeScript types |
| Markdown rendering | [`react-markdown`](https://github.com/remarkjs/react-markdown) with `remark-gfm` |
| Icons | [`lucide-react`](https://lucide.dev/) |

## Project structure
```
headless-cv/
├── content/           # Structured CV data (YAML)
├── src/
│   ├── components/    # One component per section (Header, Details, Experience, ...)
│   ├── data/          # YAML loader and schema types
│   ├── index.css      # Tailwind layers + custom print utilities
│   └── main.tsx       # App bootstrap
└── dist/              # Vite build output (after `npm run build`)
```

## Content authoring
1. Edit `content/cv.yaml`. Every field supports Markdown (e.g., bullet lists in `experience.description`).
2. Run the dev server and the page updates automatically thanks to Vite HMR.
3. Because data is independent from the template, you can reuse the YAML with other renderers (CLI generators, PDF pipelines, etc.) without touching the UI.

## Development
### Prerequisites
- Node.js ≥ 20
- npm (bundled with Node)

### Install dependencies
```bash
npm install
```

### Start the dev server
```bash
npm run dev
```
Visit `http://localhost:5173` (strict port enforced) to view the CV. The layout is optimized for desktop widths (~850px) since it targets print/PDF.

### Build for production / PDF export
```bash
npm run build
```
`dist/` now contains the static site. Serve `dist/index.html` or open it directly in a Chromium browser and use **Print → Save as PDF** for a high-fidelity CV export.

### Lint (optional)
```bash
npm run lint
```

## Customizing the template
- **Colors/typography**: Update the Tailwind theme in `tailwind.config.js`.
- **Layout tweaks**: Modify the relevant section component (e.g., `ExperienceSection.tsx`). Tailwind utilities keep styles co-located with markup.
- **Print-only adjustments**: Add rules to `@layer base` in `src/index.css` (e.g., page margins, page-break helpers).

## License
MIT. Feel free to adapt the code and content structure for your own CVs.
