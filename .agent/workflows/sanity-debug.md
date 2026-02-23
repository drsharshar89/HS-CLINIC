---
description: Debug why Sanity CMS data doesn't appear on the live website — CORS, slugs, types, hooks, JSX
---

# Sanity CMS Data Flow Debugging

When Sanity content doesn't appear on the live site, follow this exact order.

## Step 1: Check CORS (90% of first-deploy issues)

Open the live page in a browser → DevTools → Console. Look for:

```
Access-Control-Allow-Origin
```

If present → Go to sanity.io/manage → API → CORS Origins → Add the production domain.

## Step 2: Query the API Directly

Hit the Sanity API to see what's actually stored:

```
https://nk38o90y.apicdn.sanity.io/v2026-02-14/data/query/production?query=*[_type == "<TYPE>"]{_id, "slug": slug.current, ...fields}
```

Check:

- Is the document returned at all? If not → check `_type` name
- Is the slug EXACTLY matching? Watch for **leading/trailing spaces**
- Is the document published (not just draft)? Drafts have `_id` starting with `drafts.`

## Step 3: Trace the Data Pipeline

If the API returns data but the page shows fallback content, trace these 5 links:

1. **Schema** (`studio/schemas/*.ts`) — field exists?
2. **GROQ query** (`useCmsData.ts`) — field included in projection?
3. **TypeScript interface** — field defined in the type?
4. **Hook return object** — field passed through (not dropped)?
5. **JSX** — component renders the field?

**ANY missing link = silent failure with fallback content shown.**

## Step 4: Check for Silent Fallback

The `??` operator hides failures. In dev mode, add temporary console output:

```typescript
// Temporary debug — remove after verifying
if (import.meta.env.DEV && !doc) {
  console.warn(`[CMS] No data found for slug: ${slug}`);
}
```

## Step 5: Verify Image Rendering

If images don't show despite data existing:

1. Confirm `urlFor` is imported from `@/lib/sanityClient`
2. Confirm the image field is in the GROQ projection
3. Confirm `heroImage?: any` is in the TypeScript interface
4. Confirm the JSX has: `{field && <img src={urlFor(field).width(X).url()} />}`

## Common Slug Values

| Service           | Expected Slug              |
| ----------------- | -------------------------- |
| Dental Implants   | `dental-implants`          |
| TMJ/TMD Treatment | `tmj-tmd-treatment`        |
| Clear Aligners    | `clear-aligners`           |
| Full Arch Rehab   | `full-arch-rehabilitation` |
