import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-secondary overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[1] mb-8">
            Ready to start? <br /> Book your first <span className="text-primary italic">lesson today.</span>
          </h2>
          <p className="text-white/60 text-lg font-medium mb-12 max-w-xl mx-auto">
            Take the first step towards independence. Manchester's modern way to learn to drive is just a click away.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/driving-lessons"
              className="w-full sm:w-auto px-12 py-6 bg-primary text-secondary font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-2xl shadow-primary/20"
            >
              Book a Lesson
            </Link>
            <Link 
              to="/get-matched"
              className="w-full sm:w-auto px-12 py-6 bg-white/5 text-white border border-white/20 font-black uppercase tracking-widest rounded-full hover:bg-white/10 transition-all"
            >
              Get Matched
            </Link>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-white/40 font-black uppercase tracking-widest text-[10px]">
             <span>No Waiting List</span>
             <span className="w-1 h-1 bg-primary rounded-full" />
             <span>Vetted Instructors</span>
             <span className="w-1 h-1 bg-primary rounded-full" />
             <span>Modern Fleet</span>
          </div>
        </div>
      </div>
    </section>
  );
}
