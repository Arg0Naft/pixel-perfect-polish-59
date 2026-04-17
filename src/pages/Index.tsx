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
import Seo from "@/components/Seo";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ТимиЛор",
    description:
      "Назальный спрей с тимическими пептидами и гиалуроновой кислотой для ежедневного увлажнения и защиты слизистой носа.",
    brand: { "@type": "Brand", name: "ТимиЛор" },
    category: "Назальный спрей",
    offers: {
      "@type": "Offer",
      price: "390",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      url: "https://timilor.lovable.app/",
    },
  };

  return (
    <div className="min-h-screen">
      <Seo
        title="ТимиЛор — пептидный спрей для увлажнения слизистой носа"
        description="ТимиЛор — назальный спрей с тимическими пептидами и гиалуроновой кислотой. Ежедневное увлажнение и защита слизистой носа для всей семьи."
        path="/"
        jsonLd={jsonLd}
      />
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
