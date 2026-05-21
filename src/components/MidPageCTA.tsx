import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

/**
 * MidPageCTA — slim conversion off-ramp between content sections.
 * Same horizontal-band layout on every screen size; padding scales down
 * on mobile so the shadow never clips off-screen.
 */
export default function MidPageCTA() {
  return (
    <section className="px-4 sm:px-6 py-12 md:py-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-primary border-4 border-secondary rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 text-center md:text-left shadow-[6px_6px_0_var(--color-secondary)] md:shadow-[8px_8px_0_var(--color-secondary)]"
        >
          <div className="md:flex-1">
            <p className="font-black uppercase tracking-[0.32em] text-[10px] md:text-xs text-secondary/70 mb-2">
              Ready to start?
            </p>
            <h3 className="font-black uppercase tracking-tighter text-secondary text-2xl sm:text-3xl md:text-4xl leading-[0.95] mb-3">
              Get on the road{' '}
              <span className="italic">this week.</span>
            </h3>
            <p className="inline-flex items-center gap-2 text-[11px] md:text-xs font-black uppercase tracking-widest text-secondary/80">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
              12 spots left in Manchester this week
            </p>
          </div>
          <a
            href="/book"
            className="group inline-flex w-full md:w-auto items-center justify-center gap-2 px-7 py-4 bg-secondary text-primary font-black uppercase tracking-widest rounded-full text-sm md:text-base hover:bg-secondary/90 transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            Book Now
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
