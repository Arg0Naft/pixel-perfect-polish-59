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
import Reveal from "@/components/Reveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Reveal><ProblemsSection /></Reveal>
      <Reveal><HowItWorksSection /></Reveal>
      <Reveal><AudienceSection /></Reveal>
      <Reveal><AdvantagesSection /></Reveal>
      <Reveal><UsageSection /></Reveal>
      <Reveal><TrustSection /></Reveal>
      <Reveal><FaqSection /></Reveal>
      <Reveal><BuySection /></Reveal>
      <Footer />
    </div>
  );
};

export default Index;
