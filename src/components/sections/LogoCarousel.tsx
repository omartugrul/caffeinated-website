"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { id: "google", name: "Google", logo: "/clients/googlelogo.png", size: "default" as const },
  { id: "kendra-scott", name: "Kendra Scott", logo: "/clients/kendrascottlogohorizontal.png", size: "xlarge" as const },
  { id: "university-of-houston", name: "University of Houston", logo: "/clients/uhlogo.png", size: "default" as const },
  { id: "common-desk", name: "Common Desk", logo: "/clients/commondesklogo.svg", size: "default" as const },
  { id: "24-hour-pickle", name: "24 Hour Pickle", logo: "/clients/24hourpicklelogo.png", size: "default" as const },
  { id: "live-hydration-spa", name: "Live Hydration Spa", logo: "/clients/livehydrationspa.png", size: "large" as const },
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
        Caffeinated &amp; sister brands are trusted by
      </motion.p>

      <div className="grid grid-cols-2 gap-y-10 gap-x-8 px-8 max-w-sm mx-auto md:flex md:justify-center md:items-center md:gap-12 md:px-6 md:max-w-none">
        {clients.map((client) => (
            <div
              key={client.id}
              className={`flex items-center justify-center h-10 md:h-auto ${
                client.size === "xlarge" ? "md:w-[220px] md:h-16" : client.size === "large" ? "md:w-[200px] md:h-20" : "md:w-[160px] md:h-16"
              }`}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.size === "xlarge" ? 220 : client.size === "large" ? 200 : 160}
                height={client.size === "xlarge" ? 64 : client.size === "large" ? 80 : 64}
                className={`max-w-full max-h-full object-contain ${
                  client.logo.endsWith(".svg")
                    ? "opacity-90"
                    : "opacity-80 sepia-[.3] brightness-[0.8]"
                }`}
              />
            </div>
          ))}
      </div>

      <p className="text-center text-espresso/40 text-sm mt-6">
        ...and more
      </p>
    </section>
  );
}
