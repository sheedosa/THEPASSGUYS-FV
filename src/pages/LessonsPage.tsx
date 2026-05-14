import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { ArrowRight, Car, Zap, RefreshCw, Compass, ShieldCheck, ClipboardCheck } from 'lucide-react';
import Pricing from '../components/Pricing';
import HowItWorks from '../components/HowItWorks';
import FinalCTA from '../components/FinalCTA';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/ui/SectionLabel';

const EASE = [0.22, 1, 0.36, 1] as const;

const lessonTypes = [
  { title: 'Manual lessons', slug: 'manual-lessons', icon: Car, desc: 'Master the gears with expert manual instructors.' },
  { title: 'Automatic lessons', slug: 'automatic-lessons', icon: Zap, desc: 'Focus on the road in modern automatic cars.' },
  { title: 'Refresher lessons', slug: 'refresher-lessons', icon: RefreshCw, desc: 'Confidence back on the road after a break.' },
  { title: 'Motorway lessons', slug: 'motorway-lessons', icon: Compass, desc: 'Learn to handle high-speed roads safely.' },
  { title: 'Pass Plus', slug: 'pass-plus', icon: ShieldCheck, desc: 'Six modules of post-test training. Lower insurance.' },
  { title: 'Mock tests', slug: 'mock-tests', icon: ClipboardCheck, desc: 'Realistic test simulations with DVSA-approved ADIs.' },
];

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-bg-page">
      <SEO
        title="Driving Lessons Manchester | Manual & Automatic"
        description="Manual, automatic and intensive driving lessons across Greater Manchester. Pick what fits, book in minutes."
        canonical="https://thepassguys.co.uk/lessons"
      />
      <PageHero
        eyebrow="Lessons"
        title="Lessons that fit"
        accent="around you."
        description="From first time behind the wheel to motorway training. Manual or automatic, single lessons or full courses."
        primaryCta={{ label: 'Find My Instructor', href: '/get-matched' }}
        secondaryCta={{ label: 'See pricing', href: '#pricing' }}
        meta={['Manual & auto', 'DVSA-approved', 'Block discounts']}
      />

      {/* Pricing plans (uses updated component) */}
      <Pricing id="pricing" />

      {/* ── Lesson Types ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-bg-page">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionLabel number="02" label="Types" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95]"
            >
              Lessons for <br />
              <span className="text-primary">every need.</span>
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-secondary/10 border border-secondary/10 rounded-2xl overflow-hidden">
            {lessonTypes.map((type, i) => (
              <motion.div
                key={type.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.0, delay: i * 0.06, ease: EASE }}
                className="group bg-bg-page p-7 md:p-10 hover:bg-white/40 transition-colors duration-500"
              >
                <div className="text-primary mb-5">
                  <type.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-normal text-secondary tracking-tight mb-2">
                  {type.title}
                </h3>
                <p className="text-secondary/65 leading-relaxed text-sm md:text-base mb-6">
                  {type.desc}
                </p>
                <Link
                  to={`/services/${type.slug}`}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-secondary/70 hover:text-primary transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works (existing component) */}
      <HowItWorks id="process" />

      <FinalCTA />
    </div>
  );
}
