"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { id: "google", name: "Google", logo: "/clients/googlelogo.png" },
  { id: "kendra-scott", name: "Kendra Scott", logo: "/clients/kendrascottlogo.png" },
  { id: "university-of-houston", name: "University of Houston", logo: "/clients/uhlogo.png" },
  { id: "common-desk", name: "Common Desk", logo: "/clients/commondesklogo.svg" },
  { id: "24-hour-pickle", name: "24 Hour Pickle", logo: "/clients/24hourpicklelogo.png" },
  { id: "live-hydration-spa", name: "Live Hydration Spa", logo: "/clients/livehydrationspa.png" },
];

const isLargeId = (id: string) =>
  id === "common-desk" || id === "university-of-houston";

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
        {clients.map((client) => {
          const isLarge = isLargeId(client.id);
          const needsPadding = client.id === "google";
          return (
            <div
              key={client.id}
              className={`flex items-center justify-center ${
                isLarge ? "w-[160px] h-16" : "w-[100px] h-12"
              } ${needsPadding ? "px-3" : ""}`}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={isLarge ? 160 : 100}
                height={isLarge ? 64 : 48}
                className={`w-full h-full object-contain ${
                  client.logo.endsWith(".svg")
                    ? "opacity-90"
                    : "opacity-80 sepia-[.3] brightness-[0.8]"
                }`}
              />
            </div>
          );
        })}
      </div>

      <p className="text-center text-espresso/40 text-sm mt-6">
        ...and more
      </p>
    </section>
  );
}
