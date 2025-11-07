import React from "react";

const MenuCard = ({ name, image, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full text-center">
      {/* Rounded Image */}
      <div className="flex justify-center mt-6">
        <img
          src={image}
          alt={name}
          className="w-30 object-cover rounded-full shadow-md"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-base md:text-lg oswald-Bold uppercase mb-2 text-[#4b2e2e]">
            {name}
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-4">
            {description}
          </p>
        </div>
        <div className="text-center mt-auto">
          <span className="text-[#d4a373] oswald-Bold text-sm md:text-base">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;