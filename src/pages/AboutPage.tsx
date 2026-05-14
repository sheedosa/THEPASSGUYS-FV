import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Users, MapPin, Clock3, Award } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/ui/SectionLabel';

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { label: 'Licensed Instructors', value: '150+', icon: Award },
  { label: 'Learners Matched', value: '5,000+', icon: Users },
  { label: 'Areas Covered', value: '12+', icon: MapPin },
  { label: 'Years Operating', value: '5+', icon: Clock3 },
];

const trustPoints = [
  { title: 'DVSA Approved', desc: 'Every instructor on our books is a fully qualified ADI.' },
  { title: 'DBS Checked', desc: 'Clear background checks are non-negotiable. Everyone passes one.' },
  { title: 'Regular Reviews', desc: 'Learner feedback comes in after every lesson. We act on it.' },
  { title: 'Manual & Auto', desc: 'Whichever you choose, we have a specialist ready to teach you.' },
];

export default function AboutPage() {
  return (
    <div className="bg-bg-page">
      <PageHero
        eyebrow="About"
        title="Why we built"
        accent="The Pass Guys."
        description="Finding a decent driving instructor in Manchester was painful. So we built a better way. Vetted local instructors, matched to you, in under a week."
        primaryCta={{ label: 'Find My Instructor', href: '/get-matched' }}
        secondaryCta={{ label: 'How it works', href: '/how-it-works' }}
        meta={['5,000+ learners', '150+ instructors', '12 boroughs']}
      />

      {/* ── Story ───────────────────────────────────────────────────────── */}
      <section id="story" className="py-20 md:py-32 bg-bg-page">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel number="01" label="Story" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95]"
            >
              Built to be <br />
              <span className="text-primary">stress-free.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.0, delay: 0.15, ease: EASE }}
              className="mt-8 space-y-5 text-secondary/65 text-base md:text-lg leading-relaxed"
            >
              <p>
                Learners waste too much time chasing instructors who don't reply, sitting on waiting lists, or ending up with the wrong fit. We thought it should be easier.
              </p>
              <p>
                The Pass Guys matches you with a vetted, local, DVSA-approved instructor based on your location, availability, and how you like to learn. Free. Fast. No back and forth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel number="02" label="Mission" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-secondary tracking-tighter leading-[1.05]"
            >
              Make learning to drive{' '}
              <span className="text-primary">straightforward,</span>{' '}
              <span className="text-secondary/40">affordable, and something you actually look forward to.</span>
            </motion.h2>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-bg-page">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <SectionLabel number="03" label="By the numbers" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-secondary/10 border border-secondary/10 rounded-2xl overflow-hidden">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.0, delay: i * 0.08, ease: EASE }}
                  className="bg-bg-page p-8 md:p-10 text-center"
                >
                  <div className="text-secondary/40 mb-3 flex justify-center">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-4xl md:text-5xl font-normal text-secondary tracking-tighter leading-none">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-secondary/55 font-medium uppercase tracking-[0.18em] text-[10px] md:text-[11px]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Instructors / Trust ────────────────────────────────────────── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <SectionLabel number="04" label="Trust" />
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, ease: EASE }}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95]"
              >
                Vetted. Local. <br />
                <span className="text-primary">Ready when you are.</span>
              </motion.h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-secondary/10 border border-secondary/10 rounded-2xl overflow-hidden">
              {trustPoints.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.0, delay: i * 0.08, ease: EASE }}
                  className="bg-bg-page p-7 md:p-10"
                >
                  <div className="text-primary text-[10px] font-semibold uppercase tracking-[0.32em] mb-3">
                    0{i + 1}
                  </div>
                  <h4 className="text-xl md:text-2xl font-normal text-secondary tracking-tight mb-2">
                    {item.title}
                  </h4>
                  <p className="text-secondary/65 leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-bg-page">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <SectionLabel number="05" label="Start" />
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: EASE }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95]"
          >
            Ready to meet <br />
            <span className="text-primary">your instructor?</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.0, delay: 0.2, ease: EASE }}
            className="mt-10"
          >
            <Link
              to="/get-matched"
              className="group inline-flex items-center gap-2 px-9 py-4 sm:px-12 sm:py-5 rounded-full bg-primary text-secondary text-base sm:text-lg font-semibold tracking-wide hover:scale-[1.03] transition-transform duration-500 shadow-sm"
            >
              Find My Instructor
              <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <p className="mt-4 text-secondary/50 text-xs sm:text-sm tracking-wide">
              Free · 2 minutes · No commitment
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
