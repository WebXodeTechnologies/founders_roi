"use client";

import { motion } from "framer-motion";
import {
  FaGoogle,
  FaFacebookF,
  FaShoppingCart,
  FaBolt,
  FaTools,
} from "react-icons/fa";
import { SiMeta } from "react-icons/si";

const platforms = [
  {
    name: "Google",
    icon: <FaGoogle size={28} />,
  },
  {
    name: "Meta",
    icon: <SiMeta size={28} />,
  },
  {
    name: "Facebook",
    icon: <FaFacebookF size={28} />,
  },
  {
    name: "E-commerce",
    icon: <FaShoppingCart size={28} />,
  },
  {
    name: "Quick Commerce",
    icon: <FaBolt size={28} />,
  },
  {
    name: "Tech & Tools",
    icon: <FaTools size={28} />,
  },
];

export default function Platforms() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-3">
            Platforms
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Platforms We <span className="text-orange-500">Work With</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            We leverage industry-leading platforms and tools to build scalable,
            high-performing growth systems for your business.
          </p>
        </div>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
        >
          {platforms.map((platform, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1 }}
              className="group relative flex flex-col items-center justify-center bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6 hover:border-orange-500/40 transition"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 blur-2xl transition" />

              <div className="relative z-10 flex flex-col items-center gap-3 text-orange-500 group-hover:text-orange-400 transition">
                {platform.icon}

                <p className="text-sm text-gray-300 group-hover:text-white">
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
