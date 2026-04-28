import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';
import { Zap, MapPin, Smartphone, LifeBuoy, ShieldCheck, Award } from 'lucide-react';

export default function Features() {
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

  const textX = useTransform(smoothScroll, [0, 1], [-300, 300]);

  const features = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Fast Tracking",
      description: "Intensive courses designed for quick results and first-time success."
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "Local Experts",
      description: "Learn with professional instructors who know your specific test routes."
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Digital Progress",
      description: "Track every lesson and mirror your improvement on our dedicated app."
    },
    {
      icon: <LifeBuoy className="w-7 h-7" />,
      title: "Theory Mastery",
      description: "Full access to premium theory test materials and mock exam practice."
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Safety First",
      description: "Dual-controlled modern fleet equipped with the latest safety technology."
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "DVSA Approved",
      description: "All our instructors are fully certified and undergo regular quality checks."
    }
  ];

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-bg-page/50 relative overflow-hidden transform-gpu">
      {/* Background Parallax */}
      <motion.div 
        style={{ x: textX }}
        className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap opacity-[0.02] select-none pointer-events-none transform-gpu"
      >
        <span className="text-[15vw] font-black text-outline uppercase">ROAD DOMINATION ROAD DOMINATION</span>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl md:text-5xl font-black text-secondary tracking-tighter uppercase"
          >
            Built for <span className="text-primary italic">Success.</span>
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 md:p-6 md:p-10 rounded-[32px] border-2 border-slate-100 flex flex-col items-start hover:border-secondary transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/5 transform-gpu"
            >
              <div className="w-16 h-16 bg-primary text-secondary rounded-2xl flex items-center justify-center mb-8 transform group-hover:-rotate-12 transition-transform shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-secondary uppercase tracking-tight mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
