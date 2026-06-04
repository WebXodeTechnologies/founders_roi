"use client";

export default function Cta() {
  return (
    <section className="py-24 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Ready to Be Our Next{" "}
        <span className="text-orange-500">Success Story?</span>
      </h2>

      <p className="text-gray-400 mb-8">
        Let’s build a scalable growth system for your brand.
      </p>

      <button className="px-8 py-3 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-600 transition">
        Book Strategy Call
      </button>
    </section>
  );
}
