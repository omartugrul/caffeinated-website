"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2-3 weeks out, but we can sometimes accommodate shorter timelines. For peak season (October through December), book as early as possible. Those dates fill up fast.",
  },
  {
    question: "What's included in every package?",
    answer:
      "Every package includes a professional barista, our full espresso cart setup, all drinks and supplies (cups, lids, napkins, stirrers), setup and teardown, and travel anywhere in the Houston metro area. You don't need to provide anything.",
  },
  {
    question: "Can I customize the drink menu?",
    answer:
      "Absolutely. Our Full Spread and VIP packages include a custom menu tailored to your event. Want seasonal specials, signature drinks with custom names, or specific milk options? We'll work with you to build the perfect menu.",
  },
  {
    question: "Do you serve areas outside Houston?",
    answer:
      "We cover the entire Houston metro area, including Katy, Sugar Land, The Woodlands, Pearland, Clear Lake, and everywhere in between. Travel is included in all packages. For events outside the metro, reach out and we'll make it work.",
  },
  {
    question: "How many drinks can you serve per hour?",
    answer:
      "Our baristas can serve approximately 60–80 drinks per hour. For larger events, we can add additional baristas to keep the line moving. Nobody waits long for their coffee.",
  },
  {
    question: "What if I'm not sure which package I need?",
    answer:
      "Just tell us your event type, guest count, and date. We'll recommend the right package and put together a custom quote. No pressure, no upselling. We want to find the right fit.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-espresso/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-medium text-espresso pr-4">{question}</span>
        <span className="ml-4 text-accent text-lg flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-espresso/60 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 bg-cream">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-12">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
