import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials({ id }: { id?: string }) {
  const reviews = [
    {
      name: "Placeholder Name",
      role: "Course Student",
      content: "We're building something great; be the first to leave us a review and share your success story!"
    },
    {
      name: "Placeholder Name",
      role: "Manual Lessons",
      content: "We're building something great; be the first to leave us a review and share your success story!"
    },
    {
      name: "Placeholder Name",
      role: "Intensive Graduate",
      content: "We're building something great; be the first to leave us a review and share your success story!"
    }
  ];

  return (
    <section id={id} className="py-12 md:py-24 bg-secondary text-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
              <span className="ml-2 font-black text-xl italic tracking-tight">5.0</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 uppercase tracking-tighter"
            >
                Real lessons. <br /> Real <span className="text-primary italic">Success.</span>
            </motion.h2>
            <p className="text-white/60 font-medium max-w-xl mx-auto">
              Our community is growing. We're currently collecting feedback to build our wall of fame.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-[40px] relative group hover:border-primary/50 transition-all duration-500"
                >
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <p className="text-white/80 text-xl leading-relaxed italic font-medium mb-8">
                        "{r.content}"
                    </p>

                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-black">
                          {r.name.charAt(0)}
                        </div>
                        <div>
                            <h4 className="font-black text-lg text-white tracking-tight">{r.name}</h4>
                            <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">{r.role}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
