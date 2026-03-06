"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function ClientSays() {
  const testimonials = [
    {
      name: "Aditi Sharma",
      review:
        "Sri Poly Clinic completely changed my lifestyle! Their personalized Nutrition and Yoga sessions helped me recover from stress and fatigue.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80", 
    },
    {
      name: "Rohan Verma",
      review:
        "Amazing experience! Their psychological counselling and diet plan helped me overcome anxiety.",
   image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80", 
    },
    {
      name: "Priya Gill",
      review:
        "The yoga therapy sessions are extremely relaxing and effective. Highly recommended!",
   image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80", 
    },
    {
      name: "Kunal Singh",
      review:
        "They treat you like family. Best holistic wellness center for complete mind-body healing.",
   image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80", 
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="md:text-center mb-14 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            MY TESTIMONIALS MY PRIDE
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-pink-700",
          }}
          autoplay={{ delay: 3500 }}
          speed={800}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center bg-gray-900 rounded-3xl shadow-lg p-8 gap-6">
                
                {/* Left Image */}
                <div className="flex-shrink-0 md:w-1/3">
                  <img
                    key={t.image}
                    src={t.image}
                    alt={t.name}
                    className="w-full h-auto rounded-2xl object-cover border-4 border-pink-700"
                  />
                </div>

                {/* Right Text */}
                <div className="md:w-2/3 text-white">
                  <p className="text-4xl font-bold mb-4">&ldquo;</p>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed font-serif">
                    {t.review}
                  </p>
                  <p className="mt-6 text-right italic font-serif text-pink-400 font-bold">
                    — {t.name}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
