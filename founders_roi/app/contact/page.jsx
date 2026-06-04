import React from "react";
import ContactHero from "../components/Contact/ContactHero";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";

const page = () => {
  return (
    <main className="bg-black py-20">
      <ContactHero />

      <section className="py-16 px-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <ContactInfo />
        <ContactForm />
      </section>
    </main>
  );
};

export default page;
