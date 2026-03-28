"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function BestDietBanner() {
   // Correct typing for open index
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faq = [
    {
      question: "Can I lose weight by eating South Indian food?",
      answer:
        "Yes, our best nutritionist at Sri Poly Clinic specializes in traditional Indian diets. We help you learn how to balance Idli, Dosa, and Dal for maximum fat loss."
    },
    {
      question: "Is the weight loss diet plan at Sri Poly Clinic very restrictive? ",
      answer:
        "Not at all; we believe in 'Flexitarian' eating, which allows for variety and local food preferences."
    },
    {
      question: "Is there a personalized fat loss diet by nutritionists for vegetarians?",
      answer:
        "Absolutely; we have extensive experience in creating high-protein vegetarian plans."
    },
    {
      question: "Should I take supplements with my diet plan?",
      answer:
        "Our focus is on whole foods. However, if a deficiency is identified, we may recommend specific, safe supplements."
    },
    {
      question: "How do I book an appointment with the best nutritionist at Sri Poly Clinic? ",
      answer:
        "You can call us directly or visit our website to schedule your initial consultation."
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
              Introduction: Your Journey to a Healthier Lifestyle
            </h2>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg">
              Welcome to perfect health wellness in 2026! If you are searching for the right and personalized fat loss diet by nutritionists, you need to find the right weight loss center in Hanamkonda.
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg">
              Getting the right and personalized weight management methods from experts helps you to get relief from your old lifestyle and maintain a healthy daily routine with local food culture.
            </p>

            <p className="text-gray-800 leading-relaxed text-lg">
              At Sri Poly Clinic Hanamkonda, we understand that weight management is a deeply personal journey influenced by your genetics, daily routine, and local food culture.
            </p>

            <p className="text-gray-800 leading-relaxed text-lg mt-4">
              Let’s break down the chain of weight gain and implement the right strategies to take care of long-term results with natural and sustainable methods!
            </p>
          </div>
        </div>
      </section>

      {/* ================= Personalized Diet Section ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            Personalized Fat Loss Diet by Nutritionists: Commitment of Sri Poly Clinic Hanamkonda
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Getting hands on a weight loss diet plan hanamkonda is vital when clients love to take necessary actions against their weight-gain lifestyle. Remember, staying fat is not an ideal decision, as a healthy lifestyle always leads you to comfort and peace.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            At Sri Poly Clinic, we have the best dietician in hanamkonda who leads you to a perfect bodymass-keeping health. Our experts emphasizes on high-fibe local grains like millets (Jowar, Bajra) and pulses.
          </p>

          <p className="text-gray-800 mb-6 leading-relaxed text-lg">
            Let’s get in touch with the right diet plan that we introduce as the best nutritionist at sri poly clinic:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg">
            <li>We help you feel fuller for longer with the right diet chart.</li>
            <li>Help you naturally reduce your overall calorie intake.</li>
            <li>Introduce food like Poha, Dal, and seasonal vegetables for a bespoke approach.</li>
            <li>Provide continuous monitoring to tweak your macronutrient ratios</li>
          </ul>

          <p className="text-gray-800 mt-6 leading-relaxed text-lg">
            By choosing a professional weight loss clinic in Hanamkonda, you aren't just getting a piece of paper with food names; you are gaining a partner dedicated to your metabolic health and long-term vitality.
          </p>

          <p className="text-gray-800 mt-4 leading-relaxed text-lg">
            Ready to stop guessing and start seeing results? Book your personalized consultation at Sri Poly Clinic today!
          </p>

        </div>
      </section>

      {/* ================= Why Choose Section ================= */}
      <section className="w-full py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            Why Do We Offer the Best Diet Plan for Weight Loss in Hanamkonda?
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            There are reasons why people choose an affordable weight loss diet plan in Hanamkonda and receive various benefits at Sri Poly Clinic.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            We, at Sri Poly Clinic Hanamkonda, openly deliver quality lifestyle guidelines to our clients who place their trust in our experts.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Every dietician in hanamkonda lets you go through a gentler and more effective version of intermittent fasting. This is how we align with your natural circadian rhythm.
          </p>

          <p className="text-gray-800 leading-relaxed text-lg">
            We empower you with "Nutrition Literacy," teaching you how to read labels and make healthy choices even when dining out at local favorites like the restaurants near Nakkalagutta.
          </p>

          <p className="text-gray-800 mt-4 leading-relaxed text-lg">
            Join the community of achievers at the top weight loss clinic in Hanamkonda and reclaim your health now!
          </p>

        </div>
      </section>

      {/* ================= Affordable Section ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            Personalized Fat Loss Diet By Nutritionists: Quality Care for All
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            At Sri Poly Clinic Hanamkonda, we break the myth “Expensive Diet Plan Only Works”! Well, we are the right and affordable weight loss clinic in hanamkonda who always prioritize the lifestyle of clients, understand their requirements, and prepare a perfect diet chart that will fit their requirements effectively.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Remember, weight loss is not just a mere task that everyone can pull off easily! It requires science, discipline, and a lot of guidance through the journey.
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Apart from providing an affordable weight loss diet plan in hanamkonda, we ensure every client gets the right and equal treatment that they deserve!
          </p>

          <p className="text-gray-800 leading-relaxed text-lg">
            Our goal is to make Sri Poly Clinic the most trusted and accessible weight loss clinic in Hanamkonda, fostering a healthier community one person at a time.
          </p>

          <p className="text-gray-800 mt-4 leading-relaxed text-lg">
            Start your transformation with a plan that fits your budget—Contact Sri Poly Clinic for affordable weight loss solutions!
          </p>

        </div>
      </section>

      {/* ================= Conclusion ================= */}
      <section className="w-full py-20 bg-gradient-to-r from-orange-500 to-yellow-400 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            Conclusion
          </h2>

          <p className="text-lg leading-relaxed mb-4">
            Achieving your dream physique and optimal health is no longer a mystery. By choosing the best diet plan for weight loss in Hanamkonda at Sri Poly Clinic, you are opting for a science-backed, localized, and highly personalized experience.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Our team of experts is ready to guide you through the latest 2026 nutritional trends, focusing on your metabolic health rather than just the number on the scale.
          </p>

          <p className="text-lg leading-relaxed">
            Don't settle for generic advice when you can have a personalized fat loss diet by nutritionists; Join Sri Poly Clinic Hanamkonda Today!
          </p>

        </div>
      </section>
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
