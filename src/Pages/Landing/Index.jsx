import React from "react";
import Back from "../../assets/Land.jpg";
import GBack from "../../Components/GBack/Index";
import WeBelieve from "./WeBelieve";
import OurStory from "../../Components/OurStory/Index";
import BestBeens from "../../Components/BestBeen/Index";
import LandBestCoffee from "./LandBestCoffee";
import Snacks from "../../Components/Snacks/Index";
const Landing = () => {
  return (
    <>
      <GBack
        image={Back}
        title="Coffee House"
        about="Serving Only the Best since 2013"
        buttonText="Shop"
      />
      <WeBelieve />
      <OurStory />
      <BestBeens />
      <LandBestCoffee />
      <Snacks />
    </>
  );
};

export default Landing;
