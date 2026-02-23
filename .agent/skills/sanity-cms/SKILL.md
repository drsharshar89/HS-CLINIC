---
name: Sanity CMS
description: Sanity project configuration, GROQ patterns, and CMS hook architecture
---

# Sanity CMS — Agent Skill

This project uses Sanity.io as the headless CMS.

## Project Details

| Key               | Value                                     |
| ----------------- | ----------------------------------------- |
| **Project ID**    | `nk38o90y`                                |
| **Dataset**       | `production`                              |
| **Studio URL**    | `https://hs-dental-clinic.sanity.studio/` |
| **Studio config** | `studio/sanity.config.ts`                 |
| **CLI config**    | `studio/sanity.cli.ts`                    |
| **Client module** | `src/lib/sanityClient.ts`                 |

> [!CAUTION]
> A previous agent used a different project ID (`yvwb8oib`) in build scripts. The correct ID is **`nk38o90y`**. Always verify this in `studio/sanity.config.ts` if unsure.

## Schema Architecture

17 schemas registered:

**Singletons (page settings):**

- `siteSettings` — Global site config (logo, social, contact)
- `homepageSettings` — Hero, features, CTA
- `aboutSettings` — Bio, credentials, timeline
- `gallerySettings` — Gallery page config
- `tourismSettings` — Tourism page config
- `dsdSettings` — Digital Smile Design page config

**Collections:**

- `beforeAfterCase` — Gallery before/after cases
- `servicePillar` — 4 service pillar pages (dental-implants, tmj-tmd-treatment, clear-aligners, full-arch-rehabilitation)
- `post` — Blog posts (slug-based)
- `service` — Service documents (slug-based)

## CMS Hook Pattern

All CMS hooks live in `src/hooks/useCmsData.ts`. They follow this pattern:

```typescript
export function useServicePillar(slug: string) {
  const [pillar, setPillar] = useState<ServicePillarData>(DEFAULTS[slug]);

  useEffect(() => {
    sanityClient.fetch(QUERY, { slug }).then((data) => {
      if (data) setPillar({ ...DEFAULTS[slug], ...data });
    });
  }, [slug]);

  return { pillar };
}
```

**Key principle:** Every CMS field uses `??` fallback to hardcoded defaults. The site **never breaks** if CMS is empty.

### Available Hooks

| Hook                         | Used By                  |
| ---------------------------- | ------------------------ |
| `useSiteSettings()`          | Layout, all pages        |
| `useHomepageSettings()`      | Home.tsx                 |
| `useAboutSettings()`         | About.tsx                |
| `useGallerySettings()`       | Gallery.tsx              |
| `useTourismSettings()`       | DentalTourism.tsx        |
| `useDsdSettings()`           | DigitalSmileDesign.tsx   |
| `useServicePillar(slug)`     | 4 service pillar pages   |
| `useSanityImage(ref, width)` | Any page with CMS images |
| `useYoutubeVideos(category)` | Video sections           |

## GROQ Query Patterns

```groq
// Fetch a singleton (prefer known _id, fallback to any)
coalesce(*[_type == "hero" && _id == "hero"][0], *[_type == "hero"][0])

// Fetch a singleton (simple)
*[_type == "siteSettings"][0]

// Fetch a service pillar by slug
*[_type == "servicePillar" && slug.current == $slug][0]

// Fetch all blog posts
*[_type == "post" && defined(slug.current)] | order(_createdAt desc)

// Fetch slugs + types for prerendering
*[_type in ["post", "service"] && defined(slug.current)]{_type, "slug": slug.current}
```

> [!CAUTION]
> **`order()` does NOT support boolean `desc`.** Using `order(_id == "hero" desc)` causes a 400 error. For "prefer this document" logic, always use `coalesce()` with two filtered queries.

## Sanity → Netlify Webhook

A webhook named "Netlify Rebuild on Publish" is configured in the Sanity dashboard:

- **Trigger:** Create, Update, Delete
- **URL:** Netlify build hook URL
- **Filter:** All document types

This means: publish content in Sanity Studio → Netlify auto-rebuilds → live site updates.
