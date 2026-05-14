/**
 * Editorial section label — "01 — Services" with hairline rules.
 * Sits above every section heading to give the page a magazine-style structure.
 */
import { motion } from 'motion/react';

interface Props {
  number: string;           // "01", "02", etc
  label: string;            // "Services", "Process", etc
  align?: 'center' | 'left';
  tone?: 'light' | 'dark';  // dark sections (white text) vs light
}

export default function SectionLabel({ number, label, align = 'center', tone = 'light' }: Props) {
  const color = tone === 'light' ? 'text-secondary/45' : 'text-white/50';
  const rule = tone === 'light' ? 'bg-secondary/20' : 'bg-white/25';
  const justify = align === 'center' ? 'justify-center' : 'justify-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-4 mb-6 ${justify} ${color}`}
    >
      <span className={`inline-block w-8 h-px ${rule}`} aria-hidden="true" />
      <span className="text-[11px] font-medium uppercase tracking-[0.3em]">
        {number} <span className="opacity-60">— {label}</span>
      </span>
      <span className={`inline-block w-8 h-px ${rule}`} aria-hidden="true" />
    </motion.div>
  );
}
