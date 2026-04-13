import * as LucideIcons from "lucide-react";
import { useSiteContent, useContentCards } from "@/hooks/useSiteContent";

const iconMap: Record<string, any> = LucideIcons;

const IngredientsSection = () => {
  const { data: content } = useSiteContent();
  const { data: cards } = useContentCards("ingredients");

  const fallback = [
    { title: "Пептидный комплекс", description: "Биоактивные пептиды поддерживают обновление клеток и усиливают местный иммунитет слизистой", icon: "Dna" },
    { title: "Изотонический раствор", description: "Физиологически совместимая основа — бережно очищает без пересушивания", icon: "FlaskConical" },
    { title: "Гиалуроновая кислота", description: "Высокомолекулярная форма — удерживает влагу, устраняет сухость и раздражение надолго", icon: "Droplets" },
    { title: "Без консервантов", description: "Специальная упаковка с микробиологической защитой без агрессивных добавок", icon: "PackageCheck" },
  ];

  const items = cards && cards.length > 0 ? cards : fallback;

  return (
    <section id="ingredients" className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          {content?.ingredients_title ?? "Состав"}
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          {content?.ingredients_subtitle ?? "Только проверенные компоненты"}
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item) => {
            const Icon = iconMap[item.icon] || LucideIcons.Circle;
            return (
              <div key={item.title} className="flex gap-4 bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
