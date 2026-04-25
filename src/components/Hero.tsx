import { motion } from 'motion/react';

export default function Hero({ id }: { id?: string }) {
  return (
    <section id={id} className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background with subtle texture or darkening overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/d/15SayWyrpNJrk1Gtc0cQnLV7Dq2i-yaSC" 
          alt="Cinematic road view" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent z-10" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="max-w-5xl mx-auto"
        >
          <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6"
          >
              Manchester's Premier Driving School
          </motion.p>
          
          <h1 className="text-6xl sm:text-8xl md:text-[8rem] font-black leading-[0.9] tracking-tighter text-white mb-10 uppercase">
              Stop searching<br />
              <span className="italic text-primary">start driving.</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <button className="px-8 py-4 sm:px-12 sm:py-6 bg-white text-secondary font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl text-sm sm:text-base">
                  Book Your Journey
              </button>
              <button className="px-8 py-4 sm:px-12 sm:py-6 bg-transparent text-white border border-white/30 font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-secondary transition-all duration-300 text-sm sm:text-base">
                  View Our Courses
              </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
