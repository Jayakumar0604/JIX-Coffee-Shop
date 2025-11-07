import React from "react";
import Coffee from "../../assets/CTwo.jpg";
import Coffee1 from "../../assets/CThree.jpg";

const BestBeens = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        {/* Left Side: Text + Button */}
        <div className="place-content-center place-items-center">
          <div className="bg-white text-sm md:text-base max-w-xl flex flex-col justify-center px-8 py-12">
            <h2 className="text-2xl md:text-3xl oswald-Bold mb-4 uppercase text-[#4b2e2e]">
              FRESH BEANS
            </h2>
            <p className="text-gray-700 mb-6">
              We only use freshly roasted, premium coffee beans, sourced
              ethically from the world's best farms. This commitment ensures
              every cup at Jix Coffee Shop delivers a rich, vibrant, and
              unforgettable flavor. Taste the difference freshness makes!
            </p>
            <button className="bg-[#d4a373] text-white px-6 py-3  oswald-SemiBold w-fit hover:bg-[#c48e5f] transition">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Right Side: Coffee Beans Image */}
        <div
          className="bg-cover h-60 md:h-auto bg-center"
          style={{ backgroundImage: `url(${Coffee})` }}
        >
          {/* Empty div just for background image */}
        </div>
      </section>
      <section className="grid grid-cols-1 bg-[#e3dacd] md:grid-cols-2 items-center min-h-[500px]">
        {/* Left Side: Coffee Image */}
        <div className="h-full w-full">
          <img
            src={Coffee1}
            alt="Coffee beans in bowl"
            className="w-full pt-5 md:pt-0 h-full object-cover"
          />
        </div>

        {/* Right Side: Text + Button */}
        <div className="px-8 py-12 text-sm md:text-base flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl oswald-Bold uppercase text-[#4b2e2e] mb-4">
            GREAT COFFEE
          </h2>
          <p className="text-gray-700 mb-6">
            Experience great coffee at Jix, where passion meets the cup. Our
            expert baristas meticulously craft every drink using perfectly
            roasted, high-quality beans. It's more than a drink; it's your daily
            moment of pure bliss.{" "}
          </p>
          <button className="bg-[#f4a261] text-white px-6 py-3 font-semibold w-fit hover:bg-[#e38b4d] transition">
            FULL MENU
          </button>
        </div>
      </section>
    </>
  );
};

export default BestBeens;
