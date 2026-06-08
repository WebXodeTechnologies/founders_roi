
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


export default function Home() {
  return (
    <section className="py-5">
      <Hero />
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
    </section>
  );
}
