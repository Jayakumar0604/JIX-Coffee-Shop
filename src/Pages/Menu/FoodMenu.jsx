import React from "react";
import MenuImage from "../../assets/MenuBack.jpg";

const FoodMenu = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4 md:px-8 text-center"
      style={{ backgroundImage: `url(${MenuImage})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl md:py-30 lg:py-50 mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-6xl oswald-Bold uppercase mb-4">
          FOOD MENU
        </h2>
        <p className="text-sm md:text-base text-[#4b2e2e]">
          Complement your coffee with our freshly baked pastries, including
          flaky croissants and fudgy brownies. We also offer light bites and
          treats, using high-quality ingredients to make your visit complete and
          delicious.
        </p>
      </div>
    </section>
  );
};

export default FoodMenu;
