import { Droplets, RefreshCw, Shield, Sparkles } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: Droplets,
    title: "Увлажняет",
    desc: "Гиалуроновая кислота удерживает влагу и создаёт защитный слой",
  },
  {
    num: 2,
    icon: RefreshCw,
    title: "Восстанавливает",
    desc: "Пептидный комплекс стимулирует регенерацию клеток эпителия",
  },
  {
    num: 3,
    icon: Shield,
    title: "Защищает",
    desc: "Формирует барьер против аллергенов, вирусов и загрязнений",
  },
  {
    num: 4,
    icon: Sparkles,
    title: "Очищает",
    desc: "Мягко промывает полость носа без раздражения слизистой",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Как работает <span className="text-primary">ТимиЛор</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Четыре механизма в одном флаконе
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="relative bg-card rounded-2xl p-6 border border-border hover:border-accent/40 hover:shadow-lg transition-all">
              <div className="absolute -top-4 -left-2 w-9 h-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-md">
                {s.num}
              </div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mt-2">
                <s.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
