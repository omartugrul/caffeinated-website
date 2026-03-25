"use client";

const options = [
  {
    name: "Option 1: Logo Brown",
    hex: "#8B4513",
    desc: "Rich saddle brown from your logo gradient. All coffee family.",
  },
  {
    name: "Option 2: Deep Espresso",
    hex: "#2D1B14",
    desc: "Dark buttons on cream. High contrast. Blank Street energy.",
  },
  {
    name: "Option 3: Warm Gold",
    hex: "#B8860B",
    desc: "Honey/gold tone. Warm, premium, still earthy.",
  },
];

export default function Compare() {
  return (
    <div className="min-h-screen bg-cream px-6 py-16">
      <h1 className="text-center text-3xl font-bold text-espresso mb-16">
        CTA / Accent Color Options
      </h1>
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-3">
        {options.map((opt) => (
          <div key={opt.name} className="flex flex-col gap-8">
            <div>
              <h2 className="text-lg font-semibold text-espresso">{opt.name}</h2>
              <p className="text-sm text-espresso/50 mt-1">{opt.hex}</p>
              <p className="text-sm text-espresso/60 mt-2">{opt.desc}</p>
            </div>

            {/* Color swatch */}
            <div
              className="h-20 rounded-xl"
              style={{ backgroundColor: opt.hex }}
            />

            {/* CTA Button */}
            <button
              className="rounded-full px-8 py-4 text-base font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: opt.hex }}
            >
              Book Your Event
            </button>

            {/* Button on dark bg */}
            <div className="rounded-xl bg-espresso p-8 flex flex-col gap-4">
              <p className="text-white/80 text-sm">On dark background:</p>
              <button
                className="rounded-full px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: opt.hex }}
              >
                Book Your Event
              </button>
              {/* Inverted for dark card */}
              <button
                className="rounded-full px-8 py-3 text-sm font-medium bg-cream transition-opacity hover:opacity-90"
                style={{ color: opt.hex }}
              >
                Book Your Event
              </button>
            </div>

            {/* Sample card */}
            <div className="rounded-2xl border border-espresso/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-espresso">The Full Spread</h3>
              <p className="mt-2 text-sm text-espresso/50">Custom drinks and branded cups.</p>
              <div className="mt-4 flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: opt.hex }}
                />
                <span className="text-sm" style={{ color: opt.hex }}>Accent text</span>
              </div>
              <button
                className="mt-6 w-full rounded-full py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: opt.hex }}
              >
                Book Your Event
              </button>
            </div>

            {/* Number circles (like How It Works) */}
            <div className="flex gap-4 justify-center">
              {["1", "2", "3"].map((n) => (
                <div
                  key={n}
                  className="flex h-12 w-12 items-center justify-center rounded-full text-white text-lg font-semibold"
                  style={{ backgroundColor: opt.hex }}
                >
                  {n}
                </div>
              ))}
            </div>

            {/* Nav bar preview */}
            <div className="rounded-xl bg-cream/80 border border-espresso/10 px-6 py-4 flex items-center justify-between">
              <span
                className="text-[20px] tracking-[-0.03em] lowercase leading-none"
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontWeight: 800,
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #C8773A 0%, #8B4513 40%, #1A1713 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                caffeinated.
              </span>
              <button
                className="rounded-full px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: opt.hex }}
              >
                Book Your Event
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
