# Development Guidelines — HS Clinic Website

## Golden Rules

1. **Do NOT install new dependencies** without checking this document first.
2. **Do NOT use a different CSS framework** — we use Tailwind CSS v4 only.
3. **Do NOT use Next.js packages** — this is a Vite + React app.
4. **Do NOT add polyfills to `index.html`** — Vite handles them.
5. **Every change must pass `npm run build` and `npm run lint`.**

---

## Approved Dependency List

Only these packages should be in `package.json`. If you need something not on this list, **document why** before installing.

### Production Dependencies

| Package | Purpose |
|---------|---------|
| `react` / `react-dom` (18.3) | Core framework |
| `react-router-dom` (6.x) | Client-side routing |
| `framer-motion` (11.x) | Animations and transitions |
| `lucide-react` | Icon library |
| `three` / `@react-three/fiber` / `@react-three/drei` | 3D implant scene on Dental Tourism page |
| `@types/three` | TypeScript types for Three.js |
| `react-helmet-async` | Per-page SEO meta tags |
| `@radix-ui/react-*` | Headless UI primitives (used by shadcn/ui components) |
| `class-variance-authority` | Component variant styling (shadcn/ui) |
| `clsx` / `tailwind-merge` | CSS class utilities |
| `@sanity/client` / `@sanity/image-url` | Sanity CMS data fetching |

### Dev Dependencies

| Package | Purpose |
|---------|---------|
| `vite` / `@vitejs/plugin-react` | Build tool |
| `tailwindcss` / `@tailwindcss/vite` | CSS framework (v4) |
| `typescript` / `typescript-eslint` | Type checking |
| `eslint` / `eslint-plugin-react` / `eslint-plugin-react-hooks` / `eslint-plugin-jsx-a11y` | Linting |
| `prettier` | Code formatting |
| `@types/react` / `@types/react-dom` (^18.x) | TypeScript types — **must match React 18, not 19** |
| `globals` / `@eslint/js` | ESLint config helpers |

---

## Forbidden Packages (Do NOT Install)

| Package | Reason |
|---------|--------|
| `@mui/material`, `@mui/icons-material` | Wrong design system (we use Tailwind + Radix) |
| `@emotion/react`, `@emotion/styled` | MUI dependency, not needed |
| `styled-components` | We use Tailwind, not CSS-in-JS |
| `next-themes`, `next/*` | Next.js packages — this is Vite |
| `motion` (standalone) | Duplicate of `framer-motion` |
| `react-slick`, `slick-carousel` | Use framer-motion for carousels |
| `react-dnd`, `react-dnd-html5-backend` | No drag-and-drop needed |
| `recharts`, `chart.js` | No charts on this site |
| `@popperjs/core`, `react-popper` | Radix handles positioning |
| `react-responsive-masonry` | Not needed |
| `jQuery`, `bootstrap` | Incompatible with modern React |
| `@types/react@^19` | React 18 app — types must be `@types/react@^18` |

---

## Styling Rules

- **Framework:** Tailwind CSS v4 only (via `@tailwindcss/vite` plugin)
- **Custom CSS:** Use `@theme` in `index.css` for design tokens
- **Component variants:** Use `class-variance-authority` (cva)
- **Class merging:** Use `cn()` helper from `lib/utils.ts` (clsx + tailwind-merge)
- **No inline styles** unless dynamically calculated (e.g., slider positions)
- **Dark mode:** Site is dark-mode only (set via `color-scheme: dark` in CSS)

---

## Image Rules

- **Format:** All images in `public/images/` must be **WebP**
- **No JPG, PNG, or JFIF** in public images (convert with sharp if needed)
- **Logo:** `src/assets/logo.png` is the only PNG (handled by Vite asset pipeline)
- **Lazy loading:** Every `<img>` below the fold must have `loading="lazy"`
- **External images:** Unsplash URLs are acceptable for placeholder/stock photos

---

## Routing Rules

- All page components live in `src/app/pages/`
- All routes are defined in `src/app/routes.tsx`
- All page components must be **lazy-loaded** via `React.lazy()`
- Netlify SPA routing is handled by `public/_redirects`

---

## Build & Bundle Rules

- **Three.js isolation:** Always keep `manualChunks` in `vite.config.ts` splitting three/fiber/drei
- **No polyfills in `index.html`:** Vite's `define` config handles `process.env` and `global`
- **Fonts:** Loaded via `<link rel="preconnect">` in `index.html` — never CSS `@import`
- **Import aliases:** Always use `@/` prefix (resolves to `src/`)

---

## Code Quality

- `npm run lint` must pass with **0 errors** before any commit
- `npm run build` must succeed before any deploy
- No `console.log` in production code (use `console.error` only for real errors)
- Remove unused imports immediately
- Keep files under 200 lines when possible

---

## Adding a New Shadcn/UI Component

If you need a new shadcn/ui component:
1. Check if it requires a new package (e.g., `cmdk` for command palette)
2. Only install if the component will actually be used by a page/route
3. Do NOT install shadcn/ui components "just in case"
4. Add the package to the Approved list above if installing

---

## CMS (Sanity)

- Sanity Studio runs separately in `studio/` directory
- Frontend uses `@sanity/client` for read-only GROQ queries
- Sanity env vars: `VITE_SANITY_PROJECT_ID`, `VITE_SANITY_DATASET`
- Image URLs built with `@sanity/image-url`

---

## Deployment (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing: `public/_redirects` (`/* /index.html 200`)
- Config: `netlify.toml` in project root
