import React from "react";
import Snack1 from "../../assets/Burger.jpg";
import Snack2 from "../../assets/Donuts.jpg";
import Snack3 from "../../assets/snack3.jpg";
import Snack4 from "../../assets/Snack4.jpg";

const Snacks = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <img src={Snack1} alt="Snack 1" className="w-full" />
        <img src={Snack2} alt="Snack 2" className="w-full" />
        <img src={Snack3} alt="Snack 3" className="w-full" />
        <img src={Snack4} alt="Snack 4" className="w-full" />
      </div>
    </section>
  );
};

export default Snacks;
