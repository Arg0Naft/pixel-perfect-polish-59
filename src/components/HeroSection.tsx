import { Droplets, ShieldCheck } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const HeroSection = () => {
  const { data: content } = useSiteContent();

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <span>{content?.hero_badge ?? "НОВИНКА · 30 МЛ · БЕЗ РЕЦЕПТА"}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-xl inline-block">Тими</span>
          <span className="italic text-primary ml-1">Лор</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-2 font-medium">
          {content?.hero_subtitle ?? "пептидный комплекс · гиалуроновая кислота"}
        </p>

        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          {content?.hero_description ?? "Защита, увлажнение и восстановление слизистой носа — для всей семьи"}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#buy" className="bg-accent text-accent-foreground px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-accent/25">
            {content?.hero_cta_primary ?? "Где купить"}
          </a>
          <a href="#how-it-works" className="border-2 border-primary/20 text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/5 transition-colors">
            {content?.hero_cta_secondary ?? "Узнать больше"}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span>{content?.hero_feature_1 ?? "Не вызывает привыкания"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-accent" />
            <span>{content?.hero_feature_2 ?? "Без консервантов"}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span>{content?.hero_feature_3 ?? "Подходит детям"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
