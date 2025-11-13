import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../Components/CartContext/Index";

const ViewProduct = () => {
  const { state: product } = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, Number(quantity));
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-72 h-72 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#4b2e2e]">
            {product.name}
          </h2>

          <div className="mb-4">
            {product.sale ? (
              <>
                <span className="line-through text-gray-400 mr-2">₹200</span>
                <span className="text-[#d4a373] font-semibold text-xl">
                  {product.price}
                </span>
              </>
            ) : (
              <span className="text-[#d4a373] font-semibold text-xl">
                {product.price}
              </span>
            )}
          </div>

          <p className="text-sm text-gray-600 mb-6">
            This is a simple, virtual product. Lorem ipsum dolor sit amet...
          </p>

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

          <button
            onClick={handleAddToCart}
            className="bg-[#d4a373] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#c48e5f] transition"
          >
            Add to Cart
          </button>

          {showAlert && (
            <div className="mt-6 bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded-md text-sm">
              Product added to cart successfully!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ViewProduct;