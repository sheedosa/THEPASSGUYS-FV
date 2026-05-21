import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

type Plan = {
  name: string;
  tag?: string;
  price: string;
  priceSuffix?: string;
  slug: string;
  features: string[];
  recommended?: boolean;
  ribbon?: string;
};

// Plan names sell the OUTCOME, not the internal category. "Try It" /
// "Most Choose This" / "Pass This Month" each promise a specific result
// and reduce decision paralysis under short attention.
const PLANS: Plan[] = [
  {
    name: 'Try It',
    tag: 'Pay as you go',
    price: '35',
    priceSuffix: '/ hr',
    slug: 'manual-lessons',
    features: ['No commitment', 'Manual or automatic', 'Local instructor', 'Cancel anytime'],
  },
  {
    name: 'Most Choose This',
    tag: 'Block of 10',
    price: '320',
    priceSuffix: 'block',
    slug: 'automatic-lessons',
    features: ['10 lessons booked', 'Free theory app', 'Priority booking', 'Save £30'],
    recommended: true,
    ribbon: 'Save £30',
  },
  {
    name: 'Pass This Month',
    tag: 'Fast Track',
    price: '1500',
    priceSuffix: 'all-in',
    slug: 'intensive-fast-track',
    features: ['40h intensive week', 'Practical test included', 'Guaranteed match', 'Dedicated support'],
  },
];

export default function Pricing({ id }: { id?: string }) {
  return (
    <section id={id} className="py-16 md:py-24 bg-secondary text-white overflow-hidden relative">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Section header — inverted for dark theme */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">
            Plans
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]"
          >
            Simple <span className="text-primary">pricing.</span>
          </motion.h2>
          <p className="text-white/60 max-w-md mx-auto mt-6 text-base md:text-lg font-medium">
            One price, no hidden fees. Pick what works for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col p-7 md:p-8 rounded-3xl border-4 transition-all ${
                plan.recommended
                  ? 'bg-primary text-secondary border-secondary md:scale-[1.03] z-10'
                  : 'bg-white text-secondary border-secondary'
              }`}
              style={{
                boxShadow: plan.recommended
                  ? '8px 8px 0 rgba(255,255,255,0.15)'
                  : '6px 6px 0 var(--color-primary)',
              }}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-secondary px-5 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] border-2 border-secondary whitespace-nowrap">
                  Most Popular
                </div>
              )}

              {/* Savings ribbon — sits in top-right corner of card */}
              {plan.ribbon && (
                <div className="absolute -top-3 -right-3 rotate-6 bg-white text-secondary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border-2 border-secondary shadow-md">
                  {plan.ribbon}
                </div>
              )}

              {plan.tag && (
                <p
                  className={`text-[10px] font-black uppercase tracking-[0.32em] mb-2 ${
                    plan.recommended ? 'text-secondary/70' : 'text-secondary/50'
                  }`}
                >
                  {plan.tag}
                </p>
              )}
              <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight leading-none">
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-7">
                <span className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
                  £{plan.price}
                </span>
                <span
                  className={`text-xs font-black uppercase tracking-widest ${
                    plan.recommended ? 'text-secondary/70' : 'text-secondary/50'
                  }`}
                >
                  {plan.priceSuffix}
                </span>
              </div>

              <ul className="flex-1 space-y-3.5 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 bg-secondary text-white">
                      <Check className="w-4 h-4" strokeWidth={3.5} />
                    </div>
                    <span className="text-sm font-bold opacity-90">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/book"
                className={`w-full py-4 rounded-full font-black uppercase tracking-widest text-sm text-center transition-all ${
                  plan.recommended
                    ? 'bg-primary text-secondary hover:bg-white'
                    : 'bg-secondary text-white hover:bg-primary hover:text-secondary'
                }`}
              >
                Book Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
