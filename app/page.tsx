import Hero from "@/components/home/Hero";
import FeaturedBikes from "@/components/home/FeaturedBikes";
import WhyKinetic from "@/components/home/WhyKinetic";
import FinancingCta from "@/components/home/FinancingCta";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedBikes />
      <WhyKinetic />
      <FinancingCta />
      <ContactSection />
    </>
  );
}
