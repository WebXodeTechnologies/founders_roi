"use client";
import ProcessCaseStudy from "../components/sections/Process/ProcessCaseStudy";
import ProcessFormula from "../components/sections/Process/ProcessFormula";
import ProcessTimeline from "../components/sections/Process/ProcessTimeline";
import ThirdCta from "../components/sections/WhyRoi/ThirdCta";

export default function ProcessPage() {


  return (
   <section className="py-20">
    <ProcessFormula/>
    <ProcessTimeline/>
    <ProcessCaseStudy/>
    <ThirdCta />
   </section>
  );
}
