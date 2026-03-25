"use client";

import { useState } from "react";

const accentOptions = [
  { name: "Logo Brown", hex: "#8B4513" },
  { name: "Deep Espresso", hex: "#2D1B14" },
  { name: "Caramel", hex: "#B07840" },
];

const logoOptions = [
  {
    name: "Original",
    gradient: "linear-gradient(to right, #C8773A 0%, #8B4513 40%, #1A1713 100%)",
    italic: true,
  },
  {
    name: "No Italic",
    gradient: "linear-gradient(to right, #C8773A 0%, #8B4513 40%, #1A1713 100%)",
    italic: false,
  },
  {
    name: "Deep Brown",
    gradient: "linear-gradient(to right, #A07040 0%, #6B4226 40%, #2D1B14 100%)",
    italic: true,
  },
  {
    name: "Espresso Flat",
    gradient: "",
    italic: true,
  },
];

function applyLogoStyle(opt: (typeof logoOptions)[number]) {
  const navLogo = document.getElementById("logo-nav");
  const footerLogo = document.getElementById("logo-footer");

  [navLogo, footerLogo].forEach((el) => {
    if (!el) return;
    const isFooter = el.id === "logo-footer";

    el.style.fontStyle = opt.italic ? "italic" : "normal";

    if (opt.gradient) {
      el.style.background = opt.gradient;
      el.style.backgroundClip = "text";
      el.style.webkitBackgroundClip = "text";
      el.style.webkitTextFillColor = isFooter ? "white" : "transparent";
    } else {
      el.style.background = "none";
      el.style.backgroundClip = "unset";
      el.style.webkitBackgroundClip = "unset";
      el.style.webkitTextFillColor = isFooter ? "white" : "#2D1B14";
    }
  });
}

export default function ColorSwitcher() {
  const [activeAccent, setActiveAccent] = useState(1);
  const [activeLogo, setActiveLogo] = useState(0);
  const [expanded, setExpanded] = useState(false);

  function handleAccent(index: number) {
    setActiveAccent(index);
    document.documentElement.style.setProperty("--accent-color", accentOptions[index].hex);
  }

  function handleLogo(index: number) {
    setActiveLogo(index);
    applyLogoStyle(logoOptions[index]);
  }

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="fixed bottom-4 right-4 z-50 md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-espresso text-white shadow-2xl"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </button>

      {/* Mobile expanded panel */}
      {expanded && (
        <div className="fixed bottom-16 right-4 z-50 md:hidden flex flex-col gap-3 rounded-2xl bg-espresso p-4 shadow-2xl max-w-[280px]">
          <div>
            <p className="text-xs text-white/50 mb-2">Logo</p>
            <div className="flex flex-wrap gap-1.5">
              {logoOptions.map((opt, i) => (
                <button
                  key={opt.name}
                  onClick={() => handleLogo(i)}
                  className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                    activeLogo === i ? "bg-white/20 text-white" : "text-white/60"
                  }`}
                >
                  {opt.name}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-white/50 mb-2">Accent</p>
            <div className="flex flex-wrap gap-1.5">
              {accentOptions.map((opt, i) => (
                <button
                  key={opt.name}
                  onClick={() => handleAccent(i)}
                  className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                    activeAccent === i ? "bg-white/20 text-white" : "text-white/60"
                  }`}
                >
                  <div
                    className="h-2.5 w-2.5 rounded-full border border-white/30"
                    style={{ backgroundColor: opt.hex }}
                  />
                  {opt.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop bars */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 rounded-full bg-espresso px-4 py-2.5 shadow-2xl">
          <span className="text-xs text-white/50 mr-1">Logo:</span>
          {logoOptions.map((opt, i) => (
            <button
              key={opt.name}
              onClick={() => handleLogo(i)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                activeLogo === i ? "bg-white/20 text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {opt.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 rounded-full bg-espresso px-5 py-3 shadow-2xl">
          <span className="text-xs text-white/50 mr-1">Accent:</span>
          {accentOptions.map((opt, i) => (
            <button
              key={opt.name}
              onClick={() => handleAccent(i)}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                activeAccent === i ? "bg-white/20 text-white" : "text-white/60 hover:text-white"
              }`}
            >
              <div
                className="h-3 w-3 rounded-full border border-white/30"
                style={{ backgroundColor: opt.hex }}
              />
              {opt.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
