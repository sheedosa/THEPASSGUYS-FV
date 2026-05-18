import { Phone, Mail, MessageSquare, Instagram, Facebook, Twitter } from 'lucide-react';
import PrefetchLink from './PrefetchLink';
// Hover/focus/tap on a footer link prefetches the destination chunk.
const Link = PrefetchLink;

export default function Footer() {
  return (
    <footer className="relative z-30 py-12 md:py-24 bg-secondary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-20">
          <div className="col-span-1">
            <Link to="/" className="mb-6 block">
              <img src="/logo.png" alt="The Pass Guys" className="h-12 w-auto" loading="lazy" />
            </Link>
            <p className="text-white leading-relaxed font-medium max-w-xs">
              We pair Manchester learners with vetted local instructors. Manual or auto. Single lessons or full courses. Pass the test, drive away.
            </p>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] mb-8 text-primary">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/manual-lessons" className="text-white/90 hover:text-primary transition-colors font-bold text-sm">Manual Lessons</Link></li>
              <li><Link to="/services/automatic-lessons" className="text-white/90 hover:text-primary transition-colors font-bold text-sm">Automatic Lessons</Link></li>
              <li><Link to="/services/beginner-lessons" className="text-white/90 hover:text-primary transition-colors font-bold text-sm">Beginner Lessons</Link></li>
              <li><Link to="/services/refresher-lessons" className="text-white/90 hover:text-primary transition-colors font-bold text-sm">Refresher Lessons</Link></li>
              <li><Link to="/services/intensive-fast-track" className="text-white/90 hover:text-primary transition-colors font-bold text-sm">Intensive / Fast-Track</Link></li>
              <li><Link to="/pricing" className="text-secondary bg-primary px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest inline-block mt-2">Courses & Packages</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] mb-8 text-primary">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/90 hover:text-primary transition-colors font-bold text-sm">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-white/90 hover:text-primary transition-colors font-bold text-sm">How It Works</Link></li>
              <li><Link to="/areas" className="text-white/90 hover:text-primary transition-colors font-bold text-sm">Areas We Cover</Link></li>
              <li><Link to="/reviews" className="text-white/90 hover:text-primary transition-colors font-bold text-sm">Reviews</Link></li>
              <li><Link to="/faq" className="text-white/90 hover:text-primary transition-colors font-bold text-sm">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] mb-8 text-primary">Contact</h4>
            <ul className="space-y-5">
              <li>
                <a href="tel:01234567890" className="flex items-center gap-3 text-white/90 hover:text-primary transition-colors font-bold text-sm">
                  <Phone className="w-4 h-4" /> 01234 567 890
                </a>
              </li>
              <li>
                <a href="mailto:hello@thepassguys.co.uk" className="flex items-center gap-3 text-white/90 hover:text-primary transition-colors font-bold text-sm">
                  <Mail className="w-4 h-4" /> hello@thepassguys.co.uk
                </a>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-3 text-white/90 hover:text-primary transition-colors font-bold text-sm">
                  <MessageSquare className="w-4 h-4" /> Contact Form
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] text-white/60 font-black uppercase tracking-widest">
          <p>© {new Date().getFullYear()} The Pass Guys · All Rights Reserved.</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
