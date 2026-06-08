"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* DATA */
const row1 = [
  { name: "Aliens Photography", logo: "/clientImages/AlienPhotography.png" },
  { name: "Candier Photography", logo: "/clientImages/CandierPhotography.png" },
  { name: "Capicture", logo: "/clientImages/capicture.jpg" },
  { name: "Carnival", logo: "/clientImages/carnival.png" },
  { name: "Chikmangalur Vibes", logo: "/clientImages/chikmangalurVibes.jpg" },
  { name: "EWS Logo", logo: "/clientImages/EWS logo.png" },
  { name: "Fresh Frames", logo: "/clientImages/freshframes.in.jpg" },
];

const row2 = [
  { name: "Hi Proteins", logo: "/clientImages/Hiprotein.png" },
  { name: "House of Memories", logo: "/clientImages/HouseofMemories.jpeg" },
  { name: "L & H", logo: "/clientImages/L&H.png" },
  { name: "Lexa Holidays", logo: "/clientImages/Lexa Holidays.jpeg" },
  { name: "S4C", logo: "/clientImages/S4C.png" },
  { name: "Splash Eventia", logo: "/clientImages/SplashEventia.jpg" },
  { name: "TH", logo: "/clientImages/TH.png" },
  { name: "Triberry Studios", logo: "/clientImages/triberrystudioslogo.png" },
];

/* LOOP */
const loopRow1 = [...row1, ...row1];
const loopRow2 = [...row2, ...row2];

export default function ClientsCarousel() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-3 font-semibold">
            Clients
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Brands We’ve <span className="text-orange-500">Delivered For</span>
          </h2>
          <p className="text-gray-400">
            Trusted by businesses to build scalable growth systems.
          </p>
        </div>

        {/* EDGE FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

        {/* ROW 1 */}
        <div className="overflow-hidden mb-8">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 8, // ⚡ FAST
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {loopRow1.map((client, i) => (
              <LogoCard key={i} client={client} index={i} />
            ))}
          </motion.div>
        </div>

        {/* ROW 2 */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 9, // ⚡ slight variation
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {loopRow2.map((client, i) => (
              <LogoCard key={i} client={client} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* LOGO CARD */
function LogoCard({ client, index }) {
  const sizes = ["w-[130px]", "w-[160px]", "w-[150px]", "w-[180px]"];
  const randomWidth = sizes[index % sizes.length];

  return (
    <motion.div
      className={`flex-[0_0_auto] ${randomWidth}`}
      whileHover={{ scale: 1.15, y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="group relative h-[70px] flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
        {/* 🔥 Animated Gradient Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 blur-lg"></div>

        {/* ✨ Moving Shine Effect */}
        <div className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700"></div>

        <Image
          src={encodeURI(client.logo)}
          alt={client.name}
          width={120}
          height={50}
          className="object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
        />
      </div>
    </motion.div>
  );
}
