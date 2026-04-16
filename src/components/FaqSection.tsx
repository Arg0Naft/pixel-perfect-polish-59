import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSiteContent, useFaqItems } from "@/hooks/useSiteContent";

const FaqSection = () => {
  const { data: content } = useSiteContent();
  const { data: faqItems } = useFaqItems();

  const fallback = [
    { id: "1", question: "Что такое ТимиЛор?", answer: "ТимиЛор — это назальный спрей с тимическими пептидами и гиалуроновой кислотой. Он способствует увлажнению и поддержанию защитных функций слизистой оболочки носа." },
    { id: "2", question: "Чем ТимиЛор отличается от обычных спреев с морской водой?", answer: "Обычные спреи в основном промывают и кратковременно увлажняют. ТимиЛор сочетает гиалуроновую кислоту и тимические пептиды для более комплексной ежедневной поддержки слизистой." },
    { id: "3", question: "Можно ли использовать регулярно?", answer: "ТимиЛор подходит для регулярного применения в рамках ежедневного ухода." },
    { id: "4", question: "Есть ли в составе сосудосуживающие компоненты?", answer: "Нет, ТимиЛор не содержит сосудосуживающих компонентов." },
    { id: "5", question: "Подходит ли ТимиЛор тем, кто хочет отказаться от сосудосуживающих капель?", answer: "ТимиЛор может помочь поддержать слизистую носа в период отказа от привычных капель за счёт увлажнения и мягкого ежедневного ухода." },
    { id: "6", question: "Это лекарство?", answer: "Нет. ТимиЛор — БАД / продукт для ежедневной поддержки слизистой носа. Он не является лекарственным средством." },
    { id: "7", question: "Где купить ТимиЛор?", answer: "В аптеках вашего города, а также на маркетплейсах и онлайн-площадках бренда." },
  ];

  const items = faqItems && faqItems.length > 0 ? faqItems : fallback;

  return (
    <section id="faq" className="py-20 md:py-28 section-gradient-soft">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          {content?.faq_title ?? "Частые вопросы"}
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {items.map((faq, i) => (
            <AccordionItem
              key={faq.id}
              value={`item-${i}`}
              className="bg-card rounded-2xl border border-border px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-[15px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
