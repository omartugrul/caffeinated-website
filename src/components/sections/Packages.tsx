"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "The Standard",
    description: "Everything you need for a great event.",
    features: [
      "Professional barista + full espresso setup",
      "2 hours of service",
      "Up to 75 drinks",
      "Classic drink menu",
      "All supplies included",
      "Setup & teardown handled",
    ],
  },
  {
    name: "The Full Spread",
    description: "Our most popular package.",
    features: [
      "Everything in The Standard",
      "3 hours of service",
      "Up to 150 drinks",
      "Custom drink menu for your event",
      "Branded cups with your logo",
      "Travel anywhere in Houston metro",
    ],
    highlighted: true,
  },
  {
    name: "The VIP",
    description: "The full experience for premium events.",
    features: [
      "Everything in The Full Spread",
      "4 hours of service",
      "Unlimited drinks",
      "Styled cart setup to match your event",
      "Social media content from the event",
      "Dedicated event coordinator",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
          Packages
        </h2>
        <p className="mt-4 text-center text-espresso/50 max-w-lg mx-auto">
          Straightforward pricing. No hidden fees. Custom packages available for recurring bookings.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                pkg.highlighted
                  ? "border-espresso bg-espresso text-white"
                  : "border-espresso/10 bg-cream text-espresso"
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 right-6 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p className={`mt-2 text-sm ${pkg.highlighted ? "text-white/60" : "text-espresso/50"}`}>
                {pkg.description}
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm ${
                      pkg.highlighted ? "text-white/80" : "text-espresso/70"
                    }`}
                  >
                    <span className={`mt-0.5 ${pkg.highlighted ? "text-accent" : "text-accent"}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                  pkg.highlighted
                    ? "bg-accent text-white"
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
