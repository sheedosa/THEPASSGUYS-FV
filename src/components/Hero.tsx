import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';

export default function Hero({ id }: { id?: string }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const textTranslation = useTransform(smoothScroll, [0, 1], [0, -200]);

  return (
    <section id={id} ref={containerRef} className="relative min-h-screen lg:min-h-[110vh] flex items-center pt-24 pb-12 lg:pb-0 overflow-hidden transform-gpu">
      {/* Parallax Background Text */}
      <motion.div 
        style={{ x: textTranslation }}
        className="absolute bottom-10 left-0 whitespace-nowrap opacity-[0.03] select-none pointer-events-none transform-gpu hidden lg:block"
      >
        <span className="text-[20vw] font-black text-outline uppercase tracking-tighter">THE PASS GUYS THE PASS GUYS</span>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-secondary leading-[0.85] tracking-tighter mb-8 text-balance">
              Pass fast,<br />
              Drive <motion.span 
                initial={{ rotate: -5, scale: 0.9 }}
                animate={{ rotate: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="text-primary bg-secondary px-4 py-1 rounded-xl inline-block mt-2 relative"
              >
                Smart.
              </motion.span>
            </h1>
            
            <p className="text-slate-600 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
              The UK's most energetic driving school. We don't just teach you how to pass the test; we teach you how to dominate the road with confidence.
            </p>

            {/* Postcode Input Box */}
            <div className="vibrant-card !p-4 mb-8 max-w-md bg-white border-4 border-secondary flex flex-col sm:flex-row gap-3">
              <input 
                type="text" 
                placeholder="Enter Postcode (e.g. M1)" 
                className="flex-1 bg-slate-50 rounded-2xl px-6 py-4 font-black text-secondary uppercase tracking-widest placeholder:text-secondary/30 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-secondary font-black uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg border-2 border-secondary"
              >
                Go
              </motion.button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-secondary text-white font-black uppercase tracking-widest rounded-full flex items-center justify-center space-x-2 sm:shadow-[0_20px_0_rgba(0,0,0,0.1)] hover:sm:shadow-[0_10px_0_rgba(0,0,0,0.1)] transition-all text-lg"
              >
                <span>Book Now</span>
              </motion.button>
              
              <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-secondary font-black uppercase tracking-widest rounded-full flex items-center justify-center space-x-2 border-4 border-secondary hover:bg-secondary hover:text-white transition-all text-lg font-black">
                <span>Supporting Info</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
            className="relative mt-2 lg:mt-0"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/15SayWyrpNJrk1Gtc0cQnLV7Dq2i-yaSC" 
              alt="The Pass Guys Hero" 
              className="w-full h-auto object-cover rounded-[40px] transform-gpu"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
