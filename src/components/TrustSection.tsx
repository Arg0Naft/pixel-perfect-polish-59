const trustItems = [
  { title: "Прозрачная формула", description: "Тимические пептиды 0,01% и гиалуроновая кислота — понятный состав без лишних обещаний." },
  { title: "Без сосудосуживающих компонентов", description: "Подходит для мягкого ежедневного ухода за слизистой носа." },
  { title: "Доступная цена", description: "Около 390 ₽ за флакон 30 мл — формат, доступный для регулярного использования." },
  { title: "Честная коммуникация", description: "ТимиЛор — БАД, не лекарственное средство. Мы говорим о ежедневной поддержке и комфорте без завышенных обещаний." },
];

const TrustSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Почему ТимиЛор вызывает доверие
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustItems.map((item) => (
            <div key={item.title} className="bg-card rounded-2xl p-6 border border-border">
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
