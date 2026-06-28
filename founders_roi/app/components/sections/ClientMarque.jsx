"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Aliens Photography", logo: "/clientImages/AlienPhotography.png" },
  { name: "Candier Photography", logo: "/clientImages/CandierPhotography.png" },
  { name: "Capicture", logo: "/clientImages/Capicture.jpg" },
  { name: "Carnival", logo: "/clientImages/carnival-logo.png" },
  { name: "Chikmangalur Vibes", logo: "/clientImages/chikmangalurVibes.jpg" },
  { name: "EWS Logo", logo: "/clientImages/EWS logo.png" },
  { name: "Fresh Frames", logo: "/clientImages/freshframes.in.jpg" },
  { name: "Leo Photography", logo: "/clientImages/LeoPhotogrpahy.jpg" },
  { name: "Hi Proteins", logo: "/clientimagebgremoved/Hiprotein-removebg-preview.png" },
  { name: "House of Memories", logo: "/clientImages/HouseofMemories.jpeg" },
  { name: "L & H", logo: "/clientimagebgremoved/L_H-removebg-preview.png" },
  { name: "Lexa Holidays", logo: "/clientImages/Lexa Holidays.jpeg" },
  { name: "S4C", logo: "/clientImages/S4C.png" },
  { name: "Splash Eventia", logo: "/clientImages/SplashEventia.jpg" },
  { name: "TH", logo: "/clientImages/TH.png" },
  { name: "Triberry Studios", logo: "/clientImages/triberrystudioslogo.png" },
  { name: "Kamarajar College of Nursing", logo: "/clientImages/KSAnursing.jpeg" },
  { name: "Kamarajar College of Pharmacy", logo: "/clientImages/KSA.jpeg" },
  { name: "Webxode Technologies", logo: "/clientImages/webxodelogocropped-removebg-preview.png" },
];

const ClientMarquee = () => {
  return (
    <section className="w-full bg-black py-16 overflow-hidden relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/4 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-950/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center mb-10 relative z-10">
        <h1 className="text-neutral-500 font-bold uppercase tracking-[0.25em] text-md text-pretty">
          Trusted Industry Partners
        </h1>
      </div>

      {/* Marquee Wrapper with horizontal mask fade-outs */}
      <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Animated Light Sweep Beam */}
        <div className="absolute inset-0 z-20 pointer-events-none flex items-center">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
            className="w-[20%] h-full bg-linear-to-r from-transparent via-orange-500/10 to-transparent blur-2xl"
          />
        </div>

        {/* Marquee Row */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="flex w-max py-2 items-center"
        >
          {/* Track 1 */}
          <div className="flex gap-12 shrink-0 items-center pr-12">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="group relative flex items-center justify-center bg-transparent transition-all duration-300 hover:scale-105 shrink-0 h-16 w-36 sm:h-20 sm:w-44 overflow-hidden cursor-pointer"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105 select-none"
                />
              </div>
            ))}
          </div>

          {/* Track 2 */}
          <div className="flex gap-12 shrink-0 items-center pr-12">
            {clients.map((client, idx) => (
              <div
                key={`dup-${idx}`}
                className="group relative flex items-center justify-center bg-transparent transition-all duration-300 hover:scale-105 shrink-0 h-16 w-36 sm:h-20 sm:w-44 overflow-hidden cursor-pointer"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105 select-none"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientMarquee;
