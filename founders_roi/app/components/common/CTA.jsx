"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-16 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5 blur-3xl opacity-50" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Ready to Scale Your Brand <br />
          <span className="text-orange-500">With Proven Systems?</span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          We help brands build predictable growth systems using strategy,
          creative execution, and performance marketing. Let’s turn your
          business into a scalable growth engine.
        </motion.p>

        {/* CTA BUTTON */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.08 }}
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-orange-500 text-black overflow-hidden group"
        >
          {/* Glow Effect */}
          <span className="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-30 blur-xl transition" />

          <span className="relative z-10">Book a Free Strategy Call</span>
        </motion.a>
      </div>

      {/* EXTRA FLOATING GLOW */}
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-500 opacity-20 blur-3xl rounded-full" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-orange-400 opacity-20 blur-3xl rounded-full" />
    </section>
  );
}
