"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function BestDiabetesBanner() {
  // Correct typing for open index
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faq = [
  {
    question: "How does a professional dietitian help more than a general diet chart?",
    answer:
      "A professional dietitian provides a bio-individual plan based on your blood work, lifestyle, and food preferences, helping you improve your health effectively."
  },
  {
    question: "Can I eat white rice if I have Type 2 diabetes?",
    answer:
      "Yes, but in controlled portions. Rice has a high glycemic index, so moderation is key."
  },
  {
    question: "What are the best Indian snacks for a sugar control diet?",
    answer:
      "Chana, makhana, and soaked almonds are excellent snacks for maintaining blood sugar levels."
  },
  {
    question: "Why is Sri Poly Clinic best for diabetes care?",
    answer:
      "They use the latest nutrition science and understand local dietary habits, offering personalized care."
  },
  {
    question: "Is fruit safe for diabetic patients?",
    answer:
      "Yes, fruits are healthy but should always be consumed in moderation."
  }
];
  // Toggle Function
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="w-full">

      {/* ================= Upper Banner ================= */}
      <section className="relative w-full h-[300px] md:h-[500px]">
        <Image
          src="/assets/images/aboutbanner.png"
          alt="About Clinic"
          fill
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
  Eat Better, Live Longer: Your Personalized Diabetes Nutrition Blueprint
</h1>
        </div>
      </section>

      {/* ================= Introduction ================= */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:flex gap-12 items-center">

          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image
              src="/assets/images/aboutbanner.png"
              alt="About Clinic"
              width={600}
              height={450}
              className="rounded-3xl shadow-xl object-cover w-full"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
  Personalized Diabetes Nutrition Blueprint
</h2>

<p className="text-gray-800 mb-4 leading-relaxed text-lg">
  Diabetes is rapidly increasing across the globe and managing blood sugar levels requires more than a basic diet. You need expert guidance and a scientifically planned approach.
</p>

<p className="text-gray-800 mb-4 leading-relaxed text-lg">
  At Sri Poly Clinic, our clinical dietician in Hanamkonda analyzes your HbA1c levels, BMI, and daily lifestyle to create a personalized plan that is realistic and effective.
</p>

<p className="text-gray-800 leading-relaxed text-lg font-semibold text-blue-700">
  Ready to reclaim your health? Book your diabetes nutrition consultation today!
</p>
          </div>
        </div>
      </section>

      {/* ================= Sugar Control Diet ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
  Crafting a Sustainable Sugar Control Diet Plan
</h2>

<p className="text-gray-800 mb-4 text-lg">
  A diabetes dietitian in Hanamkonda focuses on building a sustainable diet plan tailored to each patient.
</p>

<ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg mb-6">
  <li>Prioritize high-fiber foods to slow sugar absorption</li>
  <li>Use the Plate Method for portion control</li>
  <li>Maintain proper hydration for glucose balance</li>
</ul>

<p className="text-blue-700 font-semibold text-lg">
  Start your customized sugar control diet today!
</p>

        </div>
      </section>

      {/* ================= Type 2 Diabetes ================= */}
      <section className="w-full py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
  Type 2 Diabetes Diet Plan in Hanamkonda
</h2>

<p className="text-gray-800 mb-4 text-lg">
  Our Type 2 diabetes diet plan focuses on improving insulin resistance using scientifically proven methods.
</p>

<ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg mb-6">
  <li>Smart food combinations to stabilize insulin</li>
  <li>Include Omega-3 for heart protection</li>
  <li>Shift from refined grains to nutrient-rich alternatives</li>
</ul>

<p className="text-blue-700 font-semibold text-lg">
  Take control of your diabetes with expert guidance today!
</p>

        </div>
      </section>

      {/* ================= Why Choose ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
  Why Choose Diabetes Nutrition Care at Sri Poly Clinic?
</h2>

<ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg mb-6">
  <li>Advanced technology to track your body’s response</li>
  <li>Support for mental and lifestyle challenges</li>
  <li>Personalized and practical diet plans</li>
</ul>

        </div>
      </section>

      

      {/* ================= Conclusion ================= */}
      <section className="w-full py-20 bg-gradient-to-r from-orange-500 to-yellow-400 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
  Conclusion
</h2>

<p className="text-lg leading-relaxed mb-4">
  At Sri Poly Clinic, we provide advanced diabetes nutrition care designed for long-term health and stability.
</p>

<p className="text-lg font-semibold">
  Visit Sri Poly Clinic and experience the gold standard in diabetes care.
</p>

        </div>
      </section>
      
      {/* ================= Frequently Asked Questions ================= */}
      <section className="w-full py-16 bg-gray-50 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 mb-10   text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item, index: number) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-semibold text-blue-800 hover:bg-blue-50 transition"
              >
                {item.question}

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-5 py-4 text-gray-700 text-base border-t bg-white animate-fadeIn">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}