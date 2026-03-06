"use client";
import ServicesSection from "@/components/home/ServicesSection";
import Image from "next/image";

export default function ServiceClient() {
  return (
    <div className="w-full">
      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[500px]">
        <Image
          src="/assets/images/aboutbanner.png"
          alt="Our Services Banner"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Our Services
          </h1>
        </div>
      </section>

      {/* ================= Service Intro Section ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6  md:text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 ">
            Discover How We Can{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-orange-400 to-red-500">
              Help You
            </span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            At Sri Poly Clinic, we offer a wide range of professional services to improve
            your physical and mental well-being. From personalized nutrition plans to
            psychology counseling and guided yoga sessions, our goal is to help you achieve
            long-term health and wellness in a supportive environment.
          </p>
        </div>
      </section>

      {/* Example Content */}
      <ServicesSection />
    </div>
  );
}
