import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AreasCovered({ id }: { id?: string }) {
  const areas = [
    "Salford", "Trafford", "Stockport", "Bolton", 
    "Bury", "Oldham", "Rochdale", "Wigan", "City Centre"
  ];

  return (
    <section id={id} className="py-12 md:py-24 bg-bg-page">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tighter uppercase leading-[0.9] mb-4">
              We cover all of <br /> <span className="text-primary italic">Greater Manchester.</span>
            </h2>
            <p className="text-secondary/60 font-medium">
              Pick your postcode. We have instructors near you, ready to start.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, backgroundColor: '#FFD43B', transition: { duration: 0.3 } }}
              className="bg-slate-50 p-6 rounded-2xl flex items-center justify-between group cursor-pointer"
            >
              <span className="font-black text-secondary uppercase tracking-tighter group-hover:text-secondary">{area}</span>
              <MapPin className="w-4 h-4 text-primary group-hover:text-secondary transition-colors" />
            </motion.div>
          ))}
          <Link
            to="/areas"
            className="p-6 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200 hover:border-primary transition-all group"
          >
            <span className="font-bold text-secondary/40 group-hover:text-primary transition-colors uppercase tracking-widest text-sm">See all areas →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
