"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Section, SectionHeading, Button } from "@/components/ui";

const steps = [
  {
    number: "1",
    title: "Pick Your Package",
    description:
      "Choose the tier that fits your event size and vibe. Want a custom drink menu or branded cups? We'll make it happen.",
  },
  {
    number: "2",
    title: "Share the Details",
    description:
      "Date, location, guest count. That's all we need. We'll send you a custom quote within hours.",
  },
  {
    number: "3",
    title: "Show Up and Be the Hero",
    description:
      "We bring the cart, the barista, the beans, and handle all setup and teardown. You just enjoy the event and take the credit.",
  },
];

function StepItem({
  step,
  index,
  progress,
}: {
  step: (typeof steps)[number];
  index: number;
  progress: ReturnType<typeof useTransform<number, number>>;
}) {
  const threshold = index / steps.length;
  const opacity = useTransform(
    progress,
    [threshold, threshold + 0.15],
    [0.3, 1]
  );
  const y = useTransform(progress, [threshold, threshold + 0.15], [16, 0]);
  const numberBg = useTransform(
    progress,
    [threshold, threshold + 0.1],
    [0, 1]
  );
  const bgColor = useTransform(
    numberBg,
    [0, 1],
    ["rgba(45,27,20,0.08)", "rgba(45,27,20,1)"]
  );
  const textColor = useTransform(
    numberBg,
    [0, 1],
    ["rgba(45,27,20,0.4)", "rgba(249,246,241,1)"]
  );
  const lineScaleY = useTransform(
    progress,
    [threshold + 0.1, (index + 1) / steps.length],
    [0, 1]
  );

  return (
    <div className="flex gap-4 md:gap-5 relative">
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          style={{ backgroundColor: bgColor, color: textColor }}
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
        >
          {step.number}
        </motion.div>

        {index < steps.length - 1 && (
          <div className="w-px flex-1 min-h-[24px] bg-espresso/[0.06] relative mt-1.5 mb-1.5">
            <motion.div
              className="absolute inset-0 bg-espresso/15 origin-top"
              style={{ scaleY: lineScaleY }}
            />
          </div>
        )}
      </div>

      <motion.div className="flex-1 pb-6 md:pb-12" style={{ opacity, y }}>
        <h3 className="text-lg font-semibold text-espresso">{step.title}</h3>
        <p className="mt-2 text-[0.95rem] text-espresso/60 leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.55", "end 0.6"],
  });

  return (
    <Section id="how-it-works">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading subtitle="We're not an afterthought. We're a mobile coffee bar that takes care of everything from setup to the last cup.">
          The Experience
        </SectionHeading>
      </motion.div>

      <div
        ref={sectionRef}
        className="mt-10 md:mt-16 grid md:grid-cols-2 gap-8 md:gap-16 items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hidden md:block rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/photos/team-with-cart.jpeg"
            alt="Caffeinated team with coffee cart"
            width={600}
            height={750}
            className="w-full object-cover aspect-square sepia-[.3] brightness-[0.9]"
          />
        </motion.div>

        <ol className="flex flex-col list-none p-0 m-0">
          {steps.map((step, index) => (
            <li key={step.number}>
              <StepItem
                step={step}
                index={index}
                progress={scrollYProgress}
              />
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-12 text-center">
        <Button href="#contact">Book My Event</Button>
        <p className="mt-2 text-xs text-espresso/40">No commitment &middot; Same-day response</p>
      </div>
    </Section>
  );
}
