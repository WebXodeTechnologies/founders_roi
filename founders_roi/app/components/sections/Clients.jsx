"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Aliens Photography", logo: "/clientImages/aliens.png" },
  { name: "Candier Photography", logo: "/clientImages/candier.png" },
  { name: "Capicture", logo: "/clientImages/capicture.jpg" },
  { name: "Carnival", logo: "/clientImages/carnival.png" },
  { name: "Chikmangalur Vibes", logo: "/clientImages/chikmangalur.jpg" },
  { name: "Fresh Frames", logo: "/clientImages/freshframes.jpg" },
];

export default function Clients() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-3">
            Clients
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
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
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center"
        >
          {clients.map((client, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center group"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
