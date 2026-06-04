"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-24">
      {/* ================= BACKGROUND VIDEO ================= */}
      <div className="absolute inset-0 -z-10 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          poster="/video-fallback.jpg"
        >
          <source src="/bg-vdo/1.mp4" type="video/mp4" />
        </video>
        
        {/* Premium Gradient Overlay: dark at bottom/sides, transparent in center */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ================= CONTENT CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left z-10"
        >
          <p className="text-orange-500 font-semibold mb-4 tracking-widest uppercase text-sm">
            Business Growth Consulting
          </p>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 text-white">
            Scalable <br />
            <span className="text-orange-500">Business Growth</span> Solutions
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            We help businesses scale through revenue growth consulting and digital transformation. Building robust systems for the modern enterprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all"
            >
              Start Scaling
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all"
            >
              Explore Services
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE (Maintains floating animation) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:flex justify-end"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/hero_image.png"
              alt="Dashboard"
              width={600}
              height={600}
              className="rounded-3xl shadow-[0_0_50px_-12px_rgba(249,115,22,0.3)] border border-white/10"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}