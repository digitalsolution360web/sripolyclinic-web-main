// app/[slug]/page.tsx
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";

// Service data mapping
const servicesData = {
  "nutrition-assessment": {
    title: "Personalized Nutrition Planning",
    subtitle: "Custom diet plans tailored to your unique needs",
    description: "Our personalized nutrition planning service provides you with a comprehensive dietary approach designed specifically for your health goals, lifestyle, and medical conditions.",
    longDescription: "At Sri Poly Clinic, we believe that proper nutrition is the foundation of good health. Our personalized nutrition planning goes beyond simple meal suggestions – we take into account your medical history, food preferences, lifestyle, and specific health goals to create a comprehensive nutrition strategy.\n\nWhether you're looking to manage a chronic condition, improve athletic performance, lose weight, or simply adopt healthier eating habits, our nutrition experts will guide you every step of the way.",
    image: "/assets/images/nutrition-service.jpg",
    icon: "🥗",
    features: [
      "Comprehensive health assessment",
      "Personalized meal plans",
      "Nutritional counseling sessions",
      "Regular progress tracking",
      "Recipe suggestions and cooking tips",
      "Supplement recommendations if needed"
    ],
    benefits: [
      "Improved energy levels",
      "Better weight management",
      "Reduced risk of chronic diseases",
      "Enhanced athletic performance",
      "Better digestion and gut health"
    ],
    process: [
      "Initial consultation and health assessment",
      "Dietary analysis and goal setting",
      "Customized nutrition plan development",
      "Follow-up sessions and adjustments"
    ],
    faqs: [
      {
        question: "How long does a nutrition plan last?",
        answer: "Typically, we start with a 3-month comprehensive program, which can be extended based on your goals and progress."
      },
      {
        question: "Do you accommodate dietary restrictions?",
        answer: "Yes, we specialize in creating plans for various dietary needs including vegetarian, vegan, gluten-free, and allergy-specific requirements."
      }
    ],
    price: "Starting from ₹2,999/session",
    duration: "60 minutes per session",
    bookingLink: "/book/nutrition-planning"
  },
  "psychology-counseling": {
    title: "Psychology Counseling",
    subtitle: "Professional mental health support for your well-being",
    description: "Our psychology counseling services provide a safe, confidential space to address mental health concerns.",
    longDescription: "Mental health is just as important as physical health. At Sri Poly Clinic, we offer compassionate, professional counseling services to help you overcome challenges, develop coping strategies, and achieve emotional well-being.\n\nWhether you're dealing with anxiety, depression, relationship issues, trauma, or simply seeking personal growth, our therapists provide a non-judgmental space where you can explore your thoughts and feelings safely.",
    image: "/assets/images/counseling-service.jpg",
    icon: "🧠",
    features: [
      "Individual therapy sessions",
      "Couples counseling",
      "Family therapy",
      "Stress management techniques",
      "Anxiety and depression treatment",
      "Trauma-informed care"
    ],
    benefits: [
      "Improved emotional regulation",
      "Better relationships",
      "Increased self-awareness",
      "Effective coping strategies",
      "Reduced stress and anxiety"
    ],
    process: [
      "Initial intake assessment",
      "Goal setting and treatment planning",
      "Regular therapy sessions",
      "Progress evaluation and adjustments"
    ],
    faqs: [
      {
        question: "How many sessions will I need?",
        answer: "The number of sessions varies depending on your needs. Some clients benefit from short-term therapy (6-12 sessions), while others prefer longer-term support."
      },
      {
        question: "Is everything confidential?",
        answer: "Yes, all sessions are completely confidential as per professional ethics and legal requirements."
      }
    ],
    price: "Starting from ₹1,499/session",
    duration: "50 minutes per session",
    bookingLink: "/book/psychology-counseling"
  },
  "yoga-sessions": {
    title: "Guided Yoga Sessions",
    subtitle: "Holistic wellness through traditional yoga practices",
    description: "Experience the transformative power of yoga with our guided sessions.",
    longDescription: "Our guided yoga sessions offer a holistic approach to wellness, combining physical postures, breathing techniques, and meditation to promote overall health.\n\nWe offer various styles including Hatha, Vinyasa, and restorative yoga, as well as specialized sessions for stress relief, flexibility, and strength building.",
    image: "/assets/images/yoga-service.jpg",
    icon: "🧘",
    features: [
      "Small group sessions",
      "Private one-on-one instruction",
      "Breathing exercises (Pranayama)",
      "Meditation and mindfulness",
      "Customized sequences",
      "Online and in-person options"
    ],
    benefits: [
      "Increased flexibility and strength",
      "Better stress management",
      "Improved posture",
      "Enhanced mind-body connection",
      "Better sleep quality"
    ],
    process: [
      "Initial wellness assessment",
      "Customized practice plan",
      "Regular guided sessions",
      "Home practice recommendations"
    ],
    faqs: [
      {
        question: "Do I need to be flexible to start yoga?",
        answer: "Not at all! Yoga is for everyone regardless of flexibility. Our instructors will guide you through modifications suitable for your level."
      },
      {
        question: "What should I bring to a session?",
        answer: "We provide mats and props, but you're welcome to bring your own. Wear comfortable clothing that allows movement."
      }
    ],
    price: "Starting from ₹699/session",
    duration: "60-75 minutes per session",
    bookingLink: "/book/yoga-sessions"
  },
   "obesity-weight-management": {
    title: "Obesity Weight Management",
    subtitle: "Structured fat-loss and weight control programs",
    description:
      "Our obesity management program helps you achieve sustainable weight loss with expert nutrition and lifestyle guidance.",
    longDescription:
      "We provide medically guided weight management programs designed to reduce body fat, improve metabolism, and maintain long-term health. Our specialists monitor your progress and adjust plans for safe and effective results.",
    image: "/assets/images/services/s2.jpg",
    icon: "⚖️",
    features: [
      "Personalized weight loss plan",
      "Body fat monitoring",
      "Diet and lifestyle coaching",
      "Progress tracking",
    ],
    benefits: [
      "Healthy weight reduction",
      "Improved metabolism",
      "Better energy levels",
      "Reduced health risks",
    ],
    process: [
      "Initial assessment",
      "Custom diet plan",
      "Regular monitoring",
      "Progress evaluation",
    ],
    faqs: [],
    price: "Starting from ₹2,499",
    duration: "45 minutes",
    bookingLink: "/book/obesity-weight-management",
  },

  "customised-diet-plan": {
    title: "Customised Diet Plan",
    subtitle: "Personal diet charts based on your health needs",
    description:
      "Personalized diet plans tailored to your medical conditions, lifestyle, and health goals.",
    longDescription:
      "Our customized diet plans are designed according to your body requirements, medical history, and daily routine to achieve long-term health benefits.",
    image: "/assets/images/services/s3.jpg",
    icon: "🥗",
    features: ["Personal diet chart", "Condition-based nutrition", "Follow-up guidance"],
    benefits: ["Improved health", "Better weight control", "Balanced nutrition"],
    process: ["Assessment", "Plan creation", "Follow-ups"],
    faqs: [],
    price: "Starting from ₹1,999",
    duration: "30 minutes",
    bookingLink: "/book/customised-diet-plan",
  },

  "body-composition-analysis": {
    title: "Body Composition Analysis",
    subtitle: "Advanced body health measurement",
    description:
      "Detailed body fat percentage, muscle mass, and metabolic health analysis.",
    longDescription:
      "We use modern equipment to measure body composition accurately to help create effective health and fitness plans.",
    image: "/assets/images/services/s4.jpg",
    icon: "📊",
    features: ["Body fat analysis", "Muscle mass", "BMR measurement"],
    benefits: ["Accurate health tracking", "Better planning"],
    process: ["Scan", "Report", "Consultation"],
    faqs: [],
    price: "Starting from ₹999",
    duration: "20 minutes",
    bookingLink: "/book/body-composition-analysis",
  },

  "diabetic-diet-plan": {
    title: "Diabetic Diet Plan",
    subtitle: "Nutrition support for diabetes control",
    description:
      "Special diet planning for Type 1, Type 2, and gestational diabetes.",
    longDescription:
      "Our diabetic diet plans help control blood sugar levels, improve metabolism, and reduce complications through balanced nutrition.",
    image: "/assets/images/services/s5.jpg",
    icon: "🩺",
    features: ["Sugar control diet", "Meal timing guidance"],
    benefits: ["Better glucose control", "Improved health"],
    process: ["Assessment", "Diet plan", "Monitoring"],
    faqs: [],
    price: "Starting from ₹1,999",
    duration: "30 minutes",
    bookingLink: "/book/diabetic-diet-plan",
  },

  "career-counselling": {
    title: "Career Counselling",
    subtitle: "Professional guidance for career clarity",
    description:
      "Expert counselling for students and professionals to choose the right career path.",
    longDescription:
      "Our career counselling sessions help individuals identify strengths, interests, and career opportunities for better decision-making.",
    image: "/assets/images/services/s6.jpg",
    icon: "🎯",
    features: ["Career assessment", "Guidance sessions"],
    benefits: ["Clear direction", "Better decisions"],
    process: ["Assessment", "Consultation"],
    faqs: [],
    price: "Starting from ₹1,499",
    duration: "45 minutes",
    bookingLink: "/book/career-counselling",
  },

  "family-counselling": {
    title: "Family Counselling",
    subtitle: "Improve relationships and emotional well-being",
    description:
      "Relationship and emotional wellness counselling for families.",
    longDescription:
      "We provide supportive counselling to improve communication, resolve conflicts, and strengthen family relationships.",
    image: "/assets/images/services/s7.jpg",
    icon: "👨‍👩‍👧",
    features: ["Relationship therapy", "Conflict resolution"],
    benefits: ["Better communication", "Healthy relationships"],
    process: ["Session", "Guidance"],
    faqs: [],
    price: "Starting from ₹1,499",
    duration: "45 minutes",
    bookingLink: "/book/family-counselling",
  },

  "anxiety-management": {
    title: "Anxiety Management",
    subtitle: "Therapy for calmness and emotional control",
    description:
      "Professional therapy to manage anxiety and emotional stress.",
    longDescription:
      "Our anxiety management sessions help you develop coping strategies, emotional regulation, and mental clarity.",
    image: "/assets/images/services/s8.jpg",
    icon: "🧠",
    features: ["Therapy sessions", "Relaxation techniques"],
    benefits: ["Reduced anxiety", "Better focus"],
    process: ["Assessment", "Therapy"],
    faqs: [],
    price: "Starting from ₹1,499",
    duration: "45 minutes",
    bookingLink: "/book/anxiety-management",
  },

  "depression-management": {
    title: "Depression Management",
    subtitle: "Support for emotional healing and recovery",
    description:
      "Counselling support for mood improvement and mental health recovery.",
    longDescription:
      "We provide compassionate therapy and strategies to manage depression and improve emotional well-being.",
    image: "/assets/images/services/s9.jpg",
    icon: "💙",
    features: ["Therapy", "Emotional support"],
    benefits: ["Improved mood", "Better mental health"],
    process: ["Consultation", "Therapy"],
    faqs: [],
    price: "Starting from ₹1,499",
    duration: "45 minutes",
    bookingLink: "/book/depression-management",
  },

  "stress-management": {
    title: "Stress Management",
    subtitle: "Relief from daily stress and tension",
    description:
      "Stress management therapy with relaxation and lifestyle techniques.",
    longDescription:
      "Our sessions help reduce stress levels and improve mental resilience using proven therapeutic techniques.",
    image: "/assets/images/services/s10.jpg",
    icon: "🌿",
    features: ["Relaxation therapy", "Breathing exercises"],
    benefits: ["Reduced stress", "Better sleep"],
    process: ["Assessment", "Therapy"],
    faqs: [],
    price: "Starting from ₹1,499",
    duration: "45 minutes",
    bookingLink: "/book/stress-management",
  },

  "infertility-yoga": {
    title: "Infertility Yoga",
    subtitle: "Yoga for reproductive health support",
    description:
      "Yoga sessions designed to support fertility and hormonal balance.",
    longDescription:
      "Our infertility yoga programs focus on improving reproductive health through specialized poses and breathing techniques.",
    image: "/assets/images/services/s12.jpg",
    icon: "🧘‍♀️",
    features: ["Hormonal balance yoga", "Stress reduction"],
    benefits: ["Improved reproductive health"],
    process: ["Assessment", "Sessions"],
    faqs: [],
    price: "Starting from ₹699",
    duration: "60 minutes",
    bookingLink: "/book/infertility-yoga",
  },

  "pregnancy-yoga": {
    title: "Pregnancy Yoga",
    subtitle: "Safe prenatal yoga sessions",
    description:
      "Prenatal yoga for strength, comfort, and healthy pregnancy.",
    longDescription:
      "Our pregnancy yoga sessions are designed to support mothers during pregnancy with safe exercises and breathing techniques.",
    image: "/assets/images/services/s13.jpg",
    icon: "🤰",
    features: ["Prenatal exercises", "Breathing techniques"],
    benefits: ["Healthy pregnancy", "Reduced discomfort"],
    process: ["Consultation", "Sessions"],
    faqs: [],
    price: "Starting from ₹699",
    duration: "60 minutes",
    bookingLink: "/book/pregnancy-yoga",
  },

  "weight-loss-yoga": {
    title: "Weight Loss Yoga",
    subtitle: "Yoga for fat burning and fitness",
    description:
      "Yoga programs designed for weight loss and metabolism boost.",
    longDescription:
      "Our weight loss yoga sessions help burn calories, improve metabolism, and enhance physical fitness naturally.",
    image: "/assets/images/services/s14.jpg",
    icon: "🔥",
    features: ["Fat burning yoga", "Fitness training"],
    benefits: ["Weight loss", "Better fitness"],
    process: ["Assessment", "Sessions"],
    faqs: [],
    price: "Starting from ₹699",
    duration: "60 minutes",
    bookingLink: "/book/weight-loss-yoga",
  },

  "meditation": {
    title: "Meditation",
    subtitle: "Mental clarity and emotional balance",
    description:
      "Guided meditation sessions for peace and mindfulness.",
    longDescription:
      "Our meditation sessions help improve concentration, reduce stress, and achieve emotional balance.",
    image: "/assets/images/services/s15.jpg",
    icon: "🧘",
    features: ["Guided meditation", "Mindfulness training"],
    benefits: ["Mental peace", "Better focus"],
    process: ["Session", "Practice"],
    faqs: [],
    price: "Starting from ₹499",
    duration: "30 minutes",
    bookingLink: "/book/meditation",
  },
};

// Generate static paths for all services
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service =
    servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <ServiceDetailClient
      service={service}
      slug={slug}
    />
  );
}

