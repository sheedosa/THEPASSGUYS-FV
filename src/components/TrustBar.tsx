import { motion } from 'motion/react';
import { Zap, Wallet, Star, ShieldCheck } from 'lucide-react';

// `mobile: true` items show on every viewport. Items without it are
// hidden under 768px so phones see just the two strongest trust signals
// instead of scrolling through all four.
// Concrete numbers convert better than vague claims. Mobile shows two
// strongest signals; desktop sees all four.
const ITEMS: { icon: typeof Zap; label: string; sub: string; mobile?: boolean }[] = [
  { icon: Zap, label: 'Pass Fast', sub: '6-week average', mobile: true },
  { icon: Wallet, label: 'Small Deposit', sub: 'Just £30 down' },
  { icon: Star, label: 'Top Rated', sub: '4.9★ on Google' },
  { icon: ShieldCheck, label: 'DVSA Approved', sub: '100% certified', mobile: true },
];

export default function TrustBar() {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative bg-white border-4 border-secondary rounded-3xl p-6 md:p-7 flex-col items-center justify-center text-center cursor-default transition-all ${
                  item.mobile ? 'flex' : 'hidden md:flex'
                }`}
                style={{ boxShadow: '6px 6px 0 var(--color-primary)' }}
              >
                {/* Icon badge — fixed size for consistent vertical rhythm */}
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-5 border-2 border-secondary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                  <Icon className="w-7 h-7 text-secondary" strokeWidth={2.5} />
                </div>

                {/* Label */}
                <h3 className="font-black uppercase tracking-tight text-secondary text-base md:text-lg leading-none">
                  {item.label}
                </h3>

                {/* Subtext */}
                <p className="mt-2 text-xs md:text-sm font-bold text-secondary/60 leading-tight">
                  {item.sub}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
