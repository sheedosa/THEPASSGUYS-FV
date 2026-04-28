import { motion } from 'motion/react';
import { Award, Car, Timer, Calendar } from 'lucide-react';

export default function WhyChooseUs({ id }: { id?: string }) {
  const points = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "DVSA Approved",
      description: "Only the most patient and platinum-vetted ADIs join our elite network."
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Manual & Auto",
      description: "Whether you want stick or shift, we have modern cars for every preference."
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "1-Week Match",
      description: "Get matched with your perfect local instructor within just 7 business days."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Slots",
      description: "Early mornings, late evenings, or weekend blocks - we fit your busy life."
    }
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter mb-8 md:mb-16">
          Why Thousands Choose <span className="text-primary italic">The Pass Guys.</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 md:p-10 rounded-3xl shadow-xl shadow-black/5 transition-all duration-300 transform-gpu"
            >
              <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center mb-8 mx-auto transform hover:rotate-12 transition-transform shadow-lg">
                {point.icon}
              </div>
              <h3 className="text-2xl font-black text-secondary uppercase tracking-tight mb-4">
                {point.title}
              </h3>
              <p className="text-secondary/60 font-medium leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
