import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import SectionLabel from './ui/SectionLabel';

const EASE = [0.22, 1, 0.36, 1] as const;

const plans = [
  {
    name: 'Pay as you go',
    price: '35',
    unit: 'per hour',
    features: ['No commitment', 'Manual or automatic', 'Local instructor', 'Cancel anytime'],
    recommended: false,
  },
  {
    name: 'Standard course',
    price: '320',
    unit: 'block of 10',
    features: ['Save £30 overall', 'Priority booking', 'Free theory app', 'Same instructor'],
    recommended: true,
  },
  {
    name: 'Fast track',
    price: '1500',
    unit: 'intensive week',
    features: ['40 hours behind wheel', 'Practical test included', 'Guaranteed match', 'Dedicated support'],
    recommended: false,
  },
];

export default function Pricing({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 md:py-32 bg-bg-page">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <SectionLabel number="01" label="Plans" />
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: EASE }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display text-secondary tracking-[0.02em] leading-[0.92]"
          >
            SIMPLE PRICING. <br />
            <span className="text-primary">THREE WAYS TO LEARN.</span>
          </motion.h2>
        </div>

        {/* Plans */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.0, delay: i * 0.08, ease: EASE }}
              className={`relative flex flex-col p-8 md:p-10 rounded-2xl border transition-colors duration-500 ${
                plan.recommended
                  ? 'bg-secondary text-white border-secondary'
                  : 'bg-bg-page text-secondary border-secondary/10'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-8 inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.32em] px-3 py-1 rounded-full bg-primary text-secondary">
                  Most popular
                </div>
              )}

              <h3 className={`text-xl md:text-2xl font-display tracking-[0.01em] uppercase mb-2 ${plan.recommended ? 'text-white' : 'text-secondary'}`}>
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-8">
                <span className={`text-5xl md:text-6xl font-display tracking-[0.02em] ${plan.recommended ? 'text-white' : 'text-secondary'}`}>
                  £{plan.price}
                </span>
                <span className={`text-[11px] font-medium uppercase tracking-[0.2em] ${plan.recommended ? 'text-white/80' : 'text-secondary/80'}`}>
                  {plan.unit}
                </span>
              </div>

              <ul className="space-y-3 mb-10 grow">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-3 text-sm ${plan.recommended ? 'text-white' : 'text-secondary'}`}>
                    <Check className={`w-4 h-4 shrink-0 ${plan.recommended ? 'text-primary' : 'text-primary'}`} strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/get-matched"
                className={`group inline-flex items-center justify-center gap-2 py-3 rounded-sm text-sm font-accent font-bold uppercase tracking-[0.08em] transition-all duration-300 ${
                  plan.recommended
                    ? 'bg-primary text-secondary hover:bg-primary-hover hover:shadow-yellow'
                    : 'border border-secondary/20 text-secondary hover:bg-secondary/5'
                }`}
              >
                CHOOSE PLAN
                <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
