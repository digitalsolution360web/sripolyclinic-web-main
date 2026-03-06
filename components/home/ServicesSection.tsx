"use client";

import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Nutrition Assessment",
      slug: "nutrition-assessment",
      desc: "Complete evaluation of nutritional needs, deficiencies, and health goals.",
      img: "/assets/images/services/s1.jpg",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Obesity Weight Management",
      slug: "obesity-weight-management",
      desc: "Structured obesity control, fat-loss monitoring, and sustainable weight care.",
      img: "/assets/images/services/s2.jpg",
      color: "from-orange-400 to-red-500",
    },
    {
      title: "Customised Diet Plan",
      slug: "customised-diet-plan",
      desc: "Personalized diet charts for medical conditions, lifestyle, and health targets.",
      img: "/assets/images/services/s3.jpg",
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "Body Composition Analysis",
      slug: "body-composition-analysis",
      desc: "Detailed body fat %, muscle mass, BMR & metabolic health analysis.",
      img: "/assets/images/services/s4.jpg",
      color: "from-purple-400 to-indigo-600",
    },
    {
      title: "Diabetic Diet Plan",
      slug: "diabetic-diet-plan",
      desc: "Special diet planning for Type 1, Type 2 & gestational diabetes.",
      img: "/assets/images/services/s5.jpg",
      color: "from-rose-400 to-pink-600",
    },
    {
      title: "Career Counselling",
      slug: "career-counselling",
      desc: "Guidance for students & professionals for clear career direction.",
      img: "/assets/images/services/s6.jpg",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Family Counselling",
      slug: "family-counselling",
      desc: "Relationship, communication & emotional wellness counseling.",
      img: "/assets/images/services/s7.jpg",
      color: "from-teal-400 to-cyan-600",
    },
    {
      title: "Anxiety Management",
      slug: "anxiety-management",
      desc: "Therapy for anxiety, emotional regulation & calmness training.",
      img: "/assets/images/services/s8.jpg",
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Depression Management",
      slug: "depression-management",
      desc: "Counselling support for mood health, coping strategies & healing.",
      img: "/assets/images/services/s9.jpg",
      color: "from-red-400 to-rose-600",
    },
    {
      title: "Stress Management",
      slug: "stress-management",
      desc: "Stress relief through therapy, breathing & lifestyle techniques.",
      img: "/assets/images/services/s10.jpg",
      color: "from-green-400 to-teal-600",
    },
    {
      title: "Regular Yoga",
      slug: "yoga-sessions",
      desc: "Daily yoga sessions for flexibility, fitness & mental peace.",
      img: "/assets/images/services/s11.jpg",
      color: "from-pink-400 to-rose-600",
    },
    {
      title: "Infertility Yoga",
      slug: "infertility-yoga",
      desc: "Yoga routines supporting reproductive health & hormonal balance.",
      img: "/assets/images/services/s12.jpg",
      color: "from-purple-400 to-fuchsia-600",
    },
    {
      title: "Pregnancy Yoga",
      slug: "pregnancy-yoga",
      desc: "Safe prenatal yoga for strength, comfort & healthy delivery.",
      img: "/assets/images/services/s13.jpg",
      color: "from-yellow-400 to-amber-600",
    },
    {
      title: "Weight Loss Yoga",
      slug: "weight-loss-yoga",
      desc: "Yoga for fat-burning, metabolism boost & body transformation.",
      img: "/assets/images/services/s14.jpg",
      color: "from-emerald-400 to-green-600",
    },
    {
      title: "Meditation",
      slug: "meditation",
      desc: "Guided meditation for mental clarity, emotional balance & peace.",
      img: "/assets/images/services/s15.jpg",
      color: "from-indigo-400 to-purple-600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 via-white to-pink-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6">

        <div className="md:text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            Our Specialized Services
          </h2>
          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
            Holistic healing with expert care in Nutrition, Psychology & Yoga Therapy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, index) => (
            <Link key={index} href={`/services/${s.slug}`}>
              <div className="cursor-pointer bg-white shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 border border-gray-100">
                
                <div className="h-52 w-full overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-gray-800">{s.title}</h3>
                  <p className="text-gray-600 mt-4 leading-relaxed">{s.desc}</p>
                  <div className={`mt-6 w-full h-1.5 rounded-full bg-gradient-to-r ${s.color}`}></div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
