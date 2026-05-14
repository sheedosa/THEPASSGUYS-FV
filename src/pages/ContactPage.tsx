import React, { useState } from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/ui/SectionLabel';

const EASE = [0.22, 1, 0.36, 1] as const;

const contactInfo = [
  { icon: Phone, label: 'Call', value: '0161 123 4567', sub: 'Mon to Fri · 8am – 8pm', href: 'tel:01611234567' },
  { icon: Mail, label: 'Email', value: 'hello@thepassguys.co.uk', sub: 'Replies within 2 hours', href: 'mailto:hello@thepassguys.co.uk' },
  { icon: MessageSquare, label: 'Live chat', value: 'Start a chat', sub: 'Available on our portal', href: '#chat' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-bg-page">
      <SEO
        title="Contact The Pass Guys | Manchester Support"
        description="Get in touch. New learners, current students, instructors looking to join. We answer within a working day."
        canonical="https://thepassguys.co.uk/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Talk to"
        accent="the guys."
        description="Phone, email, or pop a question through the form below. Mon to Fri, 8am till 8pm. We reply within a working day."
        primaryCta={{ label: 'Find My Instructor', href: '/get-matched' }}
        secondaryCta={{ label: 'Call us', href: 'tel:01611234567' }}
      />

      {/* ── Contact methods ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionLabel number="01" label="Reach us" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95]"
            >
              Three ways <br />
              <span className="text-primary">to say hi.</span>
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-secondary/10 border border-secondary/10 rounded-2xl overflow-hidden mb-16 md:mb-24">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.0, delay: i * 0.08, ease: EASE }}
                className="bg-bg-page p-8 md:p-10 hover:bg-white/40 transition-colors duration-500 group"
              >
                <div className="text-primary mb-5">
                  <info.icon className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-secondary/55 mb-2">
                  {info.label}
                </div>
                <div className="text-xl md:text-2xl font-normal text-secondary tracking-tight break-all group-hover:text-primary transition-colors">
                  {info.value}
                </div>
                <div className="text-sm text-secondary/55 mt-2 leading-relaxed">
                  {info.sub}
                </div>
              </motion.a>
            ))}
          </div>

          {/* ── Form ────────────────────────────────────────────────────── */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <SectionLabel number="02" label="Send a message" />
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, ease: EASE }}
                className="mt-6 text-3xl sm:text-4xl md:text-5xl font-medium text-secondary tracking-tighter leading-[0.95]"
              >
                Pop us a <span className="text-primary">message.</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, delay: 0.15, ease: EASE }}
              className="border border-secondary/10 rounded-2xl bg-bg-page p-6 md:p-10"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Your name" placeholder="John Doe" />
                    <Field label="Email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Phone" type="tel" placeholder="07123 456789" required={false} />
                    <SelectField
                      label="Enquiry type"
                      options={['General enquiry', 'Booking question', 'Intensive courses', 'Instructor partnership']}
                    />
                  </div>
                  <TextareaField label="Message" placeholder="Hey guys, I want to pass fast…" />

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-secondary text-sm font-semibold tracking-wide hover:brightness-105 hover:scale-[1.01] transition-all duration-300 shadow-sm"
                  >
                    Send message
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center space-y-5">
                  <div className="inline-flex w-16 h-16 rounded-full bg-primary text-secondary items-center justify-center mx-auto">
                    <Send className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-normal text-secondary tracking-tighter">
                    Message sent.
                  </h3>
                  <p className="text-secondary/65 max-w-sm mx-auto leading-relaxed">
                    We've received your inquiry and one of the guys will get back to you within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-medium text-secondary hover:text-primary transition-colors border-b border-secondary/20 hover:border-primary pb-0.5"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </motion.div>
          </div>

          {/* Base / location card */}
          <div className="max-w-3xl mx-auto mt-12 flex items-center justify-center gap-4 text-secondary/55">
            <span className="inline-block w-10 h-px bg-secondary/25" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.32em] flex items-center gap-2">
              <MapPin className="w-3 h-3 text-primary" /> Manchester Central · Covering Greater Manchester
            </span>
            <span className="inline-block w-10 h-px bg-secondary/25" aria-hidden="true" />
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Form primitives — minimal, hairline-bordered, primary green on focus
 * ───────────────────────────────────────────────────────────────────────── */
function Field({
  label,
  type = 'text',
  placeholder,
  required = true,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-secondary/55 mb-2">
        {label}
      </span>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white border border-secondary/15 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-secondary placeholder:text-secondary/30 outline-none transition-all"
      />
    </label>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-secondary/55 mb-2">
        {label}
      </span>
      <select className="w-full bg-white border border-secondary/15 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-secondary outline-none transition-all cursor-pointer">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({ label, placeholder }: { label: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-secondary/55 mb-2">
        {label}
      </span>
      <textarea
        required
        rows={4}
        placeholder={placeholder}
        className="w-full bg-white border border-secondary/15 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-secondary placeholder:text-secondary/30 outline-none transition-all resize-none"
      />
    </label>
  );
}
