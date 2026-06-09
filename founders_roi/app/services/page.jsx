"use client";

import { motion } from "framer-motion";
import { Megaphone, TrendingUp, Palette, Code, Briefcase } from "lucide-react";
import ServicesHero from "../components/sections/Services/ServicesHero";
import ServiceShowcaseList from "../components/sections/Services/ServiceShowcaseList";
import ThirdCta from "../components/sections/WhyRoi/ThirdCta";
import ServicesOverview from "../components/sections/Services/ServicesOverview";

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
    <section className="py-20">
      <ServicesHero/>
      <ServicesOverview/>
      <ServiceShowcaseList/>
      <ThirdCta/>
    </section>
  );
}
