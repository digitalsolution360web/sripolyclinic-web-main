"use client";

import Link from "next/link";

export default function Intro() {
  return (
    <section className="w-full py-20 bg-white px-6 md:px-12 lg:px-24 text-center">
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 mb-6 leading-snug">
        Your Complete Wellness Starts Here
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        At <span className="font-semibold text-blue-700">Sri Poly Clinic</span>, we combine 
        <span className="text-orange-600 font-semibold"> Nutrition</span>, 
        <span className="text-orange-600 font-semibold"> Psychology</span>, and 
        <span className="text-orange-600 font-semibold"> Yoga</span> to offer complete wellness care.  

        <br /><br />

        Meet our expert <span className="text-blue-800 font-bold">Dr. A. Srilatha</span>, 
        <span className="italic text-gray-600"> Nutritionist • Psychologist • Yoga Coach</span>, 
        who guides every patient personally to achieve physical health, emotional stability, and a peaceful mind.
      </p>

      <div className="mt-8 flex justify-center">
        <Link
          href="/profile"
          className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition w-full max-w-xs sm:max-w-sm"
        >
          Know More About Doctor
        </Link>
      </div>
    </section>
  );
}
