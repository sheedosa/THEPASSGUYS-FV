import { motion } from 'motion/react';
import { Award, Clock, Heart, Users } from 'lucide-react';

type Point = {
  icon: typeof Award;
  title: string;
  stat: string;
  description: string;
  mobile?: boolean;
};

// `mobile: true` points show on every viewport. The other two appear from
// sm: up so phones get the two strongest differentiators only.
const POINTS: Point[] = [
  {
    icon: Award,
    title: 'Top rated',
    stat: '4.9★ · 1,200+ reviews',
    description: 'Verified on Google. We let our students do the talking.',
    mobile: true,
  },
  {
    icon: Users,
    title: 'Vetted instructors',
    stat: '150+ ADIs · 11-step vetting',
    description: 'Only the most patient, qualified instructors join the network.',
    mobile: true,
  },
  {
    icon: Clock,
    title: 'Flexible hours',
    stat: '6am – 9pm · 7 days',
    description: 'Early mornings, evenings, weekends — we fit your life.',
  },
  {
    icon: Heart,
    title: 'Real teaching',
    stat: '2,000+ passes a year',
    description: "We don't just teach you to pass — we teach you to drive.",
  },
];

export default function WhyChooseUs({ id }: { id?: string }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left — copy block */}
          <div>
            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">
              Why Us
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-6 text-balance">
              Most schools teach you to pass.{' '}
              <span className="text-primary italic">We teach you to drive.</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-lg">
              We&apos;ve rebuilt the driving school experience from the ground
              up — faster, simpler, and more exciting.
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
                    {p.stat}
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
