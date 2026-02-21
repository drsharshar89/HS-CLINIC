# Roadmap — HS Clinic Website

> Phased development plan with QC gates.
> Each phase must pass its QC gates before the next phase begins.

---

## Phase 0: Infrastructure & Coordination ✅

**Owner:** ORC (Orchestration Agent)
**Status:** Complete

- [x] Create `_AGENT_COORD/` directory structure
- [x] Define `OWNER_MAP.md` — file ownership for 3 agents
- [x] Define `COORDINATION_RULES.md` — lock/request/proposal protocols
- [x] Define `QC_GATES.md` — 12-gate quality checklist
- [x] Create `CHANGELOG.md`
- [x] Create `CURRENT_STATUS.md`
- [x] Create `ROADMAP.md` (this file)
- [x] Add `_AGENT_COORD/` to `.gitignore`

**QC Gate:** All coordination files exist and are complete.

---

## Phase 1: Core Pages & CMS Integration ✅

**Owners:** DEV + SAN (parallel)

### DEV Track

- [x] Home page — hero section, services preview, CTA
- [x] About page — doctor bio, clinic info, credentials
- [x] Services page — service cards with detailed descriptions
- [x] Technology page — digital dentistry features
- [x] Digital Smile Design page — 4K Stitch designs, DSD journey, golden proportion
- [x] Dental Tourism page — pricing table, FAQ, consultation form, 3D scene
- [x] Contact page — form, map, clinic details
- [ ] Responsive design audit — all pages on mobile/tablet/desktop
- [x] Animation polish — framer-motion transitions between pages

### SAN Track

- [x] Verify all 8 schemas are production-ready
- [ ] Populate sample content in Sanity Studio
- [x] Connect frontend pages to CMS data via `useCmsData.ts` (7 hooks, fallback-first)
- [x] Image optimization pipeline via `useSanityImage` hook
- [x] Sanity Studio embed at `/studio` route

### Contract Sync (ORC validates)

- [x] `src/types/sanity.ts` matches all Studio schemas exactly
- [x] GROQ queries return expected shape — all 7 hooks validated
- [x] Image URLs resolve correctly — `useSanityImage` in Hero + About

**QC Gate:** `npm run build` ✅ | `npm run lint` ✅ | All pages render with CMS data

---

## Phase 2: SEO, Accessibility & CMS Expansion ✅

**Owners:** DEV (implementation) + ORC (audit) + Antigravity (CMS expansion)

### SEO & Accessibility

- [x] `react-helmet-async` meta tags on every page
- [x] Open Graph tags for social sharing
- [x] Proper heading hierarchy (single `<h1>` per page)
- [x] `alt` text on all images
- [x] ARIA attributes on interactive elements
- [x] `robots.txt` and `sitemap.xml` updated for all routes
- [x] Font loading optimization (preconnect in `index.html`)
- [x] Image lazy loading below the fold
- [x] WebP image compliance (all images converted)
- [x] Cache + security headers via `netlify.toml`
- [x] Netlify prerendering for bot indexing

### CMS Expansion (Phase 2B)

- [x] DSD page settings schema + hook + page wiring
- [x] Tourism page settings schema + hook + 3 sub-component wiring
- [x] Before/After Gallery — new `/gallery` page + route + nav link
- [x] YouTube video embeds — reusable component + schema + hook
- [x] Gallery CMS image pipeline — `urlFor()` for reliable image URLs

### SEO Pillar Pages (Phase 2C)

- [x] `/services/dental-implants` — rich JSON-LD + FAQ schema
- [x] `/services/tmj-tmd-treatment` — rich JSON-LD + FAQ schema
- [x] `/services/clear-aligners` — rich JSON-LD + FAQ schema
- [x] `/services/full-arch-rehabilitation` — rich JSON-LD + FAQ schema
- [x] `llms.txt` for AI/GEO crawler visibility
- [x] `servicePillar` Sanity schema (future CMS control ready)

**QC Gate:** Build ✅ | Tests 42/42 ✅ | Lint 0 ✅

---

## Phase 3: Testing & Quality 🔄

**Owner:** ORC (Orchestration Agent)

- [x] Route rendering tests — all routes render without error
- [x] Layout component tests — header, footer, navigation
- [x] Form validation tests — ConsultationForm
- [x] Sanity hook tests — `useSanityQuery` loading/error/success states
- [x] Component snapshot tests — CyberHero, FAQAccordion, ServicesGrid, WhyHSClinic
- [x] Accessibility tests — 10 a11y tests
- [ ] E2E tests for Gallery + service subpages
- [ ] Performance audit (Lighthouse ≥ 90)
- [ ] Contact form validation tests

**QC Gate:** `npm run test` all pass ✅ (42/42) | coverage target ongoing

---

## Phase 4: Deployment & Monitoring

**Owners:** ORC (config) + DEV (final check)

- [x] Netlify environment variables configured
- [x] Production build verified locally
- [ ] Deploy latest changes to Netlify production
- [ ] Visual QA on staging URL (all 13 routes)
- [ ] Responsive design audit (mobile/tablet/desktop)
- [ ] Final QC gate run (all 12 gates)
- [ ] Post-deploy smoke test (all routes load, CMS data renders)

**QC Gate:** All 12 gates pass | Staging works | Production deployed

---

## Cross-Phase Rules

1. **No phase skipping** — each phase's QC gate must pass first
2. **Contract-first** — any Sanity schema change triggers the full sync flow
3. **No forbidden packages** — checked at every phase gate
4. **Lock before edit** — every agent follows the lock protocol
5. **Changelog after every session** — no exceptions
