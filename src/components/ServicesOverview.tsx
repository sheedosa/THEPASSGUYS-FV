import { motion } from 'motion/react';
import { Car, Zap, ShieldCheck, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Driving Lessons',
    description: 'Regular manual or automatic lessons tailored to your pace and schedule.',
    icon: Car,
    link: '/services/manual-lessons',
  },
  {
    title: 'Courses & Packages',
    description: 'Structured block courses offering better value and consistent progress.',
    icon: ShieldCheck,
    link: '/pricing',
  },
  {
    title: 'Intensive / Fast-Track',
    description: 'Pass quickly with back-to-back sessions designed for rapid skill acquisition.',
    icon: Zap,
    link: '/services/intensive-fast-track',
  },
  {
    title: 'The Matching Feature',
    description: "Can't find the right instructor? We'll find the perfect match for your specific needs.",
    icon: UserPlus,
    link: '/get-matched',
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-black text-secondary mb-4 uppercase tracking-tighter">
            Our Core <span className="text-primary italic">Services</span>
          </h2>
          <p className="text-secondary/60 max-w-2xl mx-auto font-medium mb-6">
            Everything you need to go from a total beginner to a confident, qualified driver.
          </p>
          
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
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
