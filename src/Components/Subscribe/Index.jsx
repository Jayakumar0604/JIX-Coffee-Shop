import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (email.trim()) {
      // Handle successful submission logic here
      console.log("Subscribed:", email);
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-md border ${
    submitted && !email.trim() ? "border-red-500" : "border-gray-300"
  } text-black focus:outline-none focus:ring-2 focus:ring-[#d4a373]`;

  return (
    <section className="bg-[#3d3a35] text-white py-10 md:py-20 px-4 md:px-8 text-center">
      <h2 className="text-2xl md:text-4xl oswald-Bold uppercase mb-4">
        JOIN OUR NEWSLETTER!
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-base text-gray-300 mb-8">
        Want the inside scoop on new seasonal blends, exclusive discounts, and
        upcoming events at Jix Coffee Shop? Sign up for our newsletter today!
        Get the best coffee news delivered straight to your inbox..
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto text-white flex flex-col items-center gap-4"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`text-white ${inputClass}`}
        />
        <button
          type="submit"
          className="bg-[#d4a373]  md:px-47 py-3 rounded-md oswald-SemiBold hover:bg-[#c48e5f] transition w-full sm:w-auto"
        >
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
};

export default Subscribe;
