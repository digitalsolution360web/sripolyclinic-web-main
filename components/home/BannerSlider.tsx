"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import {
  FaAppleAlt,
  FaBrain,
  FaSpa,
  FaFingerprint
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

export default function BannerSlider() {
  return (
    <div className="relative pt-20 md:pt-0 ">

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[280px] sm:h-[380px] md:h-[520px] lg:h-[600px]"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/assets/images/banner/b1.webp"
              fill
              className="object-cover object-right md:object-contain"
              alt="Sri Poly Clinic"
            />

            {/* Mobile overlay only */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-6 md:hidden">
              <h1 className="text-3xl font-extrabold text-white drop-shadow-lg text-center">
                Trusted Healthcare for Your Family
              </h1>
              <p className="text-white/90 mt-3 text-lg max-w-xs text-center">
                Nutrition • Psychology • Yoga • Wellness Care
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/assets/images/banner/b2.webp"
              fill
              className="object-cover object-right md:object-contain"
              alt="Sri Poly Clinic"
            />

            {/* Mobile overlay only */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-6 md:hidden">
              <h1 className="text-3xl font-extrabold text-white text-center">
                Personalized Nutrition Plans
              </h1>
              <p className="text-white/90 mt-3 text-lg max-w-xs text-center">
                Achieve your wellness goals with expert diet guidance.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/assets/images/banner/b3.webp"
              fill
              className="object-cover object-right md:object-contain"
              alt="Sri Poly Clinic"
            />

            {/* Mobile overlay only */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-6 md:hidden">
              <h1 className="text-3xl font-extrabold text-white text-center">
                Mind & Body Wellness Programs
              </h1>
              <p className="text-white/90 mt-3 text-lg max-w-xs text-center">
                Psychology sessions & yoga routines for a better life.
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      {/* DESKTOP CARDS */}
      <div className="hidden md:block">
        <div className="absolute bottom-[-70px] left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 z-50">
          <div className="grid grid-cols-4 gap-5">
            <Link href="/services" className="bg-gradient-to-r from-blue-600 to-orange-500 border border-white/40 p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 text-white">
              <FaAppleAlt className="text-4xl mx-auto mb-2" />
              <h3 className="font-bold text-lg">Nutrition Care</h3>
            </Link>
            <Link href="/services" className="bg-gradient-to-r from-blue-600 to-orange-500 border border-white/40 p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 text-white">
              <FaBrain className="text-4xl mx-auto mb-2" />
              <h3 className="font-bold text-lg">Psychology Support</h3>
            </Link>
            <Link href="/services" className="bg-gradient-to-r from-blue-600 to-orange-500 border border-white/40 p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 text-white">
              <FaSpa className="text-4xl mx-auto mb-2" />
              <h3 className="font-bold text-lg">Yoga Coaching</h3>
            </Link>
            <Link href="/services" className="bg-gradient-to-r from-blue-600 to-orange-500 border border-white/40 p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 text-white">
              <FaFingerprint className="text-4xl mx-auto mb-2" />
              <h3 className="font-bold text-lg">DMIT Career Counseling</h3>
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE CARDS */}
      <div className="block md:hidden mt-6 px-5">
        <div className="grid grid-cols-1 gap-4">
          <Link href="/services" className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-5 rounded-xl shadow-lg text-center hover:scale-105 transition">
            <FaAppleAlt className="text-3xl mx-auto mb-1" />
            <h3 className="font-bold text-lg">Nutrition Care</h3>
          </Link>
          <Link href="/services" className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-5 rounded-xl shadow-lg text-center hover:scale-105 transition">
            <FaBrain className="text-3xl mx-auto mb-1" />
            <h3 className="font-bold text-lg">Psychology Support</h3>
          </Link>
          <Link href="/services" className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-5 rounded-xl shadow-lg text-center hover:scale-105 transition">
            <FaSpa className="text-3xl mx-auto mb-1" />
            <h3 className="font-bold text-lg">Yoga Coaching</h3>
          </Link>
          <Link href="/services" className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-5 rounded-xl shadow-lg text-center hover:scale-105 transition">
            <FaFingerprint className="text-3xl mx-auto mb-1" />
            <h3 className="font-bold text-lg">DMIT Career Counseling</h3>
          </Link>
        </div>
      </div>

    </div>
  );
}
