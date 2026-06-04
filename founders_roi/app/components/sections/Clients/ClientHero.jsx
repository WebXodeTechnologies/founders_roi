"use client";

export default function ClientHero() {
  return (
    <section className="relative py-24 px-6 text-center">
      {/* GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full" />

      <div className="max-w-3xl mx-auto relative z-10">
        <p className="text-orange-400 uppercase tracking-[0.2em] text-xs mb-3">
          Our Clients
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Trusted by <span className="text-orange-500">Growing Brands</span>
        </h1>

        <p className="text-gray-400 text-sm md:text-base mb-8">
          We partner with ambitious brands to build scalable growth systems,
          drive revenue, and create long-term success.
        </p>

        <button className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-600 transition">
          Work With Us
        </button>
      </div>
    </section>
  );
}
