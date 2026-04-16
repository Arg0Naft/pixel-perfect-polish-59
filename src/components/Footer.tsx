import { useSiteContent } from "@/hooks/useSiteContent";

const Footer = () => {
  const { data: content } = useSiteContent();

  return (
    <footer className="bg-foreground text-background py-14">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
          <div>
            <span className="text-2xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <span className="bg-background text-foreground px-2 py-0.5 rounded-md">Тими</span>
              <span className="italic ml-1">Лор</span>
            </span>
            <p className="text-background/60 text-sm mt-3 max-w-xs">
              {content?.footer_description ?? "Назальный спрей с тимическими пептидами и гиалуроновой кислотой · 30 мл"}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm text-background/60">
            <a href="#how-it-works" className="hover:text-background transition-colors">Как работает</a>
            <a href="#buy" className="hover:text-background transition-colors">Где купить</a>
            <a href="#faq" className="hover:text-background transition-colors">Вопросы</a>
            <a href="/admin/login" className="hover:text-background transition-colors">Вход для партнёров</a>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 space-y-3 text-xs text-background/40">
          <p>
            {content?.footer_disclaimer ??
              "ТимиЛор — биологически активная добавка. Не является лекарственным средством. Перед применением рекомендуется ознакомиться с инструкцией и при необходимости проконсультироваться со специалистом."}
          </p>
          <p>{content?.footer_copyright ?? "© 2026 ТимиЛор. Все права защищены."}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
