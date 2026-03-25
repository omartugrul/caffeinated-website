"use client";

import { useState } from "react";

const accentOptions = [
  { name: "Deep Espresso", hex: "#2D1B14" },
  { name: "E Color", hex: "#402613" },
  { name: "D Color", hex: "#382313" },
];

export default function ColorSwitcher() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [customHex, setCustomHex] = useState("");

  function handleAccent(index: number) {
    setActive(index);
    document.documentElement.style.setProperty("--accent-color", accentOptions[index].hex);
  }

  function handleCustom(value: string) {
    setCustomHex(value);
    const hex = value.startsWith("#") ? value : `#${value}`;
    if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
      setActive(-1);
      document.documentElement.style.setProperty("--accent-color", hex);
    }
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
          <p className="text-xs text-white/50 mb-1">Accent</p>
          <div className="flex flex-wrap gap-1.5">
            {accentOptions.map((opt, i) => (
              <button
                key={opt.name}
                onClick={() => { handleAccent(i); setCustomHex(""); }}
                className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  active === i ? "bg-white/20 text-white" : "text-white/60"
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
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] text-white/40">#</span>
            <input
              type="text"
              value={customHex}
              onChange={(e) => handleCustom(e.target.value)}
              placeholder="hex code"
              maxLength={7}
              className="w-full bg-white/10 rounded-md px-2 py-1 text-[11px] text-white placeholder:text-white/30 border border-white/20 focus:border-white/40 focus:outline-none font-mono"
            />
            <div
              className="h-5 w-5 rounded-full border border-white/30 shrink-0"
              style={{ backgroundColor: /^#?[0-9A-Fa-f]{6}$/.test(customHex) ? (customHex.startsWith("#") ? customHex : `#${customHex}`) : "transparent" }}
            />
          </div>
        </div>
      )}

      {/* Desktop bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-3 rounded-full bg-espresso px-5 py-3 shadow-2xl">
        <span className="text-xs text-white/50 mr-1">Accent:</span>
        {accentOptions.map((opt, i) => (
          <button
            key={opt.name}
            onClick={() => { handleAccent(i); setCustomHex(""); }}
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              active === i ? "bg-white/20 text-white" : "text-white/60 hover:text-white"
            }`}
          >
            <div
              className="h-3 w-3 rounded-full border border-white/30"
              style={{ backgroundColor: opt.hex }}
            />
            {opt.name}
          </button>
        ))}
        <div className="w-px h-4 bg-white/20 mx-1" />
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-white/40">#</span>
          <input
            type="text"
            value={customHex}
            onChange={(e) => handleCustom(e.target.value)}
            placeholder="custom"
            maxLength={7}
            className="w-20 bg-white/10 rounded-md px-2 py-1 text-xs text-white placeholder:text-white/30 border border-white/20 focus:border-white/40 focus:outline-none font-mono"
          />
          <div
            className="h-4 w-4 rounded-full border border-white/30 shrink-0"
            style={{ backgroundColor: /^#?[0-9A-Fa-f]{6}$/.test(customHex) ? (customHex.startsWith("#") ? customHex : `#${customHex}`) : "transparent" }}
          />
        </div>
      </div>
    </>
  );
}
