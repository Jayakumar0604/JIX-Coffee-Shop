import React from "react";
import CCake from "../../assets/CCake.jpg";
import Macarons from "../../assets/Macarons.jpg";
import CupCake from "../../assets/CupCake.jpg";
import FrenchFries from "../../assets/FrenchFries.jpg";
import BlackCake from "../../assets/BlackCake.png";
import BlackCoffee from "../../assets/BlackCoffee.png";
import Coffee1 from "../../assets/Coffee.png";
import Latte from "../../assets/Latte.png";
import Browniee from "../../assets/Brownie.png";
import Macchiato from "../../assets/macchiato.png";
import { useNavigate } from "react-router-dom";

const MenuItems = () => {
  const menuData = [
    {
      id: 1,
      name: "Black Cake",
      image: CCake,
      price: "₹150",
      sale: false,
    },
    {
      id: 2,
      name: "Macarons",
      image: Macarons,
      price: "₹180",
      originalPrice: "₹200",
      sale: true,
    },
    {
      id: 3,
      name: "CupCake",
      image: CupCake,
      price: "₹200",
      originalPrice: "₹220",
      sale: true,
    },
    {
      id: 4,
      name: "French Fries",
      image: FrenchFries,
      price: "₹90",
      sale: false,
    },
    {
      id: 5,
      name: "Black Cake",
      image: BlackCake,
      price: "₹120",
      sale: false,
    },
    {
      id: 6,
      name: "Black Coffee",
      image: BlackCoffee,
      price: "₹100",
      sale: false,
    },
    {
      id: 7,
      name: "Espresso",
      image: Coffee1,
      price: "₹110",
      sale: false,
    },
    {
      id: 8,
      name: "Latte",
      image: Latte,
      price: "₹130",
      sale: false,
    },
    {
      id: 9,
      name: "Brownie",
      image: Browniee,
      price: "₹90",
      sale: false,
    },
    {
      id: 10,
      name: "Macchiato",
      image: Macchiato,
      price: "₹140",
      sale: false,
    },
  ];
  const navigate = useNavigate();
  const viewProduct = (item) => {
    navigate('/view-product', {state:item})
  };

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <h2 className="text-2xl md:text-4xl oswald-Bold uppercase text-center mb-10 text-[#4b2e2e]">
        Our Menu
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto">
        {menuData.map((item) => (
          <div
            key={item.id}
            className="bg-[#fdfaf6] rounded-lg shadow-md overflow-hidden text-center p-6 relative"
            onClick={() => viewProduct(item)}
          >
            {/* Sale Tag */}
            {item.sale && (
              <span className="absolute top-4 left-4 bg-[#f97316] text-white text-xs oswald-Bold px-2 py-1 rounded">
                Sale!
              </span>
            )}
            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-50 object-cover rounded-full shadow"
              />
            </div>
            {/* Name */}
            <h3 className="text-lg oswald-Bold uppercase text-[#4b2e2e] mb-2">
              {item.name}
            </h3>
            {/* Price */}
            <div className="text-sm text-gray-700">
              {item.sale ? (
                <div>
                  <span className="line-through mr-2 text-gray-400">
                    {item.originalPrice}
                  </span>
                  <span className="text-[#d4a373] oswald-SemiBold">
                    {item.price}
                  </span>
                </div>
              ) : (
                <span className="text-[#d4a373] oswald-SemiBold">
                  {item.price}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuItems;
