export interface DrinkItem {
  name: string;
  description: string;
  image: string;
}

export const drinks: DrinkItem[] = [
  {
    name: "Salted Caramel Cold Brew",
    description: "Salted caramel syrup, splash of cream, served over ice",
    image: "/photos/drinks/salted-caramel-cold-brew.jpg",
  },
  {
    name: "Brown Sugar Vanilla Cold Brew",
    description: "Brown sugar syrup, vanilla, milk",
    image: "/photos/drinks/brown-sugar-vanilla-cold-brew.jpg",
  },
  {
    name: "Vanilla Cinnamon Chai",
    description: "Chai concentrate, vanilla syrup, pinch of cinnamon",
    image: "/photos/drinks/vanilla-cinnamon-chai.jpg",
  },
  {
    name: "Dirty Chai",
    description: "Chai concentrate, espresso, condensed milk",
    image: "/photos/drinks/dirty-chai.jpg",
  },
  {
    name: "Plain Matcha Latte",
    description: "Ceremonial matcha, maple syrup, steamed milk",
    image: "/photos/drinks/matcha.jpg",
  },
  {
    name: "Strawberry Matcha Latte",
    description: "Ceremonial matcha, strawberry, steamed milk",
    image: "/photos/drinks/strawberry-matcha.jpg",
  },
  {
    name: "Mango Matcha Latte",
    description: "Ceremonial matcha, mango, steamed milk",
    image: "/photos/drinks/mango-matcha.jpg",
  },
  {
    name: "Strawberry Lemonade Refresher",
    description: "Fresh lemonade, strawberry syrup",
    image: "/photos/drinks/strawberry-lemonade.jpg",
  },
  {
    name: "Mango Passionfruit Refresher",
    description: "Sparkling water, mango & passionfruit syrup",
    image: "/photos/drinks/mango-passionfruit.jpg",
  },
];
