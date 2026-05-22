import { motion } from 'motion/react';
import { ShieldCheck, Clock, Car } from 'lucide-react';

/**
 * ValueProps — three honest, verifiable facts about the service.
 *
 * No inflated stats or fake reviews. Every claim here is something
 * a new student can verify on day one:
 *   - DVSA approved → checkable on the DVSA register
 *   - Flexible hours → they'll experience it when booking
 *   - Manual or auto → their choice at booking
 */

const PROPS = [
  {
    icon: ShieldCheck,
    title: 'DVSA Approved',
    description: 'Every instructor is DVSA-registered and fully qualified.',
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Early mornings, evenings, and weekends — we fit your life.',
  },
  {
    icon: Car,
    title: 'Manual or Auto',
    description: 'Modern dual-control cars. Same price, your choice.',
  },
];

export default function TrustBar() {
  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {PROPS.map((prop, i) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-white border-4 border-secondary rounded-3xl p-6 md:p-7 text-center group"
                style={{ boxShadow: '6px 6px 0 var(--color-primary)' }}
              >
                <div className="w-12 h-12 bg-secondary text-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-secondary group-hover:rotate-6 transition-all">
                  <Icon className="w-6 h-6" strokeWidth={2.25} />
                </div>
                <h3 className="text-lg md:text-xl font-black text-secondary uppercase tracking-tight leading-none mb-2">
                  {prop.title}
                </h3>
                <p className="text-slate-500 text-sm font-bold leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
