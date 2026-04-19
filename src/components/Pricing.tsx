import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';
import { Check } from 'lucide-react';

export default function Pricing({ id }: { id?: string }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const bgTextY = useTransform(smoothScroll, [0, 1], [-100, 100]);

  const plans = [
    {
      name: "Pay As You Go",
      price: "35",
      slug: "manual-lessons",
      features: ["No Commitment", "Standard Pickup", "Manual or Auto", "Local Instructor"],
      recommended: false
    },
    {
      name: "Standard Course",
      price: "320",
      slug: "automatic-lessons",
      features: ["Block of 10 Lessons", "Save £30 Overall", "Free Theory App Access", "Priority Booking"],
      recommended: true
    },
    {
      name: "Fast Track",
      price: "1500",
      slug: "intensive-fast-track",
      features: ["Intensive 40h Week", "Practical Test Included", "Guaranteed Match", "Dedicated Support"],
      recommended: false
    }
  ];

  return (
    <section ref={containerRef} id={id} className="py-24 bg-white overflow-hidden relative transform-gpu">
      {/* Background Parallax */}
      <motion.div 
        style={{ y: bgTextY }}
        className="absolute top-0 right-0 opacity-[0.02] select-none pointer-events-none transform-gpu"
      >
        <span className="text-[30vw] font-black text-outline uppercase leading-none">SERVICES SERVICES SERVICES</span>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-secondary uppercase tracking-tighter"
          >
            Our <span className="text-primary italic">Services</span>
          </motion.h2>
          <p className="text-slate-500 max-w-lg mx-auto mt-6 text-xl font-medium">
            Tailored learning solutions for every type of student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 perspective-1000">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 60 }}
              whileHover={{ 
                scale: plan.recommended ? 1.08 : 1.05,
                rotateY: index === 0 ? 5 : index === 2 ? -5 : 0
              }}
              className={`p-10 flex flex-col relative transition-all duration-500 transform-gpu ${
                plan.recommended 
                ? "vibrant-card !bg-secondary !text-white lg:scale-105 z-10" 
                : "vibrant-card !shadow-none !border-2 !border-slate-100 text-secondary"
              }`}
            >
              {plan.recommended && (
                <motion.div 
                   animate={{ scale: [1, 1.1, 1] }} 
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-secondary px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl border-2 border-secondary"
                >
                  Most Popular
                </motion.div>
              )}

              <h3 className="text-3xl font-black mb-2 uppercase">{plan.name}</h3>
              <div className="flex items-baseline space-x-2 mb-8">
                <span className="text-6xl font-black tracking-tighter">£{plan.price}</span>
                {plan.recommended && <span className="text-primary font-black uppercase tracking-widest text-xs">Best Deal</span>}
              </div>

              <div className="grow space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center space-x-3">
                    <motion.div 
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        plan.recommended ? "bg-primary text-secondary" : "bg-secondary text-white"
                    }`}>
                      <Check className="w-4 h-4" strokeWidth={4} />
                    </motion.div>
                    <span className="text-sm font-bold opacity-80">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to={`/services/${plan.slug}`}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg text-center ${
                plan.recommended 
                ? "bg-primary text-secondary hover:bg-white" 
                : "bg-secondary text-white hover:bg-primary hover:text-secondary"
              }`}>
                Choose Service
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
