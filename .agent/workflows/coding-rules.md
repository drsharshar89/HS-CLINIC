---
description: Coding rules and constraints for the HS Clinic website project
---

# HS Clinic — Agent Coding Rules

Before making ANY change to this project, read and follow these rules.

## 1. Tech Stack (Non-Negotiable)

- **Framework:** React 18.3 + Vite 6.3
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS v4 (via @tailwindcss/vite plugin)
- **Routing:** react-router-dom 6.x
- **Animation:** framer-motion 11.x
- **Icons:** lucide-react
- **3D:** Three.js + @react-three/fiber + @react-three/drei
- **SEO:** react-helmet-async
- **UI Components:** Radix UI primitives (shadcn/ui pattern)
- **CMS:** Sanity (headless, @sanity/client)
- **Deployment:** Netlify (SPA mode)

## 2. Do NOT Install These Packages

NEVER install any of the following. If you think you need one, STOP and find the Tailwind/Radix/framer-motion equivalent instead:

- @mui/material, @mui/icons-material, @emotion/* (wrong design system)
- styled-components (wrong styling approach)
- next-themes, next/* (wrong framework — this is Vite, NOT Next.js)
- motion (duplicate of framer-motion)
- react-slick (use framer-motion)
- react-dnd (no drag-drop needed)
- recharts, chart.js (no charts needed)
- @popperjs/core, react-popper (Radix handles positioning)
- jQuery, bootstrap (incompatible)
- @types/react@^19 (must be @types/react@^18 to match React 18)

## 3. Before Installing ANY New Package

1. Search DEVELOPMENT.md for the "Approved Dependency List"
2. If the package is not on the list, check if an existing package already does the job
3. Only install if it will be used by an actual page/route — not "just in case"
4. Add it to the approved list in DEVELOPMENT.md after installing

## 4. Image Rules

- All public images must be WebP format
- Add loading="lazy" to every below-fold image
- Logo (src/assets/logo.png) is the only exception

## 5. Code Rules

- Use @/ alias for all imports
- All route components must be lazy-loaded
- No console.log in production code
- npm run build + npm run lint must pass with 0 errors before any commit
- Fonts in index.html `<link>` tags, NEVER in CSS @import

## 6. vite.config.ts Rules (CRITICAL — Blank Page Prevention)

These rules exist because breaking them causes a **silent blank page** in production.
See `_AGENT_COORD/VITE_CONFIG_RULES.md` for the full root cause analysis.

- **NEVER** add `manualChunks` for lazy-loaded dependencies (three, etc.)
  - Vite handles code-splitting automatically via lazy imports
  - `manualChunks` forces eager preloading → crashes kill the entire site
- **NEVER** add `define: { 'process.env': {} }` — breaks libraries checking NODE_ENV
- **NEVER** add `define: { 'global': 'window' }` — breaks library internals
- **ANY** change to vite.config.ts requires:
  1. A PROPOSAL in `_AGENT_COORD/PROPOSALS/`
  2. `npm run build && npx vite preview` verification
  3. User approval

## 7. Pre-Deploy Checklist (Mandatory)

Before ANY Netlify deploy:

```bash
npm run build
npx vite preview --port 4173
# Open http://localhost:4173/ — verify homepage renders (not blank)
# Open http://localhost:4173/about — verify subpage renders
```

If the page is blank, do NOT deploy. Check console for errors.

## 8. Reference Files

- README.md — Project overview and tech stack
- DEVELOPMENT.md — Full coding guidelines and approved packages
- vite.config.ts — Build config (DO NOT add manualChunks or define polyfills)
- eslint.config.js — Lint rules
- index.html — Font preconnect links + global error handler (safety net)
- `_AGENT_COORD/VITE_CONFIG_RULES.md` — Root cause of blank page bug & prevention rules

