import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import SectionLabel from '../components/ui/SectionLabel';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? services[slug] : null;

  if (!service) {
    return <Navigate to="/lessons" replace />;
  }

  return (
    <div className="min-h-screen bg-bg-page">
      <SEO
        title={`${service.title} Manchester | The Pass Guys`}
        description={service.description}
        canonical={`https://thepassguys.co.uk/services/${slug}`}
        image={service.heroImage}
      />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: EASE }}
          >
            <div className="hero-fade hero-fade-delay-1 flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center text-secondary/55">
              <span className="inline-block w-8 sm:w-10 h-px bg-secondary/30" aria-hidden="true" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.32em]">
                Specialist tuition
              </span>
              <span className="inline-block w-8 sm:w-10 h-px bg-secondary/30" aria-hidden="true" />
            </div>

            <h1 className="leading-[0.85] mb-6 sm:mb-8 md:mb-10">
              <span className="block overflow-hidden pb-[0.1em]">
                <span className="hero-line hero-line-1 block font-display text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-light text-secondary/40">
                  {service.title}
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.1em]">
                <span
                  className="hero-line hero-line-2 block font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold text-primary"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {service.subtitle}
                </span>
              </span>
            </h1>

            <p className="hero-fade hero-fade-delay-2 text-base md:text-lg text-secondary/65 leading-relaxed max-w-xl mb-8 mx-auto">
              {service.description}
            </p>

            <div className="hero-fade hero-fade-delay-3 flex items-center gap-3 justify-center flex-wrap">
              <Link
                to="/get-matched"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-secondary text-sm font-semibold tracking-wide hover:brightness-105 hover:scale-[1.02] transition-all duration-300 shadow-sm"
              >
                Find My Instructor
                <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.32em] px-4 py-2 rounded-full border border-secondary/15 text-secondary/70">
                {service.pricingHint}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Who it's for + Benefits ─────────────────────────────────────── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Who it's for — dark card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="rounded-2xl bg-secondary text-white p-8 md:p-10"
            >
              <SectionLabel number="01" label="Who it's for" align="left" tone="dark" />
              <h2 className="mt-6 text-3xl md:text-4xl font-medium text-white tracking-tighter leading-[1.05] mb-8">
                Built for <span className="text-primary">learners like you.</span>
              </h2>
              <ul className="space-y-4">
                {service.whoItIsFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <div>
              <SectionLabel number="02" label="What you get" align="left" />
              <h2 className="mt-6 text-3xl md:text-4xl font-medium text-secondary tracking-tighter leading-[1.05] mb-10">
                Why it <span className="text-primary">works.</span>
              </h2>
              <div className="space-y-8">
                {service.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
                    className="flex items-start gap-5"
                  >
                    <div className="text-primary mt-1">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-normal text-secondary tracking-tight mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-secondary/65 leading-relaxed text-sm md:text-base">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing hint ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-bg-page">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel number="03" label="Pricing" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95]"
            >
              Honest <span className="text-primary">pricing.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.0, delay: 0.15, ease: EASE }}
              className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/5 border border-secondary/10 text-secondary text-sm font-medium"
            >
              {service.pricingHint}
            </motion.div>

            <p className="text-secondary/65 mt-6 leading-relaxed max-w-lg mx-auto">
              All our rates are transparent. No hidden booking or admin fees. Flexible payment options to suit your budget.
            </p>

            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-full border border-secondary/20 text-secondary text-sm font-medium hover:bg-secondary/5 transition-colors duration-300"
            >
              View full pricing
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQs ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionLabel number="04" label="Questions" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95]"
            >
              Common <br />
              <span className="text-primary">questions.</span>
            </motion.h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <FAQ id="service-faq" items={service.faqs} hideHeader />
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
