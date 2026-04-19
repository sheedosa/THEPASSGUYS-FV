import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials({ id }: { id?: string }) {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Passed in 6 weeks",
      content: "The best driving school in the area. My instructor was patient and gave me the confidence I lacked first time!",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      name: "Marcus Thorne",
      role: "Intensive Course Student",
      content: "I needed to pass quickly for work. The 5-day course was perfect. Intense but well-structured and successful.",
      avatar: "https://picsum.photos/seed/marcus/100/100"
    },
    {
      name: "Chloe Smith",
      role: "Automatic Lessons",
      content: "Transitioning to automatic was the best choice. The car was brand new and very easy to learn in.",
      avatar: "https://picsum.photos/seed/chloe/100/100"
    }
  ];

  return (
    <section id={id} className="py-24 bg-secondary text-white overflow-hidden relative transform-gpu">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 w-full h-full pointer-events-none opacity-[0.03] select-none -translate-y-1/2 transform-gpu">
        <div className="text-[20vw] font-black text-white whitespace-nowrap -rotate-6 transform -translate-x-1/2">LEGENDS ONLY LEGENDS ONLY</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4"
            >
              Wall of Love
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring" }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 uppercase tracking-tighter"
            >
                Don't take <br className="hidden md:block" /> our word <span className="text-primary italic">for it.</span>
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            {testimonials.map((t, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, rotateY: index % 2 === 0 ? 10 : -10 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.05, rotateZ: 2 }}
                    className="vibrant-card !shadow-none !bg-white/5 !border-white/10 p-10 rounded-[40px] relative backdrop-blur-sm group"
                >
                    <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5 group-hover:text-primary/20 transition-colors" />
                    <div className="flex items-center space-x-4 mb-8">
                        <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-2xl border-4 border-primary/20 group-hover:border-primary transition-colors" referrerPolicy="no-referrer" />
                        <div>
                            <h4 className="font-black text-xl text-white tracking-tight">{t.name}</h4>
                            <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">{t.role}</p>
                        </div>
                    </div>
                    <p className="text-white/80 text-xl leading-relaxed italic font-medium">
                        "{t.content}"
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
