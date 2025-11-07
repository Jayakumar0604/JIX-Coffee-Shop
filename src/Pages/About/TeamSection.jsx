import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Team1 from "../../assets/About2.png";
import Team2 from "../../assets/About1.png";
import Team3 from "../../assets/About3.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Indhumathi",
      title: "Owner",
      image: Team1,
      socials: ["facebook", "twitter", "linkedin"],
    },
    {
      name: "Jayakumar",
      title: "Chief Operating Officer",
      image: Team2,
      socials: ["facebook", "twitter", "linkedin"],
    },
    {
      name: "Sathya",
      title: "Staff Manager",
      image: Team3,
      socials: ["facebook", "twitter", "linkedin"],
    },
  ];

  const renderSocialIcon = (platform) => {
    const iconMap = {
      facebook: <FaFacebookF />,
      twitter: <FaTwitter />,
      linkedin: <FaLinkedinIn />,
    };
    return (
      <a
        key={platform}
        href="#"
        className="text-gray-500 hover:text-blue-600 transition duration-200"
        aria-label={platform}
      >
        {iconMap[platform]}
      </a>
    );
  };

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="w-40 h-40 mx-auto overflow-hidden rounded-full shadow-md mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg md:text-xl oswald-SemiBold mb-1">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{member.title}</p>
            <div className="flex justify-center gap-4 text-xl">
              {member.socials.map(renderSocialIcon)}
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-10">
        <button className="bg-[#d4a373] text-white px-6 py-3 text-sm md:text-base oswald-SemiBold hover:bg-[#c48e5f] transition">
          VIEW MORE
        </button>
      </div>
    </section>
  );
};

export default TeamSection;
