"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function ChildNutritionBanner() {
  // Correct typing for open index
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faq = [

  {
    question: "Is it necessary to see a child nutritionist in Hanamkonda?",
    answer:
      "Yes, a regular doctor only guides you through illness. However, nutritionists are focusing in overal diet plan starting from growth to metabolic health. They tailor everything for each child."
  },
  {
    question: "What snacks do our specialists suggest for school children?",
    answer:
      "Our nutrition specialists always suggest going with the following foods for better growth. These foods contain fiber and protein in large amounts, such as: Sprouts, Peanut butter with apple slices, Homemade granola bars."
  },
  {
    question: "Is there any way to treat a picky eater at home?",
    answer:
      "Yes, you can do it with the help of Sri Poly Clinic’s Child nutritionist in Hanamkonda. We build a new diet plan and treat every child uniquely. Also, we keep them active under the new diet textures and flavors gradually."
  },
  {
    question: "Can you suggest the right food to boost immunity?",
    answer:
      "During the monsoon, parents should add turmeric, ginger, and Vitamin C-rich citrus fruits to their child’s diet plan. This can quickly reduce infection rates."
  },
  {
    question: "What is the right diet plan who is slightly overweight?",
    answer:
      "Our nutritionists never recommend any restrictive diet. At Sri Poly Clinic, we build your child’s health with sustainable diet plans and food goals."
  },
  {
    question: "What's the right interval to visit Sri Poly Clinic for nutrition check-ups?",
    answer:
      "A monthly visit with your child is always recommended in the initial term. Later, you can make it once every three months when the habits stabilize."
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
            Child Nutrition: Healthy Diet Plan for Growing Kids
          </h1>
        </div>
      </section>

      {/* ================= Introduction: Nurturing Growth ================= */}
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
              Nurturing Growth: The Ultimate Guide to Child Nutrition & Healthy Diet Plans
            </h2>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg">
              Starting from childhood, nourishment is always important. That’s why parents should be aware of factors that give their toddlers a perfect blend of taste and nutrition at once. To achieve all the clinical and critical details of Child nutritionist in Hanamkonda, you must consider the best specialists in the nearby location. 
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg">
              Then comes <Link href="/" className="underline">Sri Poly Clinic</Link>. Here, we bridge the gap between clinical expertise and practical meal planning. Whether it is about a specialist or professional guidance on Nutrition for school children, this is the place that acts as a beacon of health. 
            </p>

            <p className="text-gray-800 leading-relaxed text-lg font-semibold text-blue-700">Specialists at Sri Poly Clinic ensure your child receives the fuel they need to excel in academics and sports alike. Make the best <Link href="/services/nutrition-assessment" className="underline">nutrition assessment</Link> for your child now!
            </p>
          </div>
        </div>
      </section>

      {/* ================= Building the Foundation: Why Your Child Needs a Specialist Dietitian ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            Building the Foundation: Why Your Child Needs a Specialist Dietitian
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            A true dietician never fails to surprise parents when it comes to giving the perfect blend of diet with additional tips. This experience leads to an overwhelming joy for parents. 
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            At our clinic, we focus on more than just "eating greens". Yes, the green diet is always friendly for toddlers and children as they can complete all the demands. Our specialists look at bio-individual needs and metabolic requirements specific to each child. 
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Remember, the diet plan may differ from one child to another as we study first, then prepare the entire diet plan accordingly. With our Pediatric nutrition support at Sri Poly Clinic, parents can get:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg mb-6">
            <li>Tailored healthy weight gain diet for kids in Hanamkonda.</li>
            <li>Bridge nutritional gaps early to prevent chronic lifestyle diseases in adulthood.</li>
            <li>Focus on bone density, brain health, and hormonal balance.</li>
            <li>Help children become adventurous eaters rather than picky eaters.</li>
          </ul>

          <p className="text-gray-800 leading-relaxed text-lg font-semibold text-blue-700">
            Still thinking of your child’s diet plan? <Link href="/appointment" className="underline">Book an appointment</Link> with the leading kids dietician Hanamkonda, today!
          </p>

        </div>
      </section>

      {/* ================= The Sri Poly Clinic Advantage: Expert Pediatric Nutrition Support ================= */}
      <section className="w-full py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
            The Sri Poly Clinic Advantage: Expert Pediatric Nutrition Support
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Hard to find the right Immunity boosting foods for children? Well, you have visited to the right place. At Sri Poly Clinic, we work closely with families to ensure that the diet plan is sustainable for your child. 
          </p>

          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            We always prioritize keeping the diet plan within the local lifestyle and kitchen habits. That’s how we make healthy living an easy choice for the whole family.
          </p>
          <p className="text-gray-800 mb-4 leading-relaxed text-lg">This is how ever Child nutritionist in Hanamkonda from Sri Poly Clinic designs the diet plan: </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg mb-6">
            <li>Understand the Hanamkonda food culture</li>
            <li>Provide follow-up sessions, track growth, and adjust diets</li>
            <li>Educate the parents as much as the child for a supportive home environment.</li>
            <li>Make diagnostics with metabolic testing and body composition analysis.</li>
          </ul>

          <p className="text-gray-800 leading-relaxed text-lg font-semibold text-blue-700">
            Get the best plan based on nutrition for school children here! DM us “Diet” to book your appointment at Sri Poly Clinic!
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
            At Sri Poly Clinic, our Healthy weight gain diet for kids in Hanamkonda ensures that every child who walks through our doors leaves with a brighter, healthier future. That’s why we are the one institute that offers the most advanced and empathetic Pediatric nutrition support. 
          </p>

          <p className="text-lg leading-relaxed font-semibold text-white">
            Let us help you navigate the complexities of your child’s growth with science and care.
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