import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Footer — pared down to the minimum for v1.
 * No nav links to pages that don't exist yet. Just brand, a final CTA
 * to the form, and legal lines.
 */
export default function Footer() {
  return (
    <footer className="py-16 md:py-20 bg-secondary text-white">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-12 items-center">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <span className="bg-primary px-2.5 py-1 rounded-lg font-black text-secondary group-hover:scale-110 transition-transform">
                PG
              </span>
              <span className="text-2xl font-black tracking-tighter">
                THE PASS GUYS
              </span>
            </Link>
            <p className="text-white/50 leading-relaxed font-medium max-w-sm">
              DVSA-approved driving instructors across Greater Manchester.
              Pass fast. Drive Smart.
            </p>
          </div>

          {/* Final CTA */}
          <div className="md:text-right">
            <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-3">
              Ready to start?
            </p>
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-secondary font-black uppercase tracking-widest rounded-full text-sm hover:bg-white transition-colors"
            >
              Book Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] text-white/30 font-black uppercase tracking-[0.3em]">
          <p>© 2026 The Pass Guys · Greater Manchester</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
