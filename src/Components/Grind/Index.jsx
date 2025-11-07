import React from "react";
import G1 from "../../assets/C-Grind-1.jpg";
import G2 from "../../assets/C-Grind-2.jpg";

const Grind = () => {
  return (
    <section className="text-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/* Image 1 */}
        <div className="overflow-hidden shadow-md">
          <img
            src={G1}
            alt="Manual coffee grinder with beans"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 2 */}
        <div className="overflow-hidden shadow-md">
          <img
            src={G2}
            alt="French press and bowl of coffee beans"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Grind;
