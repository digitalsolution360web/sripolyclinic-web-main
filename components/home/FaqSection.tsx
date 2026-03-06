"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FaqSection() {
  // Correct typing for open index
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faq = [
    {
      question: "What services does Sri Poly Clinic offer?",
      answer:
        "We provide Nutrition Counselling, Psychological Counselling, and Therapeutic Yoga under one roof for complete lifestyle and wellness improvement."
    },
    {
      question: "How can I book an appointment with Dr. A. Srilatha?",
      answer:
        "Click on the Book Appointment button or visit the appointment page. You can choose your preferred date and time."
    },
    {
      question: "Do you offer personalized diet plans?",
      answer:
        "Yes, all diet plans are completely personalized based on your medical conditions, lifestyle, body type, and goals."
    },
    {
      question: "Is online consultation available?",
      answer:
        "Yes, online consultations are available for Nutrition & Psychology. Yoga sessions are available online and offline both."
    }
  ];

  // Toggle Function
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
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
  );
}
