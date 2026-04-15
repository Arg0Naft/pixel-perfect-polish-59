import * as LucideIcons from "lucide-react";
import { useSiteContent, useContentCards } from "@/hooks/useSiteContent";

const iconMap: Record<string, any> = LucideIcons;

const HowItWorksSection = () => {
  const { data: content } = useSiteContent();
  const { data: cards } = useContentCards("howitworks");

  const fallback = [
    { title: "Увлажняет", description: "Гиалуроновая кислота мгновенно насыщает слизистую влагой и устраняет ощущение сухости", icon: "Droplets", sort_order: 1 },
    { title: "Защищает", description: "Формирует тонкую защитную плёнку — барьер от аллергенов, вирусов и загрязнений воздуха", icon: "Shield", sort_order: 2 },
    { title: "Восстанавливает", description: "Пептидный комплекс запускает регенерацию повреждённых клеток эпителия", icon: "RefreshCw", sort_order: 3 },
    { title: "Облегчает дыхание", description: "Снимает отёчность и заложенность, возвращая свободное носовое дыхание", icon: "Wind", sort_order: 4 },
  ];

  const items = cards && cards.length > 0 ? cards : fallback;

  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          {content?.howitworks_title ?? "Как работает ТимиЛор"}
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto">
          {content?.howitworks_subtitle ?? "Четыре последовательных действия в одном применении"}
        </p>

        {/* Desktop: horizontal steps with connector */}
        <div className="hidden lg:block">
          <div className="relative grid grid-cols-4 gap-8">
            {/* Connector line */}
            <div className="absolute top-7 left-[12.5%] right-[12.5%] h-px bg-accent/30" />

            {items.map((s, idx) => {
              const Icon = iconMap[s.icon] || LucideIcons.Circle;
              const num = s.sort_order ?? idx + 1;
              return (
                <div key={s.title} className="relative text-center">
                  <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-5 text-lg font-bold shadow-md relative z-10">
                    {num}
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed px-2">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: vertical cards */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-6">
          {items.map((s, idx) => {
            const Icon = iconMap[s.icon] || LucideIcons.Circle;
            const num = s.sort_order ?? idx + 1;
            return (
              <div key={s.title} className="relative bg-card rounded-2xl p-6 border border-border">
                <div className="absolute -top-3.5 -left-1.5 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-md">
                  {num}
                </div>
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mt-1">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
