import { motion } from 'motion/react';
import { Award, Car, Timer, Calendar } from 'lucide-react';
import SectionLabel from './ui/SectionLabel';

const POINTS = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'DVSA-approved',
    description: 'Every instructor is vetted, fully qualified, and chosen for patience as much as skill.',
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: 'Manual & auto',
    description: 'Stick or shift, your choice. Same price either way, and a modern dual-control car.',
  },
  {
    icon: <Timer className="w-8 h-8" />,
    title: 'Matched in 7 days',
    description: 'Tell us your postcode and how you like to learn. We handle the rest.',
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Flexible slots',
    description: 'Early mornings, weekday evenings, full weekend blocks — we fit around your life.',
  },
];

export default function WhyChooseUs({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 md:py-32 bg-bg-page">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <SectionLabel number="03" label="Why us" />
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter mb-12 md:mb-20 text-balance leading-[0.95]"
        >
          Why learners choose <span className="text-primary whitespace-nowrap">The Pass Guys.</span>
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
              className="bg-white p-5 sm:p-7 md:p-10 rounded-2xl md:rounded-3xl border border-secondary/8 shadow-ambient transition-all duration-700 hover:shadow-ambient-lg hover:border-secondary/12"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-secondary text-white rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-8 mx-auto hover:rotate-12 transition-transform duration-700 shadow-ambient-sm [&_svg]:w-5 [&_svg]:h-5 sm:[&_svg]:w-6 sm:[&_svg]:h-6 md:[&_svg]:w-8 md:[&_svg]:h-8">
                {point.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-secondary tracking-tight mb-2 md:mb-4 leading-tight">
                {point.title}
              </h3>
              <p className="text-secondary/60 leading-relaxed text-xs sm:text-sm md:text-base">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
