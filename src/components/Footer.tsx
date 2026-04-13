const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <span className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="bg-primary-foreground text-primary px-2 py-0.5 rounded-md">Тими</span>
              <span className="italic ml-1">Лор</span>
            </span>
            <p className="text-primary-foreground/70 text-sm mt-2">
              Пептидный комплекс с гиалуроновой кислотой · 30 мл
            </p>
          </div>
          <div className="flex gap-6 text-sm text-primary-foreground/70">
            <a href="#how-it-works" className="hover:text-primary-foreground transition-colors">Как работает</a>
            <a href="#ingredients" className="hover:text-primary-foreground transition-colors">Состав</a>
            <a href="#buy" className="hover:text-primary-foreground transition-colors">Где купить</a>
            <a href="#faq" className="hover:text-primary-foreground transition-colors">Вопросы</a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/50">
          <p className="mb-2">
            Не является лекарственным средством. Перед применением рекомендуется ознакомиться с составом.
            При наличии хронических заболеваний проконсультируйтесь со специалистом.
          </p>
          <p>© 2026 ТимиЛор. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
