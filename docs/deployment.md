# Deployment — Cloudflare Workers

## Stack
- **Host:** Cloudflare Workers (free tier)
- **Domain:** caffeinatedhtx.com (registered on Namecheap, DNS on Cloudflare)
- **Email:** Google Workspace ($7/mo, one seat with aliases)
- **Adapter:** OpenNext (`@opennextjs/cloudflare`) — converts Next.js output to Cloudflare Workers

## How it works
Next.js doesn't run natively on Cloudflare. The OpenNext adapter builds the Next.js app, then converts the output into a Cloudflare Worker + static assets. This is handled by `opennextjs-cloudflare build` and `opennextjs-cloudflare deploy`.

## Cloudflare build settings
- **Production branch:** `main`
- **Build command:** `rm -rf node_modules && npm ci && npx opennextjs-cloudflare build`
- **Deploy command:** `npx opennextjs-cloudflare deploy`
- **Root directory:** `/`

## Key config files
- `wrangler.jsonc` — Cloudflare Worker config (name, entry point, assets, compatibility date)
- `open-next.config.ts` — OpenNext adapter config (must use `defineCloudflareConfig`)
- `package.json` — must have `@opennextjs/cloudflare` and `wrangler` in devDependencies

## DNS setup (done)
- Nameservers pointed from Namecheap to Cloudflare
- Custom domain `caffeinatedhtx.com` added as Worker custom domain (not route)
- Google Workspace MX record: `aspmx.l.google.com` priority 1
- SPF TXT record: `v=spf1 include:_spf.google.com ~all`
- DMARC TXT record: `_dmarc` → `v=DMARC1; p=none; rua=mailto:...`
- DKIM TXT record: `google._domainkey`
- Google site verification TXT record

## Remaining setup
1. Set up Google Search Console with DNS verification
2. Set up Google Business Profile
