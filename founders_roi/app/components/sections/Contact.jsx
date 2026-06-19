"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    message: ""
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const servicesList = ["Branding", "Consulting", "Tech", "Sales", "Marketing", "Other"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (val) => {
    setFormData((prev) => ({ ...prev, service: val }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted safely:", formData);
  };

  return (
    <section className="w-full bg-[#030202] text-white py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none">

      {/* ================= BACKGROUND GRAPHICS & AMBIENT SPHERE ================= */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-500/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      {/* Mesh Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* ✅ FIX: Shifted from grid-cols-12 to grid-cols-2 with items-stretch for unified height and structural width symmetry */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch relative z-10">

        {/* ================= LEFT COLUMN: MATCHING LIVE BORDER GLOW CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          /* ✅ FIX: Cleaned paddings to p-6 sm:p-10 md:p-12 to mirror the form container perfectly */
          className="relative rounded-3xl bg-[#090909]/40 border border-neutral-900 p-6 sm:p-10 md:p-12 overflow-hidden backdrop-blur-md shadow-2xl flex flex-col justify-between group"
        >
          {/* 🌟 LIVE ANIMATED PERIMETER LIGHT ENGINE 🌟 */}
          <div className="absolute inset-0 p-[1px] rounded-3xl pointer-events-none z-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 7,
                ease: "linear",
                repeat: Infinity,
              }}
              className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_60%,#f97316_85%,#fb923c_95%,transparent_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
            />
            {/* Inside Content Mask */}
            <div className="absolute inset-[1px] bg-[#070707]/95 rounded-[23px] z-1" />
          </div>

          {/* Left Side Content Wrapper */}
          <div className="relative z-10 space-y-12 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl mb-6 shadow-inner">
                <Sparkles size={11} className="animate-pulse" />
                <span>Get in Touch</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] mb-6">
                Let&apos;s Build Something <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                  Amazing Together
                </span>
              </h2>

              <p className="text-neutral-400 font-light leading-relaxed text-sm sm:text-base max-w-xl">
                Have an ambitious project in mind or want to scale your current operations? Complete the system dossier configuration, and our engineers will respond within 24 hours.
              </p>
            </div>

            {/* CONTACT INFO CARD STACK WITH SPRING MICRO-INTERACTIONS */}
            <div className="space-y-4 w-full">
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-950/60 border border-neutral-900 hover:border-orange-500/30 transition-colors duration-300 group/item cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-orange-500/10 text-orange-400 group-hover/item:bg-orange-500 group-hover/item:text-black transition-all duration-300">
                  <FaPhoneAlt size={14} />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Direct Line</p>
                  <span className="text-sm font-bold text-neutral-200 tracking-wide">+91-8754582502</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-950/60 border border-neutral-900 hover:border-orange-500/30 transition-colors duration-300 group/item cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-orange-500/10 text-orange-400 group-hover/item:bg-orange-500 group-hover/item:text-black transition-all duration-300">
                  <FaEnvelope size={14} />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Secure Email</p>
                  <span className="text-sm font-bold text-neutral-200 tracking-wide">foundersroi.in@gmail.com</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-950/60 border border-neutral-900 hover:border-orange-500/30 transition-colors duration-300 group/item cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-orange-500/10 text-orange-400 group-hover/item:bg-orange-500 group-hover/item:text-black transition-all duration-300">
                  <FaMapMarkerAlt size={14} />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-medium uppercase tracking-widest mb-3">
                    Active Operations Hubs
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["Chennai", "Coimbatore", "Salem", "Namakkal"].map((city) => (
                      <div
                        key={city}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-900 bg-neutral-950/60 text-xs font-semibold text-neutral-300 backdrop-blur-md transition-all duration-300 hover:border-orange-500/30 hover:bg-neutral-900/40 cursor-default group"
                      >
                        {/* Live Status Pulse */}
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 group-hover:bg-orange-500"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
                        </span>
                        <span className="tracking-wide">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT COLUMN: HIGH-LEGIBILITY INGESTION FORM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70, damping: 16 }}
          className="w-full rounded-3xl border border-neutral-800 bg-[#090909]/90 p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-2xl shadow-black/90 flex flex-col justify-between group"
        >
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10 h-full flex flex-col justify-between">

            <div className="space-y-6">
              {/* NAME GRID BLOCK (FIRST & LAST NAME) */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder=" "
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="peer w-full px-4 py-4 pt-6 rounded-xl bg-neutral-900/80 border border-neutral-700 focus:border-orange-500 focus:bg-black outline-none text-white text-base transition-all duration-300 shadow-inner"
                  />
                  <label className="absolute left-4 top-4 text-sm text-neutral-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-orange-400 transform origin-left pointer-events-none scale-90 peer-focus:scale-100 peer-valid:top-1.5 peer-valid:text-orange-400 peer-valid:text-xs">
                    First Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder=" "
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="peer w-full px-4 py-4 pt-6 rounded-xl bg-neutral-900/80 border border-neutral-700 focus:border-orange-500 focus:bg-black outline-none text-white text-base transition-all duration-300 shadow-inner"
                  />
                  <label className="absolute left-4 top-4 text-sm text-neutral-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-orange-400 transform origin-left pointer-events-none scale-90 peer-focus:scale-100 peer-valid:top-1.5 peer-valid:text-orange-400 peer-valid:text-xs">
                    Last Name
                  </label>
                </div>
              </div>

              {/* COMMUNICATIONS GRID (EMAIL & PHONE NUMBER) */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder=" "
                    value={formData.email}
                    onChange={handleInputChange}
                    className="peer w-full px-4 py-4 pt-6 rounded-xl bg-neutral-900/80 border border-neutral-700 focus:border-orange-500 focus:bg-black outline-none text-white text-base transition-all duration-300 shadow-inner"
                  />
                  <label className="absolute left-4 top-4 text-sm text-neutral-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-orange-400 transform origin-left pointer-events-none scale-90 peer-focus:scale-100 peer-valid:top-1.5 peer-valid:text-orange-400 peer-valid:text-xs">
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="peer w-full px-4 py-4 pt-6 rounded-xl bg-neutral-900/80 border border-neutral-700 focus:border-orange-500 focus:bg-black outline-none text-white text-base transition-all duration-300 shadow-inner"
                  />
                  <label className="absolute left-4 top-4 text-sm text-neutral-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-orange-400 transform origin-left pointer-events-none scale-90 peer-focus:scale-100 peer-valid:top-1.5 peer-valid:text-orange-400 peer-valid:text-xs">
                    Contact Number
                  </label>
                </div>
              </div>

              {/* LOCATION FIELD */}
              <div className="relative">
                <input
                  type="text"
                  name="location"
                  required
                  placeholder=" "
                  value={formData.location}
                  onChange={handleInputChange}
                  className="peer w-full px-4 py-4 pt-6 rounded-xl bg-neutral-900/80 border border-neutral-700 focus:border-orange-500 focus:bg-black outline-none text-white text-base transition-all duration-300 shadow-inner"
                />
                <label className="absolute left-4 top-4 text-sm text-neutral-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-orange-400 transform origin-left pointer-events-none scale-90 peer-focus:scale-100 peer-valid:top-1.5 peer-valid:text-orange-400 peer-valid:text-xs">
                  Geographic Location (e.g. Chennai, India)
                </label>
              </div>

              {/* SERVICE SELECT DROPDOWN */}
              <div className="relative">
                <label className="text-xs text-neutral-400 mb-2 block font-medium pl-1 uppercase tracking-wider">
                  Service Looking For
                </label>
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full px-4 py-4 rounded-xl bg-neutral-900/80 border ${isDropdownOpen ? 'border-orange-500 bg-black' : 'border-neutral-700'} flex items-center justify-between cursor-pointer transition-all duration-300 shadow-inner`}
                >
                  <span className={`text-base ${formData.service ? 'text-white font-medium' : 'text-neutral-400'}`}>
                    {formData.service || "Select an expert service vertical..."}
                  </span>
                  <ChevronDown size={18} className={`text-neutral-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-orange-400' : ''}`} />
                </div>

                {/* DROPDOWN OPTIONS OVERLAY */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 4, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute left-0 right-0 z-30 mt-1 p-2 rounded-xl border border-neutral-700 bg-[#0d0d0d] shadow-2xl max-h-60 overflow-y-auto"
                    >
                      {servicesList.map((service, index) => (
                        <li
                          key={index}
                          onClick={() => handleServiceSelect(service)}
                          className="px-4 py-3 rounded-lg text-base text-neutral-300 hover:text-black hover:from-orange-500 hover:to-amber-500 hover:bg-gradient-to-r font-bold transition-all duration-150 cursor-pointer"
                        >
                          {service}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* MESSAGE CONTAINER */}
              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleInputChange}
                  className="peer w-full px-4 py-4 pt-6 rounded-xl bg-neutral-900/80 border border-neutral-700 focus:border-orange-500 focus:bg-black outline-none text-white text-base transition-all duration-300 resize-none shadow-inner"
                />
                <label className="absolute left-4 top-4 text-sm text-neutral-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-orange-400 transform origin-left pointer-events-none scale-90 peer-focus:scale-100 peer-valid:top-1.5 peer-valid:text-orange-400 peer-valid:text-xs">
                  Share your business growth objectives with us
                </label>
              </div>
            </div>

            {/* HIGH-CONTRAST CONVERSION CALL BUTTON */}
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              type="submit"
              className="w-full py-4 mt-6 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-black font-extrabold tracking-wide text-base shadow-xl shadow-orange-950/20 hover:brightness-110 transition-all duration-300 relative overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-15 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:animate-[shine_0.9s_ease-in-out] pointer-events-none" />
              <span className="relative z-10 uppercase tracking-wider text-sm">Deploy Growth Request</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}