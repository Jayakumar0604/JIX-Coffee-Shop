import React from "react";
import Step1 from "../../assets/Step-1.jpg";
import Step2 from "../../assets/Step-2.jpg";
import Step3 from "../../assets/Step-3.jpg";
import Step4 from "../../assets/Step-4.jpg";

const stepData = [
  {
    id: 1,
    title: "STEP 1",
    image: Step1,
    description:
      "Roast the Beans to Perfection: Carefully monitor the beans as they develop, aiming for the precise color and aroma that matches your preferred flavor profile, ensuring a uniform and consistent roast for optimal taste extraction.",
  },
  {
    id: 2,
    title: "STEP 2",
    image: Step2,
    description:
      "Cool and Degas Immediately: After roasting, rapidly cool the beans to halt the chemical reactions. Allow them a brief degassing period (releasing CO2) to ensure the freshest flavor before packaging or proceeding with grinding for use.",
  },
  {
    id: 3,
    title: "STEP 3",
    image: Step3,
    description:
      "Measure and Prepare for Grind: Accurately weigh the specific amount of roasted beans required for the desired quantity of powder. Use a digital scale to maintain consistency, which is a critical factor for perfect brewing results every time.",
  },
  {
    id: 4,
    title: "STEP 4",
    image: Step4,
    description:
      "Grind Just Before Brewing: Use a quality burr grinder to break the beans into a uniform size, ensuring the grind setting matches your specific brewing method (e.g., coarse for French Press, fine for espresso) to create the powder.",
  },
];

const Steps = () => {
  return (
    <section className=" px-4 md:px-8">
      <div className="max-w-5xl  mx-auto">
        {stepData.map((step) => (
          <div key={step.id} className="py-3 md:py-10 ">
            <div className="md:py-10 border-t-2 border-[#00000017] ">
              <h3 className="text-lg md:text-xl oswald-Bold uppercase text-[#4b2e2e] mb-2">
                {step.title}
              </h3>
              <p className="text-sm md:text-base max-w-xl text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
            <img
              src={step.image}
              alt={step.title}
              className="w-full shadow-md mb-4"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
