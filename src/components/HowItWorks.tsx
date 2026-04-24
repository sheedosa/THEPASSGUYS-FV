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
    <section id={id} className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary tracking-tighter uppercase mb-6"
          >
            How it <span className="text-primary italic">works.</span>
          </motion.h2>
          <p className="text-secondary/60 max-w-2xl mx-auto font-medium mb-12">
            Three simple steps to getting on the road with Manchester's best driving instructors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-10 bg-slate-50 rounded-3xl group hover:bg-secondary hover:text-white transition-all duration-500 shadow-xl shadow-black/5"
            >
              <div className="absolute top-6 right-8 text-6xl font-black opacity-10 group-hover:opacity-20 transition-opacity">
                {step.number}
              </div>
              
              <div className="w-16 h-16 bg-white text-secondary group-hover:bg-primary group-hover:text-white rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-all duration-500">
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">
                {step.title}
              </h3>
              <p className="opacity-70 font-medium leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
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
