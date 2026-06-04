"use client";

const clients = [
  "Brand One",
  "Brand Two",
  "Brand Three",
  "Brand Four",
  "Brand Five",
  "Brand Six",
];

export default function ClientLogos() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10">
          Brands We've Worked With
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {clients.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-white/5 border border-white/10 
              hover:border-orange-500/40 transition text-gray-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
