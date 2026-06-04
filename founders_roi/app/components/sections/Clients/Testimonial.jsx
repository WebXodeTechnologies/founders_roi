"use client";

const testimonials = [
  {
    name: "Client Name",
    text: "We scaled our revenue and improved conversions significantly.",
  },
  {
    name: "Client Name",
    text: "Their systems completely transformed our marketing.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-white/5 border border-white/10"
          >
            <p className="text-gray-300 text-sm mb-4">"{t.text}"</p>
            <p className="text-orange-400 text-xs">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
