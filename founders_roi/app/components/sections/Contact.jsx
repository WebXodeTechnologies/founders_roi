"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-black text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500 opacity-20 blur-3xl rounded-full" />

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
              <span className="text-gray-300">+91-8754582502</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-orange-500" />
              <span className="text-gray-300">foundersroi.in@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-orange-500" />
              <span className="text-gray-300">India</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-orange-500/10 transition-all duration-500"
        >
          <form className="space-y-6">
            {/* FULL NAME */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition-all"
            />
            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition-all"
            />
            <div className="relative w-full">
              <select
                className="w-full px-4 py-3 pr-10 rounded-lg bg-black border border-white/10 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition-all appearance-none"
                defaultValue=""
              >
                <option value="" disabled className="bg-black text-gray-400">
                  Select Service
                </option>
                <option className="bg-black text-white">
                  Precise Marketing
                </option>
                <option className="bg-black text-white">
                  Branding & Positioning
                </option>
                <option className="bg-black text-white">Core Sales</option>
                <option className="bg-black text-white">
                  Automation Systems
                </option>
                <option className="bg-black text-white">App Development</option>
                <option className="bg-black text-white">Web Development</option>
              </select>

              {/* CUSTOM ARROW */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white">
                ▼
              </div>
            </div>{" "}
            {/* MESSAGE */}
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition-all"
            ></textarea>
            {/* BUTTON */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="w-full py-3 rounded-full bg-orange-500 text-black font-semibold tracking-wide shadow-lg shadow-orange-500/30 hover:bg-orange-400 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* EXTRA GLOW */}
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-500 opacity-20 blur-3xl rounded-full" />
    </section>
  );
}
