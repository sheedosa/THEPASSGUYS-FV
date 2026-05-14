import { motion } from 'motion/react';
import { Users, Search, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLabel from './ui/SectionLabel';

export default function MatchingCallout() {
  return (
    <section className="py-20 md:py-32 bg-secondary overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 skew-x-12 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionLabel number="04" label="Matching" tone="dark" />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/5 border border-white/10 p-8 md:p-16 rounded-[3rem] text-center"
          >
            <div className="inline-flex items-center gap-3 px-4 md:px-5 py-2 bg-primary/15 text-primary rounded-full mb-8">
              <Users className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">How matching works</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tighter leading-[0.95] mb-8">
              Not just a driving school, we find the <span className="text-primary">right instructor</span> for you.
            </h2>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
              Finding a local instructor is hard. Finding one who teaches the way you actually learn is harder still. Tell us how you tick — we sort the rest within a week.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-12">
              {[
                { icon: Search, text: "Search our local network" },
                { icon: Users, text: "Check instructor availability" },
                { icon: LinkIcon, text: "Put you in touch directly" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-white font-medium text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <Link
              to="/get-matched"
              className="inline-flex px-7 py-3.5 sm:px-9 sm:py-4 bg-primary text-secondary font-medium rounded-full hover:scale-[1.03] transition-transform duration-700 shadow-ambient-lg shadow-primary/20"
            >
              Get matched now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
