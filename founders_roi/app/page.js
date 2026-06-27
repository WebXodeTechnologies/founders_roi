
import Hero from "./components/common/Hero";
import About from "./components/sections/About";
import HeroAbout from "./components/sections/HeroAbout";
import CoreServices from "./components/sections/CoreServices";
import Platforms from "./components/sections/Platforms";
import Process from "./components/sections/OurProcess";
import CaseStudy from "./components/sections/CaseStudy";
import Clients from "./components/sections/Clients";
import Testimonials from "./components/sections/Testimonial";
import CTA from "./components/common/CTA";
import Contact from "./components/sections/Contact";
import ClientMarque from "./components/sections/ClientMarque";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ClientMarque/>
      <About/>
      <HeroAbout/>
      <CoreServices/>
      <Platforms/>
      <Process/>
      <CaseStudy/>
      <Clients/>
      <Testimonials/>
      <CTA/>
      <Contact/>
    </main>
  );
}
