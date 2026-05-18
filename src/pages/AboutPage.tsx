import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Users, MapPin, Clock3, Award } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/ui/SectionLabel';

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { label: 'Licensed Instructors', value: '150+', icon: Award },
  { label: 'Learners Matched', value: '5,000+', icon: Users },
  { label: 'Areas Covered', value: '10', icon: MapPin },
  { label: 'Years Operating', value: '5+', icon: Clock3 },
];

const trustPoints = [
  { title: 'DVSA Approved', desc: 'Every instructor on our books is a fully qualified ADI.' },
  { title: 'DBS Checked', desc: 'Every instructor holds a valid enhanced DBS certificate.' },
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
        meta={['5,000+ learners', '150+ instructors', '10 boroughs']}
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-secondary tracking-[0.02em] leading-[0.92]"
            >
              BUILT TO BE <br />
              <span>STRESS-FREE.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.0, delay: 0.15, ease: EASE }}
              className="mt-8 space-y-5 text-secondary text-base md:text-lg leading-relaxed"
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-secondary tracking-[0.02em] leading-[0.92]"
            >
              MAKE LEARNING TO DRIVE{' '}
              <span className="text-primary">STRAIGHTFORWARD,</span>{' '}
              <span className="text-secondary/70">AFFORDABLE, AND SOMETHING YOU ACTUALLY LOOK FORWARD TO.</span>
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
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.0, delay: i * 0.08, ease: EASE }}
                  className="bg-white p-8 md:p-10 text-center"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-display text-primary tracking-[0.02em] leading-none">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-secondary font-medium uppercase tracking-[0.18em] text-[10px] md:text-[11px]">
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
                className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-secondary tracking-[0.02em] leading-[0.92]"
              >
                VETTED. LOCAL. <br />
                <span>READY WHEN YOU ARE.</span>
              </motion.h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {trustPoints.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.0, delay: i * 0.08, ease: EASE }}
                  className="bg-white p-7 md:p-10"
                >
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-secondary text-[11px] font-bold font-accent mb-4">
                    0{i + 1}
                  </div>
                  <h4 className="text-xl md:text-2xl font-display text-secondary tracking-[0.01em] uppercase mb-2">
                    {item.title}
                  </h4>
                  <p className="text-secondary leading-relaxed text-sm md:text-base">
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display text-secondary tracking-[0.02em] leading-[0.92]"
          >
            READY TO MEET <br />
            <span className="text-primary">YOUR INSTRUCTOR?</span>
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
              className="group inline-flex items-center gap-2 px-9 py-4 sm:px-12 sm:py-5 rounded-sm bg-primary text-secondary text-base sm:text-lg font-accent font-bold uppercase tracking-[0.08em] hover:scale-[1.03] transition-transform duration-500 shadow-sm"
            >
              Find My Instructor
              <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <p className="mt-4 text-secondary/80 text-xs sm:text-sm tracking-wide">
              Free · 2 minutes · No commitment
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
