// app/gallery/GalleryClient.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    src: "/assets/images/aboutbanner.png",
    title: "Nutrition Session",
    gradient: "from-blue-900 via-blue-800 to-blue-900",
  },
  {
    src: "/assets/images/gallery/img2.jpg",
    title: "Yoga Class",
    gradient: "from-green-900 via-green-800 to-green-900",
  },
  {
    src: "/assets/images/gallery/img9.jpg",
    title: "Psychology Counseling",
    gradient: "from-purple-900 via-purple-800 to-purple-900",
  },
  {
    src: "/assets/images/gallery/img4.jpg",
    title: "Wellness Workshop",
    gradient: "from-orange-900 via-orange-800 to-orange-900",
  },
  {
    src: "/assets/images/gallery/img5.jpg",
    title: "Community Event",
    gradient: "from-red-900 via-red-800 to-red-900",
  },
  {
    src: "/assets/images/gallery/img6.jpg",
    title: "Clinic Moment",
    gradient: "from-pink-900 via-pink-800 to-pink-900",
  },
];

export default function GalleryClient() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="w-full">

      

      {/* ================= Banner ================= */}
      <section className="relative w-full h-[300px] md:h-[500px]">
        <Image
          src="/assets/images/banner/b3.jpg"
          alt="Gallery Banner"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center md:text-center max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Our Gallery
          </h1>
          {/* <p className="text-white/90 mt-4 text-lg md:text-xl max-w-2xl">
            Explore photos from Sri Poly Clinic's services, events, and wellness activities.
          </p> */}
        </div>
      </section>


      {/* ================= Intro Section ================= */}
<section className="w-full py-16 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6 md:text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        Discover
      </span>{" "}
      the <span className="text-gray-800">moments</span> of <span className="text-gray-800">wellness</span>
    </h2>
    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
      From clinic sessions to community events, explore our curated gallery showcasing how Sri Poly Clinic nurtures health, wellness, and care. Each photo tells a story of compassion, learning, and togetherness.
    </p>
  </div>
</section>


      {/* ================= Gallery Section ================= */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 md:text-center">
            Clinic Moments
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative cursor-pointer overflow-hidden rounded-3xl shadow-xl transform transition duration-500 hover:scale-105 hover:rotate-1 h-72 md:h-80 lg:h-96"
                onClick={() => setSelectedImg(img.src)}
              >
                {/* Image */}
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-top object-cover transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Light black overlay on top */}
                <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition rounded-3xl"></div>

                {/* Bottom Dark Gradient + Title */}
                <div
                  className={`absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t ${img.gradient} text-white/90 rounded-b-3xl`}
                >
                  <h3 className="text-lg md:text-xl font-semibold drop-shadow">
                    {img.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* ================= Lightbox Modal ================= */}
{selectedImg && (
  <div
    className="fixed inset-0 bg-black/30 flex justify-center items-center z-50 p-4"
    onClick={() => setSelectedImg(null)} // click outside closes modal
  >
    <div
      className="relative max-w-[90vw] max-h-[90vh]"
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
    >
      {/* Close button */}
      <button
        className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500 transition z-50"
        onClick={() => setSelectedImg(null)}
      >
        &times;
      </button>

      {/* Image */}
      <Image
        src={selectedImg}
        alt="Selected"
        width={800}
        height={300}
        className="object-contain rounded-xl"
      />
    </div>
  </div>
)}

    </div>
  );
}
