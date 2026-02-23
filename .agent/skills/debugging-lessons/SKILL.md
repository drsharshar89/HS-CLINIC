---
name: Debugging Lessons
description: Hard-won technical lessons from production debugging sessions — CORS, Sanity CMS, UI hover gaps, slug matching, and more. Read this BEFORE diagnosing any bug.
---

# Debugging Lessons — Technical Memory

These lessons were extracted from real production incidents. Each includes the **symptom**, **root cause**, **fix**, and a **prevention rule** to avoid repeating the same mistake.

---

## Lesson 1: Sanity CORS — Add Production Domain

### Symptom

Content published in Sanity Studio doesn't appear on the live website, but works on localhost.

### Root Cause

Sanity blocks client-side API requests from domains not whitelisted in the project's CORS origins. `localhost:5173` is whitelisted during dev, but the production domain (`drhaithamsharshar.com`) was never added.

### Fix

Go to **sanity.io/manage → Project → API → CORS Origins → Add** `https://drhaithamsharshar.com` with "Allow credentials" checked.

### Prevention Rule

> **RULE: When deploying to a new domain, ALWAYS add it to Sanity's CORS origins BEFORE testing.**

### Detection

If Sanity data doesn't appear on the live site, FIRST check the browser console for:

```
Access-Control-Allow-Origin
```

If this error appears, it's a CORS issue, NOT a code issue.

---

## Lesson 2: Sanity Slug Whitespace — Invisible Leading Spaces

### Symptom

GROQ query returns empty results (`"result": []`) even though the document exists and is published in Sanity.

### Root Cause

The slug field in Sanity had an **invisible leading space**: `" dental-implants"` instead of `"dental-implants"`. The GROQ query `slug.current == $slug` performed an exact match and found nothing.

### Fix

Remove the leading space from the slug field in Sanity Studio and re-publish.

### Prevention Rule

> **RULE: When diagnosing "CMS data not showing", ALWAYS query the Sanity API directly to inspect the actual stored values. Never trust what the Studio UI displays — it may hide whitespace.**

### Detection Pattern

```bash
# Direct API query to check all documents of a type:
https://<PROJECT_ID>.apicdn.sanity.io/v2026-02-14/data/query/production?query=*[_type == "<TYPE>"]{_id, "slug": slug.current}
```

Look for leading/trailing whitespace by comparing the returned slug against the expected value character by character.

### Code-Level Prevention

When building Sanity schemas with slug fields, add a validation rule that trims whitespace:

```typescript
defineField({
  name: 'slug',
  type: 'slug',
  validation: (r) => r.required().custom((slug) => {
    if (slug?.current !== slug?.current?.trim()) {
      return 'Slug contains leading or trailing whitespace';
    }
    return true;
  }),
}),
```

---

## Lesson 3: Silent Fallback Masking — The `??` Trap

### Symptom

A page looks "fine" but is showing hardcoded fallback content instead of CMS data. The developer/user doesn't realize anything is wrong.

### Root Cause

The `useServicePillar` hook uses `doc?.field ?? defaults.field` for EVERY field. When the Sanity fetch fails (CORS, network, wrong slug), ALL fields fall back silently. There's no visual indicator that CMS data is missing.

### Why This Is Dangerous

- The user publishes content in Sanity and assumes it's live
- The page shows the old hardcoded text, not the new CMS text
- No error is visible in the UI — the fallback pattern hides the failure
- This can go undetected for days/weeks

### Fix Applied

This is by design for reliability, but consider adding:

1. A dev-only banner when CMS data is missing: `{import.meta.env.DEV && !doc && <div>⚠️ CMS data not loaded</div>}`
2. Console warnings in dev mode when falling back to defaults

### Prevention Rule

> **RULE: When a hook uses `??` fallback pattern, ALWAYS test the CMS data flow end-to-end after deployment. Do NOT assume the page "looking normal" means CMS data is flowing.**

---

## Lesson 4: GROQ Fetches Field but JSX Doesn't Render It

### Symptom

A field (e.g., `heroImage`) is defined in the Sanity schema, included in the GROQ query, and has data in Sanity — but it doesn't appear on the website.

### Root Cause

The GROQ query fetched `heroImage`, but:

1. The TypeScript interface (`ServicePillarData`) didn't include the field
2. The hook's return object didn't pass it through
3. The page component had no `<img>` tag to render it

Three separate gaps in the data pipeline, all needed fixing.

### Fix

1. Add the field to the TypeScript interface
2. Include it in the hook's return object
3. Add JSX rendering in the component

### Prevention Rule

> **RULE: When adding a new field to a Sanity schema, trace the full data pipeline:**
>
> 1. Schema field → 2. GROQ query → 3. TypeScript interface → 4. Hook return object → 5. JSX rendering
>    **All 5 must be connected. Missing ANY ONE breaks the chain silently.**

### Checklist Template

```
□ Schema: defineField({ name: 'newField', ... })
□ GROQ:   *[_type == "doc"]{ ..., newField }
□ Type:   interface Data { newField?: Type; }
□ Hook:   const data = { newField: doc?.newField ?? fallback }
□ JSX:    {data.newField && <Component>{data.newField}</Component>}
```

---

## Lesson 5: CSS Hover Gap — `margin` vs `padding` in Dropdowns

### Symptom

A hover-triggered dropdown appears when you hover the trigger text, but **disappears before you can click any item** inside the dropdown panel.

### Root Cause

The dropdown container used `mt-2` (margin-top) to create visual spacing between the trigger and the panel. Margin is **outside** the element boundary, creating an invisible "dead zone" where the mouse leaves the parent's hover area, triggering `onMouseLeave`, which closes the dropdown.

```
[Services ▼]          ← trigger element (inside parent div)
                      ← mt-2 = DEAD ZONE (mouse leaves parent → onMouseLeave fires)
┌──────────────┐
│ Dental Impl. │      ← dropdown panel (still inside parent div, but unreachable)
│ TMD Treatment│
└──────────────┘
```

### Fix

Replace `mt-2` with `pt-2` (padding-top). Padding is **inside** the element boundary, so the hover area remains continuous:

```diff
- <div className="absolute top-full ... mt-2 ...">
+ <div className="absolute top-full ... pt-2 ...">
```

### Prevention Rule

> **RULE: In ANY hover-triggered dropdown, NEVER use `margin` between the trigger and the panel. ALWAYS use `padding` on the dropdown wrapper to create visual spacing while maintaining a continuous hover area.**

### Universal Pattern

```tsx
<div onMouseEnter={open} onMouseLeave={close} className="relative">
  <button>Trigger</button>
  {isOpen && (
    <div className="absolute top-full pt-2">
      {' '}
      {/* ← padding, NOT margin */}
      <div className="bg-dark-900 rounded-xl border shadow-2xl">{/* dropdown items */}</div>
    </div>
  )}
</div>
```

---

## Lesson 6: `isActive` Path Matching for Nested Routes

### Symptom

When viewing `/services/dental-implants`, the "Services" nav link doesn't highlight as active.

### Root Cause

The `isActive` function used exact match: `location.pathname === path`. Since `/services/dental-implants` !== `/services`, the check failed.

### Fix

```diff
- const isActive = (path: string) => location.pathname === path;
+ const isActive = (path: string) =>
+   location.pathname === path || location.pathname.startsWith(path + '/');
```

### Prevention Rule

> **RULE: For ANY nav item that has child routes, use `startsWith` matching, not exact matching. Add a trailing slash to prevent false positives (e.g., `/service` matching `/services`).**

### Edge Case

The Home link (`/`) needs special handling — `startsWith('/')` would match everything. The current implementation works because `'/' + '/'` = `'//'` which nothing starts with. But if you ever refactor, be aware of this.

---

## Quick Reference: Diagnostic Flowchart

```
CMS data not showing on live site?
├── Check browser console for CORS errors
│   └── Yes → Add domain to Sanity CORS origins
├── Query Sanity API directly — does the document exist?
│   ├── No results → Check slug for whitespace
│   └── Results exist → Check TypeScript interface + hook return + JSX rendering
└── Data flows but looks wrong → Check field name mapping between schema and GROQ

Dropdown disappears on hover?
└── Check for margin between trigger and panel → Replace with padding

Nav item not highlighting?
└── Check isActive() — does it use startsWith for nested routes?
```
