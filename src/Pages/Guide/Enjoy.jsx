import React from "react";
import EnjoyImage from "../../assets/Enjoy.jpg";

const Enjoy = () => {
  return (
    <section
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${EnjoyImage})` }}
    >
      {/* Optional dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Centered Text */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl oswald-Bold uppercase text-white tracking-wide">
          ENJOY!
        </h2>
      </div>
    </section>
  );
};

export default Enjoy;