import * as LucideIcons from "lucide-react";
import { useSiteContent, useContentCards } from "@/hooks/useSiteContent";

const iconMap: Record<string, any> = LucideIcons;

const ProblemsSection = () => {
  const { data: content } = useSiteContent();
  const { data: cards } = useContentCards("problems");

  const fallback = [
    { title: "Сухость и жжение в носу", description: "Отопление, кондиционеры и сухой воздух повреждают слизистую. ТимиЛор увлажняет и восстанавливает защитный барьер.", icon: "Flame" },
    { title: "Заложенность после ОРВИ", description: "После простуды слизистая воспалена и уязвима. Пептидный комплекс ускоряет её восстановление без сосудосуживающих средств.", icon: "Thermometer" },
    { title: "Аллергический ринит", description: "Пыльца, пыль и шерсть раздражают нос. Гиалуроновая кислота формирует защитную плёнку на слизистой.", icon: "Flower2" },
    { title: "Зависимость от капель", description: "После длительного применения сосудосуживающих капель слизистая пересыхает. ТимиЛор помогает восстановить её естественную работу.", icon: "Pill" },
  ];

  const items = cards && cards.length > 0 ? cards : fallback;

  return (
    <section className="py-20 md:py-28 section-gradient-soft">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          {content?.problems_title ?? "С какими проблемами справляется ТимиЛор"}
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          {content?.problems_subtitle ?? "Мягкое решение для самых частых проблем с носовым дыханием"}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((p, i) => {
            const Icon = iconMap[p.icon] || LucideIcons.Circle;
            const isFirst = i === 0;
            return (
              <div
                key={p.title}
                className={`bg-card rounded-2xl p-6 border transition-all group ${
                  isFirst
                    ? "border-primary/30 shadow-md ring-1 ring-primary/10"
                    : "border-border hover:border-primary/20 hover:shadow-lg"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  isFirst ? "bg-primary/15" : "bg-primary/8 group-hover:bg-primary/15"
                }`}>
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
