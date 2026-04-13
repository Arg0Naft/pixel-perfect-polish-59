import { Baby, User, Dumbbell, Heart } from "lucide-react";

const audiences = [
  { icon: Baby, title: "Дети", desc: "Мягкая формула без раздражающих компонентов" },
  { icon: User, title: "Взрослые", desc: "Ежедневная гигиена и защита в сезон аллергий" },
  { icon: Dumbbell, title: "Спортсмены", desc: "Защита при нагрузках и сухом воздухе" },
  { icon: Heart, title: "Пожилые", desc: "Восстановление при хронической сухости" },
];

const AudienceSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Для кого</h2>
        <p className="text-center text-muted-foreground mb-12">Безопасен для всей семьи</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {audiences.map((a) => (
            <div key={a.title} className="text-center bg-card rounded-2xl p-6 border border-border hover:border-accent/40 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <a.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold mb-1">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
