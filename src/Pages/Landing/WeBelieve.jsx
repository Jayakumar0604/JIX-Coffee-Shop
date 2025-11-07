import React from "react";
import Pic from "../../assets/Land-B1.jpg";
import Coffee1 from "../../assets/coffee-1.png";
import Coffee2 from "../../assets/coffee-2.png";
import Coffee3 from "../../assets/coffee-3.png";

const coffeeMenu = [
  {
    id: 1,
    name: "Mocha Latte",
    image: Coffee1,
    description:
      "Rich chocolate blended with creamy steamed milk and bold espresso. A decadent, comforting treat for any time of day.",
  },
  {
    id: 2,
    name: "Pour Over",
    image: Coffee2,
    description:
      "Experience the cleanest, most nuanced flavor. Our Pour Over method highlights the unique characteristics of our single-origin beans.",
  },
  {
    id: 3,
    name: "Cappuccino",
    image: Coffee3,
    description:
      "A classic blend of rich espresso, velvety steamed milk, and a thick cap of airy foam. The perfect traditional Italian coffee experience.",
  },
];

const WeBelieve = () => {
  return (
    <section
      className="relative bg-cover bg-top-left md:bg-center bg-no-repeat py-10 md:py-20 px-4 md:px-8 text-center"
      style={{ backgroundImage: `url(${Pic})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-6xl text-[#242424] oswald-Bold uppercase mb-8">
          We Believe In Coffee That Tastes Incredible
        </h2>
        <p className="text-sm md:text-base text-white mb-10">
          We don't just serve coffee; we serve an experience. We believe in
          coffee that tastes incredible, meticulously sourced and expertly
          roasted to ensure every single sip is rich, memorable, and satisfying.
        </p>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {coffeeMenu.map((item) => (
            <div key={item.id} className="text-center ">
              <img
                src={item.image}
                alt={item.name}
                className="w-50 mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg oswald-Bold bg-amber-50 uppercase text-[#4b2e2e] mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-white  px-4">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="bg-[#d4a373] text-white px-6 py-2 rounded-full uppercase oswald-Bold hover:bg-[#c48f5a] transition">
          Full Menu
        </button>
      </div>
    </section>
  );
};

export default WeBelieve;
