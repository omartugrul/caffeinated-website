import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Hero,
  About,
  LogoCarousel,
  HowItWorks,
  Packages,
  Menu,
  Gallery,
  FAQ,
  Contact,
} from "@/components/sections";
import { Button, SectionHeading, Section, Input, Logo } from "@/components/ui";

export const metadata: Metadata = {
  title: "Design System | Caffeinated (Internal)",
  robots: { index: false, follow: false },
};

/* Color tokens from globals.css */
const colors = [
  { name: "espresso", hex: "#2D1B14" },
  { name: "amber", hex: "#C8773A" },
  { name: "cream", hex: "#F9F6F1" },
  { name: "accent", hex: "#382313" },
];

/* Section wrapper for live component previews */
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

/* Jump link sections */
const sections = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "buttons", label: "Buttons" },
  { id: "inputs", label: "Inputs" },
  { id: "logo-variants", label: "Logo" },
  { id: "shadows-effects", label: "Shadows & Effects" },
  { id: "comp-navbar", label: "Navbar" },
  { id: "comp-hero", label: "Hero" },
  { id: "comp-about", label: "About" },
  { id: "comp-logos", label: "LogoCarousel" },
  { id: "comp-howitworks", label: "HowItWorks" },
  { id: "comp-packages", label: "Packages" },
  { id: "comp-menu", label: "Menu" },
  { id: "comp-gallery", label: "Gallery" },
  { id: "comp-faq", label: "FAQ" },
  { id: "comp-contact", label: "Contact" },
  { id: "comp-footer", label: "Footer" },
];

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="border-b border-espresso/10 bg-white px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <Logo variant="gradient" size="md" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
            Design System
          </h1>
          <p className="mt-2 text-espresso/50">
            Internal reference. Not linked from the main site.
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
        {/* Colors */}
        <section id="colors" className="py-16">
          <h2 className="text-2xl font-bold tracking-tight text-espresso">
            Color Palette
          </h2>
          <p className="mt-2 text-sm text-espresso/50">
            Defined in <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">globals.css</code> via <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">@theme inline</code>
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {colors.map((c) => (
              <div key={c.name}>
                <div
                  className="h-20 rounded-xl border border-espresso/10"
                  style={{ backgroundColor: c.hex }}
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
        </section>

        {/* Typography */}
        <section id="typography" className="py-16 border-t border-espresso/10">
          <h2 className="text-2xl font-bold tracking-tight text-espresso">
            Typography
          </h2>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl border border-espresso/10 bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-espresso/40 mb-3">
                Body &mdash; Geist Sans
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
                Logo &mdash; Plus Jakarta Sans 800 Italic
              </p>
              <Logo variant="gradient" size="lg" />
              <p className="mt-2 text-xs text-espresso/40 font-mono">
                var(--font-plus-jakarta) / weight 800 / italic
              </p>
            </div>
          </div>

          <h3 className="mt-12 text-lg font-semibold text-espresso">
            Type Scale
          </h3>
          <div className="mt-6 space-y-6 rounded-xl border border-espresso/10 bg-white p-6">
            <div>
              <p className="text-xs text-espresso/40 font-mono mb-1">
                text-3xl sm:text-5xl font-bold tracking-tight (Hero)
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
                text-base text-espresso/60 leading-relaxed (Body)
              </p>
              <p className="text-base text-espresso/60 leading-relaxed">
                We bring the coffee bar to your event. You just pick a date. Our
                baristas handle everything from setup to cleanup.
              </p>
            </div>
            <div className="border-t border-espresso/5 pt-6">
              <p className="text-xs text-espresso/40 font-mono mb-1">
                text-sm text-espresso/50 (Subtitle) / text-xs text-espresso/40 (Caption)
              </p>
              <p className="text-sm text-espresso/50">Subtitle text</p>
              <p className="text-xs text-espresso/40 mt-1">Caption text</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section id="buttons" className="py-16 border-t border-espresso/10">
          <h2 className="text-2xl font-bold tracking-tight text-espresso">
            Buttons
          </h2>
          <p className="mt-2 text-sm text-espresso/50">
            <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">Button</code> from <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">components/ui/Button.tsx</code>
          </p>
          <div className="mt-8 space-y-8">
            <div className="rounded-xl border border-espresso/10 bg-white p-8 space-y-6">
              <p className="text-xs font-medium uppercase tracking-wider text-espresso/40">
                On light background
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-col items-start gap-2">
                  <Button>Book Your Event</Button>
                  <p className="text-xs text-espresso/40 font-mono">primary (default)</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Button variant="amber">Get a Quote</Button>
                  <p className="text-xs text-espresso/40 font-mono">amber</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Button variant="outline">Back</Button>
                  <p className="text-xs text-espresso/40 font-mono">outline</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Button size="sm">Book Your Event</Button>
                  <p className="text-xs text-espresso/40 font-mono">size=sm</p>
                </div>
              </div>
              <div className="max-w-sm">
                <Button size="full">Continue</Button>
                <p className="mt-2 text-xs text-espresso/40 font-mono">size=full</p>
              </div>
            </div>

            <div className="rounded-xl bg-espresso p-8 space-y-6">
              <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                On dark background
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="amber">Book Your Event</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Inputs */}
        <section id="inputs" className="py-16 border-t border-espresso/10">
          <h2 className="text-2xl font-bold tracking-tight text-espresso">
            Form Inputs
          </h2>
          <p className="mt-2 text-sm text-espresso/50">
            <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">Input</code> from <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">components/ui/Input.tsx</code>
          </p>
          <div className="mt-8 rounded-xl border border-espresso/10 bg-white p-8 space-y-6 max-w-md">
            <Input label="Name" placeholder="Your name" />
            <Input label="Email" type="email" placeholder="you@company.com" />
            <Input label="Phone" optional type="tel" placeholder="For a faster response" />
            <Input label="With error" placeholder="Bad input" error="This field is required" />
            <Input label="Event date" type="date" />
          </div>
        </section>

        {/* Logo Variants */}
        <section id="logo-variants" className="py-16 border-t border-espresso/10">
          <h2 className="text-2xl font-bold tracking-tight text-espresso">
            Logo
          </h2>
          <p className="mt-2 text-sm text-espresso/50">
            <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">Logo</code> from <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">components/ui/Logo.tsx</code>
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-espresso/10 bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-espresso/40 mb-3">Gradient (default)</p>
              <Logo variant="gradient" size="lg" />
            </div>
            <div className="rounded-xl border border-espresso/10 bg-espresso p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-3">Outline</p>
              <Logo variant="outline" size="lg" />
            </div>
            <div className="rounded-xl border border-espresso/10 bg-espresso p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-3">White</p>
              <Logo variant="white" size="lg" />
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-espresso/10 bg-white p-6">
            <p className="text-xs font-medium uppercase tracking-wider text-espresso/40 mb-4">Sizes</p>
            <div className="flex items-end gap-8">
              <div>
                <Logo variant="gradient" size="sm" />
                <p className="mt-1 text-xs text-espresso/40 font-mono">sm</p>
              </div>
              <div>
                <Logo variant="gradient" size="md" />
                <p className="mt-1 text-xs text-espresso/40 font-mono">md</p>
              </div>
              <div>
                <Logo variant="gradient" size="lg" />
                <p className="mt-1 text-xs text-espresso/40 font-mono">lg</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shadows & Effects */}
        <section id="shadows-effects" className="py-16 border-t border-espresso/10">
          <h2 className="text-2xl font-bold tracking-tight text-espresso">
            Shadows & Effects
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-2xl border border-espresso/8 bg-white p-6 shadow-[0_2px_8px_rgba(45,27,20,0.06)]">
              <p className="text-sm font-medium text-espresso">Card subtle</p>
              <p className="mt-1 text-xs text-espresso/40 font-mono">0.06 opacity</p>
            </div>
            <div className="rounded-2xl border-2 border-amber bg-white p-6 shadow-[0_20px_60px_rgba(200,119,58,0.15)]">
              <p className="text-sm font-medium text-espresso">Card elevated</p>
              <p className="mt-1 text-xs text-espresso/40 font-mono">amber glow</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <p className="text-sm font-medium text-espresso">shadow-lg</p>
              <p className="mt-1 text-xs text-espresso/40 font-mono">Tailwind default</p>
            </div>
            <div className="rounded-2xl bg-espresso p-6">
              <p className="text-sm font-medium text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.3)]">Text drop shadow</p>
              <p className="mt-1 text-xs text-white/40 font-mono">Hero text</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-espresso/10 bg-espresso p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-3">Hero Shimmer</p>
              <p className="text-3xl font-bold tracking-tight hero-shimmer">elevated.</p>
            </div>
            <div className="rounded-xl border border-espresso/10 bg-amber/20 p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-espresso/40 mb-3">Glassmorphism Nav</p>
              <div className="rounded-lg bg-cream/80 backdrop-blur-md border border-espresso/10 px-4 py-3">
                <p className="text-sm text-espresso">bg-cream/80 backdrop-blur-md</p>
              </div>
            </div>
          </div>

          <h3 className="mt-12 text-lg font-semibold text-espresso">Layout Tokens</h3>
          <div className="mt-4 rounded-xl border border-espresso/10 bg-white p-6 text-sm text-espresso/70 space-y-2">
            <p><code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">max-w-7xl</code> Navbar</p>
            <p><code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">max-w-5xl</code> Most sections (default)</p>
            <p><code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">max-w-3xl</code> Hero content, About</p>
            <p><code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">max-w-2xl</code> FAQ</p>
            <p><code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">max-w-xl</code> Contact form</p>
            <p className="border-t border-espresso/5 pt-2 mt-2">
              <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">rounded-full</code> buttons
              {" / "}
              <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">rounded-2xl</code> cards
              {" / "}
              <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">rounded-xl</code> images
              {" / "}
              <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded">rounded-lg</code> inputs
            </p>
          </div>
        </section>
      </main>

      {/* Live Components */}
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

        <div id="comp-about">
          <ComponentSection name="About" file="components/sections/About.tsx">
            <About />
          </ComponentSection>
        </div>

        <div id="comp-logos">
          <ComponentSection name="LogoCarousel" file="components/sections/LogoCarousel.tsx">
            <LogoCarousel />
          </ComponentSection>
        </div>

        <div id="comp-howitworks">
          <ComponentSection name="HowItWorks" file="components/sections/HowItWorks.tsx">
            <HowItWorks />
          </ComponentSection>
        </div>

        <div id="comp-packages">
          <ComponentSection name="Packages" file="components/sections/Packages.tsx">
            <Packages />
          </ComponentSection>
        </div>

        <div id="comp-menu">
          <ComponentSection name="Menu" file="components/sections/Menu.tsx">
            <Menu />
          </ComponentSection>
        </div>

        <div id="comp-gallery">
          <ComponentSection name="Gallery" file="components/sections/Gallery.tsx">
            <Gallery />
          </ComponentSection>
        </div>

        <div id="comp-faq">
          <ComponentSection name="FAQ" file="components/sections/FAQ.tsx">
            <FAQ />
          </ComponentSection>
        </div>

        <div id="comp-contact">
          <ComponentSection name="Contact" file="components/sections/Contact.tsx">
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
