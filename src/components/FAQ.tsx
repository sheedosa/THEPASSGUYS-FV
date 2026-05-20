import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ id, items }: { id?: string; items?: FAQItem[] }) {
  const defaultFaqs = [
    {
      q: 'How many lessons until I pass?',
      a: 'Most students pass in 30–45 hours. Intensive Fast Track courses get you through in a single week. It depends on your pace and prior experience.',
    },
    {
      q: 'Are there any hidden fees?',
      a: 'No. £35/hour covers everything. No booking fees, no card surcharges, no franchise costs. The price you see is the price you pay.',
    },
    {
      q: 'Can I choose manual or automatic?',
      a: "Yes — both at the same price. Our fleet is a mix of modern manual and automatic dual-controlled vehicles. Pick whichever fits the way you'll drive after passing.",
    },
    {
      q: 'Do you cover my area in Manchester?',
      a: "We cover every M-postcode across Greater Manchester — Salford, Stockport, Bolton, Trafford and more. Drop your postcode and we'll confirm in seconds.",
    },
    {
      q: 'What is your pass rate?',
      a: 'Our network maintains a 98% pass rate across all course types — among the highest in the North West.',
    },
  ];

  const faqs = items || defaultFaqs;

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id={id} className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">
            Support
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-secondary tracking-tighter uppercase leading-[0.9]">
            Common <span className="text-primary">questions.</span>
          </h2>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-4 border-secondary rounded-3xl overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 text-left group"
                aria-expanded={activeIndex === index}
              >
                <span className="text-base md:text-xl font-black text-secondary uppercase tracking-tight group-hover:text-primary transition-colors flex-1">
                  {faq.q}
                </span>
                <div
                  className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                    activeIndex === index
                      ? 'bg-primary text-secondary'
                      : 'bg-slate-100 text-secondary'
                  }`}
                  aria-hidden="true"
                >
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5" strokeWidth={3} />
                  ) : (
                    <Plus className="w-5 h-5" strokeWidth={3} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <div className="h-px w-full bg-slate-100 mb-5" />
                      <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
