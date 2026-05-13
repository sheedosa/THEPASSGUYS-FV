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
      title: "Fast-Track Courses",
      description: "Intensive weeks for learners who want a pass in months, not years."
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "Local Instructors",
      description: "Your instructor lives nearby and knows the routes your examiner uses."
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Progress in Your Pocket",
      description: "See every lesson, every skill ticked off, in our learner app."
    },
    {
      icon: <LifeBuoy className="w-7 h-7" />,
      title: "Theory Practice",
      description: "Full theory revision and mock tests, included with every package."
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Safety First",
      description: "Modern dual-control cars, fully insured, serviced every quarter."
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "DVSA Approved",
      description: "Every instructor is fully qualified and reassessed regularly."
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
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 perspective-1000">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-5 sm:p-6 md:p-10 rounded-2xl md:rounded-[32px] border-2 border-slate-100 flex flex-col items-start hover:border-secondary transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary text-secondary rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-8 group-hover:-rotate-12 transition-transform shadow-lg [&_svg]:w-4 [&_svg]:h-4 sm:[&_svg]:w-5 sm:[&_svg]:h-5 md:[&_svg]:w-7 md:[&_svg]:h-7">
                {feature.icon}
              </div>
              <h3 className="text-base sm:text-lg md:text-2xl font-black text-secondary uppercase tracking-tight mb-2 md:mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed text-xs sm:text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
