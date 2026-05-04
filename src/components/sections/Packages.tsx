"use client";

import { motion } from "framer-motion";
import { packages, packagesBoilerplate, packagesNote } from "@/content/packages";
import { Section, SectionHeading, Button } from "@/components/ui";

export default function Packages() {
  return (
    <Section id="packages" bg="white">
      <SectionHeading subtitle="Custom packages available for recurring bookings.">
        Simple Pricing. No Surprises.
      </SectionHeading>
      <div className="mt-10 md:mt-16 grid gap-8 md:grid-cols-3 md:items-stretch">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative rounded-2xl p-8 flex flex-col ${
              pkg.highlighted
                ? "border-2 border-amber bg-white shadow-[0_20px_60px_rgba(200,119,58,0.15)] md:scale-105 md:z-10"
                : "border border-espresso/8 bg-white shadow-[0_2px_8px_rgba(45,27,20,0.06)]"
            }`}
          >
            {pkg.highlighted && (
              <span className="absolute -top-3 right-6 rounded-full bg-amber px-4 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-espresso">{pkg.name}</h3>
            <p className="mt-2 text-sm text-espresso/50">
              {pkg.description}
            </p>
            <p className="mt-4">
              <span className="text-3xl font-bold text-espresso">{pkg.price}</span>
            </p>
            <ul className="mt-6 space-y-3 flex-1">
              {pkg.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-espresso/70"
                >
                  <span className="mt-0.5 text-amber">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-center gap-1.5">
              <Button
                href="#contact"
                variant={pkg.highlighted ? "amber" : "primary"}
                size="full"
              >
                Get My Quote
              </Button>
              <span className="text-xs text-espresso/30">No commitment · Same-day response</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* What's always included */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 md:mt-12"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-espresso/10" />
          <p className="text-sm font-semibold text-espresso/60">
            Every package includes
          </p>
          <div className="h-px flex-1 bg-espresso/10" />
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {packagesBoilerplate.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-espresso/70">
              <span className="shrink-0 w-4 h-4 rounded-full bg-amber/15 flex items-center justify-center text-amber text-xs">&#10003;</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs text-espresso/40">{packagesNote}</p>
      </motion.div>
    </Section>
  );
}
