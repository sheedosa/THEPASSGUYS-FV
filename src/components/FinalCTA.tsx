import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';
import SectionLabel from './ui/SectionLabel';

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-40 bg-secondary overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-6 md:p-10 left-10 w-96 h-96 bg-primary rounded-full blur-[120px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-[120px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.8, 0.5, 0.8] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <SectionLabel number="08" label="Start" tone="dark" />
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tighter leading-[0.95] mb-8"
          >
            Ready to start? <br />
            <span className="text-primary">Find your instructor.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/60 text-base md:text-lg mb-10 md:mb-14 max-w-xl mx-auto"
          >
            Free matching. No waiting lists. Get connected with a local instructor in minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center gap-5"
          >
            <MagneticButton>
              <Link
                to="/get-matched"
                className="group inline-flex items-center gap-3 px-9 py-4 sm:px-12 sm:py-5 bg-primary text-secondary font-semibold rounded-full hover:scale-[1.03] transition-transform duration-500 shadow-ambient-lg shadow-primary/25 text-base sm:text-lg"
              >
                Find My Instructor
                <span aria-hidden="true" className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
            </MagneticButton>
            <p className="text-white/45 text-xs sm:text-sm tracking-wide">
              Free · 2 minutes · No commitment
            </p>
          </motion.div>

          <div className="mt-12 md:mt-20 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 md:gap-x-8 text-white/35 font-semibold uppercase tracking-[0.32em] text-[10px] whitespace-nowrap">
             <span>DVSA-approved</span>
             <span className="w-1 h-1 bg-primary rounded-full" />
             <span>Free matching</span>
             <span className="w-1 h-1 bg-primary rounded-full" />
             <span>Greater Manchester</span>
          </div>
        </div>
      </div>
    </section>
  );
}
