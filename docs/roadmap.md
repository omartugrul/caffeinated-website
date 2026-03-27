# Caffeinated — Roadmap

> Future work items, integrations, and setup tasks. Check items off as completed.

---

## Phase 1: Website Launch

- [ ] Finalize section layout and content (Option B structure)
- [x] Build multi-step contact/quote form (embedded, seamless)
- [x] Decide on form service: headless (React Hook Form + Formspree/Resend) vs Fillout vs Tally Pro
  - Chose React Hook Form. Form submission backend (Attio + Resend) still TODO in Phase 2.
- [ ] Source bobawali photos and adapt via Gemini/Nanobanana for coffee context
- [ ] Write final copy for all sections
- [ ] Finalize package pricing and descriptions
- [ ] Mobile-first responsive polish
- [ ] Add sticky mobile CTA bar
- [x] SEO setup: JSON-LD LocalBusiness schema, meta tags, sitemap, robots.txt
- [ ] Google Business Profile setup
- [ ] Fix favicon — gradient doesn't match header logo exactly. Needs to be regenerated with correct gradient rendering
- [ ] Buy the domain
- [ ] Set up Google Workspace for email
- [ ] Deploy (Vercel or static export)

---

## Phase 2: Post-Submission Workflows

- [ ] Set up auto-response email (instant, personalized, with social proof)
- [ ] Set up internal notification (Slack/email) on form submission
- [ ] Build 7-touch follow-up email sequence (Days 1–30)
- [ ] Set up drip email tool (Mailchimp / Loops / Resend)
- [ ] Create separate nurture tracks: corporate vs wedding
- [ ] Set up date-based reminders (60 and 30 days before their event date)

---

## Phase 3: Analytics & Tracking

- [ ] **PostHog setup** — product analytics, funnel tracking, session recordings
  - Track: page scroll depth, CTA clicks, form starts vs completions, section engagement
  - Goal: understand where visitors drop off and optimize conversion
  - PostHog has a generous free tier (1M events/mo)
- [ ] Set up UTM parameter tracking for inbound sources
- [ ] Google Analytics 4 as baseline (or PostHog as replacement)
- [ ] Form funnel analytics (where do people abandon the multi-step form?)

---

## Phase 4: CRM & Sales Tools

- [ ] **Attio setup** — CRM and pipeline management
  - Pipeline: Lead → Contacted → Quote Sent → Booked → Completed → Repeat
  - Free tier available, ~$29/user/mo for Plus
  - Track relationships, deal stages, follow-ups, repeat customers
  - Wire form submissions → Attio via Zapier/webhook

- [ ] **Clay setup** — lead enrichment and outbound automation
  - ~$149/mo for Starter
  - Build prospect lists, enrich contacts, trigger outreach sequences
  - Add when consistent deal flow justifies the spend

- [ ] **LinkedIn Sales Navigator** — find and warm up decision makers (~$99/mo)
  - Add when outbound is a priority

**Recommended adoption order:** Attio free tier first → Clay when booking consistently → Sales Navigator when pipeline is large

---

## Phase 5: Content Flywheel

- [ ] Event recap blog posts (SEO + social proof)
- [ ] Houston neighborhood/suburb landing pages (The Woodlands, Katy, Sugar Land, etc.)
- [ ] FAQ content targeting "People Also Ask" queries
- [ ] Replace AI-generated imagery with real event photography
- [ ] Social media content from events → website gallery

---

## Phase 6: Optimization

- [ ] A/B test hero headline
- [ ] A/B test CTA copy ("Get a Quote" vs "Check Availability" vs "Book a Barista")
- [ ] Optimize form fields based on PostHog funnel data
- [ ] Retargeting ads ($5-10/day on Facebook/Instagram to warm leads)
- [ ] Page speed optimization (WebP images, lazy loading)

---

## Open Questions

- [ ] Finalize package pricing
- [ ] Finalize service offerings (just coffee, or coffee + boba + other?)
- [ ] Booking/quote flow: embedded form vs scheduling tool (Cal.com complement?)
- [ ] Insurance and permitting requirements for Houston
- [ ] Partner arrangement details (boba cart sharing logistics)
- [ ] Real photography timeline
