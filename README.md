# Caffeinated

Mobile espresso cart landing page for **Caffeinated**, a mobile espresso bar serving corporate events, weddings, and private functions in the Houston, TX metro area.

Single-page, conversion-focused static site. The website is the 24/7 salesperson -- someone googles "coffee catering Houston," lands here, and books in minutes.

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 16.2.1 | App Router, static site generation |
| React | 19.2.4 | UI |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling (PostCSS plugin) |
| Framer Motion | 12.x | Animations |

No backend. No database. No auth. Static export deployed to Vercel (or any static host).

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build
npm run lint       # ESLint
```

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, metadata, JSON-LD LocalBusiness schema
    page.tsx          # Home page, assembles all sections, FAQPage JSON-LD
    globals.css       # Tailwind imports, custom theme colors, global styles
    sitemap.ts        # Auto-generated sitemap.xml
    robots.ts         # Auto-generated robots.txt
    icon.png          # Favicon
    compare/          # Internal comparison page (not linked from main site)
  components/
    Navbar.tsx         # Fixed top nav with logo + CTA
    Footer.tsx         # Footer with contact info and social links
    sections/
      index.ts         # Barrel export for all sections
      Hero.tsx          # Hero with headline, CTA, background image
      LogoCarousel.tsx  # Client logo ticker (Google, Kendra Scott, UH, etc.)
      HowItWorks.tsx    # 3-step process breakdown
      Menu.tsx          # Drink carousel with horizontal scroll
      Packages.tsx      # Three pricing tiers (Essentials, Full Spread, VIP)
      About.tsx         # Business story
      Gallery.tsx       # Event photo grid
      Testimonials.tsx  # Client testimonials
      FAQ.tsx           # Expandable FAQ accordion
      Contact.tsx       # Contact/quote form
  content/
    menu.ts            # Drink menu data (names, ingredients, images)
    faq.ts             # FAQ questions and answers (feeds both UI and JSON-LD schema)
public/
  photos/              # Event and product photography
  clients/             # Client logo images (PNG/SVG)
prototypes/            # Static HTML prototypes for section design exploration
docs/
  concept.md           # Source of truth (business, packages, GTM, tech stack)
  brand-brief.md       # Brand and design direction
  seo-competitive-analysis.md  # Houston coffee cart SEO landscape research
  decisions.md         # Design decisions, research findings, and rationale
  roadmap.md           # Phased roadmap with task checklist
```

## Architecture Decisions

### Single-Page Static Site

All sections live on one page (`page.tsx`). Navigation is anchor-based with smooth scrolling to section IDs (`#faq`, `#contact`, etc.). This keeps things simple and conversion-focused -- no routing complexity, fast loads, easy to reason about.

### Content Separation

Content data lives in `src/content/*.ts` files, not inline in components. This makes it easy to update copy, add menu items, or change FAQ answers without touching component logic. The FAQ content file (`content/faq.ts`) is the single source of truth for both the UI accordion and the FAQPage JSON-LD structured data.

### Client Components

Components that use Framer Motion, `useState`, or browser APIs are marked `'use client'`. Server components are the default. The layout and page files are server components, which is why JSON-LD structured data is rendered there (not in client components).

## Styling

### Tailwind CSS 4

Custom colors are defined in `@theme inline` in `globals.css` with `--color-` prefix:

| Token | Hex | Usage |
|-------|-----|-------|
| `espresso` | `#2D1B14` | Primary text, dark backgrounds |
| `amber` | `#C8773A` | Accent, gradient starts |
| `cream` | `#F9F6F1` | Page background, light sections |
| `caramel` | `#B07840` | Secondary accent |
| `saddle` | `#8B4513` | Gradient midpoints |
| `peach` | `#E8A87C` | Soft accent |
| `accent` | `#382313` | CTAs, buttons |

Use these as Tailwind utilities: `bg-espresso`, `text-cream`, `border-amber/20`, etc.

**Gotcha:** Do NOT use `:root` CSS variables for colors. They won't generate Tailwind utility classes in v4. Always use `@theme inline` with `--color-` prefix.

### Fonts

- **Geist Sans** -- body text, UI
- **Plus Jakarta Sans 800 Italic** -- logo wordmark

Fonts are loaded via `next/font/google` in `layout.tsx` as CSS variables. Since `next/font` CSS vars don't work directly as Tailwind classes, components use inline `style={{ fontFamily: "var(--font-plus-jakarta)" }}` where needed.

### Logo

The logo is a text-based wordmark ("caffeinated.") using Plus Jakarta Sans 800 Italic with a gradient fill (amber to saddle to espresso). It appears in the Navbar and Footer with slightly different treatments. There is no separate logo image file.

## SEO

### What's Implemented

- **Meta tags**: Title, description, keywords, canonical URL, robots directives in `layout.tsx`
- **Open Graph + Twitter cards**: Full social sharing metadata in `layout.tsx`
- **JSON-LD LocalBusiness schema**: In `layout.tsx`, tells search engines what the business is, where it operates, and what it does
- **JSON-LD FAQPage schema**: In `page.tsx`, auto-generated from `content/faq.ts` for rich search results
- **Sitemap**: `app/sitemap.ts` generates `/sitemap.xml` automatically
- **Robots**: `app/robots.ts` generates `/robots.txt` automatically
- **Semantic HTML**: Proper heading hierarchy, section elements, alt text on all images
- **Fast loads**: Static generation, optimized images via `next/image`

### Target Keywords

Primary: "coffee catering Houston", "mobile coffee cart Houston", "corporate coffee catering Houston", "espresso bar for events Houston", "wedding coffee bar Houston"

Long-tail: "book a barista for corporate event Houston", "mobile espresso cart for wedding Houston TX", "office coffee catering near me"

Full competitive analysis and keyword research in `docs/seo-competitive-analysis.md`.

### Domain Placeholder

The site URL is currently set to `https://caffeinated.com` as a placeholder. When the real domain is purchased, update it in three files:
- `src/app/layout.tsx` (the `siteUrl` constant)
- `src/app/sitemap.ts` (the `siteUrl` constant)
- `src/app/robots.ts` (the `siteUrl` constant)

### SEO Maintenance Rules

- **Adding/editing FAQ items**: Edit `content/faq.ts` only. Both the UI and FAQPage JSON-LD read from it.
- **Adding new pages** (e.g. suburb landing pages): Add the route to `sitemap.ts` and include relevant keywords in the page's metadata.
- **Changing business info**: Update in `metadata` export, `jsonLd` object, and Open Graph fields -- all in `layout.tsx`.
- **Adding service types**: Add keywords to `metadata.keywords` and `jsonLd.knowsAbout` in `layout.tsx`.
- **Adding images**: Always include descriptive alt text. When an OG image is created, add it to `openGraph.images` and `twitter.images` in `layout.tsx`.

### Not Yet Implemented

- Google Business Profile (offline task, not code)
- Houston suburb/neighborhood landing pages (The Woodlands, Katy, Sugar Land, etc.)
- Blog / content flywheel (event recaps)
- OG share image

## Imagery

Currently using a mix of real event photography and AI-generated images. The plan is to replace all AI imagery with real photos as events are booked. Photos live in `public/photos/`. Client logos in `public/clients/`.

## Deployment

Not yet deployed. Plan is Vercel or static export. Domain not yet purchased.

## Project Docs

Detailed documentation lives in the `docs/` directory:

| Document | Purpose |
|----------|---------|
| `docs/concept.md` | Source of truth -- business model, packages, tech stack, GTM strategy |
| `docs/brand-brief.md` | Brand personality, design direction, visual references |
| `docs/seo-competitive-analysis.md` | Houston coffee cart SEO landscape, competitor breakdown, keyword strategy |
| `docs/decisions.md` | Design decisions and rationale |
| `docs/roadmap.md` | Phased roadmap with checkboxes (launch, workflows, analytics, CRM, content, optimization) |
