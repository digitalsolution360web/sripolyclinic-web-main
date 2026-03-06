"use client";

import Image from "next/image";
import { FaAppleAlt, FaBrain, FaDumbbell, FaHeartbeat, FaWeight, FaClipboardList, FaBalanceScale, FaBriefcaseMedical, FaSmile, FaSpa, FaBaby, FaRunning } from "react-icons/fa";
import { MdSelfImprovement } from "react-icons/md"; // For meditation/mindfulness

const doctorImage = "/assets/images/dr_srilatha.jpg"; // Doctor image
const appointmentBg = "/assets/images/banner/b3.jpg"; // Background for appointment section

export default function DrProfile() {
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
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
              Meet{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300">
                Dr. A. Srilatha
              </span>
            </h2>

            <p className="text-gray-800 mb-4 leading-relaxed text-lg">
              BAMS (NTRUHS) APDEMC (OSM), MSc (Applied Nutrition) - Dietetic Intern, 
              MSc (Psychology), PGC Nutrition, Advanced Lifestyle Medicine Certificate.
            </p>

            <p className="text-gray-800 mb-6 leading-relaxed text-lg">
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

      {/* ================= Skills Section ================= */}
     <section className="w-full py-24 bg-white">
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
