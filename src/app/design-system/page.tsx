import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Hero,
  LogoCarousel,
  HowItWorks,
  Packages,
  Menu,
  Gallery,
  FAQ,
  Contact,
} from "@/components/sections";
import Testimonials from "@/components/sections/Testimonials";
import { Button, SectionHeading, Section, Input, Logo } from "@/components/ui";

export const metadata: Metadata = {
  title: "Design System | Caffeinated (Internal)",
  robots: { index: false, follow: false },
};

/* ── Color tokens from globals.css ── */
const colors = [
  { name: "espresso", var: "--color-espresso", hex: "#2D1B14" },
  { name: "amber", var: "--color-amber", hex: "#C8773A" },
  { name: "cream", var: "--color-cream", hex: "#F9F6F1" },
  { name: "caramel", var: "--color-caramel", hex: "#B07840" },
  { name: "saddle", var: "--color-saddle", hex: "#8B4513" },
  { name: "peach", var: "--color-peach", hex: "#E8A87C" },
  { name: "accent", var: "--color-accent", hex: "#382313" },
  { name: "background", var: "--color-background", hex: "#F9F6F1" },
  { name: "foreground", var: "--color-foreground", hex: "#2D1B14" },
];

const opacityVariants = [
  "bg-espresso/10",
  "bg-espresso/40",
  "bg-espresso/50",
  "bg-espresso/60",
  "bg-espresso/70",
  "bg-amber/5",
  "bg-amber/10",
  "bg-white/20",
  "bg-white/30",
  "bg-white/40",
  "bg-white/70",
];

/* ── Section wrapper for live component previews ── */
function ComponentSection({
  name,
  file,
  children,
}: {
  name: string;
  file: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t-2 border-amber/20">
      <div className="bg-espresso px-6 py-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-white">{name}</span>
        <span className="text-xs text-white/50 font-mono">{file}</span>
      </div>
      {children}
    </div>
  );
}

/* ── Jump link sections ── */
const sections = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "buttons", label: "Buttons" },
  { id: "inputs", label: "Inputs" },
  { id: "logo-variants", label: "Logo" },
  { id: "shadows-effects", label: "Shadows & Effects" },
  { id: "comp-navbar", label: "Navbar" },
  { id: "comp-hero", label: "Hero" },
  { id: "comp-logos", label: "LogoCarousel" },
  { id: "comp-howitworks", label: "HowItWorks" },
  { id: "comp-packages", label: "Packages" },
  { id: "comp-menu", label: "Menu" },
  { id: "comp-gallery", label: "Gallery" },
  { id: "comp-testimonials", label: "Testimonials" },
  { id: "comp-faq", label: "FAQ" },
  { id: "comp-contact", label: "Contact" },
  { id: "comp-footer", label: "Footer" },
];

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* ───────── Header ───────── */}
      <header className="border-b border-espresso/10 bg-white px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <Logo variant="gradient" size="md" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
            Design System
          </h1>
          <p className="mt-2 text-espresso/50">
            Internal reference — not linked from the main site.
          </p>

          {/* TOC */}
          <nav className="mt-8 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-espresso/10 px-3 py-1 text-xs text-espresso/60 hover:border-amber hover:text-amber transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* ───────── Colors ───────── */}
        <section id="colors" className="py-16">
          <h2 className="text-2xl font-bold tracking-tight text-espresso">
            Color Palette
          </h2>
          <p className="mt-2 text-sm text-espresso/50">
            Defined in <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">globals.css</code> via <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">@theme inline</code>
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {colors.map((c) => (
              <div key={c.name} className="group">
                <div
                  className={`h-20 rounded-xl bg-${c.name} border border-espresso/10`}
                />
                <p className="mt-2 text-sm font-medium text-espresso">
                  {c.name}
                </p>
                <p className="text-xs text-espresso/40 font-mono">{c.hex}</p>
                <p className="text-xs text-espresso/40 font-mono">
                  bg-{c.name}
                </p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 text-lg font-semibold text-espresso">
            Opacity Variants
          </h3>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {opacityVariants.map((cls) => (
              <div key={cls}>
                <div
                  className={`h-12 rounded-lg ${cls} border border-espresso/10`}
                />
                <p className="mt-1 text-xs text-espresso/40 font-mono">
                  {cls}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ───────── Typography ───────── */}
        <section id="typography" className="py-16 border-t border-espresso/10">
          <h2 className="text-2xl font-bold tracking-tight text-espresso">
            Typography
          </h2>

          {/* Font families */}
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl border border-espresso/10 bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-espresso/40 mb-3">
                Body — Geist Sans
              </p>
              <p className="text-2xl text-espresso">
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="mt-2 text-xs text-espresso/40 font-mono">
                font-sans / var(--font-geist-sans)
              </p>
            </div>
            <div className="rounded-xl border border-espresso/10 bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-espresso/40 mb-3">
                Logo — Plus Jakarta Sans 800 Italic
              </p>
              <Logo variant="gradient" size="lg" />
              <p className="mt-2 text-xs text-espresso/40 font-mono">
                var(--font-plus-jakarta) / weight 800 / italic
              </p>
            </div>
          </div>

          {/* Type scale */}
          <h3 className="mt-12 text-lg font-semibold text-espresso">
            Type Scale
          </h3>
          <div className="mt-6 space-y-6 rounded-xl border border-espresso/10 bg-white p-6">
            <div>
              <p className="text-xs text-espresso/40 font-mono mb-1">
                text-3xl sm:text-5xl font-bold tracking-tight (Hero heading)
              </p>
              <p className="text-3xl sm:text-5xl font-bold tracking-tight text-espresso">
                Your next event, elevated.
              </p>
            </div>
            <div className="border-t border-espresso/5 pt-6">
              <p className="text-xs text-espresso/40 font-mono mb-1">
                SectionHeading component
              </p>
              <SectionHeading subtitle="Subtitle text rendered by the SectionHeading component.">
                Section Heading
              </SectionHeading>
            </div>
            <div className="border-t border-espresso/5 pt-6">
              <p className="text-xs text-espresso/40 font-mono mb-1">
                text-xl font-bold (Card title)
              </p>
              <p className="text-xl font-bold text-espresso">Card Title</p>
            </div>
            <div className="border-t border-espresso/5 pt-6">
              <p className="text-xs text-espresso/40 font-mono mb-1">
                text-lg font-semibold (Step title)
              </p>
              <p className="text-lg font-semibold text-espresso">Step Title</p>
            </div>
            <div className="border-t border-espresso/5 pt-6">
              <p className="text-xs text-espresso/40 font-mono mb-1">
                text-base text-espresso/60 leading-relaxed (Body)
              </p>
              <p className="text-base text-espresso/60 leading-relaxed">
                We bring the coffee bar to your event. You just pick a date. Our
                baristas handle everything from setup to cleanup, so you can
                focus on being the host.
              </p>
            </div>
            <div className="border-t border-espresso/5 pt-6">
              <p className="text-xs text-espresso/40 font-mono mb-1">
                text-sm text-espresso/50 (Subtitle)
              </p>
              <p className="text-sm text-espresso/50">
                Straightforward pricing. Custom packages available for recurring
                bookings.
              </p>
            </div>
            <div className="border-t border-espresso/5 pt-6">
              <p className="text-xs text-espresso/40 font-mono mb-1">
                text-xs text-espresso/40 (Caption)
              </p>
              <p className="text-xs text-espresso/40">
                Event Coordinator, Houston TX
              </p>
            </div>
            <div className="border-t border-espresso/5 pt-6">
              <p className="text-xs text-espresso/40 font-mono mb-1">
                text-sm font-medium uppercase tracking-wider text-espresso/50
                (Overline)
              </p>
              <p className="text-sm font-medium uppercase tracking-wider text-espresso/50">
                Our Team Has Served
              </p>
            </div>
          </div>
        </section>

        {/* ───────── Buttons ───────── */}
        <section id="buttons" className="py-16 border-t border-espresso/10">
          <h2 className="text-2xl font-bold tracking-tight text-espresso">
            Buttons
          </h2>
          <p className="mt-2 text-sm text-espresso/50">
            Using the <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">Button</code> component from <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">components/ui/Button.tsx</code>
          </p>
          <div className="mt-8 space-y-8">
            {/* On light bg */}
            <div className="rounded-xl border border-espresso/10 bg-white p-8 space-y-6">
              <p className="text-xs font-medium uppercase tracking-wider text-espresso/40">
                On light background
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-col items-start gap-2">
                  <Button>Book Your Event</Button>
                  <p className="text-xs text-espresso/40 font-mono">
                    variant=&quot;primary&quot; (default)
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Button variant="amber">Get a Quote</Button>
                  <p className="text-xs text-espresso/40 font-mono">
                    variant=&quot;amber&quot;
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Button variant="outline">Back</Button>
                  <p className="text-xs text-espresso/40 font-mono">
                    variant=&quot;outline&quot;
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Button size="sm">Book Your Event</Button>
                  <p className="text-xs text-espresso/40 font-mono">
                    size=&quot;sm&quot; (nav)
                  </p>
                </div>
              </div>
              <div className="max-w-sm">
                <Button size="full">Continue</Button>
                <p className="mt-2 text-xs text-espresso/40 font-mono">
                  size=&quot;full&quot;
                </p>
              </div>
              <div className="max-w-sm">
                <Button variant="amber" size="full">Get a Quote</Button>
                <p className="mt-2 text-xs text-espresso/40 font-mono">
                  variant=&quot;amber&quot; size=&quot;full&quot;
                </p>
              </div>
            </div>

            {/* On dark bg */}
            <div className="rounded-xl bg-espresso p-8 space-y-6">
              <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                On dark background
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-col items-start gap-2">
                  <Button variant="amber">Book Your Event</Button>
                  <p className="text-xs text-white/40 font-mono">
                    variant=&quot;amber&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Inputs ───────── */}
        <section id="inputs" className="py-16 border-t border-espresso/10">
          <h2 className="text-2xl font-bold tracking-tight text-espresso">
            Form Inputs
          </h2>
          <p className="mt-2 text-sm text-espresso/50">
            Using the <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">Input</code> component from <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">components/ui/Input.tsx</code>
          </p>
          <div className="mt-8 rounded-xl border border-espresso/10 bg-white p-8 space-y-6 max-w-md">
            <Input label="Name" placeholder="Your name" />
            <Input label="Email" type="email" placeholder="you@company.com" />
            <Input label="Phone" optional type="tel" placeholder="For a faster response" />
            <Input label="With error" placeholder="Bad input" error="This field is required" />
            <Input label="Event date" type="date" />
          </div>
        </section>

        {/* ───────── Logo Variants ───────── */}
        <section id="logo-variants" className="py-16 border-t border-espresso/10">
          <h2 className="text-2xl font-bold tracking-tight text-espresso">
            Logo
          </h2>
          <p className="mt-2 text-sm text-espresso/50">
            Using the <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">Logo</code> component from <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">components/ui/Logo.tsx</code>
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-espresso/10 bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-espresso/40 mb-3">
                Gradient (default)
              </p>
              <Logo variant="gradient" size="lg" />
              <p className="mt-2 text-xs text-espresso/40 font-mono">
                variant=&quot;gradient&quot;
              </p>
            </div>
            <div className="rounded-xl border border-espresso/10 bg-espresso p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-3">
                Outline
              </p>
              <Logo variant="outline" size="lg" />
              <p className="mt-2 text-xs text-white/40 font-mono">
                variant=&quot;outline&quot;
              </p>
            </div>
            <div className="rounded-xl border border-espresso/10 bg-espresso p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-3">
                White
              </p>
              <Logo variant="white" size="lg" />
              <p className="mt-2 text-xs text-white/40 font-mono">
                variant=&quot;white&quot;
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-espresso/10 bg-white p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-espresso/40 mb-4">
              Sizes
            </p>
            <div className="flex items-end gap-8">
              <div>
                <Logo variant="gradient" size="sm" />
                <p className="mt-1 text-xs text-espresso/40 font-mono">sm (24px)</p>
              </div>
              <div>
                <Logo variant="gradient" size="md" />
                <p className="mt-1 text-xs text-espresso/40 font-mono">md (28px)</p>
              </div>
              <div>
                <Logo variant="gradient" size="lg" />
                <p className="mt-1 text-xs text-espresso/40 font-mono">lg (text-3xl)</p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Shadows & Effects ───────── */}
        <section
          id="shadows-effects"
          className="py-16 border-t border-espresso/10"
        >
          <h2 className="text-2xl font-bold tracking-tight text-espresso">
            Shadows & Effects
          </h2>

          {/* Shadows */}
          <h3 className="mt-8 text-lg font-semibold text-espresso">Shadows</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-2xl border border-espresso/8 bg-white p-6 shadow-[0_2px_8px_rgba(45,27,20,0.06)]">
              <p className="text-sm font-medium text-espresso">Card subtle</p>
              <p className="mt-1 text-xs text-espresso/40 font-mono leading-relaxed">
                shadow-[0_2px_8px_ rgba(45,27,20,0.06)]
              </p>
            </div>
            <div className="rounded-2xl border-2 border-amber bg-white p-6 shadow-[0_20px_60px_rgba(200,119,58,0.15)]">
              <p className="text-sm font-medium text-espresso">
                Card elevated
              </p>
              <p className="mt-1 text-xs text-espresso/40 font-mono leading-relaxed">
                shadow-[0_20px_60px_ rgba(200,119,58,0.15)]
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <p className="text-sm font-medium text-espresso">shadow-lg</p>
              <p className="mt-1 text-xs text-espresso/40 font-mono leading-relaxed">
                Tailwind default
              </p>
            </div>
            <div className="rounded-2xl bg-espresso p-6">
              <p className="text-sm font-medium text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.3)]">
                Text drop shadow
              </p>
              <p className="mt-1 text-xs text-white/40 font-mono leading-relaxed">
                drop-shadow-[0_2px_16px_ rgba(0,0,0,0.3)]
              </p>
            </div>
          </div>

          {/* Effects */}
          <h3 className="mt-12 text-lg font-semibold text-espresso">
            Effects
          </h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {/* Hero shimmer */}
            <div className="rounded-xl border border-espresso/10 bg-espresso p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-3">
                Hero Shimmer
              </p>
              <p className="text-3xl font-bold tracking-tight hero-shimmer">
                elevated.
              </p>
              <p className="mt-2 text-xs text-white/40 font-mono">
                .hero-shimmer class (CSS animation)
              </p>
            </div>

            {/* Glassmorphism */}
            <div className="rounded-xl border border-espresso/10 bg-amber/20 p-6 relative overflow-hidden">
              <p className="text-xs font-medium uppercase tracking-wider text-espresso/40 mb-3">
                Glassmorphism Nav
              </p>
              <div className="rounded-lg bg-cream/80 backdrop-blur-md border border-espresso/10 px-4 py-3">
                <p className="text-sm text-espresso">
                  bg-cream/80 backdrop-blur-md border-espresso/10
                </p>
              </div>
              <p className="mt-2 text-xs text-espresso/40 font-mono">
                Used on Navbar
              </p>
            </div>

            {/* Image treatment */}
            <div className="rounded-xl border border-espresso/10 bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-espresso/40 mb-3">
                Image Treatment
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="h-20 rounded-lg bg-amber/30" />
                  <p className="mt-1 text-xs text-espresso/40">Original</p>
                </div>
                <div>
                  <div className="h-20 rounded-lg bg-amber/30 sepia-[.3] brightness-[0.9]" />
                  <p className="mt-1 text-xs text-espresso/40">
                    sepia-[.3] brightness-[0.9]
                  </p>
                </div>
              </div>
            </div>

            {/* Dark overlay */}
            <div className="rounded-xl border border-espresso/10 bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-espresso/40 mb-3">
                Dark Overlay
              </p>
              <div className="relative h-20 rounded-lg bg-amber/30 overflow-hidden">
                <div className="absolute inset-0 bg-espresso/60" />
                <p className="relative text-xs text-white p-2 font-mono">
                  bg-espresso/60
                </p>
              </div>
            </div>
          </div>

          {/* Section component demo */}
          <h3 className="mt-12 text-lg font-semibold text-espresso">
            Section Component
          </h3>
          <p className="mt-2 text-sm text-espresso/50">
            Using <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">Section</code> from <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">components/ui/Section.tsx</code>. Wraps content with consistent padding and max-width.
          </p>
          <div className="mt-4 rounded-xl border border-espresso/10 bg-white p-6 text-sm text-espresso/70 space-y-3">
            <p>
              <span className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">
                max-w-7xl
              </span>{" "}
              — Navbar
            </p>
            <p>
              <span className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">
                max-w-5xl
              </span>{" "}
              — Most sections (default)
            </p>
            <p>
              <span className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">
                max-w-3xl
              </span>{" "}
              — Hero content, About
            </p>
            <p>
              <span className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">
                max-w-2xl
              </span>{" "}
              — FAQ
            </p>
            <p>
              <span className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">
                max-w-xl
              </span>{" "}
              — Contact form
            </p>
            <p>
              <span className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">
                rounded-full
              </span>{" "}
              buttons &bull;{" "}
              <span className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">
                rounded-2xl
              </span>{" "}
              cards &bull;{" "}
              <span className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">
                rounded-xl
              </span>{" "}
              images &bull;{" "}
              <span className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">
                rounded-lg
              </span>{" "}
              inputs
            </p>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════════════════ */}
      {/*  Part B: Live Components                    */}
      {/* ═══════════════════════════════════════════ */}
      <div className="mt-16 border-t-4 border-amber">
        <div className="bg-espresso px-6 py-8 text-center">
          <h2 className="text-2xl font-bold text-white">Live Components</h2>
          <p className="mt-1 text-sm text-white/50">
            Every component rendered exactly as it appears on the site
          </p>
        </div>

        <div id="comp-navbar">
          <ComponentSection name="Navbar" file="components/Navbar.tsx">
            <div className="relative h-20">
              <Navbar />
            </div>
          </ComponentSection>
        </div>

        <div id="comp-hero">
          <ComponentSection name="Hero" file="components/sections/Hero.tsx">
            <Hero />
          </ComponentSection>
        </div>

        <div id="comp-logos">
          <ComponentSection
            name="LogoCarousel"
            file="components/sections/LogoCarousel.tsx"
          >
            <LogoCarousel />
          </ComponentSection>
        </div>

        <div id="comp-howitworks">
          <ComponentSection
            name="HowItWorks"
            file="components/sections/HowItWorks.tsx"
          >
            <HowItWorks />
          </ComponentSection>
        </div>

        <div id="comp-packages">
          <ComponentSection
            name="Packages"
            file="components/sections/Packages.tsx"
          >
            <Packages />
          </ComponentSection>
        </div>

        <div id="comp-menu">
          <ComponentSection name="Menu" file="components/sections/Menu.tsx">
            <Menu />
          </ComponentSection>
        </div>

        <div id="comp-gallery">
          <ComponentSection
            name="Gallery"
            file="components/sections/Gallery.tsx"
          >
            <Gallery />
          </ComponentSection>
        </div>

        <div id="comp-testimonials">
          <ComponentSection
            name="Testimonials"
            file="components/sections/Testimonials.tsx"
          >
            <Testimonials />
          </ComponentSection>
        </div>

        <div id="comp-faq">
          <ComponentSection name="FAQ" file="components/sections/FAQ.tsx">
            <FAQ />
          </ComponentSection>
        </div>

        <div id="comp-contact">
          <ComponentSection
            name="Contact"
            file="components/sections/Contact.tsx"
          >
            <Contact />
          </ComponentSection>
        </div>

        <div id="comp-footer">
          <ComponentSection name="Footer" file="components/Footer.tsx">
            <Footer />
          </ComponentSection>
        </div>
      </div>
    </div>
  );
}
