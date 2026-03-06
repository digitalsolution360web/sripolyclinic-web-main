"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const appointmentBanner = "/assets/images/banner/b3.jpg"; // Banner image

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "Nutrition Consultation",
    "Psychology / Counselling",
    "Yoga Coaching",
    "Lifestyle & Wellness Plan",
  ];

  // ⭐ FORM REFERENCE (FOR SMOOTH SCROLL)
  const formRef = useRef<HTMLDivElement | null>(null);

  // ⭐ Smooth scroll to form
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/send-appointment", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});


    const data = await res.json();

    if (data.success) {
      alert("Appointment request sent successfully!");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } else {
      alert("Failed to send appointment. Please try again.");
    }
  } catch (err) {
    console.error(err);
    alert("An error occurred while sending the appointment.");
  }
};

  return (
    <div className="w-full">
      {/* ================= Banner ================= */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src={appointmentBanner}
          alt="Appointment Banner"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start max-w-7xl mx-auto px-6 md:text-center md:text-center">
          <h1 className="text-2xl md:text-5xl lg:text-5xl font-extrabold text-white drop-shadow-lg pt-4">
            Book an Appointment
          </h1>
          <p className="text-white/90 mt-4 text-lg md:text-xl lg:text-2xl">
            Schedule your consultation with Dr. Srilatha and take the first step
            towards better health
          </p>

        
        </div>
      </section>

      {/* ================= Intro Section ================= */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Why Book an Appointment with Dr. Srilatha?
            </span>
          </h2>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Dr. <strong className="text-gray-900">A. Srilatha</strong> is an
            expert in
            <span className="font-semibold text-blue-700"> Nutrition</span>,
            <span className="font-semibold text-purple-700"> Psychology</span>,
            and <span className="font-semibold text-indigo-700"> Yoga</span>,
            providing personalized healthcare plans focused on
            <span className="font-semibold text-green-700"> wellness</span>,
            <span className="font-semibold text-rose-700"> mental health</span>,
            and{" "}
            <span className="font-semibold text-blue-700">
              lifestyle improvement
            </span>
            . Booking an appointment ensures a
            <span className="font-semibold text-indigo-700">
              {" "}
              one-on-one consultation
            </span>{" "}
            tailored to your needs.
          </p>
        </div>
      </section>

      {/* ================= Two-Column Appointment Section ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:flex md:gap-12 items-start">
          {/* Left: Info */}
          <div className="md:w-3/5 mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                Book Your Personalized Consultation
              </span>
            </h2>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-5">
              Connect with{" "}
              <strong className="text-gray-900">Dr. A. Srilatha</strong> for
              expert care in
              <span className="font-semibold text-blue-700"> Nutrition</span>,
              <span className="font-semibold text-purple-700"> Psychology</span>,
              and <span className="font-semibold text-indigo-700"> Yoga</span>.
              Receive{" "}
              <span className="font-semibold text-green-700">
                tailored plans
              </span>
              , professional insights, and holistic support designed to improve
              your overall health and lifestyle.
            </p>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-5">
              Whether your goal is to
              <span className="font-medium text-blue-700"> manage weight</span>,
              <span className="font-medium text-rose-700"> reduce stress</span>,
              <span className="font-medium text-amber-700">
                {" "}
                improve mental health
              </span>
              , or
              <span className="font-medium text-indigo-700">
                {" "}
                adopt healthier routines
              </span>
              , Dr. Srilatha provides step-by-step guidance with a focus on
              long-term wellness.
            </p>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Booking an appointment ensures a
              <span className="font-semibold text-indigo-700">
                {" "}
                one-on-one detailed consultation
              </span>
              , a{" "}
              <span className="font-semibold text-blue-700">
                thorough assessment
              </span>
              , and a
              <span className="font-semibold text-green-700">
                {" "}
                personalized wellness plan
              </span>{" "}
              crafted just for you. Begin your journey toward a healthier, more
              balanced life today.
            </p>

            {/* ⭐ Scroll Button Below Content */}
           
          </div>

          {/* Right: Form */}
          <div
            ref={formRef}
            className="md:w-2/5 bg-gray-900 text-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-extrabold mb-6 text-white md:text-center">
              Appointment Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              >
                <option value="">Select Service</option>
                {services.map((service, idx) => (
                  <option key={idx} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= Info Section with Image (Bottom Section) ================= */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="w-full">
            <Image
              src="/assets/images/aboutbanner.png"
              alt="Dr Srilatha Consultation"
              width={600}
              height={500}
              className="rounded-3xl shadow-xl object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                What to Expect in Your Consultation?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              During your session with
              <strong className="text-gray-900"> Dr. A. Srilatha</strong>, you
              will receive a
              <span className="font-semibold text-blue-700">
                {" "}
                complete wellness evaluation
              </span>{" "}
              covering nutrition habits, mental health, and lifestyle routines.
            </p>

            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 text-xl">✔</span>
                Personal diet analysis & customized meal guidance
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 text-xl">✔</span>
                Mental health mapping & stress management support
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 text-xl">✔</span>
                Personalized yoga & breathing techniques
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 text-xl">✔</span>
                Long-term wellness & lifestyle improvement plan
              </li>
            </ul>

            <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed">
              Every session is tailored to your needs, ensuring a
              <span className="font-semibold text-green-700">
                {" "}
                complete holistic approach
              </span>{" "}
              toward your physical and emotional well-being.
            </p>

            {/* ⭐ Bottom Button Scroll to Form */}
            <button
              onClick={scrollToForm}
              className="inline-block mt-8 bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
