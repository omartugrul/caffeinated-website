# Caffeinated — Roadmap

> Goal: get a booking in April 2026. Everything below MVP line can wait.

---

## MVP — Ship & Start Selling

Everything needed to have a live site that accepts leads and an outbound motion to fill the pipeline.

### Website

- [x] Finalize section layout and content (Option B structure)
- [x] Build multi-step contact/quote form (embedded, seamless)
- [x] Decide on form service: headless (React Hook Form + Resend) vs Fillout vs Tally Pro
- [x] Finalize package pricing and descriptions ($499 / $899 / $1,499)
- [x] SEO setup: JSON-LD LocalBusiness schema, meta tags, sitemap, robots.txt
- [x] Code review and accessibility fixes (a11y, form validation, image sizes)
- [x] Fix favicon
- [ ] Mobile-first responsive polish
- [ ] Buy domain
- [ ] Deploy (Vercel or Netlify — needs serverless for API route)

### Form Backend

- [ ] Set up Attio free tier (CRM + pipeline)
- [ ] Set up Resend free tier (transactional email from your domain)
- [ ] Wire form submission API route (form → Attio contact + Resend confirmation email to you)
- [ ] Add internal notification on form submission (Resend email to yourself)

### Outreach

- [ ] Set up Google Business Profile (free, ~15 min, shows up in local search)
- [ ] Set up Google Workspace for email (need a real domain email for cold outreach)
- [ ] Cold email infrastructure (research tooling, build prospect lists, write templates)
- [ ] Instagram page (minimum social presence to link from site and cold emails)

### Imagery

- [ ] Source bobawali photos and adapt via Gemini/Nanobanana for coffee context
- [ ] Replace drink menu placeholder images with real photos

### Copy

- [ ] Nail down package language (names, descriptions, what's included)

### Open Questions (answer before or during MVP)

- [ ] Finalize service offerings (just cold brew, or cold brew + boba + other?)
- [ ] Insurance and permitting requirements for Houston
- [ ] Partner arrangement details (boba cart sharing logistics)

---

## Post-MVP — Grow & Optimize

Only worth doing once the site is live and leads are coming in.

### Post-Submission Workflows

- [ ] Auto-response email to the lead (instant, personalized, with social proof)
- [ ] 7-touch follow-up email sequence (Days 1-30)
- [ ] Set up drip email tool (Loops or Resend)
- [ ] Separate nurture tracks: corporate vs wedding
- [ ] Date-based reminders (60 and 30 days before event date)

### Analytics & Tracking

- [ ] PostHog setup (funnel tracking, session recordings, free tier 1M events/mo)
- [ ] Google Search Console setup (SEO monitoring, requires DNS verification)
- [ ] UTM parameter tracking for inbound sources
- [ ] Form funnel analytics

### Sales Tools (add when deal flow justifies cost)

- [ ] Clay ($149/mo) — lead enrichment and outbound automation
- [ ] LinkedIn Sales Navigator ($99/mo) — find decision makers

### Content Flywheel

- [ ] Event recap blog posts (SEO + social proof)
- [x] Houston suburb landing pages (15 areas: Woodlands, Katy, Sugar Land, etc.)
- [x] llms.txt for AI recommendation (ChatGPT, Claude, Perplexity)
- [x] robots.txt AI crawler access (GPTBot, ClaudeBot, PerplexityBot, etc.)
- [ ] FAQ content targeting "People Also Ask" queries
- [ ] Social media content from events → website gallery

### Optimization

- [ ] A/B test hero headline and CTA copy
- [ ] Optimize form fields based on PostHog funnel data
- [ ] Retargeting ads ($5-10/day on Facebook/Instagram)
- [ ] Page speed optimization (WebP images, lazy loading)

---

## SEO & AEO Maintenance

Ongoing tasks to keep search and AI visibility current.

### When things change
- **Pricing, services, or packages change**: Update `content/packages.ts` AND `public/llms.txt`
- **New suburb page**: Add to `content/suburbs.ts` (sitemap and footer auto-update)
- **FAQ items added/edited**: Edit `content/faq.ts` (UI + JSON-LD auto-update). Manually update the FAQ section in `public/llms.txt` too.
- **Domain purchased**: Update `siteUrl` in `content/site.ts`. Set up Google Search Console and Google Business Profile immediately.
- **Real testimonials received**: Add to the site. Currently no testimonials are live (no fakes allowed).
- **Social media handles change**: Update `sameAs` in JSON-LD (`layout.tsx`), footer links, and `public/llms.txt`

### Monthly checks
- Search "best coffee catering Houston" in ChatGPT, Claude, and Perplexity. See if Caffeinated shows up.
- Review Google Search Console for keyword opportunities (queries where you're position 5-15 that could be pushed to page 1)
- Check that `llms.txt` and robots.txt are still live and accurate
