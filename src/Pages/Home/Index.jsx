import React from "react";
import CoffeeBanner from "./CoffeeBanner";
import BestCoffe from "../../Components/BestCoffee/BestCoffe";
import BestBeens from "../../Components/BestBeen/Index";

const Home = () => {
  return (
    <>
      <CoffeeBanner />
      <BestCoffe Style="bg-[#1c1c1c] text-white" textStyle="text-gray-300" />
      <BestBeens />
    </>
  );
};

export default Home;
