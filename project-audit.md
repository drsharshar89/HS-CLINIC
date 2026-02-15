# HS Clinic — Current State & Next Steps Blueprint

> **Date:** 2026-02-15  
> **Author:** ORC (Orchestration Agent)  
> **Live site:** [hs-clinic-dental-tourism-v3-fresh.netlify.app](https://hs-clinic-dental-tourism-v3-fresh.netlify.app/)

---

## 1. Architecture Overview

| Layer | Technology | Notes |
|-------|-----------|-------|
| **Framework** | React 18.3 + Vite 6.3 | SPA, client-side routing |
| **Routing** | react-router-dom v6 | 6 public routes + `/studio` |
| **Styling** | Tailwind CSS 4.1 + custom CSS vars | Dark-mode only, gold accent palette |
| **State** | Local `useState` only | No global store |
| **CMS** | Sanity.io (8 schemas) | Client + hooks exist, **zero pages fetch CMS data** |
| **3D** | Three.js / @react-three | Lazy-loaded `ImplantScene` on `/dental-tourism` |
| **Animations** | Framer Motion | CyberHero, ClinicalSimulation, DentalTourism |
| **SEO** | react-helmet-async | `<title>` + `<meta description>` on every page |
| **Testing** | Vitest + Testing Library | 8 files, 32 tests |
| **Deploy** | Netlify | Auto-deploy from GitHub |
| **QA** | Husky + lint-staged | Pre-commit (ESLint + Prettier), Pre-push (build + test) |

### Route Map

```
/                → Home (CyberHero + ClinicalSimulation + Features + CTA)
/about           → About (Bio, Values, Credentials)
/services        → Services (6 services, Conditions, Process Timeline)
/technology      → Technology (6 tech cards, Hero image, Stats)
/dental-tourism  → DentalTourism (Hero+3D, Before/After, Why, Services, Pricing, Reviews, Timeline, FAQ, Form, CTA)
/contact         → Contact (Appointment form, Contact info, Map placeholder)
/studio          → SanityStudio (CMS admin — outside Layout)
```

### Component Inventory

| Category | Count |
|----------|-------|
| Page components | 6 |
| Custom components | 10 (CyberHero, ClinicalSimulation, GlowCard, SectionHeader, ErrorBoundary, Layout, BeforeAfterSlider, WhyHSClinic, ServicesGrid, FAQAccordion, ConsultationForm) |
| shadcn/ui primitives | ~30 (most unused) |
| Tourism sub-components | 6 |
| Test files | 8 (32 tests total) |

---

## 2. What's Working ✅

- Premium dark-mode design with gold accents, glassmorphism, micro-animations
- Comprehensive Dental Tourism page (382 lines, 3D viewer, pricing, reviews, FAQ with JSON-LD)
- All pages lazy-loaded, Three.js code-split (~941KB isolated chunk)
- SEO basics: `<title>` + `<meta description>` on every page, `robots.txt` + `sitemap.xml`
- ErrorBoundary + `index.html` safety net for blank page prevention
- QA fortress: Husky + lint-staged + pre-push (build + test)

---

## 3. Critical Issues 🔴

### 3.1 Missing Before/After Slider Images
`DentalTourism.tsx` references `/images/tourism/case1-before.jpg` and `case1-after.jpg` — **neither file exists**. The `BeforeAfterSlider` renders broken images.

### 3.2 Sitemap Missing `/dental-tourism`
`sitemap.xml` lists 5 routes but **omits `/dental-tourism`** — the most SEO-important page. Directly hurts Google indexing for dental tourism keywords.

### 3.3 Contact Form Has No Backend
Both `Contact.tsx` and `ConsultationForm.tsx` do `console.log` only — no Netlify Forms, no email, no API.

### 3.4 Sanity CMS Completely Unwired
8 schemas, client + hooks (`useSanityQuery`, `urlFor`) exist, but **zero pages import them**. All content hardcoded.

---

## 4. High-Priority Gaps 🟠

### Accessibility (a11y)

| Issue | Location |
|-------|----------|
| Form inputs missing `<label>` | Contact.tsx, ConsultationForm.tsx |
| Low contrast `text-gray-500` on dark BG | Multiple pages |
| No skip-to-content link | Layout.tsx header |
| No `aria-expanded` on mobile toggle | Layout.tsx |
| `<select>` time slot has no label | Contact.tsx |
| Reviews carousel can't be paused | DentalTourism.tsx |

### SEO Gaps

| Issue | Severity |
|-------|----------|
| No JSON-LD on Home, About, Services, Technology, Contact | HIGH |
| No `<link rel="canonical">` | HIGH |
| No Open Graph / Twitter meta tags | MEDIUM |
| No `hreflang` for international audiences | MEDIUM |
| No favicon | MEDIUM |
| External Unsplash images (not self-hosted) | LOW |

---

## 5. Medium Improvements 🟡

- **Dead code:** ~30 unused shadcn/ui components, Puck editor comments in Home.tsx, DebugHome/DebugLayout components
- **Performance:** 3 Google Font families loaded synchronously, Unsplash images at full resolution
- **UX:** No 404 page, no page transitions, reviews carousel can't be paused
- **Mobile:** CyberHero floating panels hidden on mobile (`hidden lg:block`)

---

## 6. Prioritized Action Checklist

### 🔴 P0 — Fix Before Any New Features
- [ ] Add real before/after images or remove BeforeAfterSlider
- [ ] Add `/dental-tourism` to `sitemap.xml`
- [ ] Add `<label>` elements to all form inputs
- [ ] Wire forms to Netlify Forms or email API
- [ ] Add favicon

### 🟠 P1 — SEO & Accessibility Sprint
- [ ] JSON-LD structured data on all pages
- [ ] `<link rel="canonical">` on all pages
- [ ] Open Graph + Twitter meta tags
- [ ] Skip-to-content link + `aria-expanded`
- [ ] Color contrast audit
- [ ] `hreflang` for international targeting

### 🟡 P2 — Polish & Performance
- [ ] 404 error page
- [ ] Page transition animations
- [ ] Self-host Google Fonts / add `font-display: swap`
- [ ] Remove unused shadcn/ui components
- [ ] Clean dead code
- [ ] Add `prefers-reduced-motion` support

### 🔵 P3 — CMS Integration
- [ ] Wire Home hero to Sanity CMS
- [ ] Wire Services to `service` schema
- [ ] Wire About to `teamMember` schema
- [ ] Wire reviews to `testimonial` schema
- [ ] Wire FAQ to `faq` schema

### ⚪ P4 — Future Enhancements
- [ ] WhatsApp chat widget
- [ ] Multi-language (Arabic + English)
- [ ] Blog section for SEO
- [ ] Patient portal / booking integration
- [ ] Google Maps embed
