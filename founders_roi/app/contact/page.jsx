import React from "react";
import ContactHero from "../components/Contact/ContactHero";
import TrustBar from "../components/Contact/TrustBar";
import ContactHub from "../components/Contact/ContactHub";
import Contact from "../components/sections/Contact";

const page = () => {
  return (
    <main className="bg-[#030202] py-20">
      <ContactHero />
      <ContactHub />
      <TrustBar />
      <Contact />
    </main>
  );
};

export default page;
