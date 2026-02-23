---
description: Diagnose and fix Netlify deploy failures for the HS Clinic website
---

# Netlify Deploy Debugging Workflow

Use this workflow when a Netlify deploy fails. Follow these steps in order.

---

## Step 1: Find the Deploy Log

Go to the Netlify deploy log (one of these methods):

- **From GitHub PR:** Click the "Details" link next to the failed Netlify check
- **From Netlify dashboard:** `https://app.netlify.com/projects/hs-clinic-dental-tourism-v2/deploys`
- **Direct URL pattern:** `https://app.netlify.com/projects/hs-clinic-dental-tourism-v2/deploys/<deploy-id>`

## Step 2: Jump to the Error

In the deploy log, click "Building" to expand, then click "Go to bottom" to find the error. The failure message is always at the bottom.

## Step 3: Identify the Failure Category

| Error Message                                                                            | Category                    | Fix                                                                                                                                     |
| ---------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `webkit.launch: Executable doesn't exist` or `chromium.launch: Executable doesn't exist` | **Playwright Missing**      | Add `npx playwright install chromium` to build command in `netlify.toml`                                                                |
| `su: Authentication failure` or `sudo: command not found`                                | **Sandbox Restriction**     | Remove `--with-deps` flag from `npx playwright install`                                                                                 |
| `Error: Cannot find module`                                                              | **Missing Dependency**      | Ensure `npm install --legacy-peer-deps` runs before `npm run build`                                                                     |
| `VITE_SANITY_PROJECT_ID is undefined` or 0 dynamic routes found                          | **Missing Env Vars**        | Set `VITE_SANITY_PROJECT_ID=nk38o90y` and `VITE_SANITY_DATASET=production` in Netlify dashboard → Site Settings → Environment Variables |
| `Node.js version X is not supported`                                                     | **Node Version**            | Verify `NODE_VERSION = "22"` in `netlify.toml` under `[build.environment]`                                                              |
| `npm ERR! ERESOLVE unable to resolve dependency tree`                                    | **Peer Dep Conflict**       | Ensure build command uses `npm install --legacy-peer-deps`                                                                              |
| `Error: Failed to launch server` or `EADDRINUSE`                                         | **Prerender Port Conflict** | The preview server failed to start. Check if port 4173 is hardcoded.                                                                    |
| Quality gate warning: `Missing <title>` or `Missing <h1>`                                | **Prerender Content Issue** | The page rendered but is missing essential SEO tags. Check the page component's `<Helmet>` block.                                       |

## Step 4: Apply the Fix

1. Edit the relevant file locally (usually `netlify.toml` or a script in `scripts/`)
2. Commit and push using the `/sync-repo` workflow
3. The push to the branch will automatically trigger a new Netlify deploy preview

## Step 5: Verify the Fix

- Watch the deploy log for the new build
- Confirm the "Building" phase completes without errors
- Check that the deploy preview URL loads correctly
- Verify Lighthouse scores in the Netlify bot comment on the PR

---

## Reference: Current Build Command

```toml
[build]
  command = "npm install --legacy-peer-deps && npx playwright install chromium && npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"
```

### Build Chain (`npm run build`)

```
vite build → generate-sitemap.mjs → prerender.mjs
```

1. Vite compiles React → `dist/` with hashed JS bundles
2. Sitemap script queries Sanity for dynamic routes → writes `dist/sitemap.xml`
3. Prerender script launches Playwright Chromium → snapshots all 21 routes → writes static HTML

---

## Reference: Required Environment Variables

| Variable                 | Value        | Where to Set                                    |
| ------------------------ | ------------ | ----------------------------------------------- |
| `VITE_SANITY_PROJECT_ID` | `nk38o90y`   | Netlify → Site Settings → Environment Variables |
| `VITE_SANITY_DATASET`    | `production` | Netlify → Site Settings → Environment Variables |
