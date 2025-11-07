import React from "react";
import IntroImage from "../../assets/G-Intro.jpg";

const Introduction = () => {
  return (
    <section className="bg-white py-5 md:py-12 px-4 md:px-8">
      <div className="max-w-5xl space-y-4  mx-auto ">
        <div className="grid grid-cols-1 text-center lg:text-left lg:grid-cols-3 lg:gap-10">
          <div>
            <h2 className="text-lg md:text-xl oswald-Bold uppercase text-[#4b2e2e] mb-4">
              An Introduction
            </h2>
            <p className="text-sm md:text-base text-gray-700 mb-8 leading-relaxed">
              Unlock the secrets to your perfect cup! This simple guide covers
              the basics: from selecting fresh beans and correct grind size to
              achieving ideal water temperature. Elevate your home brewing
              instantly!
            </p>
          </div>
          <div className="text-left place-items-center lg:place-items-start mb-6">
            <h3 className="text-lg md:text-xl oswald-Bold uppercase text-[#4b2e2e] mb-2">
              What You'll Need
            </h3>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-700">
              <li>Coffee</li>
              <li>French press</li>
              <li>Grinder</li>
              <li>Kettle</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-lg md:text-xl oswald-Bold uppercase text-[#4b2e2e] mb-2">
              Brew Time
            </h3>
            <p className="text-sm md:text-base text-gray-700">4min</p>
          </div>
        </div>

        {/* Image */}
        <img
          src={IntroImage}
          alt="Coffee Introduction"
          className="w-full shadow-md "
        />
      </div>
    </section>
  );
};

export default Introduction;
