# Caffeinated — Roadmap

Each stage unlocks the next. Don't skip ahead — optimizing a funnel you don't have yet is wasted energy.

---

## Stage 1: Finish the Site
*The product people land on needs to be ready before you drive traffic to it.*

- [ ] Decide menu: hot drinks? alt milks? cold brew only? — blocks copy and image generation
- [ ] Generate images from Boba Wali photos (Gemini/Nanobanana) — site looks placeholder without these
- [ ] Mobile-first responsive polish — most office managers search on their phone
- [ ] Nail down package language (names, descriptions, what's included)
- [ ] Research insurance and permitting requirements for Houston

**Already done:**
- [x] Site structure, sections, and content (Option B)
- [x] Multi-step quote form (Formspree)
- [x] Package pricing ($499 / $899 / $1,499)
- [x] SEO technical setup (JSON-LD, meta tags, sitemap, robots.txt)
- [x] Domain (caffeinatedhtx.com) + deployment (Cloudflare)
- [x] Domain email (hello@caffeinatedhtx.com via Google Workspace)
- [x] Favicon, a11y fixes, code review

---

## Stage 2: Get Found
*Make the site discoverable. You can't diagnose or improve what you can't measure.*

- [ ] **Google Business Profile** — free, ~15 min, required for local search ("coffee catering Houston near me"). Highest leverage item in this stage.
- [ ] **Google Search Console** — DNS verification via Cloudflare. Shows indexing status, which queries you rank for, crawl errors. Do this before worrying about SEO.
- [ ] **PostHog setup** — free tier, 1M events/mo. Funnel tracking, session recordings, geo data (validates state-level traffic). Do this before driving traffic so you have a baseline.

### Needs Audit (built but quality unknown)
- [ ] **Houston suburb landing pages** — 15 areas built, but are they actually indexed? Do they rank? Are they thin content or genuinely useful pages?
- [ ] **llms.txt** — built for AI visibility (ChatGPT, Claude, Perplexity). Is the content accurate and complete given current packages/menu?
- [ ] **robots.txt AI crawler access** — built to allow GPTBot, ClaudeBot, etc. Verify it's not accidentally blocking anything it shouldn't.

---

## Stage 3: Drive Traffic
*Go get customers. Outbound before paid — validate the pitch with real conversations first.*

- [ ] **Cold email** — build Houston prospect list (office managers, EAs, event coordinators), write templates, send from hello@caffeinatedhtx.com
- [ ] **Instagram page** — minimum presence so cold email recipients can verify you're real. Don't need to post consistently yet.
- [ ] **Meta/Instagram ads** — cold acquisition, $10-20/day to start. Run only after cold email validates the offer and the site is polished.

---

## Stage 4: Convert Leads to Bookings
*Only relevant once leads are actually coming in. Don't build this before Stage 3.*

- [ ] Attio free tier — CRM + pipeline (Lead → Contacted → Quote Sent → Booked → Completed → Repeat)
- [ ] Resend free tier — transactional email from domain
- [ ] Auto-response email to lead (instant confirmation with next steps)
- [ ] Internal notification on form submission (email to yourself)
- [ ] Partner arrangement details finalized (boba cart sharing logistics)

---

## Stage 5: Optimize the Funnel
*Only worth doing once leads are coming in consistently and you have data.*

- [ ] 7-touch follow-up email sequence (Days 1-30)
- [ ] Separate nurture tracks: corporate vs wedding
- [ ] Date-based reminders (60 and 30 days out)
- [ ] UTM parameter tracking for inbound source attribution
- [ ] A/B test hero headline and CTA copy (use PostHog data)
- [ ] Optimize form fields based on PostHog funnel drop-off
- [ ] Retargeting ads ($5-10/day) — only after cold acquisition is working

---

## Stage 6: Scale
*Automate what's working once deal flow justifies the cost.*

- [ ] Clay ($149/mo) — lead enrichment and outbound automation
- [ ] LinkedIn Sales Navigator ($99/mo) — find Houston decision makers by company size/role
- [ ] Event recap blog posts (SEO + social proof)
- [ ] FAQ content targeting "People Also Ask" queries
- [ ] Social media content flywheel from events
- [ ] Page speed optimization (WebP images, lazy loading)

---

## SEO & AEO Maintenance

Ongoing tasks to keep search and AI visibility current.

### When things change
- **Pricing, services, or packages change**: Update `content/packages.ts` AND `public/llms.txt`
- **New suburb page**: Add to `content/suburbs.ts` (sitemap and footer auto-update)
- **FAQ items added/edited**: Edit `content/faq.ts` (UI + JSON-LD auto-update). Manually update the FAQ section in `public/llms.txt` too.
- **Real testimonials received**: Add to the site. Currently no testimonials are live (no fakes allowed).
- **Social media handles change**: Update `sameAs` in JSON-LD (`layout.tsx`), footer links, and `public/llms.txt`

### Monthly checks
- Search "best coffee catering Houston" in ChatGPT, Claude, and Perplexity. See if Caffeinated shows up.
- Review Google Search Console for keyword opportunities (queries where you're position 5-15 that could be pushed to page 1)
- Check that `llms.txt` and robots.txt are still live and accurate
