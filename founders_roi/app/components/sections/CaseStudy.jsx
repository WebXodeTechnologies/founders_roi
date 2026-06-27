"use client";
import React from "react";
import { motion } from "framer-motion";

const metrics = [
  {
    title: "Meta Ads Growth",
    value: "420%",
    width: "90%",
  },
  {
    title: "Conversion Optimization",
    value: "280%",
    width: "75%",
  },
  {
    title: "Audience Reach",
    value: "12M+",
    width: "95%",
  },
];

const CaseStudy = () => {
  return (
    <section className="w-full bg-black text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-orange-950/20 to-black opacity-60" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Building Performance <br />
            Systems <br />
            <span className="text-orange-500">That Scale</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            We transform underperforming campaigns into high-converting,
            scalable growth engines through strategy, creative systems, and
            continuous optimization.
          </p>
        </div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
        >
          <div className="space-y-8">
            {metrics.map((item, i) => (
              <div key={i}>
                {/* LABEL */}
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">{item.title}</span>
                  <span className="text-white font-semibold">{item.value}</span>
                </div>

                {/* BAR */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FLOATING GLOW */}
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500 opacity-20 blur-3xl rounded-full" />
    </section>
  );
};

export default CaseStudy;
