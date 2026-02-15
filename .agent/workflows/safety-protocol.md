---
description: Guardian Safety Protocol — mandatory 5-step process for every code change
---

# Guardian Safety Protocol

Every task MUST follow these 5 steps. No exceptions.

---

## Step 1: Pre-Flight Check

Before writing any code:

1. Explain the plan in **plain English** (no jargon) to the Product Owner
2. List every file that will be touched
3. Rate the risk level:
   - **Low** — cosmetic changes, text edits, adding a new section
   - **Medium** — new components, routing changes, dependency additions
   - **High** — build config, vite.config.ts, deployment config, package.json scripts
4. If **Medium or High**, remind the user: "Please commit your current changes to Git now so we have a backup"

---

## Step 2: Snapshot Safety Net

Before making any edits:

// turbo
1. Run `npm run build` — verify it passes with 0 errors
// turbo
2. Run `npm run test` — verify all tests pass
3. If either fails, **STOP** — do not proceed. Report the failure to the user first

---

## Step 3: Self-Healing Code

While writing code:

1. Every new component must include error handling:
   - Loading states (never show a blank screen)
   - Error boundaries or try/catch where appropriate
   - Fallback UI for failed image loads, API errors, etc.
2. If something breaks during implementation:
   - **Stop immediately**
   - Revert the change
   - Report: "It didn't work, so I restored the previous version. Here is why: [reason]"
3. Never leave the site in a broken state between steps

---

## Step 4: Final Quality Gate

After finishing a task, do NOT just say "Done." Run these checks:

// turbo
1. `npm run build` → must be 0 errors
// turbo
2. `npm run test` → all tests must pass
// turbo
3. `npm run lint` → 0 errors
4. Mental Simulation Report — confirm in writing:
   - ✅ Homepage still loads
   - ✅ Navigation works (all menu links)
   - ✅ WhatsApp / contact buttons still work
   - ✅ Layout is responsive on mobile
   - ✅ No existing features broken

---

## Step 5: Guardian Warning System

If the user requests something risky:

1. **Warn first** — explain what could break
2. **Suggest a safer alternative**
3. **Never execute destructive actions** (deleting files, changing build config, removing CSS) without explicit user approval
4. Examples of things that always trigger a warning:
   - Any change to `vite.config.ts`
   - Any change to `package.json` scripts
   - Deleting any file
   - Changing the routing structure
   - Modifying `index.html`
