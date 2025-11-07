import React from "react";
import SBackground from "../../Components/SBackground/Index";
import Back from "../../assets/About.jpg";
import BestCoffe from "../../Components/BestCoffee/BestCoffe";
import WeServe from "./WeServe";
import Title from "../../Components/Title/Index";
import OurGallery from "./OurGallery";
import OurStory from "../../Components/OurStory/Index";
import Grind from "../../Components/Grind/Index";
import TeamSection from "./TeamSection";
import Subscribe from "../../Components/Subscribe/Index";

const About = () => {
  return (
    <>
      <SBackground
        title="ABOUT US"
        text="Jix was founded on a passion for incredible coffee and community. We meticulously source, perfectly roast, and expertly prepare every cup, ensuring your visit is the highlight of your day."
        image={Back}
      />
      <BestCoffe textStyle="text-gray-700" />
      <WeServe />
      <div className="place-items-center pb-10">
        <Title
          title="Our Gallery"
          about="Browse our Gallery for a visual taste of the cozy atmosphere, expertly crafted drinks, and happy moments at Jix Coffee Shop."
          aboutstyle="text-gray-600"
        />
        <OurGallery />
      </div>
      <OurStory />
      <Grind />
      <div>
        <Title
          title="Our Team"
          about="Meet the passionate team at Jix! We are expert baristas and coffee enthusiasts dedicated to crafting your perfect drink with a smile. Our goal is simple: to make your coffee moment the best part of your day."
          aboutstyle="text-gray-600"
        />
        <TeamSection />
      </div>
      <Subscribe />
    </>
  );
};

export default About;
