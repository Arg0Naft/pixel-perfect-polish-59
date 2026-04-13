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
    { id: "1", question: "Это лекарство?", answer: "Нет, ТимиЛор не является лекарственным средством." },
  ];

  const items = faqItems && faqItems.length > 0 ? faqItems : fallback;

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          {content?.faq_title ?? "Вопросы и ответы"}
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          {content?.faq_subtitle ?? "Всё важное о продукте"}
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {items.map((faq, i) => (
            <AccordionItem
              key={faq.id}
              value={`item-${i}`}
              className="bg-card rounded-2xl border border-border px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
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
