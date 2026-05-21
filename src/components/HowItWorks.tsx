import { motion } from 'motion/react';
import { MapPin, Sliders, CalendarCheck, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    icon: MapPin,
    title: 'Tell us where',
    description: 'Drop your postcode and we check our local network.',
  },
  {
    number: '02',
    icon: Sliders,
    title: 'Pick your style',
    description: 'Manual or auto. Days, evenings, or weekends.',
  },
  {
    number: '03',
    icon: CalendarCheck,
    title: 'Hit the road',
    description: 'Book instantly or get matched with the right instructor.',
  },
];

export default function HowItWorks({ id }: { id?: string }) {
  return (
    <section id={id} className="py-16 md:py-24 bg-slate-50 overflow-hidden relative">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">
            Process
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-secondary uppercase tracking-tighter leading-[0.9]"
          >
            How it <span className="text-primary">works.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Desktop horizontal connector */}
          <div
            className="hidden md:block absolute top-[88px] left-12 right-12 h-1 bg-slate-200 z-0"
            aria-hidden="true"
          />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 bg-white border-4 border-secondary rounded-3xl p-6 md:p-7 group hover:border-primary transition-colors overflow-hidden"
                style={{ boxShadow: '6px 6px 0 var(--color-primary)' }}
              >
                {/* Big ghost step number, anchored bottom-right so it never
                    crops the card edges */}
                <span
                  className="absolute bottom-2 right-4 text-6xl md:text-7xl font-black text-primary/10 group-hover:text-primary/25 transition-colors pointer-events-none leading-none"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <div className="w-14 h-14 rounded-2xl bg-secondary border-2 border-secondary text-white flex items-center justify-center mb-5 transform group-hover:rotate-6 group-hover:bg-primary group-hover:text-secondary transition-all">
                  <Icon className="w-7 h-7" strokeWidth={2.25} />
                </div>

                <h3 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight leading-none mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trailing CTA — the natural conversion moment after the user
            sees how simple the flow is */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-14 text-center"
        >
          <p className="text-secondary font-black uppercase tracking-tighter text-2xl md:text-3xl mb-5">
            Three taps. <span className="text-primary">You&apos;re driving.</span>
          </p>
          <a
            href="/book"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-black uppercase tracking-widest rounded-full text-sm md:text-base hover:bg-primary hover:text-secondary transition-colors"
          >
            Get matched
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
