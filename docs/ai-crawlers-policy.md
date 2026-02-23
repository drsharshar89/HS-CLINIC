# AI Crawler & Indexing Policy

This document defines the rules for how generative AI bots and traditional search crawlers are allowed to access the HS Clinic website.

Our core philosophy is **AI-First Discoverability**: We want major AI models (ChatGPT, Perplexity, Gemini, Claude) to ingest our structured data, `llms.txt`, and pre-rendered HTML to position Dr. Haitham Sharshar as the authoritative entity for Digital Occlusion and TMD in the Middle East.

## Explicitly Allowed AI Bots

We specifically whitelist ethical, attribution-providing AI search bots via our `robots.txt` file to ensure they have unhindered access to our medical content:

- **OAI-SearchBot** (OpenAI / SearchGPT)
- **ChatGPT-User** (OpenAI / ChatGPT Web Browsing)
- **PerplexityBot** (Perplexity AI)
- **GoogleOther** (Google's non-search AI ingestion bot)
- **ClaudeBot** (Anthropic)

## Technical Implementation

### 1. Pre-rendering (Playwright)

Because our site is a React SPA, bots historically saw a blank page. We have implemented build-time static snapshotting. AI bots now receive 100% pre-rendered, semantic HTML loaded with JSON-LD schemas.

### 2. llms.txt standard

We maintain a public `/llms.txt` file at the root directory. This provides AI crawlers with a dense, markdown-formatted summary of the clinic's core facts, pricing principles, NAP (Name, Address, Phone), and doctor credentials, bypassing the need to scrape complex React components.

### 3. Entity & Trust Architecture

AI models rely heavily on Knowledge Graphs. We feed these graphs using:

- `MedicalClinic`, `Dentist`, and `MedicalProcedure` schema.org JSON-LD arrays.
- Explicit `sameAs` links pointing to the clinic's verified Google Maps (`https://maps.app.goo.gl/bs7YaRkiFgkpbmLRA`) and social profiles.
- Verified credentials mapped to `EducationalOccupationalCredential` schema arrays.

## Prohibited Bots (Scrapers)

While we encourage ethical AI Search bots, we restrict aggressive, non-attributing data scrapers (e.g., CCBot, GPTBot context-scrapers) if they cause server load without providing zero-click search visibility to the clinic. Currently, we allow all for maximum reach, but reserve the right to block specific bulk scrapers if performance degrades.
