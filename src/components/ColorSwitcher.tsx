"use client";

import { useState } from "react";

const options = [
  { name: "Logo Brown", hex: "#8B4513" },
  { name: "Deep Espresso", hex: "#2D1B14" },
  { name: "Caramel", hex: "#B07840" },
];

export default function ColorSwitcher() {
  const [active, setActive] = useState(0);

  function apply(index: number) {
    setActive(index);
    document.documentElement.style.setProperty("--accent-color", options[index].hex);
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-full bg-espresso px-5 py-3 shadow-2xl">
      <span className="text-xs text-white/50 mr-1">Accent:</span>
      {options.map((opt, i) => (
        <button
          key={opt.name}
          onClick={() => apply(i)}
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
    </div>
  );
}
