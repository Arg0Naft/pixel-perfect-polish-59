import { useSiteContent } from "@/hooks/useSiteContent";

const Footer = () => {
  const { data: content } = useSiteContent();

  return (
    <footer className="bg-primary text-primary-foreground py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <span className="text-2xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <span className="bg-primary-foreground text-primary px-2 py-0.5 rounded-md">Тими</span>
              <span className="italic ml-1">Лор</span>
            </span>
            <p className="text-primary-foreground/70 text-sm mt-2">
              {content?.footer_description ?? "Пептидный комплекс с гиалуроновой кислотой · 30 мл"}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
            <a href="#how-it-works" className="hover:text-primary-foreground transition-colors">Как работает</a>
            <a href="#ingredients" className="hover:text-primary-foreground transition-colors">Состав</a>
            <a href="#buy" className="hover:text-primary-foreground transition-colors">Где купить</a>
            <a href="#faq" className="hover:text-primary-foreground transition-colors">Вопросы</a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/50 space-y-3">
          <p>
            {content?.footer_disclaimer ?? "ТимиЛор не является лекарственным средством и не предназначен для лечения заболеваний. Перед применением ознакомьтесь с составом и инструкцией. При наличии хронических заболеваний или индивидуальной непереносимости проконсультируйтесь со специалистом."}
          </p>
          <p>{content?.footer_copyright ?? "© 2026 ТимиЛор. Все права защищены."}</p>
          <p>
            <a href="/admin/login" className="text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors">
              Вход для партнёров
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
