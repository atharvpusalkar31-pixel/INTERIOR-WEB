'use client'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

interface FAQItem {
  id: number
  question: string
  answer: string
}

interface ServicesFAQProps {
  items: FAQItem[]
}

export function ServicesFAQ({ items }: ServicesFAQProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >
            {items.map((item) => (
              <AccordionItem
                key={item.id}
                value={`faq-${item.id}`}
                className="border-b border-border last:border-b-0 py-4"
              >
                <AccordionTrigger className="text-left hover:text-accent transition-colors py-2">
                  <span className="text-lg font-serif text-foreground">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
