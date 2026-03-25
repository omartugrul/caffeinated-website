# Caffeinated -- Business Concept & Build Guide

> This document is the source of truth for building the Caffeinated website and GTM infrastructure.
> It will be referenced by Claude Code during development.

---

## 1. Overview

**Name:** Caffeinated
**Location:** Houston, TX metro area
**Business:** Mobile espresso cart for corporate events, weddings, and private functions
**Website type:** Single-page marketing/landing site (no backend, static export)

Caffeinated is a mobile espresso bar that books corporate events, weddings, and private functions in the Houston area. The business is run like a tech startup: automated outbound prospecting, SEO-optimized inbound, CRM pipeline management, and a polished digital presence that does the selling.

The physical setup is an espresso machine on an existing boba cart (shared with a business partner). The competitive advantage isn't the coffee -- it's the go-to-market. Every other coffee cart in Houston relies on Instagram and word of mouth. Caffeinated runs a real sales engine.

---

## 2. Positioning

**Tier:** Approachable premium
**Not** the cheapest option. **Not** trying to be the most artisan. Caffeinated is the professional, easy-to-book mobile espresso bar that makes the person who hired you look great.

**Customer-facing differentiator:** Frictionless end-to-end experience. From finding us on Google to getting a quote to the day-of execution, every touchpoint is polished and effortless.

- The website does the selling
- The booking flow closes the deal
- The barista earns the repeat business

**Internal engine (not customer-facing):** Tech-startup GTM. Automated outbound, SEO-optimized content, CRM pipeline tracking. This is how we outpace competitors who rely on word of mouth.

**Brand feeling:** Bold, warm, clean, minimal. Confident but not cold. Professional but not corporate. Think a well-funded DTC brand that happens to serve espresso. Reference: Blank Street Coffee's brand energy.

---

## 3. Target Customers

### Primary: Corporate (80% of revenue goal)

**Office pop-ups** -- "Treat your team" days. An EA or office manager books for a morning or afternoon. 50-200 cups. This is the bread and butter with high repeat potential.

**Corporate events** -- Holiday parties, product launches, all-hands meetings, client appreciation events. Higher ticket, booked further in advance.

**Recurring contracts** -- The ultimate goal. "Every Friday" or "first Monday of the month" standing bookings. Predictable revenue.

**Who is the buyer?** Office managers, executive assistants, HR/People Ops, event coordinators. These people have 50 other things on their plate. They want someone who makes their life easier and won't embarrass them in front of leadership.

### Secondary: Weddings & Private Events (20%)

Cocktail hour coffee bar, dessert station pairing, morning-after brunch service. Higher per-event revenue but longer sales cycle and more coordination. Worth having on the site but not where outbound energy goes.

### Tertiary (opportunistic, good for SEO content)

Real estate open houses, pop-up markets, brand activations, fundraisers.

---

## 4. Services & Packages

> NOTE: Package structure is a draft. Will be refined based on market feedback and early bookings.

### The Essentials
- Barista + espresso cart + standard menu
- 2 hours of service
- Up to 75 cups
- Setup and teardown included
- All supplies included
- Travel within Houston metro

### The Full Service
- Everything in Essentials
- Custom drink menu
- Branded cups
- 3 hours of service
- Up to 150 cups

### The Experience
- Everything in Full Service
- Setup styling
- Social media content from the event
- 4 hours of service
- Unlimited cups

All packages include setup/teardown, all supplies, and travel within the Houston metro area. Custom packages available for recurring bookings and large events.

---

## 5. Website Structure

### Tech Stack

- **Next.js** (App Router) -- React framework
- **React** -- UI
- **TypeScript** -- type safety
- **Tailwind CSS** -- styling
- **Framer Motion** -- animations

### Architecture

- Single-page landing site, all sections on one page
- Anchor navigation with smooth scroll to section IDs
- Content data separated into `/content/*.ts` files (not inline)
- Components split into general + `sections/` subfolder with barrel exports
- Mobile-first responsive design
- SEO via metadata + JSON-LD (LocalBusiness schema) in the root layout
- No backend -- external form (Google Forms) for submissions
- Custom fonts loaded in the layout

### Page Sections (in order)

1. **Hero** -- Clear value prop, one strong CTA ("Get a Quote" or "Book Now"), background imagery of the cart in action
2. **How It Works** -- 3 simple steps (Choose your package, pick your date, we handle the rest)
3. **Services/Packages** -- The three tiers with clear pricing or "starting at" indicators
4. **About** -- Brief story, the team, what makes Caffeinated different
5. **Gallery** -- Photos from events (AI-generated to start, replaced with real photos over time)
6. **Testimonials** -- Social proof from corporate clients (placeholder initially)
7. **FAQ** -- Common questions, also serves as SEO content
8. **Contact/Quote Form** -- Simple form, connects to Google Forms or similar
9. **Footer** -- Service area, social links, legal

### Imagery

AI-generated imagery to start (Nanobanana or similar tools). Warm tones, lifestyle feel. Show the cart in context: office lobbies, outdoor corporate events, wedding venues. People interacting with the cart, not just latte art closeups. Replace with real photography as events are booked.

---

## 6. SEO Strategy

### Target Keywords

**Primary (high intent, ready to book):**
- "coffee catering Houston"
- "mobile coffee cart Houston"
- "espresso bar for events Houston"
- "corporate coffee catering Houston"
- "coffee cart for office Houston"
- "wedding coffee bar Houston"

**Long-tail (lower volume, very high intent):**
- "book a barista for corporate event Houston"
- "mobile espresso cart for wedding Houston TX"
- "office coffee catering near me"
- "coffee truck for company party Houston"

### Content Strategy

Each event type gets its own optimized content so we can rank for each vertical independently. Blog/content flywheel: post recaps from events we cater ("We served 200 cups at [type of event] in [Houston neighborhood]"). These build topical authority and create internal linking.

FAQ content targeting "People Also Ask" queries:
- "How much does coffee catering cost in Houston?"
- "How do you hire a coffee cart for an office event?"
- "What's included in mobile coffee catering?"

### Technical SEO

- JSON-LD structured data (LocalBusiness schema)
- Meta titles and descriptions optimized per section
- Fast page load (Next.js static export)
- Google Business Profile, fully built out
- Mobile-first (most office managers search on their phone)
- Semantic HTML, proper heading hierarchy
- Image alt text on all imagery
- Sitemap and robots.txt

---

## 7. GTM & Sales Infrastructure

### Inbound (SEO + Website)

The website is the 24/7 salesperson. Someone googles "coffee catering Houston," lands on Caffeinated, and the site does the work: credibility, social proof, clear packages, instant quote request.

### Outbound (the startup playbook)

This is the competitive moat. While every other coffee cart waits for DMs, Caffeinated runs automated outbound to office managers, event planners, and HR teams.

### Content Flywheel

Every event becomes content:
- Photos from the setup
- Quick testimonials
- "We just served 200 cups at [Company X]'s holiday party" posts

This feeds SEO (blog content), social proof (website gallery), and outbound (proof of concept in cold emails).

---

## 8. Tech Stack Options & Costs

> Current tools: Claude (already paying). Everything else is net-new spend.

### Option A: Full Stack (Clay + Attio + LinkedIn Sales Navigator)

**Clay** (~$149/mo for Starter)
- Role: Lead enrichment and workflow automation
- Build prospect lists from LinkedIn, enrich contacts with email/phone, trigger outreach sequences
- The research and assembly layer

**Attio** (Free tier available, ~$29/user/mo for Plus)
- Role: CRM and pipeline management
- Track relationships, deal stages, follow-ups, bookings, repeat customers
- Pipeline: Lead > Contacted > Quote Sent > Booked > Completed > Repeat

**LinkedIn Sales Navigator** (~$99/mo for Core)
- Role: Find and warm up decision makers
- Search Houston companies by size, industry, role
- Genuine engagement + soft pitch, not spammy DMs

**Estimated monthly cost:** ~$277-350/mo
**Best for:** When you have consistent deal flow and want full automation
**Tradeoff:** Highest cost, most powerful, most complex to set up

### Option B: Clay Only (Lean Start)

**Clay** (~$149/mo for Starter)
- Handles enrichment, outreach sequences, and lightweight contact management
- Can serve as a basic CRM until deal flow justifies a dedicated one

**Estimated monthly cost:** ~$149/mo
**Best for:** Getting outbound running fast without overcomplicating things
**Tradeoff:** No dedicated CRM, will outgrow it eventually

### Option C: Attio Only (CRM-First)

**Attio** (Free tier to start, ~$29/user/mo for Plus)
- Manual prospecting via LinkedIn (free or Sales Navigator)
- Add leads to Attio, track pipeline, manage follow-ups
- Some built-in enrichment features

**Estimated monthly cost:** $0-29/mo
**Best for:** Lowest cost entry, works well with manual hustle
**Tradeoff:** No automated lead generation, more manual work

### Option D: Claude + Manual Hustle (Zero Additional Cost)

Use Claude to:
- Research Houston companies and identify target contacts
- Write personalized outreach emails
- Draft content for the website and social media
- Track leads in a simple spreadsheet

**Estimated monthly cost:** $0 additional
**Best for:** Validating the business before investing in tools
**Tradeoff:** Entirely manual, doesn't scale, but gets you started

### Recommended Path

Start with **Option D** (Claude + manual) or **Option C** (Attio free tier) to validate demand and get first bookings. Once you're booking consistently, upgrade to **Option B** (Clay) to automate outbound. Add Attio and Sales Navigator (**Option A**) when pipeline is large enough to justify the spend.

---

## 9. Key Metrics to Track

- Website visitors (organic vs direct vs referral)
- Quote requests per month
- Quote-to-booking conversion rate
- Average booking value
- Repeat booking rate
- Cost per acquisition (once paid tools are added)
- Keyword rankings for target terms

---

## 10. Open Questions

- [ ] Finalize package pricing
- [ ] Finalize service offerings (just coffee, or coffee + boba + other?)
- [ ] Decide on booking/quote flow (Google Forms vs embedded form vs Calendly-style)
- [ ] Branding (waiting on outputs from Stitch/Paper.design/Replit explorations)
- [ ] Real photography timeline (when do we replace AI imagery?)
- [ ] Insurance and permitting requirements for Houston
- [ ] Partner arrangement details (boba cart sharing logistics)
