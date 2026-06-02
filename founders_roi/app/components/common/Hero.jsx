"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-black text-white flex items-center overflow-hidden pt-28 md:pt-24"
      aria-label="Business Growth Consulting and Digital Transformation Hero Section"
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute top-10 right-0 md:top-20 w-[240px] md:w-[500px] h-[240px] md:h-[500px] bg-orange-500 opacity-20 blur-[90px] md:blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          {/* SEO supporting line (secondary keywords) */}
          <p className="text-orange-500 font-medium mb-4 tracking-wide text-sm md:text-base">
            Business Growth Consulting
          </p>

          {/* PRIMARY H1 (SEO MAIN KEYWORD) */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
            Scalable
            <span className="text-orange-500 ml-1">Business Growth</span>
            <span className="ml-1">Solutions</span>
          </h1>

          {/* SEO-rich description (natural keywords, no stuffing) */}
          <p className="text-gray-400 text-base md:text-lg mb-4 max-w-xl mx-auto md:mx-0">
            We help businesses scale through revenue growth consulting, B2B
            strategy, and digital transformation. As a custom software
            development company in South India, we build scalable solutions,
            mobile apps, and end-to-end systems for startups and enterprises.
          </p>

          {/* ================= CTA BUTTONS ================= */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-xl transition w-full sm:w-auto"
            >
              Start Scaling
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-700 hover:border-orange-500 px-6 py-3 rounded-xl transition w-full sm:w-auto"
            >
              Explore Services
            </motion.button>
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* Background Glow */}
          <div className="absolute  bg-orange-500 opacity-20 blur-[80px] md:blur-[120px] rounded-full" />

          {/* Floating Image */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-auto mr-5"
          >
            <Image
              src="/hero_image.png"
              alt="Business growth dashboard showing revenue analytics and digital transformation insights"
              width={620}
              height={620}
              priority
              className="w-full  rounded-2xl shadow-2xl border border-gray-800"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
