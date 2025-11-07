import React from "react";
import GBack from "../../Components/GBack/Index";
import Back from "../../assets/Guide.jpg";
import Introduction from "./Introduction";
import Steps from "./Steps";
import Enjoy from "./Enjoy";

const Guide = () => {
  return (
    <>
      <section>
        <GBack
          image={Back}
          title="French Press"
          about="A guide to brewing the perfect cup"
          buttonText="Start"
        />
        <Introduction />
        <Steps />
        <Enjoy />
      </section>
    </>
  );
};

export default Guide;
