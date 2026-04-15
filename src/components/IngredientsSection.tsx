import * as LucideIcons from "lucide-react";
import { ShieldOff } from "lucide-react";
import { useSiteContent, useContentCards } from "@/hooks/useSiteContent";

const iconMap: Record<string, any> = LucideIcons;

const IngredientsSection = () => {
  const { data: content } = useSiteContent();
  const { data: cards } = useContentCards("ingredients");

  const fallback = [
    { title: "Пептидный комплекс", description: "Биоактивные пептиды стимулируют обновление клеток и усиливают местный иммунитет слизистой оболочки", icon: "Dna" },
    { title: "Гиалуроновая кислота", description: "Высокомолекулярная форма удерживает влагу, устраняет сухость и раздражение на длительный срок", icon: "Droplets" },
    { title: "Изотонический раствор", description: "Физиологически совместимая основа бережно очищает полость носа без пересушивания", icon: "FlaskConical" },
    { title: "Без консервантов", description: "Специальная упаковка обеспечивает стерильность без агрессивных химических добавок", icon: "PackageCheck" },
  ];

  const items = cards && cards.length > 0 ? cards : fallback;

  return (
    <section id="ingredients" className="py-20 md:py-28 section-gradient-primary">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          {content?.ingredients_title ?? "Состав"}
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-lg mx-auto">
          {content?.ingredients_subtitle ?? "Клинически проверенные компоненты для безопасного ежедневного применения"}
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {items.map((item) => {
            const Icon = iconMap[item.icon] || LucideIcons.Circle;
            return (
              <div key={item.title} className="flex gap-4 bg-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety banner */}
        <div className="bg-accent/8 border border-accent/20 rounded-2xl p-6 max-w-4xl mx-auto flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
            <ShieldOff className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Без консервантов, красителей и парабенов</p>
            <p className="text-sm text-muted-foreground">Безопасная формула подходит для ежедневного применения взрослыми и детьми</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
