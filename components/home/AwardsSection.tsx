"use client";

import Image from "next/image";
import { FaTrophy, FaMedal, FaCertificate } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function AwardsSection() {
  const awards = [
    "/assets/images/award.webp",
    "/assets/images/award2.webp",
    "/assets/images/award3.webp",
    "/assets/images/award4.webp",
    "/assets/images/award5.webp",
    "/assets/images/award6.webp",
    "/assets/images/award7.webp",
    "/assets/images/award8.webp",
  ];

  const mainAward = "/assets/images/award1.webp";

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50/30 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-64 bg-gradient-to-t from-yellow-50/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        {/* Left Side: Content */}
        <div className="order-2 md:order-1 relative">
          {/* Giant Background Text - Scaled for Mobile */}
          <div className="absolute -top-4 -left-4 text-[5rem] md:text-[8rem] font-black text-gray-50 select-none pointer-events-none uppercase tracking-tighter leading-none z-[-1]">
            Award
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 md:mb-6 bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500 text-orange-600 rounded-r-full text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase">
            <FaCertificate className="animate-spin-slow" /> Prestigious Honor
          </div>

          <h2 className="text-2xl md:text-5xl font-black mb-4 md:mb-6 text-gray-900 leading-[1.1] tracking-tight">
            Women Icon of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500">
              Excellence 2026
            </span>
          </h2>

          <p className="text-gray-900 text-sm md:text-lg leading-relaxed mb-4 md:mb-6 font-semibold italic border-l-2 border-orange-200 pl-4">
            "Proud to share that Dr. A. Srilatha received the Women Icon of Excellence in Psychology Award 2026 from the Telangana Psychologist Association during their 10 Years Decade Celebrations."
          </p>

          <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
            This award recognizes dedication and contribution in the field of psychology and mental health. Thank you for this prestigious honor and recognition. 🏆
          </p>

          <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
            <div className="group flex items-start gap-4 md:gap-5">
              <div className="mt-0.5 flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 text-base md:text-lg shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <FaTrophy />
              </div>
              <div>
                <h4 className="text-sm md:text-base font-bold text-gray-900 mb-0.5">National Recognition</h4>
                <p className="text-[10px] md:text-sm text-gray-400 font-medium">Honored by the Telangana Psychologist Association.</p>
              </div>
            </div>
            <div className="group flex items-start gap-4 md:gap-5">
              <div className="mt-0.5 flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-600 text-base md:text-lg shadow-sm group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
                <FaMedal />
              </div>
              <div>
                <h4 className="text-sm md:text-base font-bold text-gray-900 mb-0.5">Field Excellence</h4>
                <p className="text-[10px] md:text-sm text-gray-400 font-medium">Distinguished Contribution to Mental Health Care.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-8 md:gap-10 mt-8 md:mt-10 pt-6 border-t border-gray-100">
            <div>
              <div className="text-xl md:text-2xl font-black text-gray-900 leading-none">2026</div>
              <div className="text-[8px] md:text-[9px] text-orange-500 font-black uppercase tracking-widest mt-1.5">Award Year</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black text-gray-900 leading-none">10th</div>
              <div className="text-[8px] md:text-[9px] text-orange-500 font-black uppercase tracking-widest mt-1.5">Decade Celebration</div>
            </div>
          </div>
        </div>

        {/* Right Side: Signature Gallery Layout */}
        <div className="order-1 md:order-2">
          <div className="relative flex flex-col items-center md:items-start gap-8 md:gap-12">

            {/* Main Honor - Distinguished Matte Frame */}
            <div className="relative group max-w-[480px] md:max-w-[540px] w-full">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-yellow-600/10 via-orange-400/5 to-yellow-600/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <div className=" aspect-square">
                {/* Subtle Inner Border */}
                {/* <div className="absolute inset-1 md:inset-1.5 border border-gray-100  pointer-events-none"></div> */}

                <div className="relative w-full h-full rounded-[1.1rem] md:rounded-[2rem] overflow-hidden bg-gray-50/30">
                  <Image
                    src={mainAward}
                    alt="Women Icon of Excellence Award"
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>

                {/* Signature Seal */}
                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-10 h-10 md:w-12 md:h-12 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-orange-500/50">
                  <FaCertificate className="text-base md:text-xl" />
                </div>
              </div>

              {/* hall of fame tag */}
              <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 px-3 py-1 md:px-4 md:py-1.5 bg-gray-900 text-white rounded-lg shadow-xl text-[7px] md:text-[8px] font-black tracking-[0.4em] uppercase z-20">
                Hall of Fame
              </div>
            </div>

            {/* Achievement Slider - Full Visibility Reel */}
            <div className="w-full relative">
              <div className="flex items-center justify-between mb-4 px-2">
                <span className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Achievement Gallery</span>
                <div className="flex gap-2">
                  <button className="swiper-button-prev-custom w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-orange-500 transition-all">
                    <span className="text-xs md:text-sm">←</span>
                  </button>
                  <button className="swiper-button-next-custom w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-orange-500 transition-all">
                    <span className="text-xs md:text-sm">→</span>
                  </button>
                </div>
              </div>

              <Swiper
                spaceBetween={10}
                slidesPerView={1.1}
                breakpoints={{
                  480: { slidesPerView: 1.5 },
                  768: { slidesPerView: 2.2 },
                }}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                modules={[Autoplay, Navigation]}
                className="award-reel-swiper"
              >
                {awards.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative aspect-[4/3] md:aspect-[3/2] bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm group transition-all duration-500 hover:border-orange-200">
                      <Image
                        src={src}
                        alt={`Award ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <span className="text-[7px] md:text-[8px] text-white font-bold uppercase tracking-widest">Certification 0{index + 1}</span>
                      </div>
                    </div>
                  </SwiperSlide>

                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
