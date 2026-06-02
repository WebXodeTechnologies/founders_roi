"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-16 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5 blur-3xl opacity-50" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-3">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let’s Build Something <br />
            <span className="text-orange-500">Amazing Together</span>
          </h2>

          <p className="text-gray-400 mb-8 max-w-md">
            Have a project in mind or want to scale your business? Fill out the
            form and our team will get back to you within 24 hours.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-orange-500" />
              <span className="text-gray-300">+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-orange-500" />
              <span className="text-gray-300">contact@foundersroi.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-orange-500" />
              <span className="text-gray-300">India</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
        >
          <form className="space-y-6">
            {/* NAME */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-orange-500 outline-none text-white"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-orange-500 outline-none text-white"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your project"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-orange-500 outline-none text-white"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-400 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* EXTRA GLOW */}
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-500 opacity-20 blur-3xl rounded-full" />
    </section>
  );
}
