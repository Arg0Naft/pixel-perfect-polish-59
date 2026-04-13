import { Droplets, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <span>НОВИНКА</span>
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span>30 МЛ</span>
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span>БЕЗ РЕЦЕПТА</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-xl inline-block">Тими</span>
          <span className="italic text-primary ml-1">Лор</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-2 font-medium">
          пептидный комплекс · гиалуроновая кислота
        </p>

        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Защита, увлажнение и восстановление слизистой носа — для всей семьи
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#buy"
            className="bg-accent text-accent-foreground px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-accent/25"
          >
            Где купить
          </a>
          <a
            href="#how-it-works"
            className="border-2 border-primary/20 text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/5 transition-colors"
          >
            Узнать больше
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span>Не вызывает привыкания</span>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-accent" />
            <span>Без консервантов</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span>Подходит детям</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
