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
    { id: "1", question: "Можно ли использовать ТимиЛор детям?", answer: "Да, ТимиЛор подходит для детей. Формула не содержит агрессивных компонентов и не вызывает жжения. Перед применением у детей младшего возраста рекомендуем проконсультироваться с педиатром." },
    { id: "2", question: "Вызывает ли ТимиЛор привыкание?", answer: "Нет. В отличие от сосудосуживающих капель, ТимиЛор не содержит компонентов, вызывающих зависимость. Его можно применять ежедневно на протяжении длительного времени." },
    { id: "3", question: "Можно ли применять при беременности и кормлении?", answer: "Состав ТимиЛор не содержит системно действующих веществ. Тем не менее, при беременности и в период лактации рекомендуем проконсультироваться с лечащим врачом." },
    { id: "4", question: "Как часто можно использовать ТимиЛор?", answer: "ТимиЛор можно применять по мере необходимости — обычно 2–4 раза в день. При сильной сухости допустимо более частое применение. Следуйте рекомендациям в инструкции." },
    { id: "5", question: "Что делать, если появилось лёгкое жжение или дискомфорт?", answer: "Лёгкое пощипывание в первые секунды возможно при сильно повреждённой слизистой. Если дискомфорт сохраняется, прекратите применение и обратитесь к врачу." },
    { id: "6", question: "Можно ли сочетать с другими назальными средствами?", answer: "Да, ТимиЛор совместим с большинством назальных препаратов. Рекомендуется выдерживать интервал 15–20 минут между применениями разных средств." },
    { id: "7", question: "Каков срок хранения и как хранить?", answer: "Срок хранения указан на упаковке. Храните при комнатной температуре, в защищённом от прямых солнечных лучей месте. После вскрытия используйте в течение срока, указанного в инструкции." },
  ];

  const items = faqItems && faqItems.length > 0 ? faqItems : fallback;

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          {content?.faq_title ?? "Вопросы и ответы"}
        </h2>
        <p className="text-center text-muted-foreground mb-14">
          {content?.faq_subtitle ?? "Ответы на самые частые вопросы о ТимиЛор"}
        </p>

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
