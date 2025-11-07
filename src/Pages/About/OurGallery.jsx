import React from "react";
import Menu1 from "../../assets/Ag1.jpg";
import Menu2 from "../../assets/Ag2.jpg";
import Menu3 from "../../assets/Ag3.jpg";
import Menu4 from "../../assets/Ag4.jpg";
import Menu5 from "../../assets/Ag5.jpg";

const galleryItems = [
  {
    id: 2,
    src: Menu2,
    alt: "Close-up of coffee grinder",
  },
  {
    id: 3,
    src: Menu3,
    alt: "Plate of macarons with spoon",
  },
  {
    id: 4,
    src: Menu4,
    alt: "Glasses with whipped cream and cinnamon",
  },
  {
    id: 5,
    src: Menu5,
    alt: "Macarons dusted with cocoa powder",
  },
];

const OurGallery = () => {
  return (
    <section className="px-4 md:px-8 max-w-5xl text-center">
      {/* Gallery Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Large Left Image */}
        <div className="overflow-hidden  shadow-md">
          <img
            src={Menu1}
            alt="Manual coffee grinder with French press"
            className="w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Mapped Grid Items */}
        <div className="grid gap-5 grid-cols-2">
          {galleryItems.map((item) => (
            <div key={item.id} className="overflow-hidden  shadow-md">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full  object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <button className="bg-[#d4a373] text-white px-6 py-3 text-sm md:text-base oswald-SemiBold hover:bg-[#c48e5f] transition">
        VIEW MORE
      </button>
    </section>
  );
};

export default OurGallery;
