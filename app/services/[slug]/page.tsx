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
    bookingLink: "/appointment"
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
    bookingLink: "/appointment"
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
    bookingLink: "/appointment"
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
    bookingLink: "/appointment",
  },

  "customised-diet-plan": {
  title: "Customised Diet Plan in Hanamkonda",
  subtitle: "Personalized diet charts based on your lifestyle, health needs, and medical history",
  description:
    "Looking for a customised diet plan in Hanamkonda that actually works for your lifestyle? At Sri Poly Clinic, we create personalized diet charts based on your unique health needs, daily routine, and medical history—so you can achieve real, long-term results.",

  longDescription:
    "Our customised diet plan service is not based on generic templates or internet diets. We carefully understand your body type, lifestyle habits, and health conditions before designing your plan. The goal is simple—create a diet that fits into your life naturally, without forcing extreme changes or restrictions. At Sri Poly Clinic, we believe that sustainable health comes from balanced nutrition and consistency, not short-term dieting.",

  image: "/assets/images/services/s3.jpg",
  icon: "🥗",

  features: [
    "Detailed nutrition assessment",
    "Personalized meal planning",
    "Diet plan based on medical conditions",
    "Lifestyle and eating habit guidance",
    "Continuous support and adjustments",
  ],

  benefits: [
    "Improved overall health and energy levels",
    "Better weight management and control",
    "Balanced nutrition tailored to your body",
    "Easy-to-follow meal plans",
    "Long-term lifestyle improvement",
  ],

  process: [
    "Initial Consultation – Understanding your health goals, lifestyle, and medical background",
    "Body & Nutrition Analysis – Evaluating eating habits and body requirements",
    "Personalized Diet Plan Creation – Customized diet chart for your needs",
    "Implementation & Guidance – Easy instructions and practical tips",
    "Follow-Up & Adjustments – Monitoring progress and improving results",
  ],

  faqs: [
    {
      question: "Is the diet plan customized for every individual?",
      answer:
        "Yes, every diet plan is tailored based on your body, lifestyle, and health goals.",
    },
    {
      question: "Will I need to follow strict dieting?",
      answer:
        "No, our plans are practical and easy to follow without extreme restrictions.",
    },
    {
      question: "Can this help with weight loss?",
      answer:
        "Yes, the plan is designed to support healthy and sustainable weight loss.",
    },
    {
      question: "Do you consider medical conditions?",
      answer:
        "Absolutely. We create diet plans based on your medical history and requirements.",
    },
  ],

  price: "₹1,999",
  duration: "30 Minutes",
  bookingLink: "/appointment",
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
    bookingLink: "/appointment",
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
    bookingLink: "/appointment",
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
    bookingLink: "/appointment",
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
    bookingLink: "/appointment",
  },

  "anxiety-management": {
  title: "Anxiety Management in Hanamkonda",
  subtitle: "Professional support to reduce stress, anxiety, and improve emotional well-being",

  description:
    "Feeling overwhelmed, stressed, or constantly anxious? At Sri Poly Clinic, we offer professional anxiety management in Hanamkonda to help you regain control over your thoughts, emotions, and daily life.",

  longDescription:
    "Our anxiety management sessions focus on understanding the root cause of your stress and helping you develop practical coping strategies. Instead of just temporary relief, we work on emotional regulation, improving thought patterns, and building mental clarity. Each session is personalized to your situation, so you can progress at your own pace in a comfortable and supportive environment.",

  image: "/assets/images/services/s8.jpg",
  icon: "🧠",

  features: [
    "One-on-one counselling sessions",
    "Personalized anxiety management techniques",
    "Practical tools for daily stress handling",
    "Guidance for improving emotional balance",
    "Supportive and confidential environment",
  ],

  benefits: [
    "Reduced anxiety and stress levels",
    "Better focus and mental clarity",
    "Improved emotional control",
    "Increased confidence in daily life",
    "Healthier coping mechanisms",
  ],

  process: [
    "Understanding Your Situation – Discussing concerns, triggers, and mental state",
    "Identifying Patterns – Recognizing thoughts and habits causing anxiety",
    "Strategy Building – Learning simple techniques for real-life situations",
    "Practice & Guidance – Applying techniques in daily routine",
    "Progress Tracking – Monitoring improvement and adjusting strategies",
  ],

  faqs: [
    {
      question: "How do anxiety management sessions work?",
      answer:
        "We use personalized counselling techniques to help you understand and manage your anxiety effectively.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "It depends on your condition, but many people start seeing improvement within a few sessions.",
    },
    {
      question: "Are the sessions confidential?",
      answer:
        "Yes, all sessions are completely private and confidential.",
    },
    {
      question: "Can this help with stress and overthinking?",
      answer:
        "Absolutely. Our sessions are designed to address stress, overthinking, and emotional imbalance.",
    },
  ],

  price: "₹1,499",
  duration: "45 Minutes",
  bookingLink: "/appointment",
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
    bookingLink: "/appointment",
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
    bookingLink: "/appointment",
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
    bookingLink: "/appointment",
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
    bookingLink: "/appointment",
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
    bookingLink: "/appointment",
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
    bookingLink: "/appointment",
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

