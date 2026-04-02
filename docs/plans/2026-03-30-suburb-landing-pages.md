# Suburb Landing Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build 15 SEO-optimized suburb/neighborhood landing pages to capture local search traffic for coffee catering in Houston metro areas.

**Architecture:** Single dynamic route (`app/[suburb]/page.tsx`) driven by a content data file (`content/suburbs.ts`). Each suburb gets unique metadata, JSON-LD, headline, intro copy, local venue/business references, and a CTA. Pages use existing UI primitives (Section, SectionHeading, Button) and share Navbar/Footer with the main site. All pages are statically generated at build time via `generateStaticParams`.

**Tech Stack:** Next.js 16 App Router (async params), TypeScript, Tailwind CSS 4, existing UI components.

**Important Next.js 16 note:** `params` is a `Promise` and must be `await`ed in `generateMetadata` and page components.

---

### Task 1: Create suburb content data file

**Files:**
- Create: `src/content/suburbs.ts`

**Step 1: Create the content data file**

This file exports a `suburbs` array and a `getSuburbBySlug` helper. Each entry contains:
- `slug` (URL path segment)
- `name` (display name)
- `headline` (unique H1)
- `description` (meta description, ~155 chars)
- `intro` (2-3 sentences, unique per area, references local landmarks/businesses)
- `venues` (3-5 real local venues, event spaces, or corporate office areas)
- `angle` ("corporate" | "wedding" | "mixed") -- determines which copy angle to emphasize
- `neighborhoods` (optional list of sub-areas covered)

All 15 suburbs:
1. the-woodlands
2. katy
3. sugar-land
4. pearland
5. clear-lake
6. downtown
7. midtown
8. heights
9. galleria
10. memorial
11. energy-corridor
12. cypress
13. spring
14. rice-village
15. montrose

Content must use "coffee bar" / "cold brew" in customer-facing copy (not "espresso"). Metadata descriptions can use "espresso" for SEO.

**Step 2: Verify types compile**

Run: `npx tsc --noEmit`
Expected: No errors

**Step 3: Commit**

```bash
git add src/content/suburbs.ts
git commit -m "Add suburb content data for 15 Houston area landing pages"
```

---

### Task 2: Create the dynamic route page component

**Files:**
- Create: `src/app/[suburb]/page.tsx`

**Step 1: Create the page component**

The page component:
- Exports `generateStaticParams` returning all suburb slugs
- Exports `generateMetadata` with unique title, description, canonical URL, OG tags per suburb
- Renders a full landing page with: Navbar, hero section (h1 + intro), local venues section, packages summary (import from content/packages.ts), CTA driving to `/#contact`, Footer
- Includes JSON-LD `LocalBusiness` schema scoped to the suburb (reusing the pattern from layout.tsx but with suburb-specific `areaServed`)
- Uses existing UI primitives: Section, SectionHeading, Button
- Uses existing Navbar and Footer components
- `params` must be awaited (Next.js 16 async params)

Page structure:
1. Navbar
2. Hero-like header with H1 + suburb intro (not full-screen hero, just a header section)
3. "Why Caffeinated in [Area]" section with local references
4. Local venues/areas we serve (the `venues` list)
5. Packages summary (3 cards, simplified from main Packages section)
6. CTA section with Button linking to `/#contact`
7. Footer

**Step 2: Verify build passes**

Run: `npx next build`
Expected: All 15 suburb routes generated as static pages

**Step 3: Commit**

```bash
git add src/app/\[suburb\]/page.tsx
git commit -m "Add dynamic suburb landing page route with SEO metadata"
```

---

### Task 3: Update sitemap to include suburb pages

**Files:**
- Modify: `src/app/sitemap.ts`

**Step 1: Update sitemap**

Import `suburbs` from `content/suburbs.ts` and add all suburb pages to the sitemap with `changeFrequency: "monthly"` and `priority: 0.8`.

**Step 2: Verify build passes**

Run: `npx next build`
Expected: PASS, sitemap.xml includes all suburb URLs

**Step 3: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "Add suburb landing pages to sitemap"
```

---

### Task 4: Update robots.ts (if needed)

**Files:**
- Verify: `src/app/robots.ts`

**Step 1: Verify suburb pages are crawlable**

The current robots.ts allows `/` and disallows `/design-system` and `/compare`. Suburb pages at `/the-woodlands`, `/katy`, etc. are already allowed. No changes needed unless the current config blocks them.

**Step 2: Commit (only if changes made)**

---

### Task 5: Add internal links from main site to suburb pages

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Add a "Service Areas" section to the Footer**

Add a grid/list of suburb links in the Footer, below the existing content. This creates internal links from the homepage (highest authority page) to each suburb page, which is critical for passing link equity and helping Google discover the pages.

Keep it clean -- a simple "Areas We Serve" heading with suburb names as links.

**Step 2: Verify build passes**

Run: `npx next build`
Expected: PASS

**Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "Add service area links to footer for suburb SEO pages"
```

---

### Task 6: Final verification

**Step 1: Full build**

Run: `npx next build`
Expected: All routes generated, no errors

**Step 2: Verify route list**

Confirm the build output shows all 15 suburb routes as static pages.

**Step 3: Spot-check content**

Run `npx next dev` and visit 2-3 suburb pages to verify:
- Unique H1 and meta title per page
- Local venue references render correctly
- Packages section shows all 3 tiers
- CTA links to `/#contact`
- Navbar and Footer render correctly
- No "espresso" in customer-facing body copy
