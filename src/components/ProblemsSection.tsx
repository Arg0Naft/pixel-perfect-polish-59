import { useSiteContent, useContentCards } from "@/hooks/useSiteContent";

const ProblemsSection = () => {
  const { data: content } = useSiteContent();
  const { data: cards } = useContentCards("problems");

  const fallback = [
    { title: "Нос сохнет в офисе", description: "Кондиционер работает весь день, а к вечеру появляется стянутость и дискомфорт. Промывания помогают ненадолго." },
    { title: "Трудно отказаться от капель", description: "Если вы устали от постоянного использования сосудосуживающих средств, слизистой нужна мягкая ежедневная поддержка." },
    { title: "Воздух города перегружает", description: "Пыль, выхлопы, сухой воздух и аллергены каждый день воздействуют на слизистую носа." },
    { title: "Нужен комфорт на каждый день", description: "Когда хочется не разового эффекта, а понятного ежедневного ухода для свободного и комфортного дыхания." },
  ];

  const items = cards && cards.length > 0 ? cards : fallback;

  return (
    <section className="py-20 md:py-28 section-gradient-soft">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          {content?.problems_title ?? "Знакомо?"}
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/15 transition-colors"
            >
              <h3 className="text-base font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground leading-relaxed">
            {content?.problems_bottom ??
              "Ваш нос — первый барьер на пути всего, чем наполнен воздух вокруг. ТимиЛор помогает поддерживать слизистую носа в условиях повседневной нагрузки."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
