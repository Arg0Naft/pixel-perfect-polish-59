import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AudienceSection from "@/components/AudienceSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import UsageSection from "@/components/UsageSection";
import TrustSection from "@/components/TrustSection";
import FaqSection from "@/components/FaqSection";
import BuySection from "@/components/BuySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <HowItWorksSection />
      <AudienceSection />
      <AdvantagesSection />
      <UsageSection />
      <TrustSection />
      <FaqSection />
      <BuySection />
      <Footer />
    </div>
  );
};

export default Index;
