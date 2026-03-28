"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function BestPcosDietBanner() {
  // Correct typing for open index
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faq = [
    {
      question: "Can I eat rice if I have PCOS?",
      answer:
        "Yes, but the amount matters. Doctors suggest taking brown rice as an alternative to highly polished white rice."
    },
    {
      question: "Is dairy bad for PCOS?",
      answer:
        "It varies from patient to patient. Our PCOS dietitian in Hanamkonda prepares the chat after conducting the necessary tests and checking your personal sensitivity."
    },
    {
      question: "Why am I always hungry even after eating?",
      answer:
        "This happens due to lack of insulin resistance. Your body's cells won't get the right energy as they require, so they demand more food. So, it's time to balance your meals and add more fiber to avoid false hunger."
    },
    {
      question: "Do I need to take supplements along with the diet?",
      answer:
        "Yes, a necessary supplement like Inositol, Vitamin D, or Magnesium can be helpful. However, our dietitian recommends visiting Sri Poly Clinic and getting yourself a personal hormone balance diet plan."
    },
    {
      question: "Is a keto diet the best for PCOS?",
      answer:
        "For rapid weight loss, the keto diet is effective, but in the case of PCOS, it is slightly complicated. We recommend following a more balanced and easier approach for the long term."
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
            Best Diet Plan for Weight Loss in Hanamkonda
          </h1>
        </div>
      </section>

      {/* ================= Introduction: The Power of a Hormone Balance Diet ================= */}
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
              Introduction: The Power of a Hormone Balance Diet
            </h2>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg">
              Hormonal equilibrium sometimes gives headaches to many females because of some physical or improper lifestyles in their lives. However, these challenges can be handled with care when diagnosing symptoms early.
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg">
              Our approach at Sri Poly Clinic focuses on high-fiber, anti-inflammatory foods that keep blood sugar stable. When you follow a dedicated hormone balance diet, you are letting your body process the energy without raising the level of insulin.
            </p>

            <p className="text-gray-800 leading-relaxed text-lg">
              To fight the battle against the silent culprits of PCOS, the Sri Poly Clinic has the best PCOS dietitian in Hanamkonda.
            </p>

            <p className="text-gray-800 leading-relaxed text-lg mt-4">
              Improve your overall metabolic health with the right diet – Consult with our Women nutritionist Hanamkonda, now!
            </p>
          </div>
        </div>
      </section>

      {/* ================= Why You Need a PCOS Dietitian in Hanamkonda ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6">
            Why You Need a PCOS Dietitian in Hanamkonda
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            It is not that easy to navigate multiple nutrition options along with "superfood" trends without expert guidance. That's why you need assistance from a talented PCOS dietitian in Hanamkonda.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            At Sri Poly Clinic, our dietitians don't just hand you a generic meal chart. In the entire care, they analyze your specific hormonal profile, lifestyle, and food preferences. That is how they come up with the perfect and sustainable solution for your nutritional improvements.
          </p>

          <p className="text-gray-800 mb-6 leading-relaxed text-lg">
            Whether you are struggling with fertility or simply want to feel more energetic, get the right and appropriate PCOS nutrition treatment at Sri Poly Clinic.
          </p>

          <p className="text-gray-800 leading-relaxed text-lg font-semibold text-blue-700">
            Don't settle for generic advice – Connect with Hanamkonda's top PCOS dietitian at Sri Poly Clinic now and get a perfect Hormone balance diet!
          </p>

        </div>
      </section>

      {/* ================= Personalized PCOS Weight Loss Diet Plan ================= */}
      <section className="w-full py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6">
            Personalized PCOS Weight Loss Diet Plan in Hanamkonda
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Weight loss with PCOS is notoriously difficult. However, the right diet plan can fix everything. With a PCOS weight loss diet plan in Hanamkonda, our dietician unlocks the chances of healing.
          </p>

          <p className="text-gray-800 leading-relaxed text-lg">
            At Sri Poly Clinic, weight loss isn't just about the number on the scale; it's about reducing the adipose tissue that contributes to hormonal dysfunction.
          </p>

          <p className="text-gray-800 mt-4 leading-relaxed text-lg font-semibold text-blue-700">
            Wait no more and start your customized weight loss program with us today!
          </p>

        </div>
      </section>

      {/* ================= The Best Diet for Irregular Periods & PCOS ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6">
            The Best Diet for Irregular Periods & PCOS
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            For clarification, every PCOS patient always seeks what is right on the internet all the time. Sometimes, the internet doesn't answer correctly, and you need help from the right PCOS dietitian in Hanamkonda to get the ultimate solution.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Here, we provide the best diet for irregular periods PCOS, and the methods begin with the following strategies:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg mb-6">
            <li>Focus on Zinc, Magnesium, and B-vitamins rich food and supplements.</li>
            <li>Choose pumpkin seeds and dark leafy greens.</li>
            <li>Add Omega-3 fatty acids found in walnuts and chia seeds in the diet.</li>
            <li>Avoid trans fats and excessive caffeine.</li>
          </ul>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            At Sri Poly Clinic, we also emphasize the timing of meals. Large gaps between meals can cause cortisol (the stress hormone) to rise, which further disrupts the menstrual cycle.
          </p>

          <p className="text-gray-800 leading-relaxed text-lg font-semibold text-blue-700">
            Reclaim your rhythm and say goodbye to irregular cycles. Schedule your appointment to get the perfect hormone balance diet at Sri Poly Clinic.
          </p>

        </div>
      </section>

      {/* ================= Specialized PCOS Nutrition Treatment at Sri Poly Clinic ================= */}
      <section className="w-full py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6">
            Specialized PCOS Nutrition Treatment at Sri Poly Clinic
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            PCOS nutrition treatment at Sri Poly Clinic is for patients who require special attention. We provide the perfect diet plan and nutrition treatment. Diet is the foundation of a broader medical strategy to ensure that your diet complements any medical treatments or supplements you may be taking.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            At our clinic, you aren't just a patient; you are a partner in your own healing. Here, we manage complex symptoms like hirsutism, thinning hair, and metabolic syndrome.
          </p>

          <p className="text-gray-800 leading-relaxed text-lg font-semibold text-blue-700">
            Experience a clinical approach for PCOS nutrition treatment – Visit Sri Poly Clinic for the most comprehensive PCOS care now!
          </p>

        </div>
      </section>

      {/* ================= Conclusion ================= */}
      <section className="w-full py-20 bg-gradient-to-r from-orange-500 to-yellow-400 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-extrabold mb-6">
            Conclusion
          </h2>

          <p className="text-lg leading-relaxed mb-4">
            When you find the right PCOS dietitian in Hanamkonda, it requires patience and discipline to achieve the desired success rate with the PCOS nutrition treatment at Sri Poly Clinic.
          </p>

          <p className="text-lg leading-relaxed font-semibold">
            Want a complete PCOS weight loss diet plan in Hanamkonda? Consult with our dietitian now!
          </p>

        </div>
      </section>
      
      {/* ================= Frequently Asked Questions ================= */}
      <section className="w-full py-16 bg-gray-50 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 mb-10">
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