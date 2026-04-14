# Deployment — Cloudflare Pages + Workers

## Stack
- **Host:** Cloudflare Pages (free tier)
- **Domain:** caffeinatedhtx.com (registered on Namecheap, DNS on Cloudflare)
- **Email:** Google Workspace ($7/mo, one seat with aliases)
- **Adapter:** OpenNext (`@opennextjs/cloudflare`) — converts Next.js output to Cloudflare Workers

## How it works
Next.js doesn't run natively on Cloudflare. The OpenNext adapter builds the Next.js app, then converts the output into a Cloudflare Worker + static assets. This is handled by `opennextjs-cloudflare build` and `opennextjs-cloudflare deploy`.

## Cloudflare Pages build settings
- **Production branch:** `main`
- **Build command:** `npx opennextjs-cloudflare build`
- **Deploy command:** `npx opennextjs-cloudflare deploy`
- **Root directory:** `/`

## Key config files
- `wrangler.jsonc` — Cloudflare Worker config (name, compatibility date, flags)
- `open-next.config.ts` — OpenNext adapter config
- `package.json` — must have `@opennextjs/cloudflare` and `wrangler` in devDependencies

## Current blocker (as of April 2026)
Cloudflare's dependency cache keeps installing 370 packages (stale) instead of 665 (current). The `@opennextjs/cloudflare` package is missing at build time because the cache predates when it was added.

**Fix options:**
1. Purge Cloudflare's build cache (Settings > Builds > Purge cache)
2. Set environment variable `CLEAR_CACHE=true` for one build
3. If neither works, move `@opennextjs/cloudflare` from devDependencies to dependencies (Cloudflare may only cache production deps)

## DNS setup (done)
- Nameservers pointed from Namecheap to Cloudflare
- Google Workspace MX record: `SMTP.GOOGLE.COM` priority 1
- Google site verification TXT record added
- DKIM TXT record added (`google._domainkey`)
- Old Namecheap email forwarding MX records deleted

## After deployment works
1. Add custom domain `caffeinatedhtx.com` in Cloudflare Pages project
2. Update `siteUrl` in `src/content/site.ts` to `https://caffeinatedhtx.com`
3. Set up Google Search Console with DNS verification
4. Set up Google Business Profile
