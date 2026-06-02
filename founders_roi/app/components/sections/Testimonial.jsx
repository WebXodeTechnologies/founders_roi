"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Aliens Photography",
    logo: "/clientImages/aliens.png",
    feedback:
      "Founders ROI helped us generate consistent leads and scale our photography business beyond expectations.",
  },
  {
    name: "Candier Photography",
    logo: "/clientImages/candier.png",
    feedback:
      "Their marketing strategy completely changed our growth. We now get high-quality inquiries regularly.",
  },
  {
    name: "Capicture",
    logo: "/clientImages/capicture.jpg",
    feedback:
      "Professional team with strong execution. We saw measurable improvement in performance campaigns.",
  },
  {
    name: "Carnival",
    logo: "/clientImages/carnival.png",
    feedback:
      "Great experience working with them. Their systems are built for real business growth.",
  },
  {
    name: "Chikmangalur Vibes",
    logo: "/clientImages/chikmangalur.jpg",
    feedback:
      "We increased our reach and bookings significantly after working with Founders ROI.",
  },
  {
    name: "Fresh Frames",
    logo: "/clientImages/freshframes.jpg",
    feedback:
      "Highly recommended for any brand looking to scale with performance marketing.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-3">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our <span className="text-orange-500">Clients Say</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Real feedback from brands we’ve helped grow and scale.
          </p>
        </div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 transition"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 blur-2xl transition" />

              {/* LOGO */}
              <div className="relative z-10 mb-4">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={80}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* STARS */}
              <div className="flex gap-1 text-orange-400 mb-3 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>

              {/* FEEDBACK */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10">
                “{item.feedback}”
              </p>

              {/* CLIENT NAME */}
              <p className="text-white font-semibold relative z-10">
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
