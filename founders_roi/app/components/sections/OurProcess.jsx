"use client";

import { motion } from "framer-motion";
import { FaLayerGroup, FaPaintBrush, FaChartLine } from "react-icons/fa";

const process = [
  {
    number: "01",
    title: "Platform Optimization",
    description:
      "Scaling the right channels with precision and intent-driven systems.",
    icon: <FaLayerGroup size={26} />,
  },
  {
    number: "02",
    title: "Creative Optimization",
    description: "Emotion-driven creative systems engineered for conversion.",
    icon: <FaPaintBrush size={26} />,
  },
  {
    number: "03",
    title: "Campaign Optimization",
    description:
      "Continuous performance optimization focused on profitability and scale.",
    icon: <FaChartLine size={26} />,
  },
];

export default function Process() {
  return (
    <section className="w-full bg-black text-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-3">
            Our Process
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The <span className="text-orange-500">3 Layer</span> Growth Formula
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            A structured system designed to optimize platforms, creatives, and
            campaigns for scalable and predictable growth.
          </p>
        </div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {process.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 overflow-hidden transition"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 blur-2xl transition" />

              {/* Number */}
              <h3 className="text-6xl font-bold text-white/10 absolute top-4 right-6">
                {item.number}
              </h3>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-4">
                <div className="text-orange-500">{item.icon}</div>

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
