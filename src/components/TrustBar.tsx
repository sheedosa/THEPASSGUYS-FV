import { motion } from 'motion/react';
import { ShieldCheck, Wallet, Star } from 'lucide-react';

/**
 * TrustBar — one dominant stat carries the whole section, then three
 * supporting micro-pills reinforce it.
 *
 * Why one hero stat instead of four equal cards: a scanning user under
 * 3s of attention locks on one number, not four. Four equal claims average
 * out in the mind; one bold claim with quiet evidence reads as confidence.
 */

const PILLS = [
  { icon: ShieldCheck, label: 'DVSA approved' },
  { icon: Wallet, label: 'From £30 down' },
  { icon: Star, label: '4.9★ on Google' },
];

export default function TrustBar() {
  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Hero stat card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-secondary text-white border-4 border-secondary rounded-3xl p-7 md:p-10 text-center"
          style={{ boxShadow: '6px 6px 0 var(--color-primary)' }}
        >
          <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3">
            Pass Rate
          </p>
          <p className="font-black text-secondary leading-none tracking-tighter text-[clamp(5rem,18vw,9rem)]">
            <span className="text-primary">98%</span>
          </p>
          <p className="mt-2 md:mt-4 font-black uppercase tracking-tight text-white text-base md:text-xl">
            Manchester&apos;s highest.
          </p>
        </motion.div>

        {/* Supporting pills — small, evidential */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 md:mt-6 flex flex-wrap items-center justify-center gap-2 md:gap-3"
        >
          {PILLS.map((pill) => {
            const Icon = pill.icon;
            return (
              <span
                key={pill.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-secondary text-secondary text-xs md:text-sm font-black uppercase tracking-tight"
              >
                <Icon className="w-4 h-4 text-primary" strokeWidth={2.5} />
                {pill.label}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
