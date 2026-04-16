const steps = [
  { title: "Подготовьте", description: "Снимите защитный колпачок. При первом использовании сделайте 2–3 пробных нажатия в воздух." },
  { title: "Впрысните", description: "Введите наконечник в носовой ход и выполните 1–2 впрыскивания. Повторите для второго носового хода." },
  { title: "Используйте регулярно", description: "Подходит для ежедневного применения. Частота использования — в соответствии с инструкцией и индивидуальной необходимостью." },
];

const UsageSection = () => {
  return (
    <section className="py-20 md:py-28 section-gradient-soft">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Как использовать
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-5 text-lg font-bold">
                {i + 1}
              </div>
              <h3 className="font-semibold text-base mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Удобно дома, в офисе и в дороге.
        </p>
      </div>
    </section>
  );
};

export default UsageSection;
