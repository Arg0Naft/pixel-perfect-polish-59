import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import IngredientsSection from "@/components/IngredientsSection";
import AudienceSection from "@/components/AudienceSection";
import BuySection from "@/components/BuySection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <HowItWorksSection />
      <IngredientsSection />
      <AudienceSection />
      <BuySection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
