"use client";

import { motion } from "framer-motion";
import { packages } from "@/content/packages";

export default function Packages() {
  return (
    <section id="packages" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
          Choose Your Package
        </h2>
        <p className="mt-4 text-center text-espresso/50 max-w-lg mx-auto">
          Straightforward pricing. Custom packages available for recurring bookings.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3 md:items-center">
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
                <span className="ml-1 text-sm text-espresso/40">starting</span>
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
              <a
                href="#contact"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                  pkg.highlighted
                    ? "bg-amber text-white"
                    : "bg-accent text-white"
                }`}
              >
                Get a Quote
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
