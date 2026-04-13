import { Flame, Wind, Flower2, Pill } from "lucide-react";

const problems = [
  {
    icon: Flame,
    title: "Сухость и жжение",
    desc: "В отопительный сезон и при длительной работе в кондиционируемом помещении",
  },
  {
    icon: Wind,
    title: "Заложенность и насморк",
    desc: "Облегчение симптомов при ОРВИ без сосудосуживающих капель",
  },
  {
    icon: Flower2,
    title: "Аллергический ринит",
    desc: "Барьерная защита слизистой от пыльцы, пыли и шерсти животных",
  },
  {
    icon: Pill,
    title: "Синдром сухого носа",
    desc: "Восстановление после длительного применения сосудосуживающих препаратов",
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Знакомо<span className="text-accent">?</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          ТимиЛор разработан для решения этих проблем
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
