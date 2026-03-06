"use client";

import Image from "next/image";

export default function AboutBanner() {
  return (
    <div className="w-full">
      {/* ================= Upper Banner ================= */}
      <section className="relative w-full h-[300px] md:h-[500px]">
      {/* Background Image */}
      <Image
        src="/assets/images/aboutbanner.png" // Replace with your banner image
        alt="About Clinic"
        fill
        className="object-cover w-full h-full"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          About Us
        </h1>
        {/* <p className="text-white/90 mt-4 text-lg md:text-xl max-w-2xl leading-relaxed">
          At Sri Poly Clinic, we are committed to providing top-quality healthcare
          with personalized treatment for every patient. Our clinic ensures advanced care 
          and patient-centered support.
        </p> */}
      </div>
    </section>

    {/* ================= Lower Section: Left Image, Right Content ================= */}
{/* ================= Lower Section: Left Image, Right Content ================= */}
<section className="w-full py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:justify-between gap-12">
    
    {/* Left Side Image */}
    <div className="md:w-1/2 mb-10 md:mb-0">
      <Image
        src="/assets/images/aboutbanner.png"
        alt="About Clinic"
        width={600}
        height={450}
        className="rounded-3xl shadow-xl object-cover w-full"
      />
    </div>

    {/* Right Side Content */}
   <div className="md:w-1/2 flex flex-col justify-center">
  {/* Heading with Gradient on Clinic Name */}
  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
    About{" "}
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300">
      Sri Poly Clinic
    </span>
  </h2>

      {/* Description */}
      <p className="text-gray-800 mb-4 leading-relaxed text-lg">
        Sri Poly Clinic is dedicated to providing comprehensive healthcare services 
        with a focus on patient comfort and advanced medical care.
      </p>
      <p className="text-gray-800 leading-relaxed text-lg">
        Our experienced medical team ensures personalized treatment plans tailored 
        to each patient, ensuring the highest quality of care and support.
      </p>

      {/* Optional Highlight Box */}
      <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl shadow-md text-gray-800">
        We combine advanced medical technology with compassionate care to ensure 
        the best outcomes for our patients.
      </div>
    </div>

  </div>
</section>
{/* ================= Mission & Vision Section ================= */}
<section className="w-full py-24 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

    {/* Mission Card */}
    <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 hover:-skew-y-1">
      {/* Background Image */}
      <Image
        src="/assets/images/banner/b2.jpg"
        alt="Mission"
        fill
        className="object-cover w-full h-full"
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 p-10 flex flex-col justify-center h-full">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-white drop-shadow-lg">
          Our Mission
        </h3>
        <p className="text-white/90 leading-relaxed text-lg mb-2">
          To provide compassionate, patient-focused healthcare with advanced medical technology.
        </p>
        <p className="text-white/90 leading-relaxed text-lg mb-2">
          We ensure personalized treatment plans for every patient, prioritizing comfort and well-being.
        </p>
        <p className="text-white/90 leading-relaxed text-lg">
          Our goal is to combine expertise, modern facilities, and empathetic care to achieve the best outcomes.
        </p>
      </div>
    </div>

    {/* Vision Card */}
    <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 hover:-skew-y-1">
      {/* Background Image */}
      <Image
        src="/assets/images/banner/b1.jpg"
        alt="Vision"
        fill
        className="object-cover w-full h-full"
      />
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 p-10 flex flex-col justify-center h-full">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-white drop-shadow-lg">
          Our Vision
        </h3>
        <p className="text-white/90 leading-relaxed text-lg mb-2">
          To be a leading healthcare provider recognized for excellence, innovation, and patient-centered care.
        </p>
        <p className="text-white/90 leading-relaxed text-lg mb-2">
          We aim to advance medical practices through technology, research, and continuous improvement.
        </p>
        <p className="text-white/90 leading-relaxed text-lg">
          Our vision is to improve overall community health and ensure patients receive the highest quality of care.
        </p>
      </div>
    </div>

  </div>
</section>


    </div>

    
  );
}
