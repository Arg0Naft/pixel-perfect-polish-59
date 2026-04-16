import { useSiteContent } from "@/hooks/useSiteContent";

const fallback = [
  { title: "Жители мегаполисов", description: "Когда воздух сухой, пыльный и перегруженный, слизистой нужна ежедневная поддержка." },
  { title: "Офисные сотрудники", description: "Кондиционеры, отопление и долгие часы в помещении часто усиливают сухость и дискомфорт." },
  { title: "Те, кто отказывается от сосудосуживающих", description: "Мягкий уход за слизистой в период отказа от привычных капель." },
  { title: "Люди с сезонным дискомфортом", description: "В период повышенной нагрузки на слизистую особенно важно поддерживать её увлажнённость и комфорт." },
  { title: "Семьи", description: "Повседневный продукт для домашней аптечки и регулярной заботы о качестве дыхания." },
  { title: "Те, кто выбирает осознанный уход", description: "Современная формула для тех, кто хочет встроить заботу о слизистой носа в ежедневный ритуал." },
];

const AudienceSection = () => {
  const { data: content } = useSiteContent();

  return (
    <section className="py-20 md:py-28 section-gradient-soft">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          {content?.audience_title ?? "Для кого подходит ТимиЛор"}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {fallback.map((a) => (
            <div key={a.title} className="bg-card rounded-2xl p-6 border border-border hover:border-accent/20 transition-colors">
              <h3 className="font-semibold text-base mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
