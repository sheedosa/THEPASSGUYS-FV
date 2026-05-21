import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const STATS = [
  { value: '150+', label: 'Instructors' },
  { value: '2k+', label: 'Passes / year' },
  { value: '98%', label: 'Pass rate' },
];

/**
 * AboutNetwork — stats are the section. Brand story (formerly two long
 * paragraphs) is reduced to a single tightener line and a link to the
 * full /about page. Mobile users skim numbers; they don't read paragraphs.
 */
export default function AboutNetwork({ id }: { id?: string }) {
  return (
    <section id={id} className="py-16 md:py-24 overflow-hidden relative">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">
            The Network
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-secondary uppercase tracking-tighter leading-[0.9] text-balance"
          >
            Instructors, <br className="sm:hidden" />
            <span className="text-primary">not marketing.</span>
          </motion.h2>
        </div>

        {/* The three stats own this section */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center"
            >
              <p className="font-black text-secondary tracking-tighter leading-none text-[clamp(2.5rem,12vw,6rem)]">
                {s.value}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-black uppercase tracking-[0.2em] mt-2 sm:mt-3 leading-tight">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tightener line + link out */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-10 md:mt-14"
        >
          <p className="text-secondary text-base md:text-lg font-bold max-w-md mx-auto leading-snug">
            Founded as a driving school. Built on instructors who can teach.
          </p>
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 mt-5 text-secondary font-black uppercase tracking-widest text-xs md:text-sm hover:text-primary transition-colors"
          >
            See the network
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
