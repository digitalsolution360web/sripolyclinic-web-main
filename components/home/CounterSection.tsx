"use client";

import { useEffect, useState } from "react";

export default function CounterSection() {
  const counters = [
    { value: 1500, label: "Happy Clients" },
    { value: 1200, label: "Nutrition Plans" },
    { value: 900, label: "Mental Health Sessions" },
    { value: 700, label: "Yoga Therapy Sessions" },
  ];

  const [count, setCount] = useState(counters.map(() => 0));

  useEffect(() => {
    counters.forEach((item, index) => {
      let start = 0;
      const end = item.value;
      const duration = 2000;
      const step = Math.ceil(end / (duration / 30));

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }

        setCount((prev) => {
          const arr = [...prev];
          arr[index] = start;
          return arr;
        });
      }, 30);
    });
  }, []);

  return (
    <section className="w-full py-24 px-6 relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1400&q=80')",
        }}
      ></div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto md:text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">Our Achievements</h2>
        <p className="text-gray-200 mt-3 max-w-2xl mx-auto text-lg">
          Sri Poly Clinic brings powerful results in Nutrition, Psychology & Yoga healing.
        </p>

        {/* Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

          {counters.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md 
                         hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-5xl font-bold tracking-wide text-white drop-shadow">
                {count[i]}+
              </h3>
              <p className="mt-2 text-gray-200 tracking-wide text-lg">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
