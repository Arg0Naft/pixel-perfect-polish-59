import { useSiteContent } from "@/hooks/useSiteContent";

const channels = [
  { label: "Аптеки", href: "#" },
  { label: "Ozon", href: "#" },
  { label: "Wildberries", href: "#" },
  { label: "Узнать о наличии", href: "#" },
];

const BuySection = () => {
  const { data: content } = useSiteContent();

  return (
    <section id="buy" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {content?.buy_title ?? "Где купить ТимиЛор"}
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          {content?.buy_subtitle ?? "Выбирайте удобный формат покупки — аптеки, маркетплейсы и онлайн-каналы."}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="bg-card border border-border rounded-full px-6 py-3 text-sm font-medium hover:border-accent/30 transition-colors"
            >
              {c.label}
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          Средняя цена — около 390 ₽
        </p>
      </div>
    </section>
  );
};

export default BuySection;
