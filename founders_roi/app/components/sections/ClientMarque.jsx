"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Globe,
  Cpu,
  Zap,
  Activity,
  ShieldCheck,
  Target,
  Camera,
  Briefcase,
  Star,
  Sparkles,
} from "lucide-react";

const allBrands = [
  { name: "Twinkle Holidays", icon: Globe },
  { name: "Triberry Studios", icon: Camera },
  { name: "Carnival Studios", icon: Star },
  { name: "AJ Uday Photography", icon: Activity },
  { name: "AK Photography", icon: Cpu },
  { name: "Lexa Holidays", icon: ShieldCheck },
  { name: "Fresh Frames Inn", icon: Zap },
  { name: "House Of Memoriez", icon: Briefcase },
  { name: "Candier Photography", icon: Target },
  { name: "Capicture Studios", icon: Building2 },
  { name: "Vs Photography", icon: Camera },
  { name: "Elite Wedding Stories", icon: Sparkles },
];

const ClientMarquee = () => {
  return (
    <section className="py-10 overflow-hidden relative">
      {/* Refined Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/[0.08] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-900/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center mb-5 relative z-10">
        <h3 className="text-neutral-500 font-bold uppercase tracking-[0.3em] text-[11px]">
          Trusted Industry Partners
        </h3>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full py-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Animated Light Beam */}
        <div className="absolute inset-0 z-20 pointer-events-none flex items-center">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="w-[30%] h-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent blur-3xl"
          />
        </div>

        {/* Marquee Motion */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 60, repeat: Infinity }}
          className="flex gap-8 shrink-0"
        >
          {[...allBrands, ...allBrands, ...allBrands].map((brand, idx) => (
            <BrandCard key={idx} brand={brand} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const BrandCard = ({ brand }) => (
  <div className="group flex items-center gap-4 px-10 py-5 rounded-3xl border border-white/5 bg-neutral-900/40 backdrop-blur-md hover:border-orange-500/30 transition-all duration-500 shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
    <brand.icon
      size={20}
      className="text-orange-500 group-hover:scale-110 transition-transform duration-500"
    />
    <span className="text-sm font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors whitespace-nowrap">
      {brand.name}
    </span>
  </div>
);

export default ClientMarquee;
