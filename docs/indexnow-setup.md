# IndexNow Protocol Setup

We have implemented the **IndexNow protocol** to instantly notify major search engines (Bing, Yandex, Seznam, and soon others) the moment our site content is updated, added, or deleted. This bypasses the traditional "wait for the crawler" phase.

## Current Configuration

- **Key Generated**: `120985f6c43dbe7a`
- **Verification File**: Located at `public/120985f6c43dbe7a.txt` for search engines to verify ownership.
- **Ping Script**: `scripts/ping-indexnow.mjs` parses the `sitemap.xml` generated during the build and POSTs all current URLs to `api.indexnow.org`.

## What it does

Bing and Yandex share an indexing database. When the `ping-indexnow.mjs` script runs, it instantly notifies their unified API that:

1. We have new content.
2. The index should be immediately updated to reflect the new dynamic pages (e.g., a newly published Sanity blog post).

_Note: Google does not currently support IndexNow, relying instead on its proprietary Indexing API (which is generally restricted to job postings/broadcast events) and standard XML Sitemaps. However, ensuring Bing rapidly indexes the site increases overall domain authority signals across the web ecosystem._

## Execution

The script is designed to be run manually or as a post-build step. Currently, we recommend running it manually after significant content drops to avoid spamming the API on every minor CSS tweak.

**Command to run:**

```bash
node scripts/ping-indexnow.mjs
```

_(Ensure `npm run build` has produced an updated `dist/sitemap.xml` before running)._
