import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Script from "next/script";

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
  const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://www.sripolyclinic.com/#medicalclinic",
  "name": "Sri Poly Clinic",
  "url": "https://www.sripolyclinic.com/",
  "telephone": "+91-7702323401",
  "email": "info@sripolyclinic.com",
  "description": "Sri Poly Clinic offers Nutrition, Psychology, Yoga Therapy, Weight Management, Diet Planning, Stress Management, Anxiety Counselling, Family Counselling and Wellness Care services in Hanamkonda, Warangal.",
  "image": "https://www.sripolyclinic.com/images/clinic.jpg",
  "logo": "https://www.sripolyclinic.com/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#4-4-112, Near Kumarpally Market, Kothur, Kumarpally Area",
    "addressLocality": "Hanamkonda",
    "addressRegion": "Telangana",
    "postalCode": "506001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "",
    "longitude": ""
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    }
  ],
  "priceRange": "₹₹",
  "founder": {
    "@type": "Person",
    "name": "Dr. A. Srilatha"
  },
  "medicalSpecialty": [
    "Nutrition",
    "Psychology",
    "Yoga Therapy",
    "Mental Health",
    "Weight Management"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wellness Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nutrition Assessment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Customized Diet Plans"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Weight Management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Anxiety Management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Stress Management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Family Counselling"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Career Counselling"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pregnancy Yoga"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Meditation Sessions"
        }
      }
    ]
  },
  "sameAs": [
    "https://maps.app.goo.gl/JaUwWakekprxxLjP8",
    "https://www.facebook.com/profile.php?id=61583836029560",
    "https://www.instagram.com/sripoly.clinic"
  ]
};
  return (
    <html lang="en">
    <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      </head>
      <body>
        <Header />

        <main className="">
          {children}
        </main>

        <Footer />
        {/* Google Ads / gtag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18081155389"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             window.gtag = gtag;
             gtag('js', new Date());
             gtag('config', 'AW-18081155389');
          `}
        </Script>
      </body>
    </html>
  );
}
