---
name: SEO & YMYL Compliance
description: SEO rules, JSON-LD templates, and YMYL compliance requirements for this medical website
---

# SEO & YMYL Compliance — Agent Skill

This is a **YMYL (Your Money or Your Life) medical website**. Google holds medical sites to the highest quality standards. Violations can result in manual actions or ranking penalties.

## YMYL Rules (Non-Negotiable)

> [!CAUTION]
> **NEVER fabricate, hallucinate, or hardcode any of the following:**
>
> - Star ratings or review counts (`aggregateRating`)
> - Patient testimonials or quotes
> - Medical credentials not verified by the clinic owner
> - Treatment success rates or statistics
> - Pricing data (unless confirmed by the owner)

### What Happened Before

A previous agent hardcoded `aggregateRating: { ratingValue: 4.9, reviewCount: 150 }` in the JSON-LD. This was fabricated data that Google would have treated as a trust violation. It was purged in Phase 4 QC.

### The Rule

Let the **Google Business Profile** organically supply star ratings. Never inject them via structured data.

## SEO Architecture

### Required Meta Tags Per Page

Every page component must include in its `<Helmet>` block:

```tsx
<Helmet>
  <title>{SEO.pageName.title}</title>
  <meta name="description" content={SEO.pageName.description} />
  <link rel="canonical" href={SEO.pageName.canonical} />
  {/* Open Graph */}
  <meta property="og:title" content={SEO.pageName.title} />
  <meta property="og:description" content={SEO.pageName.description} />
  <meta property="og:url" content={SEO.pageName.canonical} />
  <meta property="og:image" content={ogImageUrl} />
  <meta property="og:image:alt" content="Dr. Haitham Sharshar — HS Clinic Cairo" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SITE_NAME} />
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={SEO.pageName.title} />
  <meta name="twitter:description" content={SEO.pageName.description} />
  <meta name="twitter:image" content={ogImageUrl} />
</Helmet>
```

### SEO Constants Location

All SEO metadata is centralized in `src/lib/seo.ts`:

- `SEO` object — title, description, canonical per page
- `LOCAL_BUSINESS_JSONLD` — Dentist + MedicalClinic dual-typed schema
- `ORGANIZATION_JSONLD` — Organization with logo for Knowledge Panel
- `DOCTOR_JSONLD` — Person schema with credentials
- `WEBSITE_JSONLD` — WebSite schema for sitelinks search box
- `buildLocalBusinessJsonLd()` — Merges CMS overrides with defaults

## JSON-LD Schemas in Use

| Schema                      | Page(s)                | Purpose                                 |
| --------------------------- | ---------------------- | --------------------------------------- |
| `Dentist` + `MedicalClinic` | Home                   | Primary clinic schema                   |
| `Organization`              | Home                   | Logo + social links for Knowledge Panel |
| `Person`                    | Home, About            | Dr. Sharshar's credentials              |
| `WebSite`                   | Home                   | Sitelinks search box                    |
| `MedicalProcedure`          | Service pillar pages   | Treatment-specific schema               |
| `FAQPage`                   | Service pages, Tourism | FAQ rich results                        |
| `BreadcrumbList`            | Service pages, Tourism | Navigation breadcrumbs                  |

### Adding a New Page Checklist

1. Add SEO entry to `SEO` object in `src/lib/seo.ts`
2. Add `<Helmet>` block with all required meta tags
3. Add JSON-LD if the page has structured content (FAQ, procedures, etc.)
4. Add the route to `staticRoutes` array in `scripts/prerender.mjs`
5. Add the route to `staticRoutes` array in `scripts/generate-sitemap.mjs`
6. Verify with `npm run build` — check prerender output for `<title>` and `<h1>` in quality gate

## Build-Time SEO Pipeline

```
vite build → generate-sitemap.mjs → prerender.mjs
```

1. **Sitemap**: Fetches dynamic routes from Sanity, merges with static, deduplicates, writes `dist/sitemap.xml`
2. **Prerender**: Playwright snapshots every route into static HTML with full Helmet tags rendered
3. **IndexNow**: `scripts/ping-indexnow.mjs` pings Bing/Yandex with all URLs from sitemap

## AI Bot Optimization

- `public/llms.txt` — Spec-compliant file for AI crawlers
- `public/robots.txt` — Allows all bots, blocks `/studio`
- Entity-rich first paragraphs on all pages for AI citation
