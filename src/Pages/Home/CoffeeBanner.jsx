import bgImage from "../../assets/CHome.jpg"; // Update to your actual image path

const CoffeeBanner = () => {
  return (
    <div
      className="w-full h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs md:backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl oswald-Bold tracking-wide mb-4">
          COFFEE HOUSE
        </h1>
        <p className="text-lg md:text-xl text-amber-50 mb-6">
          Serving Only the Best since 2013
        </p>
        <button className="bg-[#DCA57D] hover:bg-[#DCA57D] text-white px-6 py-2  text-sm md:text-base oswald-Medium transition-colors duration-200">
          SHOP
        </button>
      </div>
    </div>
  );
};

export default CoffeeBanner;
