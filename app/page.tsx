import BannerSlider from "@/components/home/BannerSlider";
import Intro from "@/components/home/Intro";
import ServicesSection from "@/components/home/ServicesSection";
import CounterSection from "@/components/home/CounterSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import Testimonials from "@/components/home/Testimonials";
import Appointment from "@/components/home/Appointment";
import FaqSection from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <>
      <BannerSlider />
      <Intro />
      <ServicesSection />
      <CounterSection />
      <WhyChooseSection />
      <Testimonials />
      <Appointment />
      <FaqSection />
    </>
  );
}
