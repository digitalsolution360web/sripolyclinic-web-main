"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";


export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="relative w-full h-[420px] md:h-[480px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=900&q=60"
            alt="Clinic"
            fill
            className="object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Why Choose Sri Poly Clinic?
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            We believe in treating the root cause — not just the symptoms.
            Our integrated approach of <span className="text-orange-600 font-semibold">Nutrition, Psychology & Yoga</span>
            offers complete body–mind healing designed specially for you.
          </p>

          {/* Points */}
          <div className="space-y-4 mt-6">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-600 text-xl mt-1" />
              <p className="text-gray-700 text-lg">Certified Nutrition & Yoga Experts</p>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-600 text-xl mt-1" />
              <p className="text-gray-700 text-lg">Personalized Treatment Plans</p>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-600 text-xl mt-1" />
              <p className="text-gray-700 text-lg">Holistic Mind–Body Wellness Approach</p>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-600 text-xl mt-1" />
              <p className="text-gray-700 text-lg">Safe, Natural & Effective Healing</p>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-600 text-xl mt-1" />
              <p className="text-gray-700 text-lg">Supportive & Friendly Environment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
