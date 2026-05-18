import { motion } from 'motion/react';
import { Sliders, CheckCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLabel from './ui/SectionLabel';

export default function HowItWorks({ id }: { id?: string }) {
  const steps = [
    {
      number: "01",
      icon: <Sliders className="w-8 h-8" />,
      title: "Pick your lessons",
      description: "Single lessons or a full block-booked course. Manual or automatic. Your call."
    },
    {
      number: "02",
      icon: <Users className="w-8 h-8" />,
      title: "Get matched",
      description: "We pair you with a local DVSA-approved instructor in days, not weeks."
    },
    {
      number: "03",
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Start driving",
      description: "Book your first lesson and get behind the wheel within the week."
    }
  ];

  return (
    <section id={id} className="py-12 md:py-24 bg-bg-page overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20 px-4">
          <SectionLabel number="02" label="Process" />
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-display text-secondary tracking-[0.02em] mb-6 leading-[0.92]"
          >
            HOW IT <span className="text-primary">WORKS.</span>
          </motion.h2>
          <p className="text-secondary max-w-2xl mx-auto mb-8 md:mb-12 text-base md:text-lg">
            Three steps. No queue, no faff, no awkward sales call.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto mb-12 md:mb-20">
          {/* Timeline Track */}
          <div className="absolute left-[30px] md:left-[45px] top-8 bottom-8 w-1 md:w-1.5 bg-secondary/5 rounded-full" />
          
          <div className="space-y-8 sm:space-y-10 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-start gap-4 sm:gap-6 md:gap-10 group"
              >
                {/* Timeline Node */}
                <div className="relative z-10 shrink-0 w-16 h-16 md:w-24 md:h-24 bg-white border border-secondary/8 flex items-center justify-center rounded-[2rem] md:rounded-[3rem] shadow-ambient-sm group-hover:bg-primary group-hover:border-primary transition-all duration-700 text-secondary">
                  <div className="transform group-hover:scale-110 transition-transform duration-500">
                    <div className="scale-75 sm:scale-100">{step.icon}</div>
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="flex-1 pt-1 pb-6 md:pt-4 md:pb-8 border-b border-secondary/10 last:border-0">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <span className="text-primary/40 font-display text-3xl sm:text-4xl md:text-6xl tracking-[0.02em]">
                       {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-secondary tracking-[0.01em] uppercase mb-2 sm:mb-3 leading-tight group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
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
            className="inline-flex items-center gap-2 text-secondary font-accent font-semibold text-sm uppercase tracking-[0.08em] hover:text-primary transition-colors py-3 px-7 border border-secondary/15 rounded-sm group"
          >
            See full process <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
