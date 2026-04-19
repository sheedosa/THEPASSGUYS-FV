import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useRef } from 'react';
import { Check, ArrowRight, Car, Zap, RefreshCw, Compass, ShieldCheck, ClipboardCheck } from 'lucide-react';
import Pricing from '../components/Pricing';
import HowItWorks from '../components/HowItWorks';
import FinalCTA from '../components/FinalCTA';

export default function LessonsPage() {
  const lessonTypes = [
    {
      title: "Manual Lessons",
      slug: "manual-lessons",
      icon: <Car className="w-8 h-8" />,
      desc: "Master the gears with our expert manual instructors."
    },
    {
      title: "Automatic Lessons",
      slug: "automatic-lessons",
      icon: <Zap className="w-8 h-8" />,
      desc: "Focus on the road with our smooth automatic Minis."
    },
    {
      title: "Refresher Lessons",
      slug: "refresher-lessons",
      icon: <RefreshCw className="w-8 h-8" />,
      desc: "Get your confidence back on the road after a break."
    },
    {
      title: "Motorway Lessons",
      slug: "motorway-lessons",
      icon: <Compass className="w-8 h-8" />,
      desc: "Learn to handle high-speed roads safely."
    },
    {
      title: "Pass Plus",
      slug: "pass-plus",
      icon: <ShieldCheck className="w-8 h-8" />,
      desc: "Six modules of post-test training to lower your insurance."
    },
    {
      title: "Mock Tests",
      slug: "mock-tests",
      icon: <ClipboardCheck className="w-8 h-8" />,
      desc: "Realistic test simulations with DVSA approved ADIs."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-bg-page">
      {/* Hero Section */}
      <section className="py-20 overflow-hidden relative transform-gpu">
        <div className="container mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4"
          >
            Services Hub
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-secondary leading-[0.9] tracking-tighter mb-8 uppercase"
          >
            Driving Lessons <br />
            That Fit <span className="text-primary italic">Around You.</span>
          </motion.h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            From complete beginners to advanced motorway training, our network of expert instructors provides the highest quality tuition in the North West.
          </p>
        </div>
      </section>

      {/* Main Offers (Reusing Pricing component logic) */}
      <div id="main-offers">
        <Pricing id="pricing" />
      </div>

      {/* Lesson Types Section */}
      <section className="py-24 bg-bg-page relative overflow-hidden">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">Variety</span>
               <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tighter uppercase whitespace-pre-line">
                 Lessons for <span className="text-primary italic">Every Need.</span>
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lessonTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="vibrant-card !shadow-none !p-10 border-2 border-slate-100 bg-white group hover:border-secondary transition-all"
                >
                  <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center mb-8 transform group-hover:-rotate-12 transition-transform shadow-lg group-hover:bg-primary group-hover:text-secondary">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-black text-secondary uppercase tracking-tight mb-4">{type.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">{type.desc}</p>
                  <Link 
                    to={`/services/${type.slug}`}
                    className="flex items-center space-x-2 text-secondary font-black uppercase tracking-widest text-xs group-hover:text-primary transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* How it Works (Simplified) */}
      <div className="bg-white">
        <HowItWorks id="process" />
      </div>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
