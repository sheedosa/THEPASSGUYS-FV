import { motion } from 'motion/react';
import { Award, Car, Timer, Calendar } from 'lucide-react';

const POINTS = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'DVSA Approved',
    description: 'Every instructor on our books is vetted, qualified, and chosen for patience.',
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: 'Manual & Auto',
    description: 'Stick or shift, your choice. Same price either way, modern dual-control cars.',
  },
  {
    icon: <Timer className="w-8 h-8" />,
    title: 'Matched in 7 Days',
    description: 'Tell us where you live and how you like to learn. We do the rest.',
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Flexible Slots',
    description: 'Early mornings, weekday evenings, full weekend blocks. We fit around you.',
  },
];

export default function WhyChooseUs({ id }: { id?: string }) {
  return (
    <section id={id} className="py-12 md:py-24 bg-bg-page">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter mb-8 md:mb-16"
        >
          Why Thousands Choose <span className="text-primary italic">The Pass Guys.</span>
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {POINTS.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="bg-white p-5 sm:p-7 md:p-10 rounded-2xl md:rounded-3xl shadow-xl shadow-black/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/10"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-secondary text-white rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-8 mx-auto hover:rotate-12 transition-transform duration-500 shadow-lg [&_svg]:w-5 [&_svg]:h-5 sm:[&_svg]:w-6 sm:[&_svg]:h-6 md:[&_svg]:w-8 md:[&_svg]:h-8">
                {point.icon}
              </div>
              <h3 className="text-base sm:text-lg md:text-2xl font-black text-secondary uppercase tracking-tight mb-2 md:mb-4 leading-tight">
                {point.title}
              </h3>
              <p className="text-secondary/60 font-medium leading-relaxed text-xs sm:text-sm md:text-base">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
