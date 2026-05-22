import { motion } from 'motion/react';
import { Shield, Repeat, Headphones, MapPinned } from 'lucide-react';

type Point = {
  icon: typeof Shield;
  title: string;
  tagline: string;
  description: string;
  mobile?: boolean;
};

/**
 * The TPG Standard — commitments, not claims.
 *
 * Old version had fake stats (4.9★, 1,200+ reviews, 2,000+ passes).
 * New version frames the same differentiators as promises the business
 * can fulfil from day one. Every point is something a student will
 * experience — not something they have to take on trust.
 *
 * `mobile: true` points show on every viewport. The other two appear
 * from sm: up so phones get the two strongest differentiators only.
 */
const POINTS: Point[] = [
  {
    icon: Shield,
    title: 'DVSA approved',
    tagline: 'Every single instructor',
    description: 'Fully qualified, CRB-checked, and registered on the official DVSA list. No exceptions.',
    mobile: true,
  },
  {
    icon: MapPinned,
    title: 'Local to you',
    tagline: 'Greater Manchester wide',
    description: 'Your instructor lives and drives in your area. No long pickups, no wasted time.',
    mobile: true,
  },
  {
    icon: Repeat,
    title: 'Cancel free',
    tagline: '24h notice, no charge',
    description: 'Life happens. Reschedule or cancel with 24 hours\' notice — zero fees.',
  },
  {
    icon: Headphones,
    title: 'Real support',
    tagline: 'Talk to a person',
    description: 'Questions before or after booking? A real human answers — not a chatbot.',
  },
];

export default function WhyChooseUs({ id }: { id?: string }) {
  return (
    <section id={id} className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left — copy block */}
          <div>
            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">
              The Standard
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-6 text-balance">
              What every student{' '}
              <span className="text-primary italic">gets.</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-lg">
              Not marketing promises — real commitments we deliver on
              from your very first lesson.
            </p>
          </div>

          {/* Right — 2x2 card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {POINTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -4 }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`bg-white border-4 border-secondary rounded-3xl p-6 md:p-7 transition-all group ${
                    p.mobile ? '' : 'hidden sm:block'
                  }`}
                  style={{ boxShadow: '6px 6px 0 var(--color-primary)' }}
                >
                  <div className="w-12 h-12 bg-secondary text-white rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-secondary group-hover:rotate-6 transition-all">
                    <Icon className="w-6 h-6" strokeWidth={2.25} />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-secondary uppercase tracking-tight leading-none mb-2">
                    {p.title}
                  </h3>
                  <p className="text-primary text-xs font-black uppercase tracking-widest mb-3">
                    {p.tagline}
                  </p>
                  <p className="text-slate-500 text-sm font-bold leading-relaxed">
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
