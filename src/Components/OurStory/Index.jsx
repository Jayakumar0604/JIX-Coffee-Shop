import React, { useState } from "react";
import Title from "../Title/Index";
import BgImage from "../../assets/ourstory.jpg";
import { FaRegPlayCircle } from "react-icons/fa";

const OurStory = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      className="relative bg-black bg-cover bg-center h-130 md:h-180 lg:h-screen py-16 px-4 md:px-8"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
        <Title
          style="bg-transparent"
          title="Our Story"
          titlestyle="text-white"
          about="Jix began with a simple passion: to share truly great coffee. We meticulously source and perfectly roast the best beans to create a welcoming place where community gathers over an exceptional cup."
          aboutstyle="text-gray-400"
        />

        {/* Play Button */}
        {!showVideo && (
          <button
            onClick={() => setShowVideo(true)}
            className="mt-6 p-4 rounded-full shadow-lg text-6xl hover:scale-105 transition"
          >
            <FaRegPlayCircle />
          </button>
        )}

        {/* YouTube Video */}
        {showVideo && (
          <div className="mt-8 max-w-3xl mx-auto aspect-video overflow-hidden">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/nyDnQQSUfL0"
              title="Coffee Shop Promotional Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurStory;