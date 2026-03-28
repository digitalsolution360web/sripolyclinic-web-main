import BlogsClient from "./BlogsClient";

export const metadata = {
  title: "Sri Poly Clinic – Blogs",
  description:
    "",
   keywords:
    "Sri Poly Clinic, about Sri Poly Clinic, nutrition clinic Hanamkonda, psychology counselling Hanamkonda, yoga therapy Hanamkonda, holistic wellness centre Telangana, dietician psychologist yoga coach, patient-centred healthcare, weight management, stress management clinic",

  alternates: {
    canonical: "https://www.sripolyclinic.com/blogs",
  },
};

export default function BlogsPage() {
  return <BlogsClient />;
}
