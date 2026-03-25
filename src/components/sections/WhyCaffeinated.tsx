"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "You Look Like a Hero",
    description:
      "The person who booked us always gets the credit. We make your team, your clients, or your guests feel taken care of — and you look great for making it happen.",
  },
  {
    title: "We Bring Everything",
    description:
      "The cart, the barista, the beans, the cups, the napkins, the setup, the teardown. You don't lift a finger. We show up ready and leave it spotless.",
  },
  {
    title: "Tailored to Your Event",
    description:
      "Custom drink menus, branded cups, setup styling that matches your vibe. Whether it's a Monday office pop-up or a Saturday wedding, we make it fit.",
  },
];

export default function WhyCaffeinated() {
  return (
    <section id="why" className="py-24 px-6 bg-cream">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
          Why Caffeinated
        </h2>
        <p className="mt-4 text-center text-espresso/50 max-w-lg mx-auto">
          We&apos;re not a coffee truck. We&apos;re a mobile espresso bar that runs like a real company.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white border border-espresso/10 p-8"
            >
              <h3 className="text-lg font-bold text-espresso">{reason.title}</h3>
              <p className="mt-3 text-espresso/60 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
