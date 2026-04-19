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
    <section ref={containerRef} className="py-24 bg-secondary overflow-hidden relative">
      {/* Parallax Background Text */}
      <motion.div 
        style={{ x: xValue }}
        className="absolute top-1/2 left-0 w-full opacity-[0.05] pointer-events-none -translate-y-1/2 whitespace-nowrap"
      >
        <span className="text-[25vw] font-black text-white uppercase select-none">GET YOUR LICENSE GET YOUR LICENSE</span>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="vibrant-card bg-primary p-12 md:p-24 border-none shadow-[20px_20px_0_rgba(0,0,0,0.2)]">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-secondary uppercase tracking-tighter leading-[0.8] mb-12">
            Ready to <br /> start <br /><span className="text-white italic">driving?</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-12 py-6 bg-secondary text-white font-black uppercase tracking-[0.2em] rounded-full text-xl flex items-center space-x-3 shadow-2xl"
            >
              <span>Book Your First Lesson</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>

          <p className="mt-12 text-secondary/60 font-black uppercase tracking-widest text-xs">
            No long waiting lists. Instant matching.
          </p>
        </div>
      </div>
    </section>
  );
}
