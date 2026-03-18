"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function BestDietBanner() {
  // Correct typing for open index
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faq = [
    {
      question: "Do you provide customized diet plans?",
      answer: "Yes, every plan is created based on your body type, lifestyle, and health goals."
    },
    {
      question: "Can I lose weight without strict dieting?",
      answer: "Absolutely. We focus on sustainable and healthy weight loss methods."
    },
    {
      question: "Do you offer yoga sessions?",
      answer: "Yes, we provide multiple yoga programs including weight loss and pregnancy yoga."
    },
    {
      question: "Which areas do you serve?",
      answer: "We serve Hanamkonda and nearby areas like Kumarpally, Kothur, Kakaji Colony, Reddy Colony, and Yadav Nagar."
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
            Best Nutritionist in Hanamkonda – Sri Poly Clinic
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
              Your Journey to Better Health Begins Here
            </h2>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg">
              If you're looking for the best nutritionist in Hanamkonda, Sri Poly Clinic is the place where your health transformation begins. We don't believe in quick fixes or extreme diets—instead, we focus on practical, personalized solutions that actually fit into your daily life.
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg">
              Whether your goal is weight loss, managing a medical condition, or simply feeling more energetic, our expert guidance helps you achieve long-term results without stress or confusion.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Personalized Nutrition Section ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6">
            🟢 Personalized Nutrition That Works for You
          </h2>

          <p className="text-gray-800 mb-6 leading-relaxed text-lg">
            At Sri Poly Clinic, we understand that every individual is different. Your lifestyle, food habits, and health conditions all play a role in your overall wellness.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg font-semibold">
            That's why we offer:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg mb-6">
            <li>Detailed nutrition assessment</li>
            <li>Customised diet plans</li>
            <li>Body composition analysis</li>
            <li>Diabetic diet planning</li>
          </ul>

          <p className="text-gray-800 leading-relaxed text-lg">
            Our approach is simple—create a plan you can follow comfortably, not something that feels like a burden.
          </p>
        </div>
      </section>

      {/* ================= Healthy Weight Loss Section ================= */}
      <section className="w-full py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6">
            🟢 Healthy Weight Loss Without Crash Diets
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Struggling with weight loss? You're not alone. Many people try strict diets and end up gaining the weight back.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg font-semibold">
            Here, we focus on:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg mb-6">
            <li>Sustainable weight loss</li>
            <li>Obesity management</li>
            <li>Balanced eating habits</li>
          </ul>

          <p className="text-gray-800 leading-relaxed text-lg">
            No starving, no shortcuts—just real, lasting results.
          </p>
        </div>
      </section>

      {/* ================= Complete Wellness Section ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6">
            🟢 Complete Wellness – Mind & Body Together
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Health isn't just about food. Your mental well-being plays a huge role in your overall lifestyle.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg font-semibold">
            We provide support for:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg mb-6">
            <li>Stress management</li>
            <li>Anxiety and depression</li>
            <li>Family and career counselling</li>
          </ul>

          <p className="text-gray-800 leading-relaxed text-lg">
            Because when your mind is balanced, your body follows.
          </p>
        </div>
      </section>

      {/* ================= Yoga & Lifestyle Section ================= */}
      <section className="w-full py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6">
            🟢 Yoga & Lifestyle Programs
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            To support your transformation, we also offer:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg mb-6">
            <li>Regular yoga sessions</li>
            <li>Weight loss yoga</li>
            <li>Pregnancy yoga</li>
            <li>Infertility yoga</li>
            <li>Meditation</li>
          </ul>

          <p className="text-gray-800 leading-relaxed text-lg">
            These programs help improve flexibility, reduce stress, and enhance your daily energy levels.
          </p>
        </div>
      </section>

      {/* ================= Service Areas Section ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6">
            🟢 Serving Hanamkonda & Nearby Areas
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Sri Poly Clinic proudly serves clients across:
          </p>

          <p className="text-gray-800 mb-6 leading-relaxed text-lg font-semibold">
            Hanamkonda, Kumarpally, Kothur, Kakaji Colony, Reddy Colony, and Yadav Nagar
          </p>

          <p className="text-gray-800 leading-relaxed text-lg">
            So if you're searching for a nutritionist near Hanamkonda, expert help is just around the corner.
          </p>
        </div>
      </section>

      {/* ================= Why Choose Us Section ================= */}
      <section className="w-full py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6">
            🟢 Why Choose Sri Poly Clinic?
          </h2>

          <ul className="space-y-3 text-gray-800 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✔</span>
              <span>Personalized approach (not generic diet plans)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✔</span>
              <span>Holistic care (nutrition + yoga + mental health)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✔</span>
              <span>Practical and easy-to-follow guidance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✔</span>
              <span>Trusted by local clients in Hanamkonda</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✔</span>
              <span>Focus on long-term health, not quick fixes</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ================= CTA Section ================= */}
      <section className="w-full py-20 bg-gradient-to-r from-green-500 to-teal-400 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-extrabold mb-6">
            🟢 Take the First Step Towards Better Health
          </h2>

          <p className="text-xl leading-relaxed mb-8">
            Your health journey doesn't need to be complicated. With the right guidance, small changes can create big results.
          </p>

          <div className="space-y-4 text-lg">
            <p>📞 Call Now: <span className="font-bold">+91 77023 23401</span></p>
            <p>🌐 Visit: <span className="font-bold">https://www.sripolyclinic.com/</span></p>
          </div>

          <button className="mt-8 bg-white text-green-600 font-bold py-4 px-8 rounded-full text-xl hover:bg-gray-100 transition duration-300 shadow-lg">
            Book Your Consultation Today
          </button>

          <p className="mt-6 text-lg">
            Start your journey with the best nutritionist in Hanamkonda.
          </p>
        </div>
      </section>

      {/* ================= FAQ Section ================= */}
      <section className="w-full py-16 bg-gray-50 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-700 mb-10">
          🟢 Frequently Asked Questions
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
                className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-semibold text-green-800 hover:bg-green-50 transition"
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