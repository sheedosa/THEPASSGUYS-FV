import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import SectionLabel from './ui/SectionLabel';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({
  id,
  items,
  hideHeader = false,
}: {
  id?: string;
  items?: FAQItem[];
  /** When true, renders only the accordion (no SectionLabel, no h2). Useful
   *  when a parent page is already rendering its own section eyebrow + heading. */
  hideHeader?: boolean;
}) {
  const defaultFaqs = [
    {
      q: "How many lessons will I need?",
      a: "Most learners pass after 40 to 45 hours behind the wheel. If you're picking it up quickly, our intensive course can get you ready in two weeks. If you need longer, that's fine too."
    },
    {
      q: "Manual or automatic?",
      a: "Whichever you prefer. We charge the same price for both. Our cars are modern, dual-control, and insured for learner use."
    },
    {
      q: "Do you cover my area?",
      a: "We cover every M-postcode in Greater Manchester. Salford, Stockport, Bolton, Trafford, Bury, Oldham and everywhere in between. Drop your postcode into the matcher to be sure."
    },
    {
      q: "What's your pass rate?",
      a: "Our network averages a 97% first-time pass rate across all course types."
    }
  ];

  const faqs = items || defaultFaqs;

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id={id} className={hideHeader ? 'overflow-hidden' : 'py-20 md:py-32 overflow-hidden'}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {!hideHeader && (
            <div className="text-center mb-12 md:mb-20">
              <SectionLabel number="07" label="Support" />
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95]"
              >
                Common <span className="text-primary">questions.</span>
              </motion.h2>
            </div>
          )}

          <div className="divide-y divide-secondary/10 border-t border-b border-secondary/10">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.06, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full py-7 flex items-center justify-between text-left group gap-6"
                  >
                    <span
                      className={`text-lg md:text-2xl font-normal tracking-tight transition-all duration-500 ${
                        isOpen ? 'text-primary' : 'text-secondary group-hover:text-secondary/70'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-all duration-500 ${
                        isOpen ? 'rotate-180 text-primary' : 'text-secondary/40'
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-secondary/65 text-base md:text-lg leading-relaxed max-w-2xl pb-8">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
