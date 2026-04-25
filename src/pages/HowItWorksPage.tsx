import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Zap, Search, UserCheck, ShieldCheck, HelpCircle, ArrowRight, Target } from 'lucide-react';
import { useState } from 'react';

const paths = [
  {
    title: "Book Direct",
    description: "Ideal if you know what you need. Select your lesson, pick your package, and book immediately.",
    steps: ["Browse our lessons", "Choose your package", "Book and pay", "Start driving"]
  },
  {
    title: "Get Matched",
    description: "Ideal if you aren't sure who to choose. Our team finds the best instructor for your specific requirements.",
    steps: ["Fill in your details", "Our team reviews requirements", "We find your match", "You decide"]
  }
];

const faqs = [
  { q: "How quickly can I start lessons?", a: "Once booked, we generally match you and can start lessons within one week depending on availability." },
  { q: "What if I'm not happy with my instructor?", a: "Your happiness is paramount. If you feel it's not the right fit, we will arrange a change immediately with zero fuss." },
  { q: "Can I switch between manual and automatic?", a: "Yes, you can hold both lessons, but we recommend sticking to one until you pass your test to keep momentum high." },
  { q: "What do I need to bring to my first lesson?", a: "Just your provisional license and comfortable footwear. We will handle the rest!" },
  { q: "How do I pay?", a: "All payments are handled securely through our platform when you book your lessons or packages." }
];

export default function HowItWorksPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="pt-24 bg-bg-page">
      {/* Hero */}
      <section className="py-24 bg-secondary text-white text-center">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8"
          >
            Getting started is simpler than you think
          </motion.h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Whether you book direct or use our matching service, we have made learning to drive straightforward.
          </p>
        </div>
      </section>

      {/* Two Paths */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {paths.map((path, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-black/5 border border-slate-100"
              >
                <h3 className="text-3xl font-black text-secondary uppercase tracking-tighter mb-4">{path.title}</h3>
                <p className="text-secondary/60 mb-8 font-medium">{path.description}</p>
                <div className="space-y-4">
                  {path.steps.map((step, j) => (
                    <div key={j} className="flex items-center gap-4 text-secondary font-bold">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-secondary text-xs">{j+1}</div>
                        {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* First Lesson Expectation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-black text-secondary uppercase tracking-tighter mb-12 text-center">What to Expect on Your First Lesson</h2>
            <div className="grid sm:grid-cols-2 gap-8">
                {[
                    { icon: UserCheck, title: "Instructor Intro", desc: "Your instructor will introduce themselves and get to know your starting experience." },
                    { icon: ShieldCheck, title: "No Judgment", desc: "We are all about a supportive environment where all abilities are truly welcome." },
                    { icon: Zap, title: "Safety First", desc: "All our vehicles are modern, well-maintained, and fitted with dual-controls for your safety." },
                    { icon: Target, title: "Setting Goals", desc: "Together, you will agree on a lesson plan and set clear goals to track your progress." }
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-black/5">
                        <item.icon className="w-10 h-10 text-primary flex-shrink-0" />
                        <div>
                            <h4 className="font-black text-xl mb-2 text-secondary tracking-tight">{item.title}</h4>
                            <p className="text-secondary/60 font-medium">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Matching Process */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-black text-secondary uppercase tracking-tighter mb-12 text-center">The Matching Process Explained</h2>
            <div className="space-y-6">
                {[
                    "You fill in a short form with your requirements and preferences.",
                    "Our team reviews your details and identifies the best instructor match for your area and level.",
                    "We contact you within one week with your perfect match.",
                    "You are not committed until you are happy with the proposal."
                ].map((step, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border flex gap-6 items-center">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-secondary font-black flex-shrink-0">{i+1}</div>
                        <p className="text-secondary font-medium">{step}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-black text-secondary uppercase tracking-tighter mb-12 text-center">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-slate-100">
                <button 
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left font-bold text-secondary"
                >
                  {faq.q}
                  <HelpCircle className={`w-5 h-5 transition-transform ${activeIndex === i ? 'rotate-180' : ''}`} />
                </button>
                {activeIndex === i && (
                  <div className="p-6 pt-0 text-secondary/60 font-medium">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter mb-12">Ready to get started?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/driving-lessons" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-secondary font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-lg">
                    Book a Lesson <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/get-matched" className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-lg">
                    Get Matched <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
