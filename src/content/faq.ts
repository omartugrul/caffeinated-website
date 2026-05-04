export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "How far in advance should I book?",
    answer:
      "The sooner the better. Dates fill up and we want to make sure yours is available. If you have an event in mind, get your quote request in now and we'll confirm availability within a few hours.",
  },
  {
    question: "What's included in every package?",
    answer:
      "Every package includes a professional barista, our full coffee cart setup, all drinks and supplies (cups, lids, napkins, stirrers), setup and teardown, and travel anywhere in the Houston metro area. You don't need to provide anything.",
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
      "We build each setup around your guest count so the line keeps moving. When you request a quote, share your headcount and event length and we'll make sure the right capacity is in place.",
  },
  {
    question: "What if I'm not sure which package I need?",
    answer:
      "Just tell us your event type, guest count, and date. We'll recommend the right package and put together a custom quote.",
  },
];
