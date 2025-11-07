import React from "react";
import { FaChevronDown } from "react-icons/fa"; 

const GBack = ({ image, title = "", about = "", buttonText = "Start" }) => {
  return (
    <section
      className="relative w-full h-[600px] bg-cover  bg-center bg-no-repeat flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4">
        <h2 className="text-3xl md:text-5xl oswald-Bold uppercase text-white mb-4">
          {title}
        </h2>
        <p className="text-sm md:text-base text-gray-200 mb-6">{about}</p>
        <button className="bg-[#d4a373] text-white px-6 py-2 uppercase oswald-Bold hover:bg-[#c48f5a] transition">
          {buttonText}
        </button>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <FaChevronDown className="text-white text-xl animate-bounce" />
      </div>
    </section>
  );
};

export default GBack;