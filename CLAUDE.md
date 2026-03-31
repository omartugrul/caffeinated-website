@AGENTS.md

# Caffeinated

Mobile coffee cart landing page in Houston, TX. Single-page, conversion-focused site driving event bookings.

## Project Docs
- `docs/concept.md` — Source of truth (business, packages, tech stack, GTM)
- `docs/brand-brief.md` — Brand and design direction
- `docs/seo-competitive-analysis.md` — SEO competitive research
- `docs/decisions.md` — Design decisions, research findings, and rationale
- `docs/roadmap.md` — Phased roadmap (PostHog, Attio, Clay, content flywheel, etc.)

## Tech Stack
- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion 12
- Single-page static site — all sections in `page.tsx`
- Content data separated into `/content/*.ts` files
- Section components in `components/sections/` with barrel export
- Shared UI primitives in `components/ui/` (Button, Input, Logo, Section, SectionHeading) with barrel export — use these instead of raw HTML for buttons, inputs, logos, section wrappers, and headings

## Color Palette
Four colors defined in `@theme inline` in `globals.css`: `espresso` (dark brown, text), `amber` (warm accent, CTAs), `cream` (warm off-white, backgrounds), `accent` (slightly warmer dark brown, button backgrounds). Logo gradient hex values (#C8773A, #8B4513) are hardcoded in `components/ui/Logo.tsx` and `opengraph-image.tsx`.

## Tailwind v4 Gotchas
- Custom colors go in `@theme inline` in `globals.css` with `--color-` prefix. Do NOT use `:root` vars — they won't generate utility classes.
- `next/font` CSS vars don't work as Tailwind classes. Use inline `style={{ fontFamily: "var(--font-plus-jakarta)" }}` (or use the `Logo` component which handles this).

## Key Patterns
- `'use client'` on components using Framer Motion, useState, or browser APIs
- Anchor navigation with smooth scroll to section IDs
- Mobile-first responsive: `mobile-value md:desktop-value`

## SEO Setup
- **Domain**: `siteUrl` is defined once in `content/site.ts` and imported by `layout.tsx`, `sitemap.ts`, and `robots.ts`. Update it there when the real domain is purchased.
- **Metadata + Open Graph + Twitter cards**: Defined in `app/layout.tsx` via Next.js `Metadata` export.
- **JSON-LD LocalBusiness schema**: Rendered as `<script type="application/ld+json">` in `app/layout.tsx`. Update `telephone` field when available.
- **JSON-LD FAQPage schema**: Rendered in `app/page.tsx`, auto-generated from `content/faq.ts`. Adding/editing FAQ questions in the content file updates both the UI and structured data.
- **Sitemap**: `app/sitemap.ts` — add new routes here as suburb landing pages are built.
- **Robots**: `app/robots.ts` — simple allow-all config pointing to the sitemap.
- **Target keywords**: Listed in `metadata.keywords` in `layout.tsx` and detailed in `docs/seo-competitive-analysis.md`.

### SEO Maintenance Rules
When making changes, keep these in sync:
- **Adding/editing FAQ items**: Edit `content/faq.ts` only. The FAQ component and FAQPage JSON-LD both read from it automatically.
- **Adding new pages** (e.g. suburb landing pages): Add the route to `app/sitemap.ts`. Include relevant target keywords in the page's metadata.
- **Changing the business name, description, or service area**: Update in three places: `metadata` export in `layout.tsx`, the `jsonLd` object in `layout.tsx`, and Open Graph fields in `layout.tsx`.
- **Changing the domain**: Update `siteUrl` in `content/site.ts` (single source of truth).
- **Adding service types or packages**: Add relevant keywords to `metadata.keywords` in `layout.tsx` and to `knowsAbout` in the `jsonLd` object.
- **Adding images**: Always include descriptive alt text.
- **OG image**: Generated via `app/opengraph-image.tsx` using `ImageResponse` from `next/og`. Twitter card reuses it via `app/twitter-image.tsx`. To change the OG image, edit `opengraph-image.tsx` -- no metadata changes needed (file convention auto-injects).

## Design System
- Internal reference page at `/design-system` — shows all UI primitives and live component renders.
- Blocked from crawlers via `robots.ts` disallow + `noindex` metadata.
- Not linked from the main site.

## Commit Messages
- Plain and concise. No emojis, no markdown, no Claude attribution.
