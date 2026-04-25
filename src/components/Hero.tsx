import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export default function Hero({ id }: { id?: string }) {
  return (
    <section id={id} className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-secondary">
      {/* Animated Speed Lines (Visual Wow Factor) */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "200%", opacity: [0, 1, 0] }}
            transition={{ 
              duration: 2 + Math.random() * 2, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: "linear"
            }}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{ 
              top: `${15 + i * 15}%`, 
              width: `${100 + Math.random() * 200}px`,
              left: 0
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-black uppercase tracking-[0.4em] text-xs sm:text-sm mb-6"
          >
            Manchester's Premier Driving School
          </motion.p>
          
          <div className="overflow-hidden mb-10">
            <motion.h1 
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-8xl md:text-[8rem] lg:text-[9rem] font-black leading-[0.85] tracking-tighter text-white uppercase"
            >
              Stop searching<br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="italic text-primary"
              >
                start driving.
              </motion.span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
              <button className="group relative px-8 py-4 sm:px-12 sm:py-6 bg-white text-secondary font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(255,255,255,0.1)] text-sm sm:text-base overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Book Your Journey <Zap className="w-4 h-4 fill-secondary" />
                  </span>
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 sm:px-12 sm:py-6 bg-transparent text-white border border-white/20 font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-secondary transition-all duration-300 text-sm sm:text-base backdrop-blur-sm">
                  View Our Courses
              </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary to-transparent z-10" />
    </section>
  );
}
