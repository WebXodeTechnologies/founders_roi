"use client";

import { motion } from "framer-motion";
import { Megaphone, TrendingUp, Palette, Code, Briefcase } from "lucide-react";

const services = [
  {
    icon: <Megaphone size={28} />,
    title: "Marketing",
    desc: "Performance-driven campaigns designed to attract, engage, and convert your ideal audience.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Sales",
    desc: "Optimized funnels and strategies to increase conversions and revenue growth.",
  },
  {
    icon: <Palette size={28} />,
    title: "Branding",
    desc: "Build a powerful brand identity that resonates and creates lasting impressions.",
  },
  {
    icon: <Code size={28} />,
    title: "Technology",
    desc: "Modern tech solutions to automate, scale, and streamline your business operations.",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Business Development",
    desc: "Strategic partnerships and growth opportunities to expand your business reach.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black text-white py-10">
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* 🔥 Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-white">Core </span>
          <span className="text-orange-500">Services</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 🔥 LEFT SIDE (Sticky) */}
          <div className="md:sticky md:top-32 h-fit">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-snug">
              <span className="text-white">Build a </span>
              <span className="text-orange-500">Growth Engine</span>
              <br />
              <span className="text-white">Not Just Campaigns</span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg">
              Most businesses chase short-term wins. We design systems that
              drive consistent, scalable growth.
              <br />
              <br />
              By aligning marketing, sales, branding, and technology, we turn
              your business into a predictable revenue machine — not a guessing
              game.
            </p>
          </div>

          {/* 🔥 RIGHT SIDE (Cards) */}
          <div className="flex flex-col gap-8">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative overflow-hidden border border-gray-800 rounded-2xl p-6 group cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
              >
                {/* 🔥 Sliding Background */}
                <span className="absolute inset-0 bg-orange-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

                {/* 🔥 Content */}
                <div className="relative z-10 transition-colors duration-500 group-hover:text-black">
                  <div className="flex items-center gap-4 mb-4 text-orange-400 group-hover:text-black transition-colors duration-500">
                    {item.icon}
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>

                  <p className="text-gray-400 group-hover:text-black transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
