"use client";

import Image from "next/image";
import { FaAppleAlt, FaBrain, FaDumbbell, FaHeartbeat, FaWeight, FaClipboardList, FaBalanceScale, FaBriefcaseMedical, FaSmile, FaSpa, FaBaby, FaRunning, FaTrophy, FaMedal, FaCertificate } from "react-icons/fa";
import { MdSelfImprovement } from "react-icons/md"; // For meditation/mindfulness
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const doctorImage = "/assets/images/dr_srilatha.jpg"; // Doctor image
const appointmentBg = "/assets/images/banner/b3.jpg"; // Background for appointment section

export default function DrProfile() {
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

  const skills = [
    { name: "Dietician", icon: <FaAppleAlt /> },
    { name: "Psychologist", icon: <FaBrain /> },
    { name: "Yoga Coach", icon: <FaDumbbell /> },
    { name: "Nutrition Assessment", icon: <FaHeartbeat /> },
    { name: "Obesity & Weight Management", icon: <FaWeight /> },
    { name: "Customized Diet Plan", icon: <FaClipboardList /> },
    { name: "Body Composition Analysis", icon: <FaBalanceScale /> },
    { name: "Diabetic Diet Plan", icon: <FaBriefcaseMedical /> },
    { name: "Career & Family Counselling", icon: <FaSmile /> },
    { name: "Anxiety Management", icon: <FaBrain /> },
    { name: "Depression Management", icon: <FaBrain /> },
    { name: "Stress Management", icon: <FaSpa /> },
    { name: "Pregnancy Yoga", icon: <FaBaby /> },
    { name: "Weight Loss Yoga", icon: <FaRunning /> },
    { name: "Meditation & Mindfulness", icon: <MdSelfImprovement /> },
  ];

  return (
    <div className="w-full">

      {/* ================= Banner ================= */}
      <section className="relative w-full h-[300px] md:h-[500px]">
        <Image
          src="/assets/images/aboutbanner.png"
          alt="Dr. Srilatha Banner"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Dr. A. Srilatha
          </h1>
          <p className="text-white/90 mt-4 text-lg md:text-xl">
            Nutritionist • Psychologist • Yoga Coach
          </p>
        </div>
      </section>

      {/* ================= Main Section ================= */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:justify-between gap-12">
          
          {/* Left: Doctor Image */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image
              src="/assets/images/gallery/img9.jpg"
              alt="Dr. Srilatha"
              width={600}
              height={750}
              className="rounded-3xl shadow-xl object-cover w-full"
            />
          </div>

          {/* Right: Doctor Details */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-gray-900">
              Meet{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300">
                Dr. A. Srilatha
              </span>
            </h2>

            <p className="text-gray-800 mb-4 leading-relaxed text-base md:text-lg">
              BAMS (NTRUHS) APDEMC (OSM), MSc (Applied Nutrition) - Dietetic Intern, 
              MSc (Psychology), PGC Nutrition, Advanced Lifestyle Medicine Certificate.
            </p>

            <p className="text-gray-800 mb-5 leading-relaxed text-base md:text-lg">
              Dr. Srilatha combines expertise in dietetics, psychology, and yoga to provide 
              personalized healthcare plans, focusing on wellness, weight management, 
              and mental health.
            </p>

            <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl shadow-md text-gray-800">
              Specialized in Nutrition Assessment, Customized Diet Plans, 
              Anxiety & Stress Management, Yoga Coaching, and Lifestyle Medicine.
            </div>
          </div>
        </div>
      </section>

      {/* ================= Awards & Recognitions Section ================= */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        {/* Subtle Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50/30 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-64 bg-gradient-to-t from-yellow-50/20 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
          {/* Left Side: Content */}
          <div className="order-2 md:order-1 relative">
            {/* Giant Background Text - Reduced Scale */}
            <div className="absolute -top-4 -left-4 text-[5rem] md:text-[8rem] font-black text-gray-50 select-none pointer-events-none uppercase tracking-tighter leading-none z-[-1]">
              Awards
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
                <div className="text-xl md:text-2xl font-black text-gray-900 leading-none">10+</div>
                <div className="text-[8px] md:text-[9px] text-orange-500 font-black uppercase tracking-widest mt-1.5">National Awards</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-black text-gray-900 leading-none">15+</div>
                <div className="text-[8px] md:text-[9px] text-orange-500 font-black uppercase tracking-widest mt-1.5">Years of Service</div>
              </div>
            </div>
          </div>

          {/* Right Side: Signature Gallery Layout */}
          <div className="order-1 md:order-2">
            <div className="relative flex flex-col items-center md:items-start gap-8 md:gap-12">
              
              {/* Main Honor - Distinguished Matte Frame */}
              <div className="relative group max-w-[260px] sm:max-w-[300px] md:max-w-[340px] w-full">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-yellow-600/10 via-orange-400/5 to-yellow-600/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative aspect-square bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[6px] md:border-[8px] border-white p-2 md:p-3 transform transition-all duration-700 group-hover:translate-y-[-5px]">
                  {/* Subtle Inner Border */}
                  <div className="absolute inset-1 md:inset-1.5 border border-gray-100 rounded-[1.2rem] md:rounded-[2rem] pointer-events-none"></div>
                  
                  <div className="relative w-full h-full rounded-[1.1rem] md:rounded-[2rem] overflow-hidden bg-gray-50/30">
                    <Image
                      src={mainAward}
                      alt="Principal Recognition Award"
                      fill
                      className="object-contain p-2"
                      priority
                    />
                  </div>
                  
                  {/* Signature Seal */}
                  <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-9 h-9 md:w-12 md:h-12 bg-orange-600 rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-orange-500/50">
                     <FaCertificate className="text-sm md:text-xl" />
                  </div>
                </div>

                {/* hall of fame tag */}
                <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 px-2 py-1 md:px-4 md:py-1.5 bg-gray-900 text-white rounded-lg shadow-xl text-[7px] md:text-[8px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase z-20">
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
                           <span className="text-[8px] text-white font-bold uppercase tracking-widest">Certification 0{index + 1}</span>
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

      {/* ================= Skills Section ================= */}
     <section className="w-full py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <h3 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-900 text-center">
      Skills & Expertise
    </h3>

    <div className="grid md:grid-cols-3 gap-6">
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-2xl shadow-lg p-6 flex items-center gap-4 text-white transform transition duration-300 hover:scale-105 hover:from-orange-500 hover:via-pink-500 hover:to-yellow-400"
        >
          <div className="text-3xl md:text-4xl">
            {skill.icon}
          </div>
          <span className="font-semibold text-lg md:text-xl">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= Book Appointment Section ================= */}
      <section className="relative w-full py-24 mt-[-80px]">
        <Image
          src={appointmentBg}
          alt="Book Appointment Background"
          fill
          className="object-cover w-full h-full -z-10"
        />
        <div className="absolute inset-0 bg-black/60 -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Book an Appointment
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Schedule your consultation with Dr. Srilatha and start your journey towards better health.
          </p>
          <a
            href="/appointment"
            className="inline-block bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Book Now
          </a>
        </div>
      </section>

    </div>
  );
}
