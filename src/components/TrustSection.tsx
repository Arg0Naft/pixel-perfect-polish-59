import { Shield, Award, CheckCircle, HeartPulse } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Стандарты GMP",
    description: "Производство соответствует международным стандартам надлежащей производственной практики",
  },
  {
    icon: Award,
    title: "Без консервантов и красителей",
    description: "Формула не содержит агрессивных химических добавок, парабенов и искусственных красителей",
  },
  {
    icon: CheckCircle,
    title: "Клиническая безопасность",
    description: "Состав прошёл проверку на безопасность и переносимость для ежедневного применения",
  },
  {
    icon: HeartPulse,
    title: "Бережная формула",
    description: "Физиологически совместимый раствор не раздражает слизистую и не вызывает привыкания",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 md:py-28 section-gradient-accent">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Контроль качества
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-lg mx-auto">
          Безопасность подтверждена — каждый этап производства под контролем
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="text-center bg-card rounded-2xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/8 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
