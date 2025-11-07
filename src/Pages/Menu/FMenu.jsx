import React from "react";
import CCake from "../../assets/CCake.jpg";
import Macarons from "../../assets/Macarons.jpg";
import CupCake from "../../assets/CupCake.jpg";
import FrenchFries from "../../assets/FrenchFries.jpg";
import MenuCard from "../../Components/MenuCard/Index";

const FMenu = () => {
  const coffeeItems = [
    {
      id: 1,
      name: "Chocolate Cakes",
      image: CCake,
      description:
        "Our decadent Chocolate Cake is rich, moist, and deeply satisfying. The ultimate indulgence for any sweet craving.",
      price: "₹220",
    },
    {
      id: 2,
      name: "Macarons",
      image: Macarons,
      description:
        "Delicate, crisp French macarons with creamy fillings. A perfect, colorful bite of sweet, airy bliss.",
      price: "₹200",
    },
    {
      id: 3,
      name: "Cupcakes",
      image: CupCake,
      description:
        "Perfectly baked, moist cupcakes topped with sweet, fluffy buttercream. Your favorite treat in miniature form.",
      price: "₹160",
    },
    {
      id: 4,
      name: "French Fries",
      image: FrenchFries,
      description:
        "Crispy golden French Fries, perfectly salted and served hot. The ultimate, delicious, savory side treat.",
      price: "₹160",
    },
  ];
  return (
    <>
      <section className="bg-[#fdfaf6] py-12 px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-4xl oswald-Bold uppercase mb-8 text-[#4b2e2e]">
          Pastries
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
    </>
  );
};

export default FMenu;
//Pastries
