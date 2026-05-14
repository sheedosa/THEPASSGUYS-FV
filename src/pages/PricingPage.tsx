import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { Wallet, ShieldCheck, CheckCircle2, Clock, Sparkles, Check } from 'lucide-react';
import Pricing from '../components/Pricing';
import FinalCTA from '../components/FinalCTA';
import FAQ from '../components/FAQ';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/ui/SectionLabel';

const EASE = [0.22, 1, 0.36, 1] as const;

const trustPoints = [
  { icon: Wallet, title: 'No upfront thousands', desc: "Pay as you go, or block-book to save. No locking in £2,000 on day one." },
  { icon: CheckCircle2, title: 'Small deposits', desc: 'Secure an intensive course with just a fraction of the total cost.' },
  { icon: ShieldCheck, title: 'Vetted instructors', desc: 'Every instructor is DVSA-approved and reviewed after every lesson.' },
];

const features = [
  'Fully insured vehicles',
  'Modern dual controls',
  'Free theory app access',
  'Choice of instructor',
  'Block-booking discounts',
  'Student portal access',
];

const pricingFaqs = [
  { q: 'Are there any hidden fees?', a: "No. The price you see is the price you pay. We don't charge admin fees for matching." },
  { q: 'Do you offer student discounts?', a: "Our block-booked Standard Course saves £30 versus pay-as-you-go. That's our student deal." },
  { q: 'What if I need to cancel?', a: 'Free reschedule with 48 hours\' notice through your student portal.' },
  { q: 'Can I pay my instructor directly?', a: 'All payments go through our secure system, which keeps your money protected and your deposit guaranteed.' },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-bg-page">
      <SEO
        title="Driving Lesson Prices Manchester | Blocks & Intensive"
        description="Honest, upfront pricing for driving lessons across Greater Manchester. Manual, automatic, block-bookings and intensive courses."
        canonical="https://thepassguys.co.uk/pricing"
      />
      <PageHero
        eyebrow="Pricing"
        title="Honest pricing."
        accent="No hidden fees."
        description="The price you see is the price you pay. Block-book to save up to £30. Free 48-hour cancellation."
        primaryCta={{ label: 'Find My Instructor', href: '/get-matched' }}
        secondaryCta={{ label: 'See plans', href: '#pricing-plans' }}
        meta={['Block-booking discounts', 'No upfront thousands', 'Test fee at cost']}
      />

      {/* Pricing plans */}
      <Pricing id="pricing-plans" />

      {/* ── Trust points ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionLabel number="02" label="Why it's fair" tone="dark" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tighter leading-[0.95]"
            >
              No surprises. <br />
              <span className="text-primary">Just driving.</span>
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {trustPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.0, delay: i * 0.08, ease: EASE }}
                className="bg-secondary p-8 md:p-10"
              >
                <div className="text-primary mb-4">
                  <point.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-normal text-white tracking-tighter mb-2">
                  {point.title}
                </h3>
                <p className="text-white/65 leading-relaxed text-sm md:text-base">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's included ────────────────────────────────────────────── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel number="03" label="What's included" align="left" />
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, ease: EASE }}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-medium text-secondary tracking-tighter leading-[0.95]"
              >
                Everything you need. <br />
                <span className="text-primary">Nothing you don't.</span>
              </motion.h2>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-normal text-secondary tracking-tight">Total flexibility</h4>
                    <p className="text-secondary/65 text-sm md:text-base leading-relaxed mt-1">
                      Cancel or reschedule lessons through your student portal, free with 48 hours notice.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-normal text-secondary tracking-tight">Modern fleet</h4>
                    <p className="text-secondary/65 text-sm md:text-base leading-relaxed mt-1">
                      Latest dual-control cars with full safety features and climate control.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-secondary/10 border border-secondary/10 rounded-2xl overflow-hidden">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: i * 0.05, ease: EASE }}
                  className="bg-bg-page p-5 md:p-6 flex items-center gap-3"
                >
                  <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={3} />
                  <span className="text-sm text-secondary/85 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing-specific FAQ */}
      <section className="py-20 md:py-32 bg-bg-page">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionLabel number="04" label="Pricing questions" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95]"
            >
              Quick <br />
              <span className="text-primary">answers.</span>
            </motion.h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <FAQ id="pricing-faq" items={pricingFaqs} hideHeader />
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
