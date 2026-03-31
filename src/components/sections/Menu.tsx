"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { menuCategories, totalDrinkCount } from "@/content/menu";
import { Section, SectionHeading, Button } from "@/components/ui";

export default function Menu() {
  return (
    <Section id="menu" bg="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading subtitle="Handcrafted drinks your guests will actually be excited about. All served from our mobile coffee bar.">
          Something for everyone.
        </SectionHeading>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {menuCategories.map((category, i) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            {/* Category photo */}
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Text content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-white/80">{category.tagline}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.drinks.map((drink) => (
                  <span
                    key={drink}
                    className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                  >
                    {drink}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="mb-3 text-sm text-espresso/50">
          {totalDrinkCount} handcrafted drinks. Zero cleanup for you.
        </p>
        <Button href="#contact" variant="amber">
          Book Your Event &rarr;
        </Button>
      </div>
    </Section>
  );
}
