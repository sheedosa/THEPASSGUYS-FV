import { motion } from 'motion/react';

const STATS = [
  { value: '150+', label: 'Instructors' },
  { value: '2k+', label: 'Yearly Passes' },
  { value: '98%', label: 'Success Rate' },
];

export default function AboutNetwork({ id }: { id?: string }) {
  return (
    <section id={id} className="py-16 md:py-24 overflow-hidden relative">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-square rounded-3xl border-4 border-secondary overflow-hidden shadow-[6px_6px_0_var(--color-primary)]">
              <img
                src="https://lh3.googleusercontent.com/d/11kz4nB8sf460elOszR57yumL_vzsuTJA"
                alt="Pass Guys instructors with students"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/40 to-transparent flex items-end p-7 md:p-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                    Our instructor
                    <br />
                    <span className="text-primary">network.</span>
                  </h3>
                  <p className="text-white/70 font-bold uppercase tracking-widest text-[10px] mt-3">
                    150+ professional coaches
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy block */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">
              The Network
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-6 text-balance">
              Built on instructors,{' '}
              <span className="text-primary">not marketing.</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-lg">
              The Pass Guys was founded as a driving school first. Today, our
              network spans the North West, powered by instructors who care
              about teaching safe, confident driving.
            </p>

            {/* Stats — single grid for perfect alignment */}
            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
              {STATS.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <p className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary tracking-tighter leading-none">
                    {s.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-black uppercase tracking-widest mt-2 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
