import * as LucideIcons from "lucide-react";
import { useSiteContent, useContentCards } from "@/hooks/useSiteContent";

const iconMap: Record<string, any> = LucideIcons;

const AudienceSection = () => {
  const { data: content } = useSiteContent();
  const { data: cards } = useContentCards("audience");

  const fallback = [
    { title: "Дети", description: "Мягкий уход без жжения — подходит с 1 года. Безопасная формула для ежедневного увлажнения.", icon: "Baby" },
    { title: "Взрослые", description: "Ежедневная защита в сезон ОРВИ и аллергий. Поддерживает здоровье слизистой при сухом воздухе в офисе.", icon: "User" },
    { title: "Спортсмены", description: "Восстановление слизистой при интенсивных нагрузках и тренировках в сухих помещениях.", icon: "Dumbbell" },
    { title: "Пожилые люди", description: "Увлажнение при хронической сухости слизистой. Бережная поддержка без побочных эффектов.", icon: "Heart" },
  ];

  const items = cards && cards.length > 0 ? cards : fallback;

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          {content?.audience_title ?? "Кому подходит ТимиЛор"}
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-md mx-auto">
          {content?.audience_subtitle ?? "Безопасен для всей семьи — от малышей до пожилых"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((a) => {
            const Icon = iconMap[a.icon] || LucideIcons.Circle;
            return (
              <div key={a.title} className="text-center bg-card rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-base mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
