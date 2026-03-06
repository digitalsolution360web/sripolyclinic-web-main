"use client";

import { useState } from "react";

export default function Appointment() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const data = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      date: (form.elements.namedItem("date") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/send-appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    alert(result.message);

    setLoading(false);
    form.reset();
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE: Contact + MAP */}
        <div className="bg-white p-10 rounded-3xl shadow-lg flex flex-col">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Contact Us</h2>

          <div className="space-y-4 text-gray-700 mb-8">
            <div>
              <h3 className="font-bold">Address:</h3>
              <p>#4-4-112, Near Kumarpally Market, Kothur, Kumarpally Area, <br />
  Hanamkonda, Warangal – 506001</p>
            </div>

            <div>
              <h3 className="font-bold">Phone:</h3>
              <p>7702323401</p>
            </div>

            <div>
              <h3 className="font-bold">Working Hours:</h3>
              <p>6:00 PM - 9:00 PM</p>
            </div>
          </div>

          {/* MAP EMBED */}
          <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.2558407490096!2d79.5675447!3d18.0133266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a33455ae8e151af%3A0x52b19d34c13e5935!2sSRI%20POLY%20CLINIC!5e0!3m2!1sen!2sin!4v1763828542245!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE: FORM */}
        <div className="bg-gray-900 text-white p-10 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-extrabold mb-6">Book an Appointment</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white"
              />
            </div>

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white"
            />

            <input
              name="date"
              type="date"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white"
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Message (optional)"
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-pink-700 transition duration-300"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
