import React, { useState } from "react";
import "./Contactus.css";
import "../pages/Contactus.css";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    helpType: "An existing order",
    email: "",
    username: "",
    date: "",
    orderId: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-12 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Contact Us
        </h2>

        {/* Name */}
        <label className="block mb-1 font-medium">Your name *</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          onChange={handleChange}
          className="input-field mb-4"
        />

        {/* Help type */}
        <label className="block mb-1 font-medium">What do you need help with? *</label>
        <select
          name="helpType"
          onChange={handleChange}
          className="input-field mb-4"
        >
          <option>An existing order</option>
          <option>New purchase inquiry</option>
        </select>

        {/* Email */}
        <label className="block mb-1 font-medium">Email used to make the purchase *</label>
        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          onChange={handleChange}
          className="input-field mb-4"
        />

        {/* Username */}
        <label className="block mb-1 font-medium">Instagram/YouTube Username *</label>
        <input
          type="text"
          name="username"
          required
          placeholder="Username"
          onChange={handleChange}
          className="input-field mb-4"
        />

        {/* Date */}
        <label className="block mb-1 font-medium">Date of Purchase *</label>
        <input
          type="date"
          name="date"
          required
          onChange={handleChange}
          className="input-field mb-4"
        />

        {/* Order ID */}
        <label className="block mb-1 font-medium">Order ID (optional)</label>
        <input
          type="text"
          name="orderId"
          placeholder="Order ID"
          onChange={handleChange}
          className="input-field mb-4"
        />

        {/* Message */}
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          onChange={handleChange}
          className="input-field mb-4"
        />

        <button className="w-full bg-black text-white py-3 rounded-lg text-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
