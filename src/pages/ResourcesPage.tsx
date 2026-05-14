import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { ExternalLink, BookOpen, Lightbulb, ClipboardCheck, ArrowRight, Shield } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';
import PageHero from '../components/PageHero';
import SectionLabel from '../components/ui/SectionLabel';

const EASE = [0.22, 1, 0.36, 1] as const;

const sections = [
  {
    title: 'DVSA official',
    icon: Shield,
    description: 'Official government resources for your driving journey.',
    items: [
      { name: 'Book theory test', url: 'https://www.gov.uk/book-theory-test' },
      { name: 'Book practical test', url: 'https://www.gov.uk/book-driving-test' },
      { name: 'Manage your booking', url: 'https://www.gov.uk/change-driving-test' },
      { name: 'Highway Code online', url: 'https://www.gov.uk/guidance/the-highway-code' },
    ],
  },
  {
    title: 'Theory test',
    icon: BookOpen,
    description: 'Master the signs, rules, and hazard perception.',
    items: [
      { name: 'Top 10 theory apps', url: '#' },
      { name: 'Hazard perception guide', url: '#' },
      { name: 'Common signs cheat sheet', url: '#' },
      { name: 'Mock theory tests', url: '#' },
    ],
  },
  {
    title: 'Driving tips',
    icon: Lightbulb,
    description: 'Practical advice from our network of expert ADIs.',
    items: [
      { name: 'Perfecting the parallel park', url: '#' },
      { name: 'Roundabouts made easy', url: '#' },
      { name: 'Economical driving habits', url: '#' },
      { name: 'Night driving essentials', url: '#' },
    ],
  },
  {
    title: 'Test prep',
    icon: ClipboardCheck,
    description: 'What to expect on your big day.',
    items: [
      { name: '"Show me, tell me" Q&A', url: '#' },
      { name: 'Test day checklist', url: '#' },
      { name: 'Managing test nerves', url: '#' },
      { name: 'Common failing mistakes', url: '#' },
    ],
  },
];

const posts = [
  { title: '5 cold-weather driving secrets', date: 'Jan 12', category: 'Safety', img: 'https://picsum.photos/seed/winter/600/400' },
  { title: 'How to master high-speed merging', date: 'Feb 04', category: 'Motorway', img: 'https://picsum.photos/seed/merging/600/400' },
  { title: 'The 2024 practical test update', date: 'Mar 22', category: 'Industry', img: 'https://picsum.photos/seed/test/600/400' },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-bg-page">
      <SEO
        title="Driving Resources & Theory Help | The Pass Guys"
        description="Theory test prep, practical driving tips, official DVSA links and learner guides."
        canonical="https://thepassguys.co.uk/resources"
      />
      <PageHero
        eyebrow="Resources"
        title="Pass theory."
        accent="Pass practical."
        description="Hand-picked guides and official DVSA links. Everything we wish someone had told us when we started driving."
        primaryCta={{ label: 'Find My Instructor', href: '/get-matched' }}
        secondaryCta={{ label: 'Browse guides', href: '#guides' }}
      />

      {/* ── Resource columns ───────────────────────────────────────────── */}
      <section id="guides" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionLabel number="01" label="Toolkit" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95]"
            >
              Everything <br />
              <span className="text-primary">in one place.</span>
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-secondary/10 border border-secondary/10 rounded-2xl overflow-hidden">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.0, delay: i * 0.08, ease: EASE }}
                className="bg-bg-page p-8 md:p-10"
              >
                <div className="text-primary mb-5">
                  <section.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-normal text-secondary tracking-tight mb-2">
                  {section.title}
                </h3>
                <p className="text-secondary/65 leading-relaxed text-sm md:text-base mb-6">
                  {section.description}
                </p>

                <ul className="divide-y divide-secondary/10 border-t border-secondary/10">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.url}
                        target={item.url.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 group/item hover:text-primary transition-colors"
                      >
                        <span className="text-sm font-medium text-secondary/80 group-hover/item:text-primary transition-colors">
                          {item.name}
                        </span>
                        <span className="text-secondary/40 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all">
                          {item.url.startsWith('http')
                            ? <ExternalLink className="w-3.5 h-3.5" />
                            : <ArrowRight className="w-3.5 h-3.5" />}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog-style tips ────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 bg-bg-page">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <SectionLabel number="02" label="From instructors" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95]"
            >
              Latest from <br />
              <span className="text-primary">our instructors.</span>
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.0, delay: i * 0.08, ease: EASE }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-5 relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-secondary/45 mb-2">
                  {post.date}
                </div>
                <h3 className="text-xl md:text-2xl font-normal text-secondary tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
