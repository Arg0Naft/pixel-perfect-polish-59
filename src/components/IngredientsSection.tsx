import { FlaskConical, Droplets, Dna, PackageCheck } from "lucide-react";

const ingredients = [
  {
    icon: Dna,
    title: "Пептидный комплекс",
    desc: "Биоактивные пептиды поддерживают обновление клеток и усиливают местный иммунитет слизистой",
  },
  {
    icon: FlaskConical,
    title: "Изотонический раствор",
    desc: "Физиологически совместимая основа — бережно очищает без пересушивания",
  },
  {
    icon: Droplets,
    title: "Гиалуроновая кислота",
    desc: "Высокомолекулярная форма — удерживает влагу, устраняет сухость и раздражение надолго",
  },
  {
    icon: PackageCheck,
    title: "Без консервантов",
    desc: "Специальная упаковка с микробиологической защитой без агрессивных добавок",
  },
];

const IngredientsSection = () => {
  return (
    <section id="ingredients" className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Состав</h2>
        <p className="text-center text-muted-foreground mb-12">Только проверенные компоненты</p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ingredients.map((item) => (
            <div key={item.title} className="flex gap-4 bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
