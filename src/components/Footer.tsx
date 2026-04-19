import { Car } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="/" className="flex items-center space-x-3 mb-6 group">
                <div className="bg-primary px-2.5 py-1 rounded-lg font-black text-secondary flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    PG
                </div>
                <span className="text-2xl font-black tracking-tighter">
                    THE PASS GUYS
                </span>
            </a>
            <p className="text-white/40 leading-relaxed mb-8 font-medium">
              The UK's most energetic driving school. Making roads safer, one driver at a time.
            </p>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-primary">Services</h4>
            <ul className="space-y-4">
              <li><a href="/services/manual-lessons" className="text-white/60 hover:text-primary transition-colors font-bold">Manual Lessons</a></li>
              <li><a href="/services/automatic-lessons" className="text-white/60 hover:text-primary transition-colors font-bold">Automatic Lessons</a></li>
              <li><a href="/services/intensive-courses" className="text-white/60 hover:text-primary transition-colors font-bold">Intensive Courses</a></li>
              <li><a href="/lessons" className="text-white/60 hover:text-primary transition-colors font-bold italic underline">View All</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-primary">Company</h4>
            <ul className="space-y-4">
              <li><a href="/#about" className="text-white/60 hover:text-primary transition-colors font-bold">About Us</a></li>
              <li><a href="/instructors" className="text-white/60 hover:text-primary transition-colors font-bold">Instructors</a></li>
              <li><a href="/resources" className="text-white/60 hover:text-primary transition-colors font-bold">Resources</a></li>
              <li><a href="/faq" className="text-white/60 hover:text-primary transition-colors font-bold">FAQ</a></li>
              <li><a href="/contact" className="text-white/60 hover:text-primary transition-colors font-bold">Contact</a></li>
              <li><a href="/areas" className="text-white/60 hover:text-primary transition-colors font-bold">Areas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-primary">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6 font-medium">Join 5,000+ drivers getting our weekly safety tips.</p>
            <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
              <input type="email" placeholder="Email" className="bg-transparent border-none outline-none px-4 text-sm w-full text-white" />
              <button className="bg-primary text-secondary px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/20 font-black uppercase tracking-[0.3em]">
          <p>© 2026 THE PASS GUYS DRIVING SCHOOL. LEGENDS ONLY.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
