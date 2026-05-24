import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Footer — pared down to the minimum for v1.
 * No nav links to pages that don't exist yet. Just brand, a final CTA
 * to the form, and legal lines.
 */
export default function Footer() {
  return (
    <footer className="pt-16 md:pt-20 pb-28 lg:pb-20 bg-secondary text-white">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-12 items-center">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center mb-5 group" aria-label="The Pass Guys — Home">
              <img
                src="/logo-sm.png"
                alt="The Pass Guys"
                width="800"
                height="450"
                className="h-20 md:h-24 w-auto group-hover:scale-105 transition-transform"
                loading="lazy"
                decoding="async"
              />
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

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 font-black uppercase tracking-[0.2em]">
          <p>© 2026 The Pass Guys · Greater Manchester</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
