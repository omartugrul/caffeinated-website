"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { id: "google", name: "Google", logo: "/clients/googlelogo.png", size: "default" as const },
  { id: "kendra-scott", name: "Kendra Scott", logo: "/clients/kendrascottlogo.png", size: "large" as const },
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

      <div className="flex justify-center items-center gap-8 md:gap-12 px-6">
        {clients.map((client) => (
            <div
              key={client.id}
              className={`flex items-center justify-center ${
                client.size === "large" ? "w-[200px] h-20" : "w-[160px] h-16"
              }`}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.size === "large" ? 200 : 160}
                height={client.size === "large" ? 80 : 64}
                className={`w-full h-full object-contain ${
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
