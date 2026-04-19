import { motion } from 'motion/react';
import { Map } from 'lucide-react';

export default function AreasCovered({ id }: { id?: string }) {
  const areas = [
    "Manchester City Centre", "Salford", "Stockport", "Bolton", 
    "Oldham", "Rochdale", "Trafford", "Bury", "Wigan", "Tameside"
  ];

  return (
    <section id="areas" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="vibrant-card !shadow-none bg-white grid lg:grid-cols-2 overflow-hidden">
          {/* Map Image / Placeholder */}
          <div className="relative min-h-[400px] bg-secondary flex items-center justify-center p-12 overflow-hidden group">
            <motion.div 
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ repeat: Infinity, duration: 20 }}
               className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1dVcID4aAABluu2o-rSNqO93RivVMloTw" 
                alt="Greater Manchester Area" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 bg-primary text-secondary rounded-[32px] flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform shadow-2xl">
                <Map className="w-12 h-12" />
              </div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter">Greater Manchester</h3>
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs mt-2">Our Primary Focus</p>
            </div>
          </div>

          {/* Area List */}
          <div className="p-10 md:p-20 flex flex-col justify-center bg-white">
            <h2 className="text-4xl font-black text-secondary uppercase tracking-tighter mb-8 leading-[0.9]">
              We teach <br /> right across <br /> <span className="text-primary italic">the North West.</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center space-x-2 text-primary transition-colors cursor-default"
                >
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  <span className="font-bold text-sm tracking-tight">{area}</span>
                </motion.div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 w-full sm:w-max px-10 py-5 bg-primary text-secondary font-black uppercase tracking-widest rounded-2xl shadow-xl"
            >
              Check Your Postcode
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
