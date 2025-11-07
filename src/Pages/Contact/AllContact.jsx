import React, { useState } from "react";
import Subscribe1 from "./Subscribe1";

const AllContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
    newsletterEmail: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.details.trim()) newErrors.details = "Details are required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Reset or send data
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-[#fffaf3] gap-8 py-12  px-4 md:px-8">
      {/* Email Us Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl oswald-Bold uppercase mb-4 text-[#4b2e2e]">
          Email Us
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-2 mb-2 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-2">{errors.name}</p>
        )}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 mb-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-2">{errors.email}</p>
        )}

        {/* Details */}
        <textarea
          name="details"
          placeholder="Requirement Details"
          value={formData.details}
          onChange={handleChange}
          className={`w-full p-2 mb-2 border ${
            errors.details ? "border-red-500" : "border-gray-300"
          } rounded h-24 resize-none`}
        />
        {errors.details && (
          <p className="text-red-500 text-sm mb-2">{errors.details}</p>
        )}

        <button
          type="submit"
          className="bg-[#d4a373] text-white px-6 py-2 uppercase oswald-Bold hover:bg-[#c48f5a] transition"
        >
          Submit
        </button>
      </form>

      {/* Newsletter Form */}

      <Subscribe1 />
    </section>
  );
};

export default AllContact;
