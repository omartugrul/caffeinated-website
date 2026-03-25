"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Pick Your Package",
    description: "Choose the tier that fits your event size and vibe. Not sure? We'll help you figure it out.",
  },
  {
    number: "2",
    title: "Tell Us the Details",
    description: "Date, location, guest count. That's all we need. We'll send you a custom quote within hours.",
  },
  {
    number: "3",
    title: "We Handle Everything",
    description: "We show up with the cart, the barista, the beans, and the cups. You just enjoy the event.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-cream">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
          Booking Is Easy
        </h2>
        <p className="mt-4 text-center text-espresso/50 max-w-lg mx-auto">
          Three steps. That&apos;s it.
        </p>
        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white text-lg font-semibold">
                {step.number}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-espresso">{step.title}</h3>
              <p className="mt-2 text-espresso/60 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
