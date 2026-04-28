import { motion } from 'motion/react';

export default function AboutNetwork({ id }: { id?: string }) {
  return (
    <section id={id} className="py-16 md:py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:p-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="vibrant-card !p-0 overflow-hidden relative aspect-square shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/d/11kz4nB8sf460elOszR57yumL_vzsuTJA" 
                alt="Our Instructors" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-12">
                <div>
                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-2">Our Instructor <br /> <span className="text-primary italic">Network.</span></h3>
                    <p className="text-white/60 font-bold uppercase tracking-widest text-[10px]">Over 150+ Professional Coaches</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">The Network</span>
            <h2 className="text-5xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-8 text-balance">
              Expert tuition from the <span className="text-primary">North's biggest</span> network.
            </h2>
            <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
              <p>
                The Pass Guys was founded as a driving school first. We built our reputation on the quality of our instructors, not just our marketing.
              </p>
              <p>
                Today, our network spans across the North West, powered by instructors who are passionate about teaching safe, confident driving to the next generation.
              </p>
              <p className="text-secondary font-black italic">
                We believe everyone deserves the freedom of the road, and we're here to help you get there faster.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-8 md:gap-8 md:gap-12">
                <div>
                    <p className="text-3xl md:text-4xl font-black text-secondary tracking-tighter">150+</p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Instructors</p>
                </div>
                <div>
                    <p className="text-3xl md:text-4xl font-black text-secondary tracking-tighter">2k+</p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Yearly Passes</p>
                </div>
                <div>
                    <p className="text-3xl md:text-4xl font-black text-secondary tracking-tighter">98%</p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Success Rate</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
