---
name: Netlify Deployment
description: Rules and patterns for deploying this site to Netlify
---

# Netlify Deployment — Agent Skill

This site is deployed to Netlify from the `main` branch. Every push to `main` triggers an auto-build.

## Site Details

| Key             | Value                                                          |
| --------------- | -------------------------------------------------------------- |
| **Site name**   | `hs-clinic-dental-tourism-v2`                                  |
| **Domain**      | `drhaithamsharshar.com`                                        |
| **App URL**     | `https://app.netlify.com/projects/hs-clinic-dental-tourism-v2` |
| **GitHub repo** | `drsharshar89/HS-CLINIC`                                       |
| **Branch**      | `main` (auto-deploy)                                           |

## Build Configuration

The build command in `netlify.toml`:

```toml
[build]
  command = "npm install --legacy-peer-deps && npx playwright install chromium && npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"
```

### Build Chain (`npm run build`)

1. `vite build` → produces `dist/` with JS bundles
2. `node scripts/generate-sitemap.mjs` → queries Sanity, writes `dist/sitemap.xml`
3. `node scripts/prerender.mjs` → Playwright snapshots all routes into static HTML

### Required: Playwright Chromium

The prerender step requires Playwright Chromium. This is **not pre-installed** on Netlify.

**Rules:**

- ✅ `npx playwright install chromium` — installs only Chromium (fast, works)
- ❌ `npx playwright install --with-deps chromium` — requires `sudo` which Netlify sandbox forbids
- ❌ `npx playwright install` — installs ALL browsers (too slow, unnecessary)

## Environment Variables

These must be set in Netlify's dashboard (Site Settings → Environment Variables):

| Variable                 | Value        | Scope               |
| ------------------------ | ------------ | ------------------- |
| `VITE_SANITY_PROJECT_ID` | `nk38o90y`   | All deploy contexts |
| `VITE_SANITY_DATASET`    | `production` | All deploy contexts |

## Debugging Failed Deploys

1. Check the deploy log at: `https://app.netlify.com/projects/hs-clinic-dental-tourism-v2/deploys/<deploy-id>`
2. Common failures:
   - **Playwright missing**: build command doesn't include `npx playwright install chromium`
   - **Env vars missing**: Sanity queries return 0 results, sitemap has no dynamic URLs
   - **Node version**: Must be 22 (set in `netlify.toml`)
   - **npm install fails**: Use `--legacy-peer-deps` flag

## Netlify Features in Use

- **SPA redirect**: `/* → /index.html` (200) for client-side routing
- **www → apex**: `www.drhaithamsharshar.com` → `drhaithamsharshar.com` (301)
- **Security headers**: Configured in `netlify.toml`
- **Deploy previews**: Auto-created for PRs
- **Build hook**: Sanity webhook triggers rebuild on content publish
