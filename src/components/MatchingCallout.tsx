import { motion } from 'motion/react';
import { Users, Search, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MatchingCallout() {
  return (
    <section className="py-16 md:py-24 bg-secondary overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 skew-x-12 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 md:p-8 md:p-16 rounded-[3rem] text-center transform-gpu"
          >
            <div className="inline-flex items-center gap-3 px-4 md:px-6 py-2 bg-primary/20 text-primary rounded-full mb-8">
              <Users className="w-5 h-5" />
              <span className="text-sm font-black uppercase tracking-widest">Our Unique Match</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Not just a driving school, we find the <span className="text-primary italic">right instructor</span> for you.
            </h2>

            <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
              Finding a local instructor is hard. Finding one that actually fits your learning style is harder. 
              Our smart matching system connects you with the perfect professional within 1 week, guaranteed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-12">
              {[
                { icon: Search, text: "We scout our local network" },
                { icon: Users, text: "We verify matching availability" },
                { icon: LinkIcon, text: "We connect you directly" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-white font-bold text-sm uppercase tracking-wider">{item.text}</span>
                </div>
              ))}
            </div>

            <Link
              to="/get-matched"
              className="inline-flex px-8 py-4 sm:px-12 sm:py-6 bg-primary text-secondary font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-2xl shadow-primary/20"
            >
              Get Matched Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
