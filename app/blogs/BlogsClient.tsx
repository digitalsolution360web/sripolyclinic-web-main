"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

/* ================= BLOG DATA ================= */

const allBlogs = [
  {
    title: "PCOS Diet Plan: What to Eat & Avoid",
    desc:
      "Hormonal equilibrium sometimes gives headaches to many females because of some physical or improper lifestyles in their lives. However, these challenges can be handled with care when diagnosing symptoms early",
    image: "/assets/images/aboutbanner.png",
    category: ["Nutrition", "Psychology", "Yoga"],
    slug: "/best-pcos-dietitian-hanamkonda",
    date: "28 Mar 2026",
  },
  {
    title: "Best Nutritionist in Hanamkonda – Sri Poly Clinic",
    desc:
      "If you're looking for the best nutritionist in Hanamkonda, Sri Poly Clinic is the place where your health transformation begins. We don't believe in quick fixes or extreme diets—instead, we focus on practical, personalized solutions that actually fit into your daily life.",
    image: "/assets/images/aboutbanner.png",
    category: ["Nutrition", "Psychology", "Yoga"],
    slug: "/best-nutritionist-hanamkonda",
    date: "17 Mar 2026",
  },
  {
    title: "Best Diet Plan for Weight Loss in Hanamkonda",
    desc:
      "Welcome to perfect health wellness in 2026! If you are searching for the right and personalized fat loss diet by nutritionists, you need to find the right weight loss center in Hanamkonda.",
    image: "/assets/images/aboutbanner.png",
    category: ["Nutrition", "Psychology", "Yoga"],
    slug: "/best-diet-plan-for-weight-loss-in-hanamkonda",
    date: "03 Mar 2026",
  },
];

export default function BlogsBanner() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);

  const handlePageChange = (page) => {
    if (typeof page === "number") setCurrentPage(page);
    else if (page === "prev" && currentPage > 1) setCurrentPage(currentPage - 1);
    else if (page === "next" && currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="w-full">

      {/* ================= BANNER ================= */}
      <section className="relative w-full h-[300px] md:h-[500px]">
        <Image
          src="/assets/images/aboutbanner.png"
          alt="Blogs"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Blogs
          </h1>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300">
              Latest Blogs
            </span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Stay updated with insights, tutorials, and latest trends in technology,
            business, and innovation.
          </p>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {currentBlogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-8 flex flex-col justify-between h-[300px]">

                <div>
                  {/* Category */}
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {blog.category.map((cat, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold bg-orange-100 text-orange-500 px-3 py-1 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <Link href={blog.slug}>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-500 transition line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <FaCalendarAlt /> {blog.date}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {blog.desc}
                  </p>
                </div>

                {/* Read More */}
                <Link
                  href={blog.slug}
                  className="mt-5 inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:gap-3 transition"
                >
                  Read More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= PAGINATION ================= */}
      <section className="pb-24 bg-gray-50">
        <div className="flex justify-center gap-3 flex-wrap">

          <button
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
            className="px-5 py-2 rounded-lg border bg-white text-gray-600 disabled:opacity-40 hover:bg-orange-100 transition"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => handlePageChange(p)}
              className={`px-5 py-2 rounded-lg border font-medium ${
                p === currentPage
                  ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-white"
                  : "bg-white text-gray-600 hover:bg-orange-100"
              } transition`}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => handlePageChange("next")}
            disabled={currentPage === totalPages}
            className="px-5 py-2 rounded-lg border bg-white text-gray-600 disabled:opacity-40 hover:bg-orange-100 transition"
          >
            Next
          </button>

        </div>
      </section>

    </div>
  );
}