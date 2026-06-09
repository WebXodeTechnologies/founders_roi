"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden text-center">
      
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-full bg-orange-500/[0.02] blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8">
          Start a <br />
          <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            Conversation.
          </span>
        </h1>
        
        <p className="text-neutral-400 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
          Our engineering team is ready to scale your vision. 
          Book a briefing to discuss your technical architecture and growth goals.
        </p>
      </motion.div>
    </section>
  );
}