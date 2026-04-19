import { motion } from 'motion/react';
import { Award, Clock, Heart, Users } from 'lucide-react';

export default function WhyChooseUs({ id }: { id?: string }) {
  const points = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Top Rated School",
      description: "Thousands of students pass with us every year with record-breaking scores."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Vetted Instructors",
      description: "Only the most patient and highly-qualified ADIs join our energetic network."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Hours",
      description: "Early mornings, late evenings, or weekend slots - we work around your life."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Student Focused",
      description: "We don't just teach you to pass; we teach you the confidence to dominate the road."
    }
  ];

  return (
    <section id={id} className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">Why Us</span>
            <h2 className="text-5xl md:text-7xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-8">
              Why thousands <br /> choose <span className="text-primary italic">The Pass Guys.</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-lg font-medium leading-relaxed mb-10">
              We’ve rebuilt the driving school experience from the ground up to be faster, simpler, and more exciting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="vibrant-card !p-8 !shadow-none border-2 border-slate-100 hover:border-secondary transition-colors group"
              >
                <div className="w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform shadow-lg group-hover:bg-primary group-hover:text-secondary">
                  {point.icon}
                </div>
                <h3 className="text-xl font-black text-secondary uppercase tracking-tight mb-2">
                  {point.title}
                </h3>
                <p className="text-slate-500 text-sm font-semibold leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
