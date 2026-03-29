export interface DrinkItem {
  name: string;
  subtitle: string;
  ingredients: string[];
  image: string;
}

export const drinks: DrinkItem[] = [
  {
    name: "Cold Brew",
    subtitle: "Cold Brew",
    ingredients: ["Batched ahead of time"],
    image: "/photos/drinks/cold-brew.jpg",
  },
  {
    name: "Salted Caramel Cold Brew",
    subtitle: "Cold Brew",
    ingredients: ["Cold brew", "Salted caramel syrup", "Splash of cream", "Served over ice"],
    image: "/photos/drinks/salted-caramel-cold-brew.jpg",
  },
  {
    name: "Chai Latte",
    subtitle: "Chai",
    ingredients: ["Chai concentrate", "Steamed milk"],
    image: "/photos/drinks/chai-latte.jpg",
  },
  {
    name: "Vanilla Cinnamon Chai",
    subtitle: "Chai",
    ingredients: ["Chai concentrate", "Vanilla syrup", "Pinch of cinnamon"],
    image: "/photos/drinks/vanilla-cinnamon-chai.jpg",
  },
  {
    name: "Plain Matcha",
    subtitle: "Matcha Latte",
    ingredients: ["Matcha", "Maple syrup"],
    image: "/photos/drinks/matcha.jpg",
  },
  {
    name: "Strawberry Matcha",
    subtitle: "Matcha Latte",
    ingredients: ["Matcha", "Strawberry"],
    image: "/photos/drinks/strawberry-matcha.jpg",
  },
  {
    name: "Mango Matcha",
    subtitle: "Matcha Latte",
    ingredients: ["Matcha", "Mango"],
    image: "/photos/drinks/mango-matcha.jpg",
  },
  {
    name: "Strawberry Lemonade Refresher",
    subtitle: "Refresher",
    ingredients: ["Lemonade", "Strawberry syrup"],
    image: "/photos/drinks/strawberry-lemonade.jpg",
  },
  {
    name: "Mango Passionfruit Refresher",
    subtitle: "Refresher",
    ingredients: ["Sparkling water", "Mango & passionfruit syrup"],
    image: "/photos/drinks/mango-passionfruit.jpg",
  },
];
