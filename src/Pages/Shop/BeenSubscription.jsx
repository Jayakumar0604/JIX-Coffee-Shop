import React from "react";
import Been from "../../assets/Shop-1.jpg";

const BeenSubscription = () => {
  return (
    <section
      className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${Been})` }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Text Content aligned left */}
      <div className="relative z-10 w-full px-4 md:px-16 lg:px-24 text-white">
        <div className="max-w-xl text-left">
          <h2 className="text-2xl md:text-4xl oswald-Bold uppercase mb-4">
            Coffee Bean Subscriptions
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            Never run out of great coffee! Subscribe to receive our freshest,
            expertly roasted coffee beans delivered right to your door monthly.
            Customize your blend preference easily.
          </p>
          <button className="bg-[#d4a373] text-white px-6 py-2 rounded-full uppercase oswald-Bold hover:bg-[#c48f5a] transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeenSubscription;
