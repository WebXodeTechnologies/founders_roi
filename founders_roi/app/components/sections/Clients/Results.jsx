"use client";

const stats = [
  { value: "3X", label: "Revenue Growth" },
  { value: "50%", label: "Lower CAC" },
  { value: "2X", label: "Conversion Rate" },
];

export default function Results() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-10">
        Results That Matter
      </h2>

      <div className="flex justify-center gap-10 flex-wrap">
        {stats.map((s, i) => (
          <div key={i}>
            <p className="text-3xl font-bold text-orange-500">{s.value}</p>
            <p className="text-gray-400 text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
