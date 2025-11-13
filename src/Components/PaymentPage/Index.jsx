import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext/Index";

const PaymentPage = () => {
  const { clearCart } = useContext(CartContext);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleConfirmPurchase = () => {
    clearCart();
    setSuccess(true);
    setTimeout(() => navigate("/shop"), 3000); // Redirect after 3 seconds
  };

  return (
    <section className="bg-white py-12 px-4 md:px-8 text-center">
      <h1 className="text-3xl font-bold mb-6 text-[#4b2e2e]">Payment Page</h1>

      {!success ? (
        <>
          <p className="text-gray-600 mb-6">
            Review your order and confirm your purchase.
          </p>
          <button
            onClick={handleConfirmPurchase}
            className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Confirm Purchase
          </button>
        </>
      ) : (
        <div className="mt-6 bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-md text-lg font-medium">
          ✅ Purchase successful! Redirecting to shop...
        </div>
      )}
    </section>
  );
};

export default PaymentPage;