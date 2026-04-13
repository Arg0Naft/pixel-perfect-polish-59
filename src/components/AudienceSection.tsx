import * as LucideIcons from "lucide-react";
import { useSiteContent, useContentCards } from "@/hooks/useSiteContent";

const iconMap: Record<string, any> = LucideIcons;

const AudienceSection = () => {
  const { data: content } = useSiteContent();
  const { data: cards } = useContentCards("audience");

  const fallback = [
    { title: "Дети", description: "Мягкая формула без раздражающих компонентов", icon: "Baby" },
    { title: "Взрослые", description: "Ежедневная гигиена и защита в сезон аллергий", icon: "User" },
    { title: "Спортсмены", description: "Защита при нагрузках и сухом воздухе", icon: "Dumbbell" },
    { title: "Пожилые", description: "Восстановление при хронической сухости", icon: "Heart" },
  ];

  const items = cards && cards.length > 0 ? cards : fallback;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          {content?.audience_title ?? "Для кого"}
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          {content?.audience_subtitle ?? "Безопасен для всей семьи"}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {items.map((a) => {
            const Icon = iconMap[a.icon] || LucideIcons.Circle;
            return (
              <div key={a.title} className="text-center bg-card rounded-2xl p-6 border border-border hover:border-accent/40 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold mb-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
