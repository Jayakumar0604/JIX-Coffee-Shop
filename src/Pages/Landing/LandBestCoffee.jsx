import React from "react";
import Back from "../../assets/Land-B2.jpg";
import { FaCoffee } from "react-icons/fa";
import { GiCoffeeBeans, GiMilkCarton } from "react-icons/gi";

const features = [
  { id: 1, icon: <GiCoffeeBeans />, label: "Best Beans" },
  { id: 2, icon: <GiMilkCarton />, label: "Quality Milk" },
  { id: 3, icon: <FaCoffee />, label: "Perfect Blend" },
];

const LandBestCoffee = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat place-items-center py-5 md:py-10 px-4 md:px-8 text-white"
      style={{ backgroundImage: `url(${Back})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl py-10 md:py-20 text-left">
        <div className="place-items-center space-y-5 text-center">
          <h2 className="text-3xl md:text-5xl oswald-Bold uppercase mb-8">
            The Best Coffee Shop
          </h2>

          {/* Icons and Labels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {features.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center gap-3 text-lg"
              >
                <span className="text-[#d4a373] text-6xl">{item.icon}</span>
                <span className="oswald-Bold  text-lg md:text-xl uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-200 mb-10 max-w-xl">
            Jix Coffee Shop offers exceptional blends, a cozy atmosphere, and
            friendly service. Find your perfect daily escape and enjoy the best
            brew in town!
          </p>

          {/* Button */}
          <button className="bg-[#d4a373] text-white text-sm md:text-base px-6 py-2 rounded-full uppercase oswald-Bold hover:bg-[#c48f5a] transition">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandBestCoffee;
