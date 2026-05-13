import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { useRef } from 'react';
import { Check, ArrowRight, Car, Zap, RefreshCw, Compass, ShieldCheck, ClipboardCheck } from 'lucide-react';
import Pricing from '../components/Pricing';
import HowItWorks from '../components/HowItWorks';
import FinalCTA from '../components/FinalCTA';
import PageHero from '../components/PageHero';

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
    <div className="min-h-screen bg-bg-page">
      <SEO
        title="Driving Lessons Manchester | Manual & Automatic"
        description="Manual, automatic and intensive driving lessons across Greater Manchester. Pick what fits, book in minutes."
        canonical="https://thepassguys.co.uk/lessons"
      />
      <PageHero
        eyebrow="Lessons · Manchester"
        title="Driving lessons that"
        accent="fit around you."
        description="From your first time behind the wheel to motorway training and Pass Plus. Manual or automatic, single lessons or block-book a course."
        primaryCta={{ label: 'See pricing', href: '#pricing' }}
        secondaryCta={{ label: 'Get matched', href: '/get-matched' }}
        meta={['Manual & auto', 'DVSA-approved', 'Block-booking discounts']}
      />

      {/* Main Offers (Reusing Pricing component logic) */}
      <div id="main-offers">
        <Pricing id="pricing" />
      </div>

      {/* Lesson Types Section */}
      <section className="py-16 md:py-24 bg-bg-page relative overflow-hidden">
         <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-16">
               <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">Variety</span>
               <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tighter uppercase whitespace-pre-line">
                 Lessons for <span className="text-primary italic">Every Need.</span>
               </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {lessonTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="vibrant-card !shadow-none !p-5 sm:!p-6 md:!p-10 border-2 border-slate-100 bg-white group hover:border-secondary transition-all !rounded-2xl md:!rounded-[40px]"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-secondary text-white rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-8 group-hover:-rotate-12 transition-transform shadow-lg group-hover:bg-primary group-hover:text-secondary [&_svg]:w-4 [&_svg]:h-4 sm:[&_svg]:w-5 sm:[&_svg]:h-5 md:[&_svg]:w-8 md:[&_svg]:h-8">
                    {type.icon}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-2xl font-black text-secondary uppercase tracking-tight mb-2 md:mb-4 leading-tight">{type.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-4 md:mb-8 text-xs sm:text-sm md:text-base">{type.desc}</p>
                  <Link 
                    to={`/services/${type.slug}`}
                    className="flex items-center space-x-2 text-secondary font-black uppercase tracking-widest text-[10px] sm:text-xs group-hover:text-primary transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* How it Works (Simplified) */}
      <div className="bg-bg-page">
        <HowItWorks id="process" />
      </div>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
