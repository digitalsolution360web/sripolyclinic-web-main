"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function ThyroidWeightBanner() {
  // Correct typing for open index
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faq = [

  {
    question: "Can I lose weight with hypothyroidism if I am already on medication?",
    answer:
      "Yes, at Sri Poly Clinic, you will receive a specialized hypothyroid diet plan to fix your metabolic activities."
  },
  {
    question: "Why am I gaining weight despite eating very little?",
    answer:
      "The presence of thyroid can reduce the BMR. This means you will store more calories and gain weight even in a strict food consumption rate. That’s what we fix at Sri Poly Clinic."
  },
  {
    question: "Are there specific foods to avoid in thyroid conditions?",
    answer:
      "Yes, there are many significant foods to dodge during thyroid conditions. However, common items like soy, raw cruciferous vegetables, and refined sugar are not recommended in the diet."
  },
  {
    question: "Is soy bad for thyroid patients?",
    answer:
      "Yes, it is. The consumption of soy may lead to improper hormone absorption rate. At our clinic, we guide you to moderate your soy usei n the meal and keep you away from medication."
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Within 4–6 weeks of following the plan, a patient can witness a visible result in weight changes."
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
            Thyroid Weight Management Diet Plan
          </h1>
        </div>
      </section>

      {/* ================= Introduction: Thyroid Weight Management Diet Plan ================= */}
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
              Revolutionize Your Health: The Best Thyroid Weight Management Diet Plan at Sri Poly Clinic
            </h2>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg">
              Weight management won't be a problem anymore with the best experts and their proven diet plans. Yes, at <Link href="/" className="underline">Sri Poly Clinic</Link>, patients can get the treatment and proven assistance from a trusted Thyroid diet specialist Hanamkonda. 
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg">
              Yes, it is no longer a difficult step as we offer holistic plans that integrate nutrition, yoga, and psychological wellness. The blending of all these activities ensures long-term success. 
            </p>

            <p className="text-gray-800 leading-relaxed text-lg font-semibold text-blue-700">
              Stop guessing and start progressing with expert guidance. Book your Thyroid diet consultation at Sri Poly Clinic today!
            </p>
          </div>
        </div>
      </section>

      {/* ================= Expert Strategies for Thyroid-Driven Weight Loss ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            Expert Strategies for Thyroid-Driven Weight Loss
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            At Sri Poly Clinic, we don’t just provide the <Link href="/services/customised-diet-plan">diet plan</Link>, but focus on the root cause. Here, we control how everything is managed to fit your lifestyle and diet without causing any discomfort.  
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Whether it is about inflammation, gut health, or iodine deficiency, we work on every part to observe whether your body gives you the weight loss sign or not. This approach ensures that your weight management is sustainable. 
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            That’s how we prevent many challenges and make the weight balance easier with the sustainable diet plan.
          </p>
          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            To understand a Thyroid weight loss diet plan in Hanamkonda, you need to follow the expert guidance first. Some of them are mentioned below that our dieticians recommend: 
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg mb-6">
            <li>Personalized nutrition based on clinical thyroid profiles.</li>
            <li>Holistic integration of mind and body for metabolic health.</li>
            <li>Focus on hormonal balance rather than simple calorie restriction.</li>
            <li>Expert guidance from a certified nutritionist and yoga coach. </li>
          </ul>
          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
Remember, A successful Hypothyroid diet plan is built on the foundation of nutrient density and thermal effect. For that, our Thyroid diet consultation at Sri Poly Clinic always uses some of the common steps, such as:</p>
<ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg mb-6">
            <li>High-protein intake to preserve muscle mass and boost BMR. </li>
            <li>Balanced "meal plate" approach for steady blood sugar levels.</li>
            <li>Elimination of metabolic disruptors and hidden sugars.</li>
            <li>Emphasis on Selenium and Zinc-rich foods like sunflower seeds and lentils.</li>
          </ul>
          <p className="text-gray-800 leading-relaxed text-lg font-semibold text-blue-700">
            <Link href="/contact" className="underline">Boost your slow metabolism easily</Link> – Get your customized Hypothyroid diet plan at Sri Poly Clinic now!
          </p>

        </div>
      </section>

      {/* ================= Essential Knowledge: Foods to Avoid in Thyroid Management ================= */}
      <section className="w-full py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            Essential Knowledge: Foods to Avoid in Thyroid Management
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            The right food always keeps you healthy and lets you out of trouble all the time by providing the right nutrition all the time. That's why it is necessary to pick certain Foods to avoid in thyroid diet plan. 
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Our Thyroid diet consultation at Sri Poly Clinic is so effective. That’s why our experts recommend the following diet chart, for a basic startup at least: 
          </p>
       
          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg mb-6">
            <li>Avoid raw goitrogens (cabbage/kale) but enjoy them cooked.</li>
            <li>Focus on reducing "hidden" salts and preservatives in packaged foods.</li>
            <li>Strict gap between medication and calcium/caffeine.</li>
            <li>Limit processed soy and inflammatory refined sugars.</li>
          </ul>

          <p className="text-gray-800 leading-relaxed text-lg font-semibold text-blue-700">
            Want more clarity on the Metabolism boosting diet plan? Book your consultation at Sri Poly Clinic to clear your dietary doubts!
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
            The necessity to keep to the right diet for a thyroid patient is a rigorous process. However, Sri Poly Clinic’s Thyroid diet specialist Hanamkonda has made everything clear and straightforward. Here, we cover every aspect of your journey.  
          </p>

          <p className="text-lg leading-relaxed font-semibold text-white">
            Book your appointment to get expert guidance! With our help, it won't be the reason you can't lose it. 
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