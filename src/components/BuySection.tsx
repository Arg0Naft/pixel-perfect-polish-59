import { useState } from "react";
import { ShoppingBag, Mail, CheckCircle2 } from "lucide-react";
import { useSiteContent, useContentCards } from "@/hooks/useSiteContent";

const BuySection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { data: content } = useSiteContent();
  const { data: cards } = useContentCards("marketplaces");

  const fallbackMarketplaces = [
    { title: "Wildberries", extra_data: { color: "bg-purple-100 text-purple-700" } },
    { title: "Ozon", extra_data: { color: "bg-blue-100 text-blue-700" } },
    { title: "Apteka.ru", extra_data: { color: "bg-green-100 text-green-700" } },
    { title: "Сбер Аптека", extra_data: { color: "bg-emerald-100 text-emerald-700" } },
  ];

  const marketplaces = cards && cards.length > 0 ? cards : fallbackMarketplaces;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="buy" className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          {content?.buy_title ?? "Где купить"}
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          {content?.buy_subtitle ?? "Скоро на ведущих площадках"}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {marketplaces.map((m: any) => {
            const color = typeof m.extra_data === "object" && m.extra_data?.color
              ? m.extra_data.color
              : "bg-muted text-muted-foreground";
            return (
              <div key={m.title} className="bg-card rounded-2xl p-5 border border-border text-center">
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mx-auto mb-3`}>
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{m.title}</h3>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">Скоро</span>
              </div>
            );
          })}
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border text-center max-w-lg mx-auto">
          <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
          <p className="text-muted-foreground mb-4">
            {content?.buy_email_prompt ?? "Оставьте email — сообщим когда появится в продаже"}
          </p>
          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-accent font-medium">
              <CheckCircle2 className="w-5 h-5" />
              <span>{content?.buy_email_success ?? "Спасибо! Мы вас уведомим."}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ваш@email.com"
                className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Уведомить меня
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BuySection;
