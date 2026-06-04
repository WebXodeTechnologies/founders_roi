"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ✅ CRITICAL: Ensure these match the exact filenames in public/clientImages/
const clients = [
  { name: "Aliens Photography", logo: "/clientImages/AlienPhotography.png" }, // Fixed based on your console log
  { name: "Candier Photography", logo: "/clientImages/CandierPhotography.png" }, // Fixed based on your console log
  { name: "Capicture", logo: "/clientImages/capicture.jpg" },
  { name: "Carnival", logo: "/clientImages/carnival.png" },
  { name: "Chikmangalur Vibes", logo: "/clientImages/chikmangalurVibes.jpg" }, // Fixed based on your console log
  { name: "EWS Logo", logo: "/clientImages/EWS logo.png" },
  { name: "EWS Alternate", logo: "/clientImages/EWS.png" },
  { name: "Fresh Frames", logo: "/clientImages/freshframes.in.jpg" }, // Fixed based on your console log
  { name: "Hi Proteins", logo: "/clientImages/Hiprotein.png" },
  { name: "House of Memories", logo: "/clientImages/HouseofMemories.jpeg" },
  { name: "L & H", logo: "/clientImages/L&H.png" },
  { name: "Lexa Holidays", logo: "/clientImages/Lexa Holidays.jpeg" },
  { name: "S4C", logo: "/clientImages/S4C.png" },
  { name: "Splash Eventia", logo: "/clientImages/SplashEventia.jpg" },
  { name: "TH", logo: "/clientImages/TH.png" },
  { name: "Triberry Studios", logo: "/clientImages/triberrystudioslogo.png" },
  { name: "Zero One Photography", logo: "/clientImages/ZeroOnePhotography.jpeg" }
];

export default function Clients() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-3 font-semibold">
            Clients
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Brands We’ve <span className="text-orange-500">Worked With</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Trusted by businesses to build scalable growth systems.
          </p>
        </div>

        {/* LOGO GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center"
        >
          {clients.map((client, i) => {
            // Encode handles spaces like 'EWS logo.png' and special characters like '&'
            const safeLogoPath = encodeURI(client.logo);

            return (
              <motion.div
                key={`${client.name}-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center relative group aspect-[2/1] w-full max-w-[130px] mx-auto"
              >
                <Image
                  src={safeLogoPath}
                  alt={`${client.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                  priority={i < 6}
                  unoptimized={process.env.NODE_ENV === "development"} // Prevents development server optimization stress
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}