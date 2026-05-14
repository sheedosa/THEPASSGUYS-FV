import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { Briefcase, Users, ShieldCheck, Clock, Car, UserPlus, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';
import FinalCTA from '../components/FinalCTA';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/ui/SectionLabel';

const EASE = [0.22, 1, 0.36, 1] as const;

const benefits = [
  { icon: Clock, title: 'Flexible work', desc: 'Work when you want. Total control over your diary and student load.' },
  { icon: Users, title: 'Consistent students', desc: 'High-energy marketing keeps your diary as full as you need it.' },
  { icon: ShieldCheck, title: 'Support system', desc: 'Dedicated instructor support handling bookings, billing, logistics.' },
];

const standards = [
  { icon: ShieldCheck, title: 'ADI qualified', desc: 'We work with fully qualified ADIs only. No PDIs, no shortcuts.' },
  { icon: Car, title: 'Your own car', desc: 'Use your own vehicle or lease a modern Mini Cooper through our fleet partner scheme.' },
];

export default function InstructorsPage() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    carType: 'manual',
    availability: 'full-time',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-bg-page">
      <SEO
        title="Become a Driving Instructor Manchester | Join the Network"
        description="Are you an ADI in Greater Manchester? Join The Pass Guys for a steady stream of local students."
        canonical="https://thepassguys.co.uk/instructors"
      />
      <PageHero
        eyebrow="Instructors"
        title="Teach more."
        accent="Admin less."
        description="Bring your ADI badge. We bring the students. Keep your own pricing, your own diary, your own car — we just match you with local learners."
        primaryCta={{ label: 'Apply to join', href: '#apply' }}
        secondaryCta={{ label: 'See benefits', href: '#benefits' }}
        meta={['Local students only', 'No franchise fee', 'You set the price']}
      />

      {/* ── About the network ───────────────────────────────────────────── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel number="01" label="The network" align="left" />
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, ease: EASE }}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-medium text-secondary tracking-tighter leading-[0.95]"
              >
                A driving school <br />
                <span className="text-primary">built for instructors.</span>
              </motion.h2>
              <p className="mt-6 text-secondary/65 text-base md:text-lg leading-relaxed">
                The Pass Guys isn't another franchise. We're a technology-first platform that puts instructors in the driver's seat of their own careers.
              </p>
              <p className="mt-4 text-secondary/65 text-base md:text-lg leading-relaxed">
                We handle the marketing, student screening, and automated bookings — so you can focus on delivery and student success.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-secondary/10 border border-secondary/10 rounded-2xl overflow-hidden">
              <div className="bg-secondary text-white p-7 md:p-8">
                <Briefcase className="w-5 h-5 text-primary mb-4" />
                <h4 className="text-lg md:text-xl font-normal mb-2">Modern franchise</h4>
                <p className="text-white/65 text-sm leading-relaxed">Low weekly fees and zero commission on your lesson rates.</p>
              </div>
              <div className="bg-bg-page p-7 md:p-8">
                <UserPlus className="w-5 h-5 text-primary mb-4" />
                <h4 className="text-lg md:text-xl font-normal text-secondary mb-2">Instant scale</h4>
                <p className="text-secondary/65 text-sm leading-relaxed">Access a pool of 500+ active learners waiting for tuition in Manchester.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ────────────────────────────────────────────────────── */}
      <section id="benefits" className="py-20 md:py-32 bg-bg-page">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionLabel number="02" label="Why us" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95]"
            >
              The good <br />
              <span className="text-primary">stuff.</span>
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-secondary/10 border border-secondary/10 rounded-2xl overflow-hidden">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.0, delay: i * 0.08, ease: EASE }}
                className="bg-bg-page p-8 md:p-10"
              >
                <div className="text-primary mb-5">
                  <b.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-normal text-secondary tracking-tight mb-2">
                  {b.title}
                </h3>
                <p className="text-secondary/65 leading-relaxed text-sm md:text-base">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standards (dark) ────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionLabel number="03" label="Standards" tone="dark" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tighter leading-[0.95]"
            >
              Join the <br />
              <span className="text-primary">network.</span>
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {standards.map((s) => (
              <div key={s.title} className="bg-secondary p-7 md:p-10">
                <div className="text-primary mb-4">
                  <s.icon className="w-5 h-5" />
                </div>
                <h4 className="text-xl md:text-2xl font-normal text-white tracking-tight mb-2">
                  {s.title}
                </h4>
                <p className="text-white/65 leading-relaxed text-sm md:text-base">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Apply ───────────────────────────────────────────────────────── */}
      <section id="apply" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — pitch */}
            <div>
              <SectionLabel number="04" label="Apply" align="left" />
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, ease: EASE }}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-medium text-secondary tracking-tighter leading-[0.95]"
              >
                Start your <br />
                <span className="text-primary">next chapter.</span>
              </motion.h2>
              <p className="mt-6 text-secondary/65 text-base md:text-lg leading-relaxed">
                Fill out the form and a member of our partnership team will be in touch within 24 hours to discuss onboarding.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  'M1 – M99 postcode exposure',
                  'Steady lead flow week to week',
                  'Your own success manager',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-secondary/80 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, delay: 0.15, ease: EASE }}
              className="border border-secondary/10 rounded-2xl bg-bg-page p-6 md:p-10"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field
                    label="Full name"
                    value={formData.name}
                    onChange={(v) => setFormData({ ...formData, name: v })}
                    placeholder="Your name"
                  />
                  <Field
                    label="Primary location"
                    value={formData.location}
                    onChange={(v) => setFormData({ ...formData, location: v })}
                    placeholder="e.g. Stockport"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <SelectField
                      label="Car type"
                      value={formData.carType}
                      onChange={(v) => setFormData({ ...formData, carType: v })}
                      options={[
                        { value: 'manual', label: 'Manual' },
                        { value: 'automatic', label: 'Automatic' },
                      ]}
                    />
                    <SelectField
                      label="Availability"
                      value={formData.availability}
                      onChange={(v) => setFormData({ ...formData, availability: v })}
                      options={[
                        { value: 'full-time', label: 'Full-time' },
                        { value: 'part-time', label: 'Part-time' },
                        { value: 'ev-only', label: 'Eve/Weekend' },
                      ]}
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-secondary text-sm font-semibold tracking-wide hover:brightness-105 hover:scale-[1.01] transition-all duration-300 shadow-sm"
                  >
                    Apply to join
                    <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-5">
                  <div className="inline-flex w-16 h-16 rounded-full bg-primary text-secondary items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-normal text-secondary tracking-tighter">
                    Application sent.
                  </h3>
                  <p className="text-secondary/65 max-w-sm mx-auto leading-relaxed">
                    Thanks, {formData.name || 'mate'}. Our team will call you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-medium text-secondary hover:text-primary transition-colors border-b border-secondary/20 hover:border-primary pb-0.5"
                  >
                    Go back
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}

/* ── Form primitives ───────────────────────────────────────────────────── */
function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-secondary/55 mb-2">
        {label}
      </span>
      <input
        required
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white border border-secondary/15 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-secondary placeholder:text-secondary/30 outline-none transition-all"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-secondary/55 mb-2">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-secondary/15 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-secondary outline-none transition-all cursor-pointer"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  );
}
