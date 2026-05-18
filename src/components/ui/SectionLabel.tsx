/**
 * Editorial section label — "01 — Services" with hairline rules.
 * Sits above every section heading to give the page a magazine-style structure.
 * Number displayed in a small yellow badge for visibility on light backgrounds.
 */
import { motion } from 'motion/react';

interface Props {
  number: string;           // "01", "02", etc
  label: string;            // "Services", "Process", etc
  align?: 'center' | 'left';
  tone?: 'light' | 'dark';  // dark sections (white text) vs light
}

export default function SectionLabel({ number, label, align = 'center', tone = 'light' }: Props) {
  const isLight = tone === 'light';
  const justify = align === 'center' ? 'justify-center' : 'justify-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-4 mb-6 ${justify}`}
    >
      <span className={`inline-block w-8 h-px ${isLight ? 'bg-secondary/15' : 'bg-white/20'}`} aria-hidden="true" />
      <span className="flex items-center gap-2.5">
        <span
          className={`inline-flex items-center justify-center w-7 h-7 rounded-md text-[10px] font-bold font-accent ${
            isLight
              ? 'bg-primary text-secondary'
              : 'bg-primary/20 text-primary'
          }`}
        >
          {number}
        </span>
        <span
          className={`font-accent text-[11px] font-semibold uppercase tracking-[0.3em] ${
            isLight ? 'text-secondary/80' : 'text-white/80'
          }`}
        >
          {label}
        </span>
      </span>
      <span className={`inline-block w-8 h-px ${isLight ? 'bg-secondary/15' : 'bg-white/20'}`} aria-hidden="true" />
    </motion.div>
  );
}
