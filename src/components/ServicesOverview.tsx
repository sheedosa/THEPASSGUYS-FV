import { motion } from 'motion/react';
import { Car, Zap, ShieldCheck, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Driving Lessons',
    description: 'Weekly manual or automatic lessons. Your pace, your timetable.',
    icon: Car,
    link: '/services/manual-lessons',
  },
  {
    title: 'Courses & Packages',
    description: 'Block-book six or ten lessons. Better value, faster progress.',
    icon: ShieldCheck,
    link: '/pricing',
  },
  {
    title: 'Intensive Courses',
    description: 'Two weeks of back-to-back lessons. For learners in a hurry.',
    icon: Zap,
    link: '/services/intensive-fast-track',
  },
  {
    title: 'Instructor Matching',
    description: 'Tell us how you learn. We find the right local instructor for you.',
    icon: UserPlus,
    link: '/get-matched',
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-12 md:py-24 bg-bg-page">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-black text-secondary mb-4 uppercase tracking-tighter"
          >
            Our Core <span className="text-primary italic">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-secondary/60 max-w-2xl mx-auto font-medium mb-6"
          >
            From your first lesson to your test pass. Pick what fits.
          </motion.p>
          
          {/* Mobile Swipe Hint */}
          <div className="flex items-center gap-2 text-secondary/40 text-xs font-black uppercase tracking-widest md:hidden animate-pulse">
            <span>Swipe to explore</span>
            <span className="text-lg leading-none">→</span>
          </div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 sm:px-6 pb-12 -mx-4 sm:-mx-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:overflow-x-visible md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className="w-[85vw] max-w-[320px] sm:w-[60vw] md:w-auto md:max-w-none snap-center group relative bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-black/5 hover:border-primary/30 transition-all duration-500 transform-gpu flex-shrink-0 flex flex-col"
            >
              <div className="w-16 h-16 bg-secondary text-primary rounded-[1.25rem] flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-black/10 shrink-0">
                <service.icon className="w-8 h-8 stroke-[2.5px]" />
              </div>
              
              <h3 className="text-2xl font-black text-secondary mb-4 tracking-tighter uppercase leading-tight">
                {service.title}
              </h3>
              
              <p className="text-secondary/60 mb-10 font-medium leading-relaxed flex-1">
                {service.description}
              </p>
              
              <div className="mt-auto">
                <Link 
                  to={service.link}
                  className="inline-flex items-center gap-2 text-secondary font-black text-xs uppercase tracking-[0.2em] group-hover:text-primary transition-colors pb-1 border-b-2 border-primary/20 group-hover:border-primary"
                >
                  Explore More <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
