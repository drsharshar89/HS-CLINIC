---
description: MANDATORY entry point for ALL agents — read this FIRST before any work
---

# HS Clinic — Agent Operating Manual

> **⚠️ STOP. READ THIS ENTIRE FILE BEFORE DOING ANYTHING.**
> Every agent session MUST start by reading this file. No exceptions.

## Who You Are

You are an AI agent working on the HS Clinic website for Dr. Haitham Sharshar.
This is a **production medical website** serving international patients.
Mistakes have real consequences — broken pages lose patients, wrong medical info violates YMYL.

---

## MANDATORY Pre-Work Readings

Before writing ANY code, you MUST read and internalize these files **in this order**:

### 1. Debugging Lessons (CRITICAL — Read First)

**File:** `.agent/skills/debugging-lessons/SKILL.md`

This contains **6 hard-won lessons from production incidents**. Each lesson cost hours of debugging.
If you skip this, you WILL repeat the same mistakes. Read every lesson, understand the root cause,
and apply the prevention rules to your work.

**Key rules you MUST know before writing code:**

- CORS: Always verify production domain is whitelisted in Sanity
- Slugs: Always query API directly, never trust what the UI shows
- Silent fallbacks: Never assume "page looks fine" means CMS data is flowing
- Field pipeline: Trace Schema → GROQ → Type → Hook → JSX (all 5 links)
- Hover dropdowns: NEVER use margin between trigger and panel — use padding
- Nav highlighting: Use startsWith() for items with child routes

### 2. Safety Protocol (MANDATORY for every code change)

**File:** `.agent/workflows/safety-protocol.md`

The 6-step process every task must follow. Skipping steps is not allowed.

### 3. Coding Rules (MANDATORY before writing any code)

**File:** `.agent/workflows/coding-rules.md`

Tech stack constraints, forbidden packages, image rules, Vite config rules.

### 4. Contextual Skills (Read based on task type)

| If your task involves... | Read this skill                         |
| ------------------------ | --------------------------------------- |
| Git operations           | `.agent/skills/git-windows/SKILL.md`    |
| Netlify deploy / debug   | `.agent/skills/netlify-deploy/SKILL.md` |
| Sanity CMS data          | `.agent/skills/sanity-cms/SKILL.md`     |
| Sanity data not showing  | `.agent/workflows/sanity-debug.md`      |
| SEO / JSON-LD / YMYL     | `.agent/skills/seo-ymyl/SKILL.md`       |

---

## The Three Laws of HS Clinic Development

### Law 1: Read Before You Build

Every bug in the debugging-lessons file was caused by an agent who didn't know the context.
The 5 minutes you spend reading saves 2 hours of debugging.

### Law 2: Build Must Pass

`npm run build` with 0 errors is a non-negotiable gate.
If it fails, you do NOT proceed. You fix it first.

### Law 3: Never Break What Works

This is a live production website. The worst outcome is a regression.
When in doubt, add a new component — don't modify an existing one.

---

## Quick Architecture Reference

```
F:\HS CLINIC\
├── src/
│   ├── app/pages/services/     ← 4 service pillar pages (CMS-powered)
│   ├── hooks/useCmsData.ts     ← ALL Sanity hooks live here
│   ├── lib/sanityClient.ts     ← Sanity client + urlFor helper
│   └── lib/seo.ts              ← JSON-LD constants
├── studio/                     ← Sanity Studio (schemas, config)
├── .agent/skills/              ← Agent memory (you are reading one now)
└── .agent/workflows/           ← Mandatory processes
```

## CMS Data Pipeline (Memorize This)

```
Sanity Schema → GROQ Query → TypeScript Interface → Hook Return → JSX Rendering
     1              2              3                    4             5
```

**If ANY link is missing, the data silently disappears and fallback content shows.**
This is the #1 source of "it's not working" bugs in this project.
