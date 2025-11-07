import React, { useState } from "react";
import Back from "../../assets/Contact-1.jpg";

const Subscribe1 = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setNewsletterEmail(e.target.value);
    if (error) setError(""); // Clear error on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      setError("Email is required");
    } else {
      console.log("Subscribed:", newsletterEmail);
      setNewsletterEmail("");
      setError("");
    }
  };

  return (
    <section
      className="relative w-full h-[400px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${Back})` }}
    >
      {/* Overlay covers full image area */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Form Content */}
      <div className="relative z-10 w-full px-4 md:px-16 lg:px-24 max-w-xl ml-auto">
        <form onSubmit={handleSubmit} className=" p-6 rounded">
          <h2 className="text-xl oswald-Bold uppercase mb-4 text-white">
            Join Our Newsletter!
          </h2>
          <p className="text-sm mb-4 leading-relaxed text-white">
            Sign up for exclusive Jix news! Get new blend alerts, discounts, and
            brewing tips delivered straight to your inbox.
          </p>
          <input
            type="email"
            name="newsletterEmail"
            placeholder="Email"
            value={newsletterEmail}
            onChange={handleChange}
            className={`w-full p-2 mb-4 rounded text-black border ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-[#d4a373] text-white px-6 py-2 uppercase oswald-Bold hover:bg-[#c48f5a] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe1;
