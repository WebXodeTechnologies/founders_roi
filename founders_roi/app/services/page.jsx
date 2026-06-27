"use client";

import ServicesHero from "../components/sections/Services/ServicesHero";
import ServiceShowcaseList from "../components/sections/Services/ServiceShowcaseList";
import ThirdCta from "../components/sections/WhyRoi/ThirdCta";
import ServicesOverview from "../components/sections/Services/ServicesOverview";



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
