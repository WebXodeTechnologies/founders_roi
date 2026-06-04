"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#111] p-8 rounded-xl shadow-lg space-y-5"
    >
      <input
        type="text"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-md bg-black border border-gray-700 text-white"
      />

      <input
        type="email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-md bg-black border border-gray-700 text-white"
      />

      <select className="w-full p-3 rounded-md bg-black border border-gray-700 text-white">
        <option>Select Service</option>
        <option>SEO</option>
        <option>Paid Ads</option>
        <option>Web Development</option>
      </select>

      <textarea
        rows="4"
        placeholder="Tell us about your project"
        className="w-full p-3 rounded-md bg-black border border-gray-700 text-white"
      />

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 transition-all text-black font-bold py-3 rounded-full"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
