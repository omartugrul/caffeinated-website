export interface MenuCategory {
  name: string;
  tagline: string;
  image: string;
  drinks: string[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: "Cold Brews",
    tagline: "Smooth, bold, served over ice.",
    image: "/photos/menu/cold-brews.jpg",
    drinks: [
      "Salted Caramel",
      "Brown Sugar Vanilla",
      "Churro",
      "Maple Vanilla",
      "Spanish",
    ],
  },
  {
    name: "Chai Lattes",
    tagline: "Warm spice, perfectly sweet.",
    image: "/photos/menu/chai-lattes.jpg",
    drinks: ["Vanilla Cinnamon", "Spanish Chai"],
  },
  {
    name: "Matcha Lattes",
    tagline: "Vibrant, creamy, crowd favorite.",
    image: "/photos/menu/matcha-lattes.jpg",
    drinks: ["Maple", "Strawberry", "Mango"],
  },
  {
    name: "Refreshers",
    tagline: "Light, fruity, no caffeine needed.",
    image: "/photos/menu/refreshers.jpg",
    drinks: ["Strawberry Lemonade", "Mango Passionfruit"],
  },
];

export const totalDrinkCount = menuCategories.reduce(
  (sum, cat) => sum + cat.drinks.length,
  0,
);
