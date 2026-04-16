const advantages = [
  { title: "Не только увлажнение", description: "Гиалуроновая кислота помогает поддерживать длительное увлажнение слизистой." },
  { title: "Поддержка защитных функций", description: "Тимические пептиды способствуют поддержанию естественных функций слизистой оболочки носа." },
  { title: "Без сосудосуживающих компонентов", description: "Подходит для регулярного использования без ощущения «замкнутого круга» капель." },
  { title: "Современный ежедневный формат", description: "Удобный спрей для дома, офиса, поездок и жизни в большом городе." },
];

const AdvantagesSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Почему ТимиЛор — больше, чем обычный спрей
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {advantages.map((a, i) => (
            <div key={a.title} className="flex gap-4 items-start bg-card rounded-2xl p-6 border border-border">
              <span className="shrink-0 w-8 h-8 rounded-lg bg-primary/8 text-primary font-bold text-sm flex items-center justify-center">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-base mb-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-muted-foreground text-sm max-w-xl mx-auto">
          ТимиЛор — это не просто морская вода, а формула для ежедневного комфорта и заботы о слизистой носа.
        </p>
      </div>
    </section>
  );
};

export default AdvantagesSection;
