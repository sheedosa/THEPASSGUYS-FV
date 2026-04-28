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
      q: "How many lessons until I pass?",
      a: "The average student takes around 40-45 hours of lessons, but with our intensive Fast Track courses, many pass in much less time. It depends entirely on your pace."
    },
    {
      q: "Can I choose between manual and automatic?",
      a: "Yes! We have an extensive fleet of both manual and automatic modern Mini Coopers and other dual-controlled vehicles."
    },
    {
      q: "Do you cover my area in Manchester?",
      a: "We cover almost every M-postcode in Greater Manchester, including Salford, Stockport, and Bolton. Use our postcode checker to be sure."
    },
    {
      q: "What is your pass rate?",
      a: "Our network maintains a 98% pass rate across all course types, making us one of the most successful schools in the North."
    }
  ];

  const faqs = items || defaultFaqs;

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id={id} className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">Support</span>
            <h2 className="text-5xl md:text-7xl font-black text-secondary tracking-tighter uppercase">
              Common <span className="text-primary italic">Questions.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="vibrant-card !p-0 !shadow-none overflow-hidden bg-white hover:border-primary transition-colors"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
