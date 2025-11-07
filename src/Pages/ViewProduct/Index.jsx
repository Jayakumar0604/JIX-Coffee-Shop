// import React from "react";
// import { useLocation } from "react-router-dom";

// const ViewProduct = () => {
//   const ProductDetails = useLocation();
//   const Product = ProductDetails.state;
//   console.log(Product, "Success");
//   return <div>ViewProduct</div>;
// };

// export default ViewProduct;
  
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ViewProduct = () => {
  const { state: product } = useLocation();
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-72 h-72 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#4b2e2e]">
            {product.name}
          </h2>

          {/* Price and Sale */}
          <div className="mb-4">
            {product.sale ? (
              <div>
                <span className="line-through text-gray-400 mr-2">₹200</span>
                <span className="text-[#d4a373] font-semibold text-xl">
                  {product.price}
                </span>
              </div>
            ) : (
              <span className="text-[#d4a373] font-semibold text-xl">
                {product.price}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-6">
            This is a simple, virtual product. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum sagittis orci ac odio
            dictum tincidunt. Donec et molestie leo.
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <label htmlFor="quantity" className="text-sm font-medium">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-16 px-2 py-1 border border-gray-300 rounded-md"
            />
          </div>

          {/* Add to Cart Button */}
          <button className="bg-[#d4a373] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#c48e5f] transition">
            Add to Cart
          </button>

          {/* Optional SKU and Category */}
          <div className="mt-6 text-sm text-gray-500">
            <p>SKU: woo-album</p>
            <p>
              Category: <span className="text-blue-600">Music</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewProduct;