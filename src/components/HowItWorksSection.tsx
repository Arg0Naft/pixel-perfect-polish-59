import * as LucideIcons from "lucide-react";
import { useSiteContent, useContentCards } from "@/hooks/useSiteContent";

const iconMap: Record<string, any> = LucideIcons;

const HowItWorksSection = () => {
  const { data: content } = useSiteContent();
  const { data: cards } = useContentCards("howitworks");

  const fallback = [
    { title: "Увлажняет", description: "Гиалуроновая кислота удерживает влагу и создаёт защитный слой", icon: "Droplets", sort_order: 1 },
    { title: "Восстанавливает", description: "Пептидный комплекс стимулирует регенерацию клеток эпителия", icon: "RefreshCw", sort_order: 2 },
    { title: "Защищает", description: "Формирует барьер против аллергенов, вирусов и загрязнений", icon: "Shield", sort_order: 3 },
    { title: "Очищает", description: "Мягко промывает полость носа без раздражения слизистой", icon: "Sparkles", sort_order: 4 },
  ];

  const items = cards && cards.length > 0 ? cards : fallback;

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          {content?.howitworks_title ?? "Как работает ТимиЛор"}
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          {content?.howitworks_subtitle ?? "Четыре механизма в одном флаконе"}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s, idx) => {
            const Icon = iconMap[s.icon] || LucideIcons.Circle;
            const num = s.sort_order ?? idx + 1;
            return (
              <div key={s.title} className="relative bg-card rounded-2xl p-6 border border-border hover:border-accent/40 hover:shadow-lg transition-all">
                <div className="absolute -top-4 -left-2 w-9 h-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-md">
                  {num}
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mt-2">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
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
