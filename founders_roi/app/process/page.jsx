"use client";

import { motion } from "framer-motion";
import { FaLayerGroup, FaChartLine, FaRocket } from "react-icons/fa";

export default function ProcessPage() {
  /* ================= CARDS ================= */
  const cards = [
    {
      icon: <FaLayerGroup size={24} />,
      title: "Platform Optimization",
      desc: "Scaling the right channels with precision and intent-driven systems.",
    },
    {
      icon: <FaChartLine size={24} />,
      title: "Creative Optimization",
      desc: "Emotion-driven creative systems engineered for conversion.",
    },
    {
      icon: <FaRocket size={24} />,
      title: "Campaign Optimization",
      desc: "Continuous performance optimization focused on profitability and scale.",
    },
  ];

  /* ================= TIMELINE ================= */
  const steps = [
    "Enquiry",
    "Discovery Call",
    "Brand Strategy & Growth Planning",
    "Project Kickoff",
    "Brand & Infrastructure Setup",
    "Multi-Platform Execution",
    "Lead & Sales Optimization",
    "Scaling & Growth",
    "Long-Term Partnership",
  ];

  return (
    <div className="bg-black text-white">
      {/* ================= 3 LAYER SECTION ================= */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* LEFT */}
          <div className="md:sticky md:top-32 h-fit">
            <p className="text-orange-500 font-semibold mb-3 uppercase tracking-wide">
              Our Process
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              The <span className="text-orange-500">3 Layer</span> Growth
              Formula
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              We don’t rely on guesswork. Our structured system ensures your
              brand grows with clarity, consistency, and scalability.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:bg-orange-500 hover:text-black transition"
              >
                <div className="mb-4 text-orange-500 group-hover:text-black">
                  {card.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>

                <p className="text-gray-400 group-hover:text-black">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TIMELINE SECTION ================= */}
      <section className="py-24 px-6 md:px-16 bg-black">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-orange-500 font-semibold mb-3 tracking-wide">
            EXECUTION PROCESS
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            From <span className="text-orange-500">Enquiry to Scale</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Line */}
          <div className="absolute left-4 top-0 w-[2px] h-full bg-zinc-700" />

          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                {/* Circle */}
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-black font-bold z-10">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl w-full hover:border-orange-500 transition">
                  {step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CASE STUDY ================= */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <p className="text-orange-500 font-semibold mb-3">
              FEATURED CASE STUDY
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Engineering Scalable{" "}
              <span className="text-orange-500">Growth Systems</span>
            </h2>

            <p className="text-gray-400 text-lg">
              We transformed fragmented marketing into a unified performance
              system combining data, creative strategy, and precision targeting.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {[
              { title: "Revenue Growth", value: "+420%" },
              { title: "Conversion Lift", value: "+280%" },
              { title: "Audience Expansion", value: "12M+" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500"
              >
                <h3 className="text-gray-400 mb-2">{item.title}</h3>
                <p className="text-4xl font-bold text-orange-500">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
