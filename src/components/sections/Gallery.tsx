"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/photos/event-cart-customers.jpeg", alt: "Espresso cart serving customers at an event" },
  { src: "/photos/event-google-cloud.jpeg", alt: "Caffeinated at a Google Cloud event" },
  { src: "/photos/event-outdoor-backyard.jpeg", alt: "Outdoor backyard event setup" },
  { src: "/photos/cart-setup.jpeg", alt: "Espresso cart setup" },
  { src: "/photos/drinks-four-tray.jpeg", alt: "Four craft drinks on a tray" },
  { src: "/photos/drink-catering-event.jpeg", alt: "Drink at a catering event" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-cream">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
          From Our Events
        </h2>
        <p className="mt-4 text-center text-espresso/50 max-w-lg mx-auto">
          From office lobbies to rooftop weddings. Here&apos;s what it looks like when we show up.
        </p>
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover sepia-[.4] brightness-[0.9]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
