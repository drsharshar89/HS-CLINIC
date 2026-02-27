# Project Rules — HS CLINIC (Dr. Haitham Sharshar)

## Project Context

- Project: HS CLINIC — production dental clinic website
- Workspace: F:\HS CLINIC
- Live URL: https://drhaithamsharshar.com
- GitHub: https://github.com/drsharshar89/HS-CLINIC
- Deployment: Netlify (auto-deploys from main branch)
- Sanity Studio: studio/ subfolder (separate package.json)

## Tech Stack (Locked — Do NOT Change)

- React 18.3 + TypeScript 5.9 + Vite 6.3
- TailwindCSS v4 (via @tailwindcss/vite plugin)
- react-router-dom 6.x (SPA client-side routing)
- framer-motion 11.x (animations)
- Radix UI primitives (shadcn/ui pattern)
- lucide-react (icons)
- Three.js + @react-three/fiber + @react-three/drei (3D scenes)
- react-helmet-async (per-page SEO meta tags)
- Sanity CMS (@sanity/client for read-only GROQ queries)
- web-vitals (Core Web Vitals → GA4)

## Mandatory Pre-Work Reading

Before making ANY change, read these files IN ORDER:

1. .agent/skills/debugging-lessons/SKILL.md — 10 production debugging lessons
2. .agent/workflows/safety-protocol.md — 6-step mandatory safety process
3. .agent/workflows/coding-rules.md — tech stack constraints and forbidden packages
4. \_AGENT_COORD/ANTI_DESTRUCTION_POLICY.md — absolute anti-destruction rules
5. \_AGENT_COORD/COORDINATION_RULES.md — file ownership and lock protocol

If your task involves CMS: also read .agent/workflows/sanity-debug.md and .agent/skills/sanity-cms/SKILL.md
If your task involves Git: also read .agent/skills/git-windows/SKILL.md
If your task involves deployment: also read .agent/skills/netlify-deploy/SKILL.md
If your task involves SEO: also read .agent/skills/seo-ymyl/SKILL.md

## Protected Files (Require PROPOSAL + User Approval)

These files must NEVER be modified without a written proposal in \_AGENT_COORD/PROPOSALS/ and explicit user approval:

- vite.config.ts — breaking this = blank page in production
- netlify.toml — breaking this = deploy failure
- tsconfig.json — breaking this = compile failure
- package.json scripts section — breaking this = build pipeline failure
- .env / .env.example — breaking this = API connection failure
- index.html structure — font preconnects, GA4 tag, global error handler

## Forbidden Packages (NEVER Install)

- @mui/material, @mui/icons-material, @emotion/\* (wrong design system)
- styled-components (wrong styling approach)
- next-themes, next/\* (wrong framework — this is Vite, NOT Next.js)
- motion (duplicate of framer-motion)
- react-slick (use framer-motion instead)
- react-dnd (no drag-drop needed)
- recharts, chart.js (no charts needed)
- @popperjs/core, react-popper (Radix handles positioning)
- jQuery, bootstrap (incompatible)
- @types/react@^19 (must be @types/react@^18 to match React 18)

Before installing ANY package: check DEVELOPMENT.md approved list first.

## Coding Conventions

- Use @/ path alias for ALL imports (resolves to src/)
- All route components must be lazy-loaded via React.lazy()
- All routes defined in src/app/routes.tsx
- Page components live in src/app/pages/
- Shared components live in src/app/components/
- Custom hooks live in src/hooks/
- Utility functions live in src/lib/
- No console.log in production code (console.error only for real errors)
- Remove unused imports immediately
- Use ES module syntax (import/export), never CommonJS
- Fonts load via link tags in index.html, NEVER via CSS @import

## Styling Rules

- Tailwind CSS v4 only — no other CSS frameworks
- Design tokens defined with @theme in src/styles/index.css
- Component variants use class-variance-authority (cva)
- Class merging via cn() helper from src/lib/utils.ts
- No inline styles unless dynamically calculated
- Dark-mode only site (color-scheme: dark)

## Image Rules

- All public images must be WebP format
- No JPG, PNG, or JFIF in public/images/
- Logo (src/assets/logo.png) is the only PNG exception
- Every below-fold img must have loading="lazy"
- External Unsplash URLs acceptable for stock photos

## Build & Deploy Commands

- Dev server: npm run dev (Vite, port 5173)
- Build: npm run build (vite build + sitemap + prerender)
- Preview: npm run preview (vite preview)
- Lint: npm run lint (eslint)
- Test: npm run test (vitest, 42 tests)
- E2E: npm run test:e2e (Playwright)
- Format: npm run format (prettier)

Pre-deploy checklist (MANDATORY):

- npm run build must succeed with 0 errors
- npx vite preview --port 4173 must render homepage (not blank)
- npm run test must pass all tests

## Vite Config Rules (CRITICAL — Blank Page Prevention)

- NEVER add manualChunks for lazy-loaded deps — Vite handles code-splitting automatically
- NEVER add define: { 'process.env': {} } — breaks libraries checking NODE_ENV
- NEVER add define: { 'global': 'window' } — breaks library internals
- See \_AGENT_COORD/VITE_CONFIG_RULES.md for root cause analysis

## CMS (Sanity)

- Studio runs in studio/ directory (separate package.json and node_modules)
- Frontend uses @sanity/client for read-only GROQ queries
- Image URLs built with @sanity/image-url
- Env vars: VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET (public, safe for browser)
- SANITY*API_TOKEN is server-side only — NEVER prefix with VITE*
- Always verify CMS data pipeline: Schema → GROQ → Type → Hook → JSX (all 5 links)
- Production domain must be whitelisted in Sanity CORS settings

## SEO & Medical Compliance (YMYL)

- This is a YMYL (Your Money or Your Life) medical website
- All medical claims must be accurate and evidence-based
- Use react-helmet-async for per-page meta tags (title, description, canonical, OG, Twitter)
- JSON-LD structured data: LocalBusiness, FAQPage, Organization, WebSite schemas
- Sitemap auto-generated at build time (scripts/generate-sitemap.mjs)
- IndexNow ping available (scripts/ping-indexnow.mjs)
- Web Vitals (LCP, INP, CLS, FCP, TTFB) sent to GA4 via src/lib/webVitals.ts
- Google Analytics: GA4 tag G-XTVETG60NX in index.html

## Deployment (Netlify)

- Auto-deploys from main branch
- Build: npm install --legacy-peer-deps && npx playwright install chromium && npm run build
- Publish directory: dist
- SPA routing: /\* -> /index.html (200 status)
- www -> apex redirect (301, canonical URL for SEO)
- Node version: 22
