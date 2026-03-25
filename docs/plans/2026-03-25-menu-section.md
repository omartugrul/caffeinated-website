# Menu Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a horizontally-scrollable drink menu section between HowItWorks and Packages to build desire before the pricing ask.

**Architecture:** Content data in `src/content/menu.ts`, component in `src/components/sections/Menu.tsx`. Horizontal scroll carousel showing 3 drinks at a time on desktop with arrow navigation, single card on mobile with swipe. Placeholder images until real photos are ready.

**Tech Stack:** React 19, Framer Motion 12, Tailwind CSS 4

---

### Task 1: Create menu content data

**Files:**
- Create: `src/content/menu.ts`

**Step 1: Create the content file**

```ts
export interface DrinkItem {
  name: string;
  subtitle: string;
  ingredients: string[];
  image: string;
}

export const drinks: DrinkItem[] = [
  {
    name: "Caf-feign-ated",
    subtitle: "Iced Chai",
    ingredients: ["Spiced chai concentrate", "Oat milk", "Vanilla", "Cinnamon dusting"],
    image: "/photos/drinks/iced-chai.jpg",
  },
  {
    name: "The Grind",
    subtitle: "Cold Brew",
    ingredients: ["24-hour steeped cold brew", "Brown sugar syrup", "Splash of cream"],
    image: "/photos/drinks/cold-brew.jpg",
  },
  {
    name: "Velvet Shot",
    subtitle: "Latte",
    ingredients: ["Double espresso", "Steamed oat milk", "Vanilla bean", "Latte art"],
    image: "/photos/drinks/latte.jpg",
  },
  {
    name: "Main Character",
    subtitle: "Matcha",
    ingredients: ["Ceremonial grade matcha", "Oat milk", "Honey", "Ice"],
    image: "/photos/drinks/matcha.jpg",
  },
  {
    name: "Plot Twist",
    subtitle: "Refresher",
    ingredients: ["Passion fruit", "Mango", "Green tea base", "Fresh mint"],
    image: "/photos/drinks/refresher.jpg",
  },
];
```

**Step 2: Commit**

```bash
git add src/content/menu.ts
git commit -m "add menu content data with drink items"
```

---

### Task 2: Create Menu section component

**Files:**
- Create: `src/components/sections/Menu.tsx`

Build a `'use client'` component with:
- Section heading matching existing pattern (h2 + subtitle)
- Horizontal scroll container with `overflow-x-auto` and `snap-x snap-mandatory`
- Each drink card: placeholder image area (colored div with drink emoji), drink name, subtitle, comma-separated ingredients
- Left/right arrow buttons (hidden when at scroll bounds)
- Cards use `snap-center` and are `min-w-[280px]` on mobile, 3 visible on desktop
- Framer Motion `whileInView` fade-in on the section
- Matches existing color scheme: `bg-white`, `text-espresso`, etc.
- Section id="menu" for anchor nav

**Step 1: Create the component**

See implementation in task execution.

**Step 2: Commit**

```bash
git add src/components/sections/Menu.tsx
git commit -m "add Menu section component with horizontal scroll carousel"
```

---

### Task 3: Wire Menu into page

**Files:**
- Modify: `src/components/sections/index.ts`
- Modify: `src/app/page.tsx`

**Step 1: Add export to barrel file**

Add `export { default as Menu } from "./Menu";` to `src/components/sections/index.ts`.

**Step 2: Add Menu between HowItWorks and Packages in page.tsx**

Import `Menu` in the destructured import and place `<Menu />` after `<HowItWorks />` and before `<Packages />`.

**Step 3: Commit**

```bash
git add src/components/sections/index.ts src/app/page.tsx
git commit -m "wire Menu section into page between HowItWorks and Packages"
```

---

### Task 4: Verify

**Step 1: Run dev server and confirm**

```bash
npm run dev
```

Check that the menu section renders between HowItWorks and Packages, horizontal scroll works, and arrows navigate.
