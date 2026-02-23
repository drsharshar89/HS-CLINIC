# SEO & AI Visibility QC Checklist

This document verifies the "Trust but Verify" stage required by the CTO, executing Phase 4 testing across all implemented architectures.

## 1. Googlebot JS Indexability (Solving the Blank SPA issue)

- [ ] **Test**: Built static HTML outputs exist (`dist/about/index.html`, etc).
- [ ] **Test**: Running `curl` against the deployed build serves fully populated HTML, not just `<div id="root"></div>`.
- [ ] **Validation**: Confirmed Semantic layout tags (`<header>`, `<main>`, `<footer>`) are instantly visible to the crawler without executing JavaScript.

## 2. AI-Friendly Fallbacks (`llms.txt` and `.md` routing)

- [ ] **Test**: Public `/llms.txt` is reachable and strictly formatted as requested.
- [ ] **Test**: Hitting `/about.md` returns raw Markdown text (bypassing the React Shell). Handled via `<MarkdownFallback />` routing in `routes.tsx` + Playwright Prerender snapshot.
- [ ] **Validation**: `robots.txt` allows AI Search bots (`OAI-SearchBot`, `PerplexityBot`) and disallows training scrapers.

## 3. SEO Trust & Grounding (Phase 4 Evidence)

- [ ] **Test**: External authority links to Zebris and Exocad are properly embedded in the DOM (About and Technology pages) for AI verification engines.
- [ ] **Test**: JSON-LD payload (MedicalClinic and Dentist properties) are accurate with no hallucinations (verified in Phase 2).
- [ ] **Validation**: The Medical Disclaimer text is visible to crawlers and accurately linked in the footer.

## 4. Crawl Optimization & Accessibility

- [ ] **Test**: IndexNow Ping script functions and is pointing to `api.indexnow.org`.
- [ ] **Test**: Page H1 hierarchy is logical.
- [ ] **Test**: `sitemap.xml` matches the pre-render paths exactly.

**Final Verdict**: PENDING RUN
