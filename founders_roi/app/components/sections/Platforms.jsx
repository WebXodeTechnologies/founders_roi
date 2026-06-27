"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const platforms = [
  {
    name: "Google Ads",
    logo: "/platforms/icons8-google-ads-144.png",
  },
  {
    name: "Meta Ads",
    logo: "/platforms/icons8-meta-188.png",
  },
  {
    name: "LinkedIn Ads",
    logo: "/platforms/icons8-linkedin-144.png",
  },
  {
    name: "Shopify Store",
    logo: "/platforms/icons8-shopify-144.png",
  },
  {
    name: "Quick Commerce",
    logo: "/platforms/cart.png",
  },
  {
    name: "Tech & Tools",
    logo: "/platforms/code.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Platforms() {
  return (
    <section className="relative w-full text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-[0.2em] text-xs sm:text-sm font-bold mb-3">
            Platforms
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
            Platforms We{" "}
            <span className="bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We leverage industry-leading platforms and tools to build scalable,
            high-performing growth systems for your business.
          </p>
        </div>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 sm:gap-6"
        >
          {platforms.map((platform, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer overflow-hidden transition-all duration-300"
            >
              {/* 🌟 LIVE BORDER TRACK 🌟 */}
              <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden z-0">
                {/* Background Rotating Conic Light */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 6,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  style={{ originX: "50%", originY: "50%" }}
                  className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_75%,#f97316_85%,#fb923c_95%,transparent_100%)] opacity-35 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Solid Content Mask */}
                <div className="absolute inset-px bg-bg-card rounded-[11px] transition-colors duration-300 group-hover:bg-[#121212]" />
              </div>

              {/* 🌟 FLASH/SHINE SWEEP EFFECT 🌟 */}
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none z-0"
              />

              {/* Volumetric Glow behind the card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none -z-10 blur-xl bg-radial-gradient from-orange-500/15 via-transparent to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                {/* Floating Logo (No Frame / No Border Behind) */}
                <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    fill
                    sizes="56px"
                    className="object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <p className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-400 group-hover:text-white transition-colors duration-300">
                  {platform.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
