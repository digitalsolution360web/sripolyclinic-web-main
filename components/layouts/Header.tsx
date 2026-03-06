"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FIXED NAV LINKS
  const navLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Gallery", url: "/gallery" },
    { name: "Contact", url: "/contact" },
    { name: "Appointment", url: "/appointment" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-60 transition-all duration-300 ${
          scroll
            ? "bg-white shadow-md"
            : "bg-gradient-to-r from-white via-blue-50 to-blue-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
          {/* Logo + Text */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="Sri Poly Clinic Logo"
                width={52}
                height={52}
                className="cursor-pointer"
              />
            </Link>

            <div className="hidden sm:block leading-tight">
              <Link href="/">
              <h1
                className={`text-[20px] font-extrabold tracking-wide cursor-pointer ${
                  scroll ? "text-blue-700" : "text-blue-900"
                }`}
              >
                SRI POLY CLINIC
              </h1>
            </Link>
              <p
                className={`${
                  scroll ? "text-gray-700" : "text-gray-800"
                } text-[12px]`}
              >
                Nutrition • Psychology • Yoga
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-[17px] font-semibold">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                className={`transition ${
                  scroll
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-blue-900 hover:text-blue-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE (Desktop) */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+917702323401"
              className={`flex items-center gap-2 font-bold text-lg ${
                scroll ? "text-blue-700" : "text-blue-900"
              }`}
            >
              <FaPhoneAlt className="text-xl" />
              +91 77023 23401
            </a>

            <Link
              href="/appointment"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition font-semibold"
            >
              Book Appointment
            </Link>
          </div>

          {/* MOBILE: CALL BUTTON + HAMBURGER */}
          <div className="flex md:hidden items-center gap-4">
            {/* CALL BUTTON */}
            <a
              href="tel:+917702323401"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-md"
            >
              <FaPhoneAlt className="text-lg" />
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className={`text-3xl transition ${
                scroll ? "text-gray-700" : "text-blue-900"
              }`}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-3xl"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <ul className="mt-20 space-y-6 text-gray-700 text-lg px-6 font-semibold">
          <li>
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
          </li>
           <li>
            <Link href="/gallery" onClick={() => setOpen(false)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>

          {/* Phone */}
          <li className="flex items-center gap-2 text-blue-600 font-bold">
            <FaPhoneAlt /> +91 77023 23401
          </li>

          {/* Appointment Button */}
          <li>
            <Link
              href="/appointment"
              className="bg-blue-600 text-white px-4 py-2 block text-center rounded-lg shadow-md"
              onClick={() => setOpen(false)}
            >
              Book Appointment
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
