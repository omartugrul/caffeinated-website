export interface DrinkItem {
  name: string;
  subtitle: string;
  ingredients: string[];
  image: string;
}

export const drinks: DrinkItem[] = [
  {
    name: "Caf-feign-ated",
    subtitle: "Iced Chai",
    ingredients: ["Spiced chai concentrate", "Oat milk", "Vanilla", "Cinnamon dusting"],
    image: "/photos/drinks/iced-chai.jpg",
  },
  {
    name: "The Grind",
    subtitle: "Cold Brew",
    ingredients: ["24-hour steeped cold brew", "Brown sugar syrup", "Splash of cream"],
    image: "/photos/drinks/cold-brew.jpg",
  },
  {
    name: "Velvet Shot",
    subtitle: "Latte",
    ingredients: ["Double espresso", "Steamed oat milk", "Vanilla bean", "Latte art"],
    image: "/photos/drinks/latte.jpg",
  },
  {
    name: "Main Character",
    subtitle: "Matcha",
    ingredients: ["Ceremonial grade matcha", "Oat milk", "Honey", "Ice"],
    image: "/photos/drinks/matcha.jpg",
  },
  {
    name: "Plot Twist",
    subtitle: "Refresher",
    ingredients: ["Passion fruit", "Mango", "Green tea base", "Fresh mint"],
    image: "/photos/drinks/refresher.jpg",
  },
];
