"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="w-full">

      {/* ================= Banner ================= */}
      <section className="relative w-full h-[300px] md:h-[500px]">
        <Image
          src="/assets/images/banner/b3.jpg"
          alt="Contact Banner"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center md:text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ================= Section ================= */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* ================= Left Content ================= */}
          <div className="rounded-3xl shadow-xl p-10 bg-white border border-gray-200 flex flex-col gap-6">

            <h2 className="text-3xl font-extrabold text-gray-800">Our Location</h2>

            <p className="text-gray-700 text-lg"><strong>Address:</strong> #4-4-112, Near Kumarpally Market, Kothur, Kumarpally Area, <br />
  Hanamkonda, Warangal – 506001</p>
            <p className="text-gray-700 text-lg"><strong>Phone:</strong> 7702323401</p>
            <p className="text-gray-700 text-lg"><strong>Working Hours:</strong> 10:00 AM – 8:00 PM</p>

            <div className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 text-white">
              <h3 className="text-2xl font-bold mb-3">Quick Info</h3>
              <p className="text-lg"><strong>Emergency:</strong> Available</p>
              <p className="text-lg mt-2"><strong>Consultation:</strong> Walk-in Accepted</p>
            </div>
          </div>

          {/* ================= Right Contact Form ================= */}
          <div className="rounded-3xl shadow-xl p-10 bg-white border border-gray-200">
            <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
              Get in Touch
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              
              {/* Name */}
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg p-3 
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg p-3 
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg p-3 
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg 
                           hover:bg-blue-700 transition w-full disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Status Message */}
              {status && (
                <p className="text-center font-semibold text-gray-700 pt-2">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* ================= Map ================= */}
        <div className="max-w-7xl mx-auto px-6 mt-12">
          <div className="w-full h-80 rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.2558407490096!2d79.5675447!3d18.0133266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a33455ae8e151af%3A0x52b19d34c13e5935!2sSRI%20POLY%20CLINIC!5e0!3m2!1sen!2sin!4v1763828542245!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen={false}
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
