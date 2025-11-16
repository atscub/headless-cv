# Repository Guidelines

## Project Structure & Module Organization
- `content/cv.yaml` holds all resume content; treat it as the single source of truth for data edits.
- `src/components/` contains one React component per CV section (Header, Details, Experience, etc.), composed by `src/components/CV.tsx`.
- `src/data/cv.ts` loads YAML content via `js-yaml` and enforces the `CVData` shape defined in `src/types/cv.ts`.
- Styling lives beside markup through Tailwind classes plus shared rules in `src/index.css`; adjust theme tokens in `tailwind.config.js`.
- Vite entry points are `src/main.tsx` and `src/App.tsx`. Static assets resolve from `public/` and bundled output lands in `dist/`.

## Build, Test, and Development Commands
- `npm install` — install dependencies (Node 20+ recommended).
- `npm run dev` — start Vite on port 5173 with strict port checks; use for rapid iteration.
- `npm run build` — type-check via `tsc -b` then produce a production bundle in `dist/` for print/PDF export.
- `npm run preview` — serve the built site locally to validate the production bundle.
- `npm run lint` — run ESLint with TypeScript, React Hooks, and Vite refresh rules.

## Coding Style & Naming Conventions
- TypeScript + React function components; keep props typed with `CVData` fragments to prevent schema drift from `content/cv.yaml`.
- Prefer co-locating Tailwind utility classes with JSX; use custom print utilities in `src/index.css` for page-break control.
- Files for React components use `PascalCase.tsx`; shared types in `src/types/`. Indentation and semicolon usage follow ESLint defaults (no Prettier configured).
- Favor explicit names (`ExperienceSection`, `OpenSourceSection`) and keep icons/strings centralized in YAML rather than hardcoding JSX.

## Testing Guidelines
- No automated tests are present; rely on `npm run lint` and `npm run build` as gating checks before submitting changes.
- When adding tests, place them near source files as `*.test.tsx`/`*.test.ts` and aim for coverage on content parsing (`src/data/cv.ts`) and layout helpers.
- Manually verify rendering across desktop widths and print-to-PDF after significant layout or YAML schema changes.

## Commit & Pull Request Guidelines
- Follow the existing history: short, imperative subject lines (e.g., “Improve icons resolution”, “Install deps with npm ci…”).
- Include scope in the summary when helpful (content, layout, build). Avoid long bodies unless clarifying behavior changes.
- For PRs, describe the change, link any issue, note manual checks (`npm run build`, `npm run lint`), and attach before/after screenshots or PDFs for visual tweaks.
- Keep content edits isolated from styling changes when possible to simplify reviews; flag any YAML schema updates explicitly.
