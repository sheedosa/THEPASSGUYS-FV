import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';

export default function FinalCTA() {
  return (
    <section className="py-12 md:py-24 bg-secondary overflow-hidden relative">
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
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[1] mb-8"
          >
            Ready to start? <br /> Book your first <span className="text-primary italic">lesson today.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/60 text-lg font-medium mb-8 md:mb-12 max-w-xl mx-auto"
          >
            Tell us your postcode. We'll handle the rest.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <MagneticButton>
              <Link
                to="/get-matched"
                className="inline-block w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-6 bg-primary text-secondary font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-500 shadow-2xl shadow-primary/20"
              >
                Book a Lesson
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                to="/get-matched"
                className="inline-block w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-6 bg-white/5 text-white border border-white/20 font-black uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors duration-500"
              >
                Get Matched
              </Link>
            </MagneticButton>
          </motion.div>

          <div className="mt-16 flex items-center justify-center gap-8 text-white/40 font-black uppercase tracking-widest text-[10px]">
             <span>No Waiting List</span>
             <span className="w-1 h-1 bg-primary rounded-full" />
             <span>Vetted Instructors</span>
             <span className="w-1 h-1 bg-primary rounded-full" />
             <span>Modern Fleet</span>
          </div>
        </div>
      </div>
    </section>
  );
}
