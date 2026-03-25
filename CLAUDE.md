@AGENTS.md

# Claude Code Rules

## Commit Messages
- Keep commit messages simple and concise
- Do NOT use fancy formatting (no emojis, no markdown, no bullet points)
- NEVER add "Co-Authored-By: Claude" or any Claude attribution
- NEVER add "Generated with Claude Code" or similar footers
- Just write a plain, descriptive commit message

---

## Project Overview

**Caffeinated** is a landing page for a mobile espresso cart and catering service in Houston, TX. The site is designed to drive event bookings through a polished, conversion-focused single-page experience.

### Target Audience
- Corporate office managers, executive assistants, HR/People Ops in Houston
- Wedding planners and couples
- Event coordinators booking for private functions

### Project Docs
- `docs/concept.md` — Business concept and build guide (source of truth)
- `docs/brand-brief.md` — Brand and design brief
- `docs/seo-competitive-analysis.md` — SEO and competitive research

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x | Framework (App Router) |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | 12.x | Animations |

---

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Key Implementation Notes

1. **Single Page App** — The site is a single-page landing page. All sections live on `page.tsx`.
2. **Anchor Navigation** — Navigation uses smooth scroll to section IDs.
3. **SEO** — Metadata and JSON-LD structured data should be configured in `app/layout.tsx`.
4. **Mobile-First** — Design is responsive, mobile-first.
5. **No Backend** — Static site, no server-side logic.

---

## Code Style Guidelines

- Use TypeScript interfaces for content data types
- Prefer named exports for content, default exports for components
- Use Tailwind utility classes; avoid custom CSS unless necessary
- Keep components focused — extract reusable pieces
- Use semantic HTML elements (`<section>`, `<nav>`, `<footer>`)
- Add `id` attributes to sections for anchor navigation
- Use mobile-first responsive values: `mobile-value md:desktop-value`
- Use `'use client'` directive for components that need Framer Motion, event handlers, or browser APIs
- Separate content data from components in `/content/*.ts` files
