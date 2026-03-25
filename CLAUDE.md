@AGENTS.md

# Caffeinated

Mobile espresso cart landing page in Houston, TX. Single-page, conversion-focused site driving event bookings.

## Project Docs
- `concept.md` — Source of truth (business, packages, tech stack, GTM)
- `brand-brief.md` — Brand and design direction
- `seo-competitive-analysis.md` — SEO competitive research
- `docs/decisions.md` — Design decisions, research findings, and rationale
- `docs/roadmap.md` — Phased roadmap (PostHog, Attio, Clay, content flywheel, etc.)

## Tech Stack
- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion 12
- Single-page static site — all sections in `page.tsx`
- Content data separated into `/content/*.ts` files
- Components in `components/sections/` with barrel export

## Tailwind v4 Gotchas
- Custom colors go in `@theme inline` in `globals.css` with `--color-` prefix. Do NOT use `:root` vars — they won't generate utility classes.
- `next/font` CSS vars don't work as Tailwind classes. Use inline `style={{ fontFamily: "var(--font-plus-jakarta)" }}`.

## Key Patterns
- `'use client'` on components using Framer Motion, useState, or browser APIs
- Anchor navigation with smooth scroll to section IDs
- Mobile-first responsive: `mobile-value md:desktop-value`
- SEO metadata and JSON-LD in `app/layout.tsx`

## Commit Messages
- Plain and concise. No emojis, no markdown, no Claude attribution.
