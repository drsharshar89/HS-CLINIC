# HS Clinic — Dr. Haitham Sharshar Dental Website

Professional clinic website for **Dr. Haitham Sharshar** — Digital Occlusion, TMJ Treatment, Cosmetic Dentistry, and Dental Tourism in Cairo, Egypt.

**Live site:** Deployed on Netlify

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | React | 18.3 |
| **Build tool** | Vite | 6.3 |
| **Language** | TypeScript | 5.9 |
| **Styling** | Tailwind CSS | v4 (via `@tailwindcss/vite` plugin) |
| **Routing** | react-router-dom | 6.x |
| **Animation** | framer-motion | 11.x |
| **Icons** | lucide-react | 0.487 |
| **3D** | Three.js + @react-three/fiber + drei | 0.182 / 9.x / 10.x |
| **SEO** | react-helmet-async | 2.x |
| **UI primitives** | Radix UI (via shadcn/ui) | Various |
| **CMS** | Sanity (headless) | @sanity/client 7.x |
| **Deployment** | Netlify | SPA config via `_redirects` |

### What We Do NOT Use

> ⚠️ **Do NOT install any of these. They are incompatible or redundant.**

| Package | Why NOT |
|---------|---------|
| MUI (`@mui/material`) | We use Tailwind + Radix/shadcn, not Material Design |
| Emotion (`@emotion/react`) | MUI dependency — not needed |
| Next.js or any Next.js packages (`next-themes`, etc.) | This is a **Vite** app, not Next.js |
| `motion` (standalone) | Duplicate of `framer-motion` |
| CSS-in-JS libraries (styled-components, etc.) | We use Tailwind CSS |
| jQuery or Bootstrap | Modern React stack, no jQuery |

---

## Quick Start

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Production build → dist/
npm run lint       # ESLint check
npm run format     # Prettier format
```

---

## Project Structure

```
src/
├── app/
│   ├── pages/          # Route page components (lazy-loaded)
│   ├── components/     # Shared components
│   │   ├── ui/         # shadcn/ui primitives (Radix-based)
│   │   ├── tourism/    # Dental Tourism feature components
│   │   └── figma/      # Figma-exported components
│   ├── cms/            # Sanity CMS integration
│   ├── routes.tsx      # Route definitions (lazy imports)
│   └── App.tsx         # Root component
├── assets/             # Static assets (logo)
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries (sanity client, utils)
├── styles/             # Global CSS (index.css, theme.css)
├── types/              # TypeScript type definitions
└── main.tsx            # Entry point
public/
├── images/             # Public images (WebP format)
├── _redirects          # Netlify SPA routing
├── robots.txt
└── sitemap.xml
```

---

## Key Architecture Decisions

1. **All route components are lazy-loaded** via `React.lazy()` in `routes.tsx`
2. **Three.js is automatically code-split** by Vite's lazy import system (~941KB isolated chunk)
3. **Do NOT add `manualChunks` to `vite.config.ts`** — it caused blank pages in production (see `_AGENT_COORD/VITE_CONFIG_RULES.md`)
4. **Images must be WebP** — no JPG/PNG in `public/images/`
5. **Fonts loaded via `<link>` in `index.html`** — never use CSS `@import` for fonts
6. **Path aliases** — always use `@/` prefix for imports (maps to `src/`)
7. **No `define` polyfills in `vite.config.ts`** — `process.env` and `global` shims were removed (they broke libraries)

---

## Development Rules

See [DEVELOPMENT.md](./DEVELOPMENT.md) for full coding guidelines.