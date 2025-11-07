import React from "react";
import BlackCake from "../../assets/BlackCake.png";
import BlackCoffee from "../../assets/BlackCoffee.png";
import Coffee1 from "../../assets/Coffee.png";
import Latte from "../../assets/Latte.png";
import Browniee from "../../assets/Brownie.png";
import Macchiato from "../../assets/macchiato.png";
import MenuCard from "../../Components/MenuCard/Index";

const coffeeItems = [
  {
    id: 1,
    name: "Black Cake",
    image: BlackCake,
    description:
      "Our rich, dark Black Cake is moist, flavorful, and packed with fruits. A decadent, perfect treat.",
    price: "₹120",
  },
  {
    id: 2,
    name: "Black Coffee",
    image: BlackCoffee,
    description:
      "Experience the rich, clean flavor of our freshly brewed black coffee. Perfectly bold, simply the best start.",
    price: "₹100",
  },
  {
    id: 3,
    name: "Cappuccino",
    image: Coffee1,
    description:
      "Velvety steamed milk, a perfect shot of espresso, and thick, airy foam. Pure bliss in a cup.",
    price: "₹110",
  },
  {
    id: 4,
    name: "Latte",
    image: Latte,
    description:
      "Smooth, rich espresso blended with creamy steamed milk. A comforting, perfectly balanced daily favorite.",
    price: "₹130",
  },
  {
    id: 5,
    name: "Brownie",
    image: Browniee,
    description:
      "Our fudgy, chocolate-rich brownie is baked to perfection. A warm, dense, and deeply satisfying indulgence.",
    price: "₹90",
  },
  {
    id: 6,
    name: "Macchiato",
    image: Macchiato,
    description:
      "A bold shot of espresso marked with a dollop of frothy steamed milk. Small, strong perfection.",
    price: "₹140",
  },
];

const CoffeeMenu = () => {
  return (
    <section className="bg-[#fdfaf6] py-12 px-4 md:px-8 text-center">
      <h2 className="text-2xl md:text-4xl oswald-Bold uppercase mb-8 text-[#4b2e2e]">
        COFFEE MENU
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {coffeeItems.map((item) => (
          <MenuCard
            key={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default CoffeeMenu;
