import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export const metadata = {
  title:
  "Sri Poly Clinic | Nutrition, Psychology & Yoga Wellness Centre in Hanamkonda",
  description:
  "At Sri Poly Clinic, we bring together expert nutrition guidance, professional psychology counselling and therapeutic yoga in one holistic wellness centre. Whether you’re looking for weight-management, stress relief, mental-wellness support or prenatal yoga, our personalised plans help you achieve mind-body harmony for long-term health. Located in Hanamkonda, Telangana.",
  keywords:
  "nutrition clinic Hanamkonda, yoga therapy Hanamkonda, psychology counselling Hanamkonda, holistic wellness centre Telangana, weight management diet plan, anxiety & stress management counselling, prenatal yoga Hanamkonda, body composition analysis nutrition, diabetic diet plan Telangana, mind-body healing centre",
  alternates: {
    canonical: "https://www.sripolyclinic.com",
  },
  openGraph: {
    images: [
      {
        url: "/assets/images/banner/b1.jpg",
      }
    ]
  },

icons: {
  icon: "/favicon.png",
}

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
