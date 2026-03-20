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
  FaHeart
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

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <Link 
              href="/services" // Changed from /services to /service to match your structure
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors group"
            >
              <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{service.icon}</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                {service.title}
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              {service.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={service.bookingLink}
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

      {/* Rest of your component remains the same... */}
      {/* Quick Info Bar */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex gap-6">
              <div className="flex items-center gap-2 text-gray-600">
                <FaRupeeSign className="text-green-600" />
                <span className="font-semibold">{service.price}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaClock className="text-blue-600" />
                <span className="font-semibold">{service.duration}</span>
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
                  <h2 className="text-3xl font-bold mb-6 text-black">About This Service</h2>
                  <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                    {service.longDescription}
                  </p>
                  
                  <h3 className="text-2xl font-semibold mb-4 mt-8 text-black">Key Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold mb-6 text-black">What We Offer</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.features.map((feature, index) => (
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
                  <h2 className="text-3xl font-bold mb-8 text-black">Our Process</h2>
                  <div className="space-y-6">
                    {service.process.map((step, index) => (
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
                  <h2 className="text-3xl font-bold mb-6 text-black">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq, index) => (
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
                <h3 className="text-xl font-bold mb-4 text-black">Ready to Start?</h3>
                <p className="text-gray-600 mb-6">
                  Book your session today and take the first step towards better health.
                </p>
                <Link
                  href={service.bookingLink}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Book Appointment
                </Link>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Free consultation available
                </p>
              </div>

              {/* Why Choose Us Card */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4 text-white">Why Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-white/80" />
                    <span>10+ years of experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-white/80" />
                    <span>Certified professionals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-white/80" />
                    <span>Personalized approach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-white/80" />
                    <span>Flexible scheduling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/nutrition-planning" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition group">
              <span className="text-4xl mb-3 block">🥗</span>
              <h3 className="font-semibold mb-2 text-black">Nutrition Planning</h3>
              <span className="text-blue-600 group-hover:translate-x-2 inline-block transition-transform">
                Learn More →
              </span>
            </Link>
            <Link href="/psychology-counseling" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition group">
              <span className="text-4xl mb-3 block">🧠</span>
              <h3 className="font-semibold mb-2 text-black">Psychology Counseling</h3>
              <span className="text-blue-600 group-hover:translate-x-2 inline-block transition-transform">
                Learn More →
              </span>
            </Link>
            <Link href="/yoga-sessions" className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition group">
              <span className="text-4xl mb-3 block">🧘</span>
              <h3 className="font-semibold mb-2 text-black">Yoga Sessions</h3>
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
