"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function BestDiabetesDietBanner() {
  // Correct typing for open index
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faq = [
    {
      question: "How does a professional dietitian help more than a general diet chart?",
      answer:
        "A professional dietitian is the best at providing a bio-individual plan based on your blood work, lifestyle, and food preferences. That's how you improve your health at Sri Poly Clinic."
    },
    {
      question: "Can I eat white rice if I have Type 2 diabetes?",
      answer:
        "Did you know rice has a high glycemic index? Still, our professionals recommend adding rice in a controlled amount."
    },
    {
      question: "What are the best Indian snacks for a sugar control diet plan?",
      answer:
        "Chana, Makhana, and a handful of soaked almonds are the best Indian snacks to get blood sugar in control."
    },
    {
      question: "Why is Sri Poly Clinic best for diabetes care in Hanamkonda?",
      answer:
        "Experts at Sri Poly Clinic use the latest 2026 nutritional science. They also hold a deep understanding of patients' local dietary habits. That's why everyone becomes a trusted Diabetes dietitian in Hanamkonda."
    },
    {
      question: "Is fruit safe for diabetic patients?",
      answer:
        "Yes, most fruits are safe and healthy. The only catch is to always use them moderately."
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
          alt="Diabetes Nutrition Care"
          fill
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Diabetes Diet Guide by Expert Nutritionist
          </h1>
        </div>
      </section>

      {/* ================= Introduction: Diabetes Nutrition Care ================= */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:flex gap-12 items-center">

          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image
              src="/assets/images/aboutbanner.png"
              alt="Diabetes Care"
              width={600}
              height={450}
              className="rounded-3xl shadow-xl object-cover w-full"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
              Eat Better, Live Longer: Your Personalized Diabetes Nutrition Blueprint
            </h2>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg">
              Diabetes is rapidly increasing across the globe. It is a major concern for many patients and their relatives to control the parameters in the blood. However, checking the blood sugar level with a mediocre diet is not going to work at all. You need expert guidance.
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg">
              At <Link href="/" className="underline">Sri Poly Clinic</Link>, there is no holding back from getting the perfect and body-friendly diet plan to boost your resistance against diabetes. Our clinical dietician in Hanamkonda analyzes your HbA1c levels, body mass index, and daily activity to create a plan that is both realistic and effective.
            </p>

            <p className="text-gray-800 leading-relaxed text-lg font-semibold text-blue-700">
              Ready to reclaim your health? <Link href="/appointment" className="underline">Book an appointment</Link> with Diabetes nutrition care at Sri Poly Clinic and start your journey to stable sugars!
            </p>
          </div>
        </div>
      </section>

      {/* ================= Crafting a Sustainable Sugar Control Diet Plan ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            Crafting a Sustainable Sugar Control Diet Plan
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            A diabetes dietitian in Hanamkonda at Sri Poly Clinic focuses strongly on a restrictive diet plan and gives the perfect <Link href="/services/nutrition-assessment" className="underline">nutritional assessment</Link> to each patient based on their requirements.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            A successful Sugar control diet plan is not available off the shelf. The experts build sugar control. That's why you need an expert to lay the foundation for consistency in what you eat every day. At Sri Poly Clinic, we go beyond just counting calories.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Let's focus on the principles that our Diabetes dietitian in Hanamkonda draws every time for each patient:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg mb-6">
            <li>Prioritize high-fiber ingredients to slow sugar absorption.</li>
            <li>Use the Plate Method to visualize portion control effortlessly.</li>
            <li>Proper water intake is essential for kidney health and glucose processing.</li>
          </ul>

          <p className="text-gray-800 leading-relaxed text-lg font-semibold text-blue-700">
            Start your diet plan with proven results! Get your customized Sugar control diet plan from Sri Poly Clinic's top specialists now.
          </p>

        </div>
      </section>

      {/* ================= Precision Living with a Type 2 Diabetes Diet Plan ================= */}
      <section className="w-full py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            Precision Living with a Type 2 Diabetes Diet Plan in Hanamkonda
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            We created a specialized <Link href="/services/diabetic-diet-plan" className="underline">Type 2 diabetes diet plan in Hanamkonda</Link> that focuses on improving insulin resistance through specific superfoods. However, this specialization is not limited to; there are many types of patients consulting with us to get customized output.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            We take some major steps to prepare the Type 2 diabetes diet plan Hanamkonda, such as:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg mb-6">
            <li>Learn which food combinations keep your insulin levels flat.</li>
            <li>Integrating Omega-3s to protect your cardiovascular system.</li>
            <li>Easy transitions from refined grains to nutrient-dense ancient grains.</li>
          </ul>

          <p className="text-gray-800 leading-relaxed text-lg font-semibold text-blue-700">
            Don't let Type 2 manage you—manage it! Contact Sri Poly Clinic for a lifestyle transformation that actually works.
          </p>

        </div>
      </section>

      {/* ================= Why Choose Diabetes Nutrition Care at Sri Poly Clinic ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            Why Choose Diabetes Nutrition Care at Sri Poly Clinic?
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Choosing diabetes nutrition care at Sri Poly Clinic means you are opting for a multidisciplinary approach. The Diabetes nutrition care at Sri Poly Clinic understands your concerns and gives you the perfect <Link href="/services/customised-diet-plan" className="underline">diet plan</Link> to manage your diabetes in an effective way.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Let's get into the key considerations that make Sri Poly Clinic the perfect choice for diabetic patients:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg mb-6">
            <li>Use modern tech to see exactly how your body reacts to different foods.</li>
            <li>Help you navigate the mental hurdles of a chronic condition.</li>
            <li>Make you an expert in your own care.</li>
          </ul>

          <p className="text-gray-800 leading-relaxed text-lg font-semibold text-blue-700">
            At Sri Poly Clinic, we are dedicated to providing the most advanced diabetes nutrition care in 2026. When you have a personalized Indian diet plan for diabetic patients, you can achieve levels of health you never thought possible.
          </p>

        </div>
      </section>

      {/* ================= Conclusion ================= */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-extrabold mb-6 text-white">
            Conclusion
          </h2>

          <p className="text-lg leading-relaxed mb-4 text-white">
            At Sri Poly Clinic, we are dedicated to providing the most advanced diabetes nutrition care in 2026. When you have a personalized Indian diet plan for diabetic patients, you can achieve levels of health you never thought possible.
          </p>

          <p className="text-lg leading-relaxed font-semibold text-white">
            Visit Sri Poly Clinic and see why our nutrition care is the gold standard.
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