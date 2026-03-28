import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white pt-10 pb-10 md:pb-10">

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* Clinic Info + Logo */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-3">
            <Image
              src="/assets/logo.png"
              alt="Sri Poly Clinic Logo"
              width={50}
              height={50}
              className="rounded-md"
            />
            <h3 className="text-2xl font-semibold cursor-pointer">Sri Poly Clinic</h3>
          </Link>

          <p className="text-sm text-gray-200">
            Dietician • Psychologist • Yoga Coach
          </p>

          <p className="text-sm text-gray-300 mt-4">
            <strong>Timings:</strong> 10 AM – 8 PM (Mon – Sat)
          </p>

          <p className="text-sm text-gray-300 mt-2">
  <strong>Address:</strong> #4-4-112, Near Kumarpally Market, <br />
  Kothur, Kumarpally Area, <br />
  Hanamkonda, Warangal – 506001
</p>

          {/* Get Directions Button */}
          <a
            href="https://www.google.com/maps?q=SRI+POLY+CLINIC+Hanamkonda"
            target="_blank"
            className="inline-block mt-4 bg-white text-blue-900 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
          >
            Get Directions
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/blogs" className="hover:text-white">Blogs</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/profile" className="hover:text-white">Profile</Link></li>
            <li><Link href="/appointment" className="hover:text-white">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>Nutrition Assessment</li>
            <li>Weight Management</li>
            <li>Customised Diet Plans</li>
            <li>Anxiety & Stress Management</li>
            <li>Yoga Sessions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Contact</h4>

          {/* Clickable Phone Number */}
          <p className="text-sm text-gray-200">
            <strong>Phone:</strong>{" "}
            <a href="tel:7702323401" className="hover:text-white">
              7702323401
            </a>
          </p>

          <p className="text-sm text-gray-200 mt-2">
            <strong>Email:</strong> info@sripolyclinic.com
          </p>

          <div className="flex items-center gap-4 mt-5">
            <a href="https://www.facebook.com/profile.php?id=61583836029560" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.instagram.com/sripoly.clinic" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
              <FaInstagram size={18} />
            </a>
            <a href="https://wa.me/7702323401" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop WhatsApp Floating Button */}
      <a
        href="https://wa.me/7702323401"
        target="_blank"
        className="hidden md:flex items-center justify-center w-14 h-14 
                   bg-green-500 text-white rounded-full shadow-xl 
                   fixed bottom-3 right-6 z-50 hover:bg-green-600 transition-all"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Bottom Bar */}
      <div className="text-gray-300 text-sm mt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-3 md:px-0">
          <div className="mb-2 md:mb-0">
            © {new Date().getFullYear()} Sri Poly Clinic. All Rights Reserved.
          </div>
          <div>
            Designed & Developed by{" "}
            <a 
              href="https://digitalsolution360.com" 
              target="_blank" 
              className="text-white underline hover:text-gray-200"
            >
              DigitalSolution360.com
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-xl z-50 flex justify-between">
        <Link
          href="/appointment"
          className="w-1/2 bg-blue-600 text-white text-center py-4 font-semibold text-lg"
        >
          Appointment
        </Link>
        <a
          href="https://wa.me/7702323401"
          target="_blank"
          className="w-1/2 bg-green-600 text-white text-center py-4 font-semibold text-lg"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
