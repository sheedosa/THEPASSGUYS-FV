import { motion } from 'motion/react';
import { Sliders, CheckCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks({ id }: { id?: string }) {
  const steps = [
    {
      number: "01",
      icon: <Sliders className="w-8 h-8" />,
      title: "Choose Type",
      description: "Choose your lesson type or select one of our discounted block packages."
    },
    {
      number: "02",
      icon: <Users className="w-8 h-8" />,
      title: "Get Matched",
      description: "Get matched with a local, vetted, and DVSA-approved instructor near you."
    },
    {
      number: "03",
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Start Driving",
      description: "Book your first lesson through us and start your journey with confidence."
    }
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary tracking-tighter uppercase mb-6"
          >
            How it <span className="text-primary italic">works.</span>
          </motion.h2>
          <p className="text-secondary/60 max-w-2xl mx-auto font-medium mb-8 md:mb-12">
            Three simple steps to getting on the road with Manchester's best driving instructors.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto mb-12 md:mb-20">
          {/* Timeline Track */}
          <div className="absolute left-[30px] md:left-[45px] top-8 bottom-8 w-1 md:w-1.5 bg-secondary/5 rounded-full" />
          
          <div className="space-y-8 sm:space-y-10 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex items-start gap-4 sm:gap-6 md:gap-10 group"
              >
                {/* Timeline Node */}
                <div className="relative z-10 shrink-0 w-16 h-16 md:w-24 md:h-24 bg-slate-50 border-4 md:border-8 border-white flex items-center justify-center rounded-[2rem] md:rounded-[3rem] shadow-lg group-hover:bg-primary group-hover:border-primary/20 transition-all duration-500 text-secondary">
                  <div className="transform group-hover:scale-110 transition-transform duration-500">
                    <div className="scale-75 sm:scale-100">{step.icon}</div>
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="flex-1 pt-1 pb-6 md:pt-4 md:pb-8 border-b-2 border-secondary/5 last:border-0">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <span className="text-secondary/30 font-black text-3xl sm:text-4xl md:text-6xl tracking-tighter">
                       {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-secondary tracking-tighter uppercase mb-2 sm:mb-3 leading-none group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-secondary/70 text-sm sm:text-base font-medium md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/how-it-works"
            className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-[0.2em] text-sm hover:text-primary transition-colors py-4 px-8 border-2 border-secondary/10 rounded-full group"
          >
            See full process <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
