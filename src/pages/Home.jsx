import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import CategoriesSection from "../components/sections/CategoriesSection";
import CoursesSection from "../components/sections/CoursesSection";
import CreatorSection from "../components/sections/CreatorSection";
import CTABanner from "../components/sections/CTABanner";
import GrowthSection from "../components/sections/GrowthSection";
import HeroSection from "../components/sections/HeroSection";
import LogoStrip from "../components/sections/LogoStrip";
import TestimonialsSection from "../components/sections/TestimonialsSection";

function Home() {
  return (
    <div className="font-satoshi bg-[#F9FAFB] min-h-screen">
      <Navbar />
      <HeroSection />
      <LogoStrip />
      <CoursesSection />
      <CategoriesSection />
      <GrowthSection />
      <CreatorSection />
      <CTABanner />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default Home;
