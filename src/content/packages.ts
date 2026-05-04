export interface PackageItem {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const packages: PackageItem[] = [
  {
    name: "The Essentials",
    price: "$499",
    description: "Perfect for team lunches and small office events.",
    features: [
      "2 hours of service",
      "Up to 75 drinks",
      "Set drink menu",
    ],
  },
  {
    name: "The Full Spread",
    price: "$899",
    description: "Built for corporate events and celebrations.",
    features: [
      "3 hours of service",
      "Up to 150 drinks",
      "Custom drink menu",
      "Branded cups with your logo",
    ],
    highlighted: true,
  },
  {
    name: "The Experience",
    price: "$1,799",
    description: "For large events, product launches, and premium occasions.",
    features: [
      "4 hours of service",
      "Up to 250 drinks",
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
  "All supplies — cups, lids, sleeves, napkins, stirrers",
  "Houston metro travel included",
  "No deposit until your date is confirmed",
];

export const packagesNote =
  "Need more drinks? Every package can be extended at $8/cup — just let us know your expected headcount when booking.";
