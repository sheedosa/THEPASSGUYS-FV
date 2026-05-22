import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

/**
 * MidPageCTA — slim conversion off-ramp between content sections.
 *
 * Removed fake scarcity ("12 spots left"). Replaced with honest
 * urgency: the sooner you start, the sooner you pass. No invented
 * numbers, no artificial countdown.
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
            <p className="text-[11px] md:text-xs font-black uppercase tracking-widest text-secondary/80">
              Fill out a 30-second form · We match you within 24 hours
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
