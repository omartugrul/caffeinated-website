# Caffeinated — Decisions & Research Log

> Living document tracking decisions, research findings, and rationale.

---

## Site Layout & Structure

**Decision: Option B — Research-optimized section order**
Chosen over bobawali-style order. Rationale: social proof earlier, objection handling (FAQ) before final CTA, packages displayed on page (bobawali skips packages entirely).

**Final section order:**
1. Hero — value prop + primary CTA
2. Social proof bar — client logos + aggregate review score
3. How It Works — 3 booking steps (functional, reduces friction)
4. Packages — 3 tiers (The Standard / The Full Spread / The VIP), middle highlighted
5. Why Caffeinated — differentiator section (emotional, builds desire, like bobawali's "The Experience")
6. About — brief, human, who we are
7. Gallery — event photos
8. Testimonials — detailed client quotes
9. FAQ — objection handling, also serves SEO
10. Contact form — embedded, multi-step
11. Footer

**Package names:**
- The Standard (was "The Essentials") — 2 hrs, up to 75 cups
- The Full Spread (was "The Full Service") — 3 hrs, up to 150 cups, custom menu + branded cups
- The VIP (was "The Experience") — 4 hrs, unlimited cups, setup styling + social content

**Pricing: TBD — will use "Starting at $X" anchors once finalized (research shows hiding pricing causes drop-off)**

**Key conversion research applied:**
- Social proof immediately after hero (highest-impact placement)
- Single CTA focus throughout ("Get a Quote")
- FAQ before contact form handles objections right before conversion point
- "Starting at" pricing on packages, not full price breakdown
- Sticky mobile CTA bar for 8-15% conversion lift
- Multi-step form (20-300% lift over single long forms)

---

## Form & Lead Capture

**Decision: Tally.so (pending — see downsides below)**

### Why Tally was initially recommended:
- Multi-step form support
- Free auto-responder emails (CORRECTION: auto-responder requires Pro at $29/mo)
- Webhook + Zapier support
- Unlimited submissions on free tier

### Tally downsides discovered:
- **Embed is iframe-based**, NOT native DOM. It will look like an embedded widget, not a native part of the site. This contradicts the "extremely seamless" requirement.
- **"Made with Tally" branding on free tier** — requires Pro ($29/mo) to remove
- **Auto-responder emails require Pro** ($29/mo), not free as initially reported
- **Emails send from @tally.so domain** — can't use custom domain, risk of spam folder
- **No custom CSS** — can't match site fonts/styling exactly
- **No funnel analytics** — can't see where people drop off in the form
- **SPA/Next.js issues** — needs workarounds for client-side navigation, dynamic height glitches

### Alternative to consider: Headless approach
Build the multi-step form UI ourselves in React (full design control, truly seamless) and use a lightweight backend service to receive submissions:
- **Formspree** ($10/mo) or **Resend** (email API, 3,000 emails/mo free) for sending
- **React Hook Form** for form state management
- Full control over styling, animations, UX
- Webhooks to trigger workflows in Zapier/Make → Google Sheets, Attio, etc.

### Alternative: Fillout
- Has a React component (`@fillout/react`)
- Custom CSS supported
- Auto-responder on free tier
- 1,000 submissions/mo free
- Better embedding than Tally but still not fully native

**DECISION: Build custom multi-step form (React Hook Form) + Next.js API route + Attio API + Resend**

Rationale:
- $0 cost — Attio free tier has API access, Resend has 3,000 emails/mo free
- 100% seamless — we control every pixel, matches site design perfectly
- Submissions go directly into Attio CRM pipeline (no Zapier middleman needed)
- Auto-responder sends from Caffeinated's own domain via Resend (not @tally.so)
- No third-party form branding
- Architecture: React Hook Form → POST to /api/submit-quote → Attio API (create contact + pipeline entry) + Resend (auto-response email)
- This is the proper GTM stack, not a band-aid

NOTE: This means the site needs a serverless backend (Next.js API routes), not a pure static export. Vercel free tier handles this fine.

---

## Post-Submission Workflow

**Research findings — speed to lead is the #1 lever:**
- Leads contacted within 5 minutes are 21x more likely to convert (MIT/InsideSales study)
- 78% of buyers go with whoever responds first (Lead Connect)
- Average competitor response time is 42 hours — being fast is a massive differentiator

**Planned workflow:**

| Timing | Action | Channel | Tool |
|--------|--------|---------|------|
| Instant | Auto-response email (warm, personalized, next steps + timeline + 1 event photo + testimonial) | Email | Form service or Resend |
| Instant | Internal notification | Slack/Email | Zapier webhook |
| 1–4 hours | Personal follow-up referencing their event details | Phone/Email | Manual |
| Day 2 | Relevant case study or gallery link | Email | Drip sequence |
| Day 4 | "Any questions?" + calendar link | Email/SMS | Drip sequence |
| Day 7 | New testimonial or event photos | Email | Drip sequence |
| Day 14 | Gentle urgency ("booking up for [month]") | Email | Drip sequence |
| Day 30+ | Move to monthly nurture | Email | Drip sequence |

**Auto-response email should contain:**
- Warm confirmation with their name + event type
- Clear next steps + response timeline ("within 2 hours")
- One event photo
- 1-2 short testimonials
- Soft CTA to Instagram/gallery
- Direct contact info for who will follow up
- Do NOT include full pricing — use "starting at" anchor only

**Do NOT:**
- Send generic "thank you for your submission" emails
- Ask them to repeat info they already provided
- Overwhelm with pricing grids or contracts in first touch
- Wait more than 1 hour for human follow-up

---

## Hero Section

**Decision: Full-bleed image hero (Option A, like bobawali)**
- Full-width background photo of espresso cart at an event
- Dark gradient overlay for text readability
- White text overlay with headline + subheadline + CTA
- Immersive, lifestyle-forward — shows the outcome, not just the product
- Research: real/outcome photos outperform plain backgrounds by 10-35%

---

## Social Proof Section

**Decision: Reuse bobawali client logos**
- Framing: "Trusted by" — these brands hired Boba Wali (same team/operation), so Caffeinated is trusted by them
- Infinite scrolling logo carousel (same pattern as bobawali)
- 12 logos: Google, Kendra Scott, Urban Skillet, The Halal Social, 24 Hour Pickle, UH PSA, UH MSA, Cars N Chai, Plus1, Live Hydration Spa, Texas Halal Fest, Q's Deli
- Source logo files from bobawali repo (/public/clients/)

---

## Imagery Strategy

**Decision: Use bobawali event photos + Gemini/Nanobanana to adapt for Caffeinated**
- Source lifestyle/event photos from bobawali shoots
- Use AI image generation to adapt them for coffee/espresso context
- Replace with real photography as events are booked
- Image style: warm natural lighting, lifestyle-oriented, diverse, contextual (office lobbies, outdoor events, weddings)

---

## Conversion Research Key Takeaways

### Highest-impact changes (ranked):
1. Headline clarity — 20-100%+ lift
2. Reducing form fields — 25-50% lift
3. Social proof near CTAs — 10-30% lift
4. Page speed — 7-20% lift per second saved
5. CTA copy (benefit-oriented) — 10-25% lift
6. Single CTA focus — 10-30% lift
7. Mobile sticky CTA — 8-15% lift
8. Real photos over stock — 10-35% lift

### Form best practices:
- 3 fields max for initial capture, or multi-step
- Multi-step forms outperform single forms by 20-300%
- Optimal multi-step flow: Event type → Guest count + date → Name + email
- Headline on form should reinforce value: "Get Your Free Custom Quote"
- Add micro-commitment: "Takes less than 30 seconds"
- Trust signal near form: "We respond within 2 hours"

### Copy best practices:
- 80% "you/your", 20% "we/our"
- Sensory language for food/beverage
- Specificity over superlatives
- Address hidden objection: embarrassment ("What if I chose wrong?")
- Honest urgency: "We book 2-3 months out for peak season"

### Mobile:
- 48x48px minimum tap targets, 56-64px for CTAs
- Sticky bottom CTA bar
- Under 3 seconds load time
- 16px minimum body text
- Click-to-call button

---

## Analytics & SEO Monitoring

**Decision: PostHog + Google Search Console**

### Analytics: PostHog
- Product analytics, funnel tracking, session recordings
- Free tier: 1M events/month (more than enough for launch)
- Track: page scroll depth, CTA clicks, form starts vs completions, section engagement
- Replaces Google Analytics 4 -- no need for both
- Client-side JS snippet, works with any hosting setup (static or serverless)

### SEO Monitoring: Google Search Console
- Free, non-negotiable, nothing replaces it
- Shows actual search queries, impressions, click-through rates, and keyword positions
- Indexing status, crawl errors, Core Web Vitals
- Setup: DNS TXT record or meta tag verification
- Paid tools (Ahrefs, Semrush at $99+/mo) are overkill until consistent traffic

---

## Hosting & Deployment

**Decision: OPEN -- evaluating options**

The entire site is statically generated (`output: 'export'`). The only server-side requirement is the form submission backend (API route -> Attio + Resend). Three options under consideration:

### Option A: Cloudflare Pages + Cloudflare Functions
- **Cost:** Free (unlimited bandwidth, unlimited requests, 500 builds/month)
- **Form backend:** Cloudflare Pages Functions (serverless, lives in `/functions` directory)
- **Pros:** Fastest global CDN, unlimited bandwidth, $0, DNS + hosting in one place
- **Cons:** Form backend uses Cloudflare's runtime (not Next.js API routes), slight learning curve
- **Architecture:** Static export + Cloudflare function for form handler

### Option B: Cloudflare Pages + External Form Service
- **Cost:** Free (Cloudflare) + form service cost (Formspree $10/mo or Resend free tier)
- **Form backend:** Client-side POST to external API (Formspree, Resend, etc.)
- **Pros:** Simplest, fully static, no serverless code to maintain
- **Cons:** Third-party dependency for forms, may limit Attio integration flexibility

### Option C: Netlify
- **Cost:** Free tier (100GB bandwidth/month, 300 build minutes, serverless functions included)
- **Form backend:** Netlify Functions (serverless, same repo) or Netlify Forms (built-in, simpler)
- **Pros:** Best Next.js support out of the box, serverless functions included on free tier, simplest setup
- **Cons:** 100GB bandwidth cap (vs Cloudflare unlimited), 300 build minute cap

**Leaning toward:** Netlify for simplicity (serverless functions on free tier solve the form backend without extra config) or Cloudflare for unlimited bandwidth. Decision depends on whether simplicity or cost ceiling matters more.

**NOTE:** Previous decision to use Next.js API routes (see Form & Lead Capture section) assumed Vercel. If deploying to Cloudflare static, the form handler needs to be a Cloudflare Function instead. If deploying to Netlify, Next.js API routes work as-is via Netlify Functions adapter.

---

## Bobawali Reference Analysis

**Section order:** Hero → Logo carousel → Menu showcase → The Experience (differentiator) → Testimonials → Press → Booking CTA → Footer

**What works well (steal for Caffeinated):**
- Social proof (logo carousel) right after hero
- "The Experience" section as differentiator — Caffeinated needs equivalent
- Single conversion goal throughout (booking form)
- Warm color palette, lifestyle photography
- Auto-advancing carousels for drinks/reviews
- Press/media section for credibility
- Dual contact paths (form + Instagram DM)

**What Caffeinated should do differently:**
- Show packages/pricing on page (bobawali doesn't)
- Add FAQ section for SEO + objection handling
- Embed form on page instead of linking to Google Form
- Add sticky mobile CTA
- Multi-step form instead of external link
