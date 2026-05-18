import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { MapPin } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/ui/SectionLabel';

const EASE = [0.22, 1, 0.36, 1] as const;

const regions = [
  {
    name: 'Manchester',
    desc: 'City centre and surrounding boroughs including Cheetham Hill, Didsbury, and Chorlton.',
  },
  {
    name: 'Salford',
    desc: 'Covering MediaCityUK, Eccles, Worsley, and Swinton with vetted local instructors.',
  },
  {
    name: 'Stockport',
    desc: 'Stockport town centre, Bramhall, Hazel Grove, and Edgeley, all covered.',
  },
  {
    name: 'Bolton',
    desc: 'Local tuition in Farnworth, Horwich, Westhoughton, and Little Lever.',
  },
  {
    name: 'Oldham & Rochdale',
    desc: 'Instructors across Oldham, Chadderton, Royton, and Rochdale town centre.',
  },
  {
    name: 'Trafford',
    desc: 'Altrincham, Sale, Stretford, and Urmston covered by our patient instructor team.',
  },
];

const boroughList = [
  'Manchester City Centre', 'Salford', 'Stockport', 'Bolton',
  'Oldham', 'Rochdale', 'Trafford', 'Bury', 'Wigan', 'Tameside',
  'Glossop', 'Altrincham', 'Sale', 'Wilmslow', 'Cheadle',
];

export default function AreasPage() {
  return (
    <div className="min-h-screen bg-bg-page">
      <SEO
        title="Driving Lessons in Manchester | Areas Covered"
        description="Driving lessons across Greater Manchester. Salford, Stockport, Bolton, Oldham, Trafford and every M-postcode."
        canonical="https://thepassguys.co.uk/areas"
      />
      <PageHero
        eyebrow="Coverage"
        title="Local instructors."
        accent="Near you."
        description="City centre to the suburbs, north to south. Our 150 instructors live and teach across every borough of Greater Manchester."
        primaryCta={{ label: 'Find My Instructor', href: '/get-matched' }}
        secondaryCta={{ label: 'See boroughs', href: '#regions' }}
        meta={['150+ instructors', '10 boroughs', '60+ test routes']}
      />

      {/* ── Featured Regions ────────────────────────────────────────────── */}
      <section id="regions" className="py-20 md:py-32 bg-bg-page">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionLabel number="01" label="Regions" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-secondary tracking-[0.02em] leading-[0.92]"
            >
              SIX BIG REGIONS. <br />
              <span className="text-primary">ALL COVERED.</span>
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.0, delay: i * 0.06, ease: EASE }}
                className="bg-white p-8 md:p-10 rounded-xl border border-secondary/8 group hover:bg-white/40 transition-colors duration-500"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-secondary text-[11px] font-bold font-accent">0{i + 1}</span>
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display text-secondary tracking-[0.01em] uppercase leading-tight mb-3">
                  {region.name}
                </h3>
                <p className="text-secondary leading-relaxed text-sm md:text-base">
                  {region.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Borough List ───────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-bg-page">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionLabel number="02" label="Every postcode" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-secondary tracking-[0.02em] leading-[0.92]"
            >
              COMPLETE <br />
              <span className="text-primary">POSTCODE COVERAGE.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.0, delay: 0.15, ease: EASE }}
              className="mt-6 text-secondary text-base md:text-lg leading-relaxed max-w-xl mx-auto"
            >
              Local instructors live and teach in every borough, so you learn the routes you will actually drive on.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: EASE }}
            className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
          >
            {boroughList.map((borough, i) => (
              <span key={borough} className="inline-flex items-center gap-3 text-secondary text-xs sm:text-sm font-semibold uppercase tracking-[0.18em]">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-secondary" /> {borough}
                </span>
                {i < boroughList.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-primary/60" aria-hidden="true" />
                )}
              </span>
            ))}
          </motion.div>

          <div className="mt-10 text-center text-secondary/80 text-[11px] uppercase tracking-[0.32em]">
            10 boroughs · Matched to your postcode
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
