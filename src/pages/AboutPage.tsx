import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Target, Users, MapPin, Clock3, Award, CheckCircle, ShieldCheck, Car } from 'lucide-react';
import PageHero from '../components/PageHero';

const stats = [
  { label: 'Licensed Instructors', value: '150+', icon: Award },
  { label: 'Learners Matched', value: '5,000+', icon: Users },
  { label: 'Areas Covered', value: '12+', icon: MapPin },
  { label: 'Years Operating', value: '5+', icon: Clock3 },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About · The Pass Guys"
        title="We make learning"
        accent="actually fun."
        description="We started because finding a decent driving instructor in Manchester was painful. Now we match learners with vetted local pros, in under a week."
        primaryCta={{ label: 'Meet the team', href: '#story' }}
        secondaryCta={{ label: 'Get matched', href: '/get-matched' }}
        meta={['5,000+ learners', '150+ instructors', '12 boroughs covered']}
      />

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-bg-page">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-[2.5rem] bg-bg-page p-12 border border-slate-100 shadow-xl shadow-black/5">
            <h2 className="text-4xl font-black text-secondary uppercase tracking-tighter mb-8">Our Story</h2>
            <div className="prose prose-lg prose-secondary font-medium text-secondary/70">
              <p>
                The traditional driving school model is broken. It’s hard to book, instructors are often fully booked or not nearby, and there’s zero transparency. We built The Pass Guys to fix this.
              </p>
              <p>
                We wanted a solution that felt like 2026, not 1996. Our platform doesn't just list instructors; it intelligently matches learners with vetted, local professionals who have the right availability and teaching style. No more endless phone calls, no more waiting lists, just a streamlined journey to your license.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-primary text-secondary text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Our Mission</h2>
          <p className="text-2xl md:text-3xl font-bold max-w-3xl mx-auto">
            "To make learning to drive straightforward, affordable, and actually enjoyable, with an instructor who's right for you."
          </p>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-16 md:py-24 bg-bg-page">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 md:p-10 rounded-[2.5rem] text-center border border-slate-100 shadow-xl shadow-black/5 transform-gpu"
              >
                <div className="w-16 h-16 bg-secondary text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-5xl font-black text-secondary mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-secondary/60 font-black uppercase tracking-widest text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-16 md:py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 md:mb-16 text-center">Our Vetted Instructors</h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto text-lg font-medium">
                {[
                    { title: "DVSA Approved", desc: "Every instructor on our books is a fully qualified ADI." },
                    { title: "DBS Checked", desc: "Clear background checks are non-negotiable. Everyone passes one." },
                    { title: "Regular Reviews", desc: "Learner feedback comes in after every lesson. We act on it." },
                    { title: "Manual & Auto", desc: "Whichever you choose, we have a specialist ready to teach you." }
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-2xl">
                        <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
                        <div>
                            <h4 className="font-black text-xl mb-2">{item.title}</h4>
                            <p className="text-white/60">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-bg-page text-center">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter mb-8 md:mb-12">Ready to meet your instructor?</h2>
            <Link 
              to="/get-matched"
              className="inline-flex px-8 py-4 sm:px-12 sm:py-6 bg-primary text-secondary font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-2xl shadow-primary/20"
            >
              Get Matched
            </Link>
        </div>
      </section>
    </div>
  );
}
