"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

/* ================= DUMMY BLOG DATA ================= */
const allBlogs = Array.from({ length: 12 }).map((_, i) => ({
  title: `Sample Blog Title ${i + 1}`,
  desc: "This is a dummy description for the blog. You can replace it with real content later.",
  image: "/assets/images/aboutbanner.png",
  category: ["Technology", "Business"],
  slug: `/blog/sample-${i + 1}`,
}));

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
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Blogs
          </h1>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our <span className="text-[#7ED321]">Latest Blogs</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Stay updated with insights, tutorials, and latest trends in technology, business, and innovation.
          </p>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-[260px]">
                <div>
                  {/* Category */}
                  <div className="flex gap-2 mb-2">
                    {blog.category.map((cat, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#7ED321]/10 text-[#7ED321] px-2 py-1 rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <Link href={blog.slug}>
                    <h3 className="text-lg font-bold mb-2 hover:text-[#7ED321] transition line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                    <FaCalendarAlt /> 03 Mar 2026
                  </div>

                  {/* Desc */}
                  <p className="text-gray-500 text-sm line-clamp-3">
                    {blog.desc}
                  </p>
                </div>

                {/* Read More */}
                <Link
                  href={blog.slug}
                  className="mt-4 inline-flex items-center gap-2 text-[#7ED321] font-semibold text-sm hover:gap-3 transition"
                >
                  Read More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PAGINATION ================= */}
      <section className="pb-16 bg-gray-50">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded bg-white disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => handlePageChange(p)}
              className={`px-4 py-2 border rounded ${
                p === currentPage
                  ? "bg-[#7ED321] text-black"
                  : "bg-white"
              }`}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => handlePageChange("next")}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded bg-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>

    </div>
  );
}