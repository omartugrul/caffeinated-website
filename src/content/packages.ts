export interface PackageItem {
  name: string;
  price: string;
  description: string;
  formDescription: string;
  features: string[];
  highlighted?: boolean;
}

export const packages: PackageItem[] = [
  {
    name: "The Essentials",
    price: "$499",
    description: "Perfect for team lunches and small office events.",
    formDescription: "Great for smaller, more intimate events.",
    features: [
      "2 hours of service",
      "Up to 50 drinks",
      "Set menu: choose 2 cold brew drinks",
    ],
  },
  {
    name: "The Full Spread",
    price: "$899",
    description: "Built for corporate events and celebrations.",
    formDescription: "Our most-booked package, works for most events.",
    features: [
      "3 hours of service",
      "Up to 100 drinks",
      "Custom drink menu",
      "Branded cups with your logo",
    ],
    highlighted: true,
  },
  {
    name: "The Experience",
    price: "$1,799",
    description: "For large events, product launches, and premium occasions.",
    formDescription: "For large or premium events that call for extra polish.",
    features: [
      "4 hours of service",
      "Up to 200 drinks",
      "Custom drink menu",
      "Branded cups with your logo",
      "Cart styled to match your event",
      "Custom printed event signage",
    ],
  },
];

export const packagesBoilerplate: string[] = [
  "Professional barista",
  "Full cart setup + teardown",
  "All supplies included",
  "Houston metro travel included",
];

export const packagesNote =
  "Need more drinks? Every package can be extended at $8/cup. Just let us know your expected headcount when booking.";
