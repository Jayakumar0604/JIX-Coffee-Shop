import React from "react";
import { FaCoffee } from "react-icons/fa";
import { GiCoffeeBeans, GiMilkCarton } from "react-icons/gi";

const BestCoffe = ({ Style = "", textStyle = "" }) => {
  return (
    <section className={`py-16 md:py-20 px-4 md:px-6 text-center ${Style}`}>
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl oswald-Bold tracking-wide mb-4 md:mb-6 uppercase">
        THE BEST COFFEE SHOP
      </h1>

      {/* Subtext */}
      <p
        className={`max-w-xl mx-auto mb-10 md:mb-12 text-sm md:text-base ${textStyle}`}
      >
        Jix Coffee Shop offers exceptional blends, a cozy atmosphere, and
        friendly service. Find your perfect daily escape and enjoy the best brew
        in town!
      </p>

      {/* Icon Features */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 mb-10 md:mb-12">
        {/* BEST BEANS */}
        <div className="flex flex-col items-center text-center max-w-[220px]">
          <GiCoffeeBeans className="text-4xl md:text-5xl mb-2 text-[#d4a373]" />
          <span className="text-base md:text-lg oswald-SemiBold">
            BEST BEANS
          </span>
          <p className="text-sm text-gray-400 mt-2">
            Finest ethically sourced beans, perfectly roasted for your
            incredible daily brew.
          </p>
        </div>

        {/* QUALITY MILK */}
        <div className="flex flex-col items-center text-center max-w-[220px]">
          <GiMilkCarton className="text-4xl md:text-5xl mb-2 text-[#d4a373]" />
          <span className="text-base md:text-lg oswald-SemiBold">
            QUALITY MILK
          </span>
          <p className="text-sm text-gray-400 mt-2">
            Fresh, high-quality milk, perfectly steamed to complement our
            exceptional coffee.
          </p>
        </div>

        {/* PERFECT BLEND */}
        <div className="flex flex-col items-center text-center max-w-[220px]">
          <FaCoffee className="text-4xl md:text-5xl mb-2 text-[#d4a373]" />
          <span className="text-base md:text-lg oswald-SemiBold">
            PERFECT BLEND
          </span>
          <p className="text-sm text-gray-400 mt-2">
            Our signature blend delivers rich, balanced flavor—your ideal daily
            cup.
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="bg-[#d4a373] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#e6b17e] transition">
        ABOUT US
      </button>
    </section>
  );
};

export default BestCoffe;
