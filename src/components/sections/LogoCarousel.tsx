"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const topRow = [
  { id: "google", name: "Google", logo: "/clients/googlelogo.png", imgWidth: 200 },
  { id: "kendra-scott", name: "Kendra Scott", logo: "/clients/kendrascottlogohorizontal.png", imgWidth: 550 },
];

const bottomRow = [
  { id: "university-of-houston", name: "University of Houston", logo: "/clients/uhlogo.png", imgWidth: 200 },
  { id: "common-desk", name: "Common Desk", logo: "/clients/commondesklogo.svg", imgWidth: 200 },
  { id: "24-hour-pickle", name: "24 Hour Pickle", logo: "/clients/24hourpicklelogo.png", imgWidth: 200 },
  { id: "live-hydration-spa", name: "Live Hydration Spa", logo: "/clients/livehydrationspa.png", imgWidth: 200 },
];

export default function LogoCarousel() {
  return (
    <section className="py-12 bg-white">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-espresso/50 text-sm font-medium mb-8 uppercase tracking-wider px-4"
      >
        Our team has served
      </motion.p>

      <div className="flex flex-col items-center gap-8 px-6 md:flex-row md:justify-center md:gap-12 md:px-6">
        {/* Top row on mobile: Google + Kendra Scott side by side */}
        <div className="flex items-center justify-center gap-8 md:contents">
          {topRow.map((client) => (
            <div key={client.id} className="flex items-center justify-center h-8 md:h-12 md:w-[280px]">
              <Image
                src={client.logo}
                alt={client.name}
                width={client.imgWidth}
                height={80}
                className={`max-w-full max-h-full object-contain ${
                  client.logo.endsWith(".svg") ? "opacity-90" : "opacity-80 sepia-[.3] brightness-[0.8]"
                }`}
              />
            </div>
          ))}
        </div>
        {/* Bottom row on mobile: remaining 4 in a 2x2 grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:contents">
          {bottomRow.map((client) => (
            <div key={client.id} className="flex items-center justify-center h-10 md:h-12 md:w-[160px]">
              <Image
                src={client.logo}
                alt={client.name}
                width={client.imgWidth}
                height={80}
                className={`max-w-full max-h-full object-contain ${
                  client.logo.endsWith(".svg") ? "opacity-90" : "opacity-80 sepia-[.3] brightness-[0.8]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-espresso/40 text-sm mt-6">
        ...and more
      </p>
    </section>
  );
}
