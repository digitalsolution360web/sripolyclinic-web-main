// app/[slug]/ServiceDetailClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  FaCheckCircle, 
  FaClock, 
  FaRupeeSign, 
  FaCalendarAlt,
  FaArrowLeft,
  FaShare,
  FaHeart,
  FaPhone
} from "react-icons/fa";

interface ServiceDetailProps {
  service: {
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    image: string;
    icon: string;
    features: string[];
    benefits: string[];
    process: string[];
    faqs: Array<{ question: string; answer: string }>;
    price: string;
    duration: string;
    bookingLink: string;
  };
  slug: string;
}

export default function ServiceDetailClient({ service, slug }: ServiceDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  // Customised Diet Plan content
  const dietPlanContent = {
    title: "Customised Diet Plan",
    subtitle: "Personalized nutrition plans tailored to your unique health needs and lifestyle",
    description: "Looking for a customised diet plan in Hanamkonda that actually works for your lifestyle? At Sri Poly Clinic, we create personalized diet charts based on your unique health needs, daily routine, and medical history—so you can achieve real, long-term results.",
    longDescription: `Our customised diet plan service is not based on generic templates or internet diets. We carefully understand your body type, lifestyle habits, and health conditions before designing your plan.

The goal is simple—create a diet that fits into your life naturally, without forcing extreme changes or restrictions.

At Sri Poly Clinic, we believe that sustainable health comes from balanced nutrition and consistency, not short-term dieting.`,
    image: "/images/services/diet-plan.jpg",
    icon: "🥗",
    features: [
      "Detailed nutrition assessment",
      "Personalized meal planning",
      "Diet plan based on medical conditions (if any)",
      "Lifestyle and eating habit guidance",
      "Continuous support and adjustments",
      "Practical and easy-to-follow meal plans"
    ],
    benefits: [
      "Improved overall health and energy levels",
      "Better weight management and control",
      "Balanced nutrition tailored to your body",
      "Easy-to-follow meal plans",
      "Long-term lifestyle improvement",
      "Sustainable eating habits"
    ],
    process: [
      "Initial Consultation: We understand your health goals, lifestyle, and medical background.",
      "Body & Nutrition Analysis: We evaluate your current eating habits and body requirements.",
      "Personalized Diet Plan Creation: A customized diet chart is designed specifically for you.",
      "Implementation & Guidance: You receive clear instructions and practical tips to follow the plan easily.",
      "Follow-Up & Adjustments: We monitor your progress and make necessary changes for better results."
    ],
    faqs: [
      {
        question: "Is the diet plan customized for every individual?",
        answer: "Yes, every diet plan is tailored based on your body, lifestyle, and health goals. We don't use generic templates or one-size-fits-all approaches."
      },
      {
        question: "Will I need to follow strict dieting?",
        answer: "No, our plans are practical and easy to follow without extreme restrictions. We focus on creating sustainable eating habits that fit naturally into your lifestyle."
      },
      {
        question: "Can this help with weight loss?",
        answer: "Yes, the plan is designed to support healthy and sustainable weight loss through balanced nutrition and consistent habits, not crash dieting."
      },
      {
        question: "Do you consider medical conditions?",
        answer: "Absolutely. We create diet plans based on your medical history and requirements, including conditions like diabetes, thyroid, PCOS, and lifestyle disorders."
      },
      {
        question: "Who should choose this service?",
        answer: "This service is ideal for people looking for healthy weight loss, individuals with diabetes or lifestyle disorders, anyone wanting a structured diet, busy professionals needing practical meal plans, and those struggling with inconsistent eating habits."
      }
    ],
    price: "1,999",
    duration: "30 Minutes",
    bookingLink: "/contact"
  };

  // Use diet plan content if slug matches, otherwise use passed service
  const currentService = slug === 'customised-diet-plan' ? dietPlanContent : service;

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={currentService.image}
          alt={currentService.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <Link 
              href="/services"
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors group"
            >
              <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{currentService.icon}</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                {currentService.title}
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              {currentService.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={currentService.bookingLink}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <FaCalendarAlt />
                Book Appointment
              </Link>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all flex items-center gap-2"
              >
                <FaHeart className={isFavorite ? "fill-red-500" : ""} />
                {isFavorite ? "Saved" : "Save"}
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all flex items-center gap-2">
                <FaShare />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex gap-6">
              <div className="flex items-center gap-2 text-gray-600">
                <FaRupeeSign className="text-green-600" />
                <span className="font-semibold">Starting ₹{currentService.price}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaClock className="text-blue-600" />
                <span className="font-semibold">{currentService.duration}</span>
              </div>
            </div>
            <div className="flex gap-4">
              {['overview', 'features', 'process', 'faq'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {activeTab === 'overview' && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold mb-6">About This Service</h2>
                  <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                    {currentService.longDescription}
                  </p>
                  
                  <h3 className="text-2xl font-semibold mb-4 mt-8">Key Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {currentService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Who Should Choose This Service - Custom section for diet plan */}
                  {slug === 'customised-diet-plan' && (
                    <>
                      <h3 className="text-2xl font-semibold mb-4 mt-8">Who Should Choose This Service?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {[
                          "People looking for healthy weight loss",
                          "Individuals with diabetes or lifestyle disorders",
                          "Anyone wanting a structured and balanced diet",
                          "Busy professionals needing practical meal plans",
                          "Individuals struggling with inconsistent eating habits"
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {activeTab === 'features' && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold mb-6">What's Included in Your Diet Plan</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentService.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                        <div className="w-2 h-2 mt-2 rounded-full bg-blue-600"></div>
                        <span className="text-gray-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'process' && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold mb-8">Our Process</h2>
                  <div className="space-y-6">
                    {currentService.process.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-grow pb-6 border-b border-gray-200 last:border-0">
                          <p className="text-gray-800 text-lg">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'faq' && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {currentService.faqs.map((faq, index) => (
                      <details key={index} className="group border rounded-lg">
                        <summary className="flex justify-between items-center font-medium cursor-pointer p-4">
                          <span className="text-gray-900">{faq.question}</span>
                          <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <div className="p-4 pt-0 text-gray-600 border-t">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-gray-600 mb-6">
                  Take the first step towards a healthier lifestyle with a plan made just for you.
                </p>
                <Link
                  href={currentService.bookingLink}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Book Appointment
                </Link>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                    <FaPhone className="text-blue-600" />
                    <span>Call Now: +91 77023 23401</span>
                  </p>
                  <p className="text-sm text-gray-500 text-center">
                    Free consultation available
                  </p>
                </div>
              </div>

              {/* Why Choose Us Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Why Choose Sri Poly Clinic?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-white/80" />
                    <span>Personalized approach (no copy-paste diets)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-white/80" />
                    <span>Focus on long-term health results</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-white/80" />
                    <span>Easy and practical diet plans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-white/80" />
                    <span>Trusted nutritionist in Hanamkonda</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-white/80" />
                    <span>Holistic wellness support</span>
                  </li>
                </ul>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Visit Us</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">📍 Sri Poly Clinic</span>
                </p>
                <p className="text-gray-600 mb-4">
                  Hanamkonda, Telangana
                </p>
                <a 
                  href="https://www.sripolyclinic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  www.sripolyclinic.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/nutrition-planning" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition group">
              <span className="text-4xl mb-3 block">🥗</span>
              <h3 className="font-semibold mb-2">Nutrition Planning</h3>
              <span className="text-blue-600 group-hover:translate-x-2 inline-block transition-transform">
                Learn More →
              </span>
            </Link>
            <Link href="/services/weight-management" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition group">
              <span className="text-4xl mb-3 block">⚖️</span>
              <h3 className="font-semibold mb-2">Weight Management</h3>
              <span className="text-blue-600 group-hover:translate-x-2 inline-block transition-transform">
                Learn More →
              </span>
            </Link>
            <Link href="/services/health-consultation" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition group">
              <span className="text-4xl mb-3 block">🏥</span>
              <h3 className="font-semibold mb-2">Health Consultation</h3>
              <span className="text-blue-600 group-hover:translate-x-2 inline-block transition-transform">
                Learn More →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}