import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Это лекарство?",
    a: "Нет, ТимиЛор не является лекарственным средством. Это средство для ухода за слизистой носа на основе пептидного комплекса и гиалуроновой кислоты.",
  },
  {
    q: "С какого возраста можно применять?",
    a: "ТимиЛор подходит для детей и взрослых. Рекомендуется проконсультироваться с педиатром при применении у детей до 3 лет.",
  },
  {
    q: "Как часто использовать?",
    a: "Рекомендуется применять 2–3 раза в день или по мере необходимости. Подходит для ежедневного использования.",
  },
  {
    q: "Есть противопоказания?",
    a: "Индивидуальная непереносимость компонентов. При наличии хронических заболеваний проконсультируйтесь со специалистом.",
  },
  {
    q: "Чем отличается от обычного солевого раствора?",
    a: "Помимо изотонического раствора, ТимиЛор содержит пептидный комплекс и гиалуроновую кислоту, которые обеспечивают восстановление и длительное увлажнение слизистой.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Вопросы и ответы</h2>
        <p className="text-center text-muted-foreground mb-12">Всё важное о продукте</p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-2xl border border-border px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
