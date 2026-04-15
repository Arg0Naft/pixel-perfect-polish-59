import { Droplets, ShieldCheck, Baby } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const HeroSection = () => {
  const { data: content } = useSiteContent();

  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 section-gradient-primary" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/8 text-primary px-5 py-2 rounded-full text-sm font-medium mb-8 border border-primary/10">
          <span>{content?.hero_badge ?? "30 мл · Без рецепта · Без консервантов"}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          {content?.hero_title ?? (
            <>
              Защита и восстановление{" "}
              <span className="text-primary">слизистой носа</span>
              <br className="hidden sm:block" />
              <span className="text-accent"> — без привыкания и жжения</span>
            </>
          )}
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          {content?.hero_description ?? "Пептидный комплекс с гиалуроновой кислотой для ежедневной защиты при сухости воздуха, ОРВИ, аллергии и после сосудосуживающих капель. Подходит взрослым и детям."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#buy"
            className="w-full sm:w-auto bg-accent text-accent-foreground px-10 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-opacity shadow-lg shadow-accent/20"
          >
            {content?.hero_cta_primary ?? "Где купить"}
          </a>
          <a
            href="#ingredients"
            className="w-full sm:w-auto border-2 border-primary/20 text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary/5 transition-colors"
          >
            {content?.hero_cta_secondary ?? "Состав и безопасность"}
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span>{content?.hero_feature_1 ?? "Не вызывает привыкания"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-accent" />
            <span>{content?.hero_feature_2 ?? "Без консервантов и красителей"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Baby className="w-5 h-5 text-accent" />
            <span>{content?.hero_feature_3 ?? "Подходит детям с 1 года"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
