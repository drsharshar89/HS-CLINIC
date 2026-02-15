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

## Phase 1: Core Pages & CMS Integration 🔄

**Owners:** DEV + SAN (parallel)

### DEV Track
- [ ] Home page — hero section, services preview, testimonials
- [ ] About page — doctor bio, clinic info, team section
- [ ] Services page — service cards with detailed descriptions
- [ ] Technology page — digital dentistry features
- [ ] Dental Tourism page — pricing table, FAQ, consultation form, 3D scene
- [ ] Contact page — form, map, clinic details
- [ ] Responsive design audit — all pages on mobile/tablet/desktop
- [ ] Animation polish — framer-motion transitions between pages

### SAN Track
- [ ] Verify all 9 schemas are production-ready
- [ ] Populate sample content in Sanity Studio
- [ ] Connect frontend pages to CMS data via `useSanityQuery`
- [ ] Image optimization pipeline via `@sanity/image-url`
- [ ] Sanity Studio embed at `/studio` route

### Contract Sync (ORC validates)
- [x] `src/types/sanity.ts` matches all Studio schemas exactly
- [ ] GROQ queries return expected shape — ⚠️ **blocked: no pages use `useSanityQuery` yet** (REQ-003 filed)
- [ ] Image URLs resolve correctly — ⚠️ **blocked: no pages use `urlFor` yet**

**QC Gate:** `npm run build` ✅ | `npm run lint` ✅ | All pages render with CMS data

---

## Phase 2: Polish, SEO & Accessibility

**Owners:** DEV (implementation) + ORC (audit)

- [x] `react-helmet-async` meta tags on every page
- [x] Open Graph tags for social sharing
- [x] Proper heading hierarchy (single `<h1>` per page)
- [x] `alt` text on all images
- [x] ARIA attributes on interactive elements
- [x] `robots.txt` and `sitemap.xml` updated for all routes
- [ ] Performance audit (Lighthouse score ≥ 90)
- [ ] Dark mode consistency check
- [x] Font loading optimization (preconnect in `index.html`)
- [x] Image lazy loading below the fold

**QC Gate:** Gate 10 (SEO & A11y) fully passes | Lighthouse ≥ 90

---

## Phase 3: Testing & Quality

**Owner:** ORC (Orchestration Agent)

- [x] Route rendering tests — all 7 routes render without error
- [x] Layout component tests — header, footer, navigation
- [x] Form validation tests — ConsultationForm
- [x] Sanity hook tests — `useSanityQuery` loading/error/success states
- [x] Component snapshot tests — CyberHero, FAQAccordion, ServicesGrid, WhyHSClinic
- [ ] Accessibility tests — `jest-axe` for core pages
- [ ] Contact form tests

**QC Gate:** `npm run test` all pass ✅ (32/32) | coverage target ongoing

---

## Phase 4: Deployment & Monitoring

**Owners:** ORC (config) + DEV (final check)

- [ ] Netlify environment variables configured
- [ ] Production build verified locally
- [ ] Deploy to Netlify staging
- [ ] Visual QA on staging URL
- [ ] Final QC gate run (all 12 gates)
- [ ] Production deploy
- [ ] Post-deploy smoke test (all routes load, CMS data renders)

**QC Gate:** All 12 gates pass | Staging works | Production deployed

---

## Cross-Phase Rules

1. **No phase skipping** — each phase's QC gate must pass first
2. **Contract-first** — any Sanity schema change triggers the full sync flow
3. **No forbidden packages** — checked at every phase gate
4. **Lock before edit** — every agent follows the lock protocol
5. **Changelog after every session** — no exceptions
