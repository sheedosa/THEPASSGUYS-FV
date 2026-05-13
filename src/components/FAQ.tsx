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
    <section id={id} className="py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8 md:mb-16"
          >
            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">Support</span>
            <h2 className="text-5xl md:text-7xl font-black text-secondary tracking-tighter uppercase">
              Common <span className="text-primary italic">Questions.</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="vibrant-card !p-0 !shadow-none overflow-hidden bg-white hover:border-primary transition-colors duration-500"
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full p-8 flex items-center justify-between text-left group"
                >
                  <span className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${activeIndex === index ? 'bg-primary text-secondary rotate-180' : 'bg-slate-50 text-secondary'}`}>
                    {activeIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-10">
                        <div className="h-px w-full bg-slate-100 mb-8" />
                        <p className="text-slate-500 text-lg font-bold leading-relaxed max-w-2xl">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
