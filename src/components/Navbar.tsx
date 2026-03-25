"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-espresso/10">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a
          href="#"
          id="logo-nav"
          className="text-[28px] tracking-[-0.03em] lowercase leading-none"
          style={{
            fontFamily: "var(--font-plus-jakarta)",
            fontWeight: 800,
            fontStyle: "italic",
            background: "linear-gradient(to right, #C8773A 0%, #8B4513 40%, #1A1713 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          caffeinated.
        </a>

        <a
          href="#contact"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
        >
          Get a Quote
        </a>
      </div>
    </nav>
  );
}
