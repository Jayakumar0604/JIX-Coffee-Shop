import React from "react";
import { useNavigate } from "react-router-dom";

const ViewCart = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/shop"); 
  };

  return (
    <section className="bg-white py-12 px-4 md:px-8 text-center">
      <h1 className="text-3xl font-bold mb-6 text-[#4b2e2e]">Cart</h1>

      <div className="max-w-xl mx-auto bg-blue-100 border border-blue-300 text-blue-800 px-6 py-4 rounded-md mb-6">
        Your cart is currently empty.
      </div>

      <button
        onClick={handleReturn}
        className="bg-[#d4a373] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#c48e5f] transition"
      >
        Return to shop
      </button>
    </section>
  );
};

export default ViewCart;