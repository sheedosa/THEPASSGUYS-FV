import { motion } from 'motion/react';
import { UserCheck, ShieldCheck, Zap, Target } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/ui/SectionLabel';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    n: '01',
    title: 'Tell us what you need',
    desc: 'Postcode, manual or automatic, when you can drive, and how you like to learn.',
  },
  {
    n: '02',
    title: 'We match you',
    desc: 'Our team finds a vetted local instructor who fits your area, schedule, and style.',
  },
  {
    n: '03',
    title: 'Start driving',
    desc: 'Confirm your match, jump in the car, and focus on passing.',
  },
];

const firstLesson = [
  { icon: UserCheck, title: 'Instructor intro', desc: 'Your instructor introduces themselves and gets a feel for where you are.' },
  { icon: ShieldCheck, title: 'Zero judgment', desc: 'A supportive environment. Every ability is welcome, whether you are nervous or experienced.' },
  { icon: Zap, title: 'Safety first', desc: 'Modern, well-maintained, dual-control cars. Fully insured for learners.' },
  { icon: Target, title: 'Set the goal', desc: 'Together you agree a lesson plan and clear milestones to track progress.' },
];

const compare = [
  { left: 'Search endlessly', right: 'We match you' },
  { left: 'Instructors don\'t reply', right: 'Fast response' },
  { left: 'Guesswork', right: 'Smart matching' },
  { left: 'Stressful', right: 'Easy' },
];

const faqs = [
  { q: 'How quickly can I start lessons?', a: 'Once matched, you can usually start within a week depending on instructor availability in your area.' },
  { q: "What if I'm not happy with my instructor?", a: "Just say the word and we'll arrange a swap. No fuss, no fees." },
  { q: 'Can I switch between manual and automatic?', a: 'You can. We recommend sticking with one until test day to keep momentum.' },
  { q: 'What do I need for the first lesson?', a: 'Just your provisional licence and comfortable shoes. We handle the rest.' },
  { q: 'How do I pay?', a: 'Securely through our platform when you book lessons or packages. Matching itself is always free.' },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-bg-page">
      <PageHero
        eyebrow="Process"
        title="How it"
        accent="works."
        description="Three short steps. No phone tag, no waiting lists. Just the right instructor, matched to you. Free."
        primaryCta={{ label: 'Find My Instructor', href: '/get-matched' }}
        secondaryCta={{ label: 'See FAQs', href: '#faqs' }}
        meta={['Matched in 7 days', 'No long contracts', 'Free matching']}
      />

      {/* ── 3 Steps ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionLabel number="01" label="Steps" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-secondary tracking-[0.02em] leading-[0.92]"
            >
              THREE STEPS. <br />
              <span className="text-primary">NO FUSS.</span>
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.0, delay: i * 0.1, ease: EASE }}
                className="bg-white p-8 md:p-10 rounded-xl border border-secondary/8"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-secondary text-[11px] font-bold font-accent mb-5">
                  {step.n}
                </div>
                <h3 className="text-2xl md:text-3xl font-display text-secondary tracking-[0.01em] uppercase leading-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary leading-relaxed text-sm md:text-base">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why matching beats searching ────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-bg-page">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionLabel number="02" label="Compare" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-secondary tracking-[0.02em] leading-[0.92]"
            >
              WHY MATCHING <br />
              <span className="text-primary">BEATS SEARCHING.</span>
            </motion.h2>
          </div>

          <div className="max-w-3xl mx-auto border border-secondary/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 bg-secondary/5 text-[11px] font-accent font-bold uppercase tracking-[0.32em] text-secondary/80">
              <div className="p-5 md:p-6 border-r border-secondary/10">Old way</div>
              <div className="p-5 md:p-6 text-primary">The Pass Guys</div>
            </div>
            {compare.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: i * 0.06, ease: EASE }}
                className="grid grid-cols-2 border-t border-secondary/10"
              >
                <div className="p-5 md:p-6 text-secondary/65 border-r border-secondary/10 line-through decoration-secondary/25">
                  {row.left}
                </div>
                <div className="p-5 md:p-6 text-secondary font-medium">
                  {row.right}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── First Lesson ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionLabel number="03" label="First lesson" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-secondary tracking-[0.02em] leading-[0.92]"
            >
              WHAT TO EXPECT <br />
              <span className="text-primary">FIRST TIME OUT.</span>
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {firstLesson.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.0, delay: i * 0.08, ease: EASE }}
                className="bg-white p-7 md:p-10 rounded-xl border border-secondary/8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
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
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section id="faqs" className="py-20 md:py-32 bg-bg-page">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionLabel number="04" label="Questions" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-secondary tracking-[0.02em] leading-[0.92]"
            >
              COMMON <br />
              <span className="text-primary">QUESTIONS.</span>
            </motion.h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <FAQ items={faqs} hideHeader />
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
