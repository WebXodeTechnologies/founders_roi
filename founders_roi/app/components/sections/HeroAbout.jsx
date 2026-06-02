"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroAbout = () => {
  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-3">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Most Brands Don’t Have a{" "}
            <span className="text-orange-500">Growth System</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Most businesses focus only on ads instead of building a complete
            revenue ecosystem. That’s why growth becomes inconsistent and
            unsustainable.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT - PROBLEM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-red-400">
              ❌ The Problem
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>• Running ads without a clear strategy</li>
              <li>• No proper branding or positioning</li>
              <li>• Poor conversion and sales systems</li>
              <li>• No automation or scalability</li>
              <li>• Inconsistent and unpredictable growth</li>
            </ul>
          </motion.div>

          {/* RIGHT - SOLUTION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              ✅ How Founders ROI Solves It
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>• Data-driven marketing strategies</li>
              <li>• Strong branding and positioning</li>
              <li>• High-converting sales funnels</li>
              <li>• Automated systems for scaling</li>
              <li>• Predictable and sustainable growth</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
