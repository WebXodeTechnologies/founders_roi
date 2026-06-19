"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Aliens Photography",
    logo: "/clientImages/AlienPhotography.png",
    feedback:
      "Founders ROI helped us generate consistent leads and scale our photography business beyond expectations.",
  },
  {
    name: "Candier Photography",
    logo: "/clientImages/CandierPhotography.png",
    feedback:
      "Their marketing strategy completely changed our growth. We now get high-quality inquiries regularly.",
  },
  {
    name: "Capicture",
    logo: "/clientImages/Capicture.jpg",
    feedback:
      "Professional team with strong execution. We saw measurable improvement in performance campaigns.",
  },
  {
    name: "Carnival",
    logo: "/clientImages/carnival-logo.png",
    feedback:
      "Great experience working with them. Their systems are built for real business growth.",
  },
  {
    name: "Chikmangalur Vibes",
    logo: "/clientImages/chikmangalurVibes.jpg",
    feedback:
      "We increased our reach and bookings significantly after working with Founders ROI.",
  },
  {
    name: "Fresh Frames",
    logo: "/clientImages/freshframes.in.jpg",
    feedback:
      "Highly recommended for any brand looking to scale with performance marketing.",
  },
];

// Split data evenly into two distinct tracks for staggered directional flow
const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

// Duplicate rows to guarantee seamless wrapping animations without blank frames
const firstRowExtended = [...firstRow, ...firstRow, ...firstRow];
const secondRowExtended = [...secondRow, ...secondRow, ...secondRow];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto w-full text-white py-20 overflow-hidden relative">
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-400/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="px-6 md:px-16 mb-16">
        {/* HEADER */}
        <div className="text-center">
          <p className="text-orange-500 uppercase tracking-widest text-xs sm:text-sm font-bold mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            What Our <span className="text-orange-500">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-sm sm:text-base">
            Real feedback from brands we’ve helped grow, automate, and scale.
          </p>
        </div>
      </div>

      {/* --- MARQUEE ENGINE WRAPPER --- */}
      {/* Mask gradients create smooth fading edges on desktop screens */}
      <div className="relative flex flex-col gap-6 md:gap-8 w-full max-w-[100vw] sm:px-6 md:px-0 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        {/* ROW 1: FLOWS LEFT TO RIGHT */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
            className="flex gap-6 pr-6 shrink-0"
          >
            {firstRowExtended.map((item, i) => (
              <TestimonialCard item={item} key={`row1-${i}`} />
            ))}
          </motion.div>
        </div>

        {/* ROW 2: FLOWS RIGHT TO LEFT */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            animate={{ x: ["-33.33%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
            className="flex gap-6 pr-6 shrink-0"
          >
            {secondRowExtended.map((item, i) => (
              <TestimonialCard item={item} key={`row2-${i}`} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ✅ Extracted Modular Card Component to keep code highly maintainable & clean
function TestimonialCard({ item }) {
  const safeLogoPath = encodeURI(item.logo);

  return (
    <div className="w-80 sm:w-90 shrink-0 bg-bg-card border border-border-custom rounded-2xl p-6 relative group transition-colors duration-300 hover:border-orange-500/30">
      {/* Subtle Container Internal Flare */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

      {/* HEADER: LOGO & RATING */}
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="relative w-20 h-20">
          <Image
            src={safeLogoPath}
            alt={`${item.name} branding logo`}
            fill
            sizes="80px"
            className="object-contain transition-all duration-300"
          />
        </div>
        <div className="flex gap-0.5 text-orange-500">
          {[...Array(5)].map((_, idx) => (
            <FaStar key={idx} size={12} />
          ))}
        </div>
      </div>

      {/* FEEDBACK COPY */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300 min-h-[64px]">
        “{item.feedback}”
      </p>

      {/* ACCOUNT AUTHOR */}
      <div className="border-t border-[#1f1f1f] pt-4">
        <p className="text-sm font-semibold text-white tracking-wide">
          {item.name}
        </p>
      </div>
    </div>
  );
}
