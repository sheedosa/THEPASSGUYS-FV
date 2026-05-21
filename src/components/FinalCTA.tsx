import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xValue = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section ref={containerRef} className="py-14 md:py-24 bg-secondary overflow-hidden relative">
      {/* Parallax Background Text */}
      <motion.div 
        style={{ x: xValue }}
        className="absolute top-1/2 left-0 w-full opacity-[0.05] pointer-events-none -translate-y-1/2 whitespace-nowrap"
      >
        <span className="text-[25vw] font-black text-white uppercase select-none">GET YOUR LICENSE GET YOUR LICENSE</span>
      </motion.div>

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 relative z-10 text-center">
        <div className="bg-primary rounded-3xl border-4 border-secondary p-8 sm:p-12 md:p-16 lg:p-20 shadow-[6px_6px_0_rgba(0,0,0,0.25)] md:shadow-[12px_12px_0_rgba(0,0,0,0.25)]">
          <span className="text-secondary/70 font-black uppercase tracking-[0.32em] text-[10px] md:text-xs block mb-4">
            Last stop
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-8 md:mb-12">
            Stop scrolling.
            <br />
            <span className="text-white italic">Start driving.</span>
          </h2>

          <div className="flex justify-center">
            <motion.a
              href="/book"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-3 px-10 py-5 md:px-12 md:py-6 bg-secondary text-white font-black uppercase tracking-[0.16em] rounded-full text-base md:text-lg"
            >
              <span>Book Now</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <p className="mt-8 md:mt-10 text-secondary/60 font-black uppercase tracking-widest text-[10px] md:text-xs">
            First lesson this week · From £35/hr
          </p>
        </div>
      </div>
    </section>
  );
}
