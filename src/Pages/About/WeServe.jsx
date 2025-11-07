import React from "react";
import image from "../../assets/About-C1.jpg";
const WeServe = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover min-h-[600px] grid grid-cols-1 md:grid-cols-2 items-center px-6 py-12"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Left Side: Text + Button */}
      <div className="relative z-10 text-white px-4 md:px-8 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl oswald-Bold uppercase mb-4 ">
          WE SERVE DELICIOUS COFFEE
        </h2>
        <p className="text-sm md:text-base mb-6 max-w-md">
          At Jix Coffee Shop, we serve delicious coffee that brightens your day.
          Each cup is carefully prepared by expert baristas, ensuring a perfect,
          flavorful experience every time you visit. It's simply the best!
        </p>
        <button className="bg-[#f4a261] text-white px-6 py-3 text-sm md:text-base rounded-md oswald-SemiBold hover:bg-[#e38b4d] transition">
          BROWSE MENU
        </button>
      </div>

      {/* Right Side: Video + Stats */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8 mt-10 md:mt-0">
        <div className="w-full max-w-md aspect-video mb-6">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/nyDnQQSUfL0"
            title="Coffee Shop Promotional Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Stats */}
        <div className="flex gap-10 text-white text-center">
          <div>
            <h3 className="text-2xl oswald-Bold">12</h3>
            <p className="text-sm md:text-base  text-[#DCA47D] uppercase">Bean Varieties</p>
          </div>
          <div>
            <h3 className="text-2xl oswald-Bold">8</h3>
            <p className="text-sm md:text-base text-[#DCA47D] uppercase">Locations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeServe;
