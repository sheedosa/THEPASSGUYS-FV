import { motion } from 'motion/react';
import { MapPin, Sliders, CalendarCheck } from 'lucide-react';

export default function HowItWorks({ id }: { id?: string }) {
  const steps = [
    {
      number: "01",
      icon: <MapPin className="w-8 h-8" />,
      title: "Enter Postcode",
      description: "Tell us where you are, and we'll check our local expert network."
    },
    {
      number: "02",
      icon: <Sliders className="w-8 h-8" />,
      title: "Requirements",
      description: "Select manual or automatic, and specify your availability."
    },
    {
      number: "03",
      icon: <CalendarCheck className="w-8 h-8" />,
      title: "Get Matched",
      description: "Book instantly or get matched with the perfect instructor."
    }
  ];

  return (
    <section id={id} className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 px-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4"
          >
            Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-secondary tracking-tighter uppercase"
          >
            How it <span className="text-primary italic">works.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring" }}
              className="vibrant-card !shadow-none !p-10 relative z-10 bg-white group hover:border-primary transition-colors"
            >
              <div className="absolute -top-6 -right-6 text-7xl font-black text-primary opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
                {step.number}
              </div>
              
              <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-black text-secondary uppercase tracking-tight mb-4">
                {step.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
