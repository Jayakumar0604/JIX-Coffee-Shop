import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext/Index";

const ViewCart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-6 text-[#4b2e2e] text-center">Cart</h1>

      {cartItems.length === 0 ? (
        <div className="max-w-xl mx-auto bg-blue-100 border border-blue-300 text-blue-800 px-6 py-4 rounded-md mb-6 text-center">
          Your cart is currently empty.
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-[#4b2e2e]">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                  className="w-16 px-2 py-1 border border-gray-300 rounded-md"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-10 flex flex-col items-center gap-4">
        <button
          onClick={() => navigate("/shop")}
          className="bg-[#d4a373] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#c48e5f] transition"
        >
          Return to shop
        </button>

        {cartItems.length > 0 && (
          <button
            onClick={() => navigate("/payment")}
            className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Confirm Order
          </button>
        )}
      </div>
    </section>
  );
};

export default ViewCart;