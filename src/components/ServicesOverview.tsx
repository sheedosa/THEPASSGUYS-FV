import { motion } from 'motion/react';
import { Car, Package, Timer, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Driving Lessons',
    description: 'Regular manual or automatic lessons tailored to your pace and schedule.',
    icon: Car,
    link: '/services/manual-lessons',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Courses & Packages',
    description: 'Structured block courses offering better value and consistent progress.',
    icon: Package,
    link: '/pricing',
    color: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    title: 'Intensive / Fast-Track',
    description: 'Pass quickly with back-to-back sessions designed for rapid skill acquisition.',
    icon: Timer,
    link: '/services/intensive-fast-track',
    color: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    title: 'The Matching Feature',
    description: "Can't find the right instructor? We'll find the perfect lead for your needs.",
    icon: Users,
    link: '/get-matched',
    color: 'bg-amber-50',
    iconColor: 'text-amber-600'
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4 uppercase tracking-tighter">
            Our Core <span className="text-primary italic">Services</span>
          </h2>
          <p className="text-secondary/60 max-w-2xl mx-auto font-medium">
            Everything you need to go from a total beginner to a confident, qualified driver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.color} ${service.iconColor} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-12`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-secondary mb-4 tracking-tighter">{service.title}</h3>
              <p className="text-secondary/60 mb-8 font-medium">
                {service.description}
              </p>
              <Link 
                to={service.link}
                className="inline-flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-widest group-hover:text-primary transition-colors"
              >
                Learn More <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
