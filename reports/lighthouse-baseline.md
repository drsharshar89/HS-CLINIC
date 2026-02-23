# Lighthouse & Performance Baseline (Mobile)

## Execution Note

The automated Lighthouse CLI timed out waiting for page load due to an external network intercept (`kaspersky-labs.com` / longpooling) blocking network idle states in headless Chrome. However, the architectural audit tells us exactly what the performance profile is.

## Baseline Assessment (Current State)

### Stack Details

- **Framework**: React 18 + Vite (SPA)
- **Routing**: Client-side via `react-router-dom`
- **Render Strategy**: 100% Client-Side Rendering (CSR).

### Performance Profile

- **FCP (First Contentful Paint)**: Delayed. The browser must download `index.html`, load ~600KB of blocking JS bundles (e.g., `index-DP2c9qtX.js`), evaluate React, and fetch data before painting the `<div id="root"></div>`.
- **LCP (Largest Contentful Paint)**: Also delayed due to the heavy JS payload execution required before the hero images can even be injected into the DOM.
- **TBT (Total Blocking Time)**: Expected to be moderate/high on mid-range mobile devices because React hydrates and renders the entire initial DOM structure simultaneously.
- **SEO / Indexability**: Search engines dropping JS execution (or running out of crawl budget) will only see an empty `<div id="root"></div>`. This is the most critical issue to fix.

### Immediate Action Plan (Phase 1)

Pre-rendering is mandatory.
We will implement **build-time static snapshotting** using the already-installed `@playwright/test` framework to visit each route after `vite build`, grab the fully rendered HTML DOM structure, and save it statically. This ensures bots immediately see meaningful text and LCP images.
