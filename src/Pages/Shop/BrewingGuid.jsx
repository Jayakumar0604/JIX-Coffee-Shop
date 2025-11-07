import React from "react";
import Coffee from "../../assets/Shop-2.jpg";

const BrewingGuid = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        {/* Left Side: Text + Button */}
        <div className="place-content-center place-items-center">
          <div className="bg-white text-sm md:text-base max-w-xl flex flex-col justify-center px-8 py-12">
            <h2 className="text-2xl md:text-3xl oswald-Bold mb-4 uppercase text-[#4b2e2e]">
              View Brewing Guides
            </h2>
            <p className="text-gray-700 mb-6">
              Unlock your barista potential! Our comprehensive brewing guides
              offer easy steps, tips, and tricks for every method—from Pour Over
              to French Press. Learn to maximize flavor and consistently brew
              incredible coffee at home today!
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
    </>
  );
};

export default BrewingGuid;
