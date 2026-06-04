"use client";

export default function VideoTestimonials() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-10">
        Client Success Stories
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="aspect-video bg-white/5 border border-white/10 rounded-xl flex items-center justify-center"
          >
            <p className="text-gray-400 text-sm">Video {i + 1}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
