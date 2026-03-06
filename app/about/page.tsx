import AboutClient from "./AboutClient";

export const metadata = {
  title: "Sri Poly Clinic – About Us | Nutrition · Psychology · Yoga Centre, Hanamkonda",
  description:
    "Learn about Sri Poly Clinic’s mission & vision. We provide compassionate, patient-focused care in nutrition, psychology counselling, and yoga — with advanced medical technology and personalized treatment plans at our Hanamkonda centre.",
   keywords:
    "Sri Poly Clinic, about Sri Poly Clinic, nutrition clinic Hanamkonda, psychology counselling Hanamkonda, yoga therapy Hanamkonda, holistic wellness centre Telangana, dietician psychologist yoga coach, patient-centred healthcare, weight management, stress management clinic",

  alternates: {
    canonical: "https://www.sripolyclinic.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
