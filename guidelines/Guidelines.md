# Design System Guidelines — HS Clinic

> Extracted from `src/styles/theme.css` and `src/styles/index.css`.
> All agents **must** use these tokens. Do not introduce ad-hoc colors or fonts.

---

## Color Palette

### Gold (Brand Primary)
| Token | Value | Usage |
|-------|-------|-------|
| `gold-50` | `#fdf9ee` | Lightest tint |
| `gold-100` | `#f7efd3` | Hover backgrounds |
| `gold-200` | `#f0e4b8` | Borders, highlights |
| `gold-300` | `#e8d48b` | Gradient start |
| `gold-400` | `#d4af37` | **Primary brand** — buttons, headings, accents |
| `gold-500` | `#c5a55a` | Secondary emphasis |
| `gold-600` | `#a68b3e` | Gradient end |
| `gold-700` | `#8b7332` | Dark accent |

### Dark (Backgrounds)
| Token | Value | Usage |
|-------|-------|-------|
| `dark-950` | `#050505` | Page background |
| `dark-900` | `#0a0a0a` | Card/section backgrounds |
| `dark-800` | `#141414` | Elevated surfaces |

### Glass (Glassmorphism)
| Token | Value | Usage |
|-------|-------|-------|
| `glass` | `rgba(255,255,255,0.04)` | Glass card fill |
| `glass-border` | `rgba(255,255,255,0.08)` | Glass card borders |

---

## Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Headings | `Playfair Display` (serif) | 400, 700 | h1–h6, titles |
| Body | `Inter` (sans) | 300, 400, 600, 700 | Paragraphs, UI text |
| Mono | `JetBrains Mono` | 300, 400, 500 | Labels, tags, code, status badges |

**Rules:**
- All headings use `font-serif` with `letter-spacing: -0.025em` and `color: white`
- Body text defaults to `text-gray-200` on dark backgrounds
- Monospace for small labels, tracking `[0.2em]`–`[0.3em]`, uppercase

---

## Utility Classes

| Class | Effect |
|-------|--------|
| `.text-gradient` | Gold gradient text (`from-gold-300 via-gold-400 to-gold-600`) |
| `.glass-card` | Glassmorphism surface (blur, border, shadow) |
| `.glow-hover` | Gold glow on hover (`box-shadow: 0 0 30px rgba(212,175,55,0.25)`) |

---

## Animations

| Token | Duration | Usage |
|-------|----------|-------|
| `animate-pulse-slow` | 4s | Subtle pulsing indicators |
| `animate-float` | 6s | Floating elements (hero cards) |
| `animate-shimmer` | 2s | Loading shimmer effects |

---

## Spacing & Radius

| Token | Value |
|-------|-------|
| `--radius` | `0.625rem` (10px) |
| `--radius-sm` | `calc(--radius - 4px)` |
| `--radius-md` | `calc(--radius - 2px)` |
| `--radius-lg` | `var(--radius)` |
| `--radius-xl` | `calc(--radius + 4px)` |

---

## Color Scheme

The site is **dark mode only** (`color-scheme: dark` on `:root`). Do not add light mode styles unless explicitly requested.
