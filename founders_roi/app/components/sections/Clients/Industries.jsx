"use client";

const industries = [
  "D2C Brands",
  "Service Businesses",
  "Coaches & Consultants",
  "Real Estate",
  "Startups",
  "SaaS",
];

export default function Industries() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10">
          Industries We Work With
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-lg bg-white/5 border border-white/10 
              hover:border-orange-500/40 hover:bg-white/10 transition"
            >
              <p className="text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
