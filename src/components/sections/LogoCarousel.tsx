"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { id: "google", name: "Google", logo: "/clients/googlelogo.png" },
  { id: "kendra-scott", name: "Kendra Scott", logo: "/clients/kendrascottlogo.png" },
  { id: "urban-skillet", name: "Urban Skillet", logo: "/clients/urbanskilletlogo.png" },
  { id: "the-halal-social", name: "The Halal Social", logo: "/clients/thehalalsociallogo.png" },
  { id: "24-hour-pickle", name: "24 Hour Pickle", logo: "/clients/24hourpicklelogo.png" },
  { id: "uh-psa", name: "UH PSA", logo: "/clients/psauhlogo.png" },
  { id: "uh-msa", name: "UH MSA", logo: "/clients/uhmsalogo.png" },
  { id: "cars-n-chai", name: "Cars N Chai", logo: "/clients/carsnchailogo.png" },
  { id: "plus1", name: "Plus1", logo: "/clients/plus1logo.png" },
  { id: "live-hydration-spa", name: "Live Hydration Spa", logo: "/clients/livehydrationspa.png" },
  { id: "texas-halal-fest", name: "Texas Halal Fest", logo: "/clients/texashalalfestlogo.png" },
  { id: "qs-deli", name: "Q's Deli", logo: "/clients/qsdelilogo.png" },
];

const gap = 24;
const totalScrollWidth = clients.reduce((sum, client) => {
  const width = client.id === "texas-halal-fest" || client.id === "cars-n-chai" ? 160 : 100;
  return sum + width + gap;
}, 0);

export default function LogoCarousel() {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-espresso/50 text-sm font-medium mb-8 uppercase tracking-wider px-4"
      >
        Caffeinated &amp; sister brands are trusted by
      </motion.p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 items-center"
          animate={{ x: [0, -totalScrollWidth] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedClients.map((client, index) => {
            const isLarge = client.id === "texas-halal-fest" || client.id === "cars-n-chai";
            const needsPadding = client.id === "google";
            return (
              <div
                key={`${client.id}-${index}`}
                className={`flex-shrink-0 flex items-center justify-center ${
                  isLarge ? "w-[160px] h-16" : "w-[100px] h-12"
                } ${needsPadding ? "px-3" : ""}`}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={isLarge ? 160 : 100}
                  height={isLarge ? 64 : 48}
                  className="w-full h-full object-contain opacity-80 sepia-[.3] brightness-[0.8]"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
