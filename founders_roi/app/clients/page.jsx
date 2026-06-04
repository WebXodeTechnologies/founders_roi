import ClientHero from "../components/sections/Clients/ClientHero";
import ClientLogos from "../components/sections/Clients/ClientLogos";
import Cta from "../components/sections/Clients/Cta";

import Industries from "../components/sections/Clients/Industries";
import Results from "../components/sections/Clients/Results";
import Testimonials from "../components/sections/Clients/Testimonial";
import VideoTestimonials from "../components/sections/Clients/VideoTestimonial";

export default function Page() {
  return (
    <main className="bg-black text-white">
      <ClientHero />
      <Industries />
      <ClientLogos />
      <Results />
      <Testimonials />
      <VideoTestimonials />
      <Cta />
    </main>
  );
}
