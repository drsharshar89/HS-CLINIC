---
description: Sync Sanity Studio schema changes — build, test, and deploy the studio
---

# Sanity Studio Sync Workflow

Use this workflow after making changes to Sanity schemas in `studio/schemas/` or to `studio/sanity.config.ts`.

// turbo-all

## Step 0: Verify schema file exists

Before editing, list current schemas to avoid duplicates:

```powershell
Get-ChildItem "F:\HS CLINIC\studio\schemas" -Name
```

## Step 1: Validate the Studio builds locally

```powershell
Set-Location "F:\HS CLINIC\studio"; npx sanity build 2>&1
```

> If the build fails, fix schema errors before proceeding. Common issues:
> - Missing `name` or `type` field in a schema
> - Duplicate schema names in `schemas/index.ts`
> - Import path typos

## Step 2: Start the Studio locally to verify changes

```powershell
Set-Location "F:\HS CLINIC\studio"; npx sanity dev
```

> Open http://localhost:3333 and verify:
> - New/modified document types appear in the sidebar
> - Fields render correctly
> - No console errors

## Step 3: Verify the main site still builds

Schema changes can affect the React frontend if it queries changed fields.

```powershell
Set-Location "F:\HS CLINIC"; npm run build
```

> If the frontend build fails, check `src/app/cms/` for queries referencing renamed/removed fields.

## Step 4: Deploy the Studio (if using hosted Sanity Studio)

```powershell
Set-Location "F:\HS CLINIC\studio"; npx sanity deploy
```

> This deploys the Studio UI to Sanity's hosted environment. Only run this after confirming the build passes.

## Step 5: Commit changes via sync-repo workflow

After deploying, use the `/sync-repo` workflow to push schema changes to GitHub.

## Schema File Reference

Current schemas in `studio/schemas/`:

| Schema | Purpose |
|---|---|
| `siteSettings.ts` | Global site settings (name, logo, contact info) |
| `homepageSettings.ts` | Homepage content configuration |
| `aboutSettings.ts` | About page content |
| `hero.ts` | Hero section content |
| `service.ts` | Individual service documents |
| `servicePillar.ts` | Service pillar pages (detailed service pages) |
| `servicesPageSettings.ts` | Services overview page settings |
| `dsdSettings.ts` | Digital Smile Design page settings |
| `technologySettings.ts` | Technology page settings |
| `tourismSettings.ts` | Dental tourism page settings |
| `tourismPricing.ts` | Tourism pricing packages |
| `page.ts` | Generic page documents |
| `teamMember.ts` | Team member profiles |
| `testimonial.ts` | Patient testimonials |
| `faq.ts` | FAQ entries |
| `beforeAfterCase.ts` | Before/after case studies |
| `youtubeVideo.ts` | YouTube video embeds |
