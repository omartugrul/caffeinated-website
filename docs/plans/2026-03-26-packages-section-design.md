# Packages Section Redesign

## Decisions

- **Layout:** 3 columns, middle card elevated (scale 1.05) with stronger shadow
- **Color treatment:** Option B — all cards white/light, middle card distinguished by amber border + amber "Most Popular" badge + amber CTA button
- **Pricing:** "Starting at" anchors — $499 / $899 / $1,499
- **Descriptions:** Audience-targeted (who it's for, not what it is)
- **CTA:** "Get a Quote" on all three cards (single CTA focus)
- **Section header:** "Simple, Transparent Pricing" with subtext "No hidden fees. Custom packages available for recurring bookings."

## Card Details

### The Standard — Starting at $499
- "Perfect for team lunches and small office events."
- Professional barista + full espresso setup
- 2 hours of service
- Up to 75 drinks
- Classic drink menu
- All supplies included
- Setup & teardown handled

### The Full Spread — Starting at $899 (highlighted)
- "Built for corporate events and celebrations."
- Everything in The Standard
- 3 hours of service
- Up to 150 drinks
- Custom drink menu for your event
- Branded cups with your logo
- Travel anywhere in Houston metro

### The VIP — Starting at $1,499
- "For weddings, galas, and premium occasions."
- Everything in The Full Spread
- 4 hours of service
- Unlimited drinks
- Styled cart setup to match your event
- Social media content from the event
- Dedicated event coordinator

## Visual Spec

- Outer cards: white bg, subtle border (#2D1B14 at 8%), light shadow
- Middle card: white bg, 2px amber (#C8773A) border, amber warm shadow, scaled up 1.05
- Badge: amber bg, white text, pill shape, positioned top-right
- Checkmarks: amber (#C8773A) on all cards
- CTA buttons: outer cards use espresso (#382313), middle card uses amber (#C8773A)
- Price display: large bold price + "starting" suffix in smaller muted text

## Implementation

- Extract package data to `src/content/packages.ts`
- Update `src/components/sections/Packages.tsx` with new design
- Mobile: stack to single column, remove scale effect, keep amber accents on highlighted card
