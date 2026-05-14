/**
 * Animated headline reveal — splits on spaces and reveals each word with a
 * masked translateY. Use for hero + section H2s when you want a premium feel.
 *
 * Pass an array of segments where each segment is either:
 *  - { text: 'Our core' }                                 (plain)
 *  - { text: 'services.', accent: true }                  (Instrument Serif italic, primary green)
 *
 * The component renders a single H2/H1 (configurable via `as`).
 */
import { motion } from 'motion/react';
import type { ElementType } from 'react';

type Segment = { text: string; accent?: boolean };

interface Props {
  segments: Segment[];
  as?: ElementType;
  className?: string;
  /** Delay before the first word animates (s). */
  delay?: number;
}

const wordVariants = {
  hidden: { y: '110%' },
  visible: { y: '0%' },
};

export default function WordReveal({
  segments,
  as: Tag = 'h2',
  className = '',
  delay = 0,
}: Props) {
  // Build a flat list of words with their accent flag preserved.
  const words: Array<{ word: string; accent: boolean; key: string }> = [];
  segments.forEach((seg, segIdx) => {
    seg.text.split(/\s+/).filter(Boolean).forEach((word, wIdx) => {
      words.push({ word, accent: !!seg.accent, key: `${segIdx}-${wIdx}` });
    });
  });

  return (
    <Tag className={className}>
      {words.map(({ word, accent, key }, i) => (
        <span
          key={key}
          className="inline-block overflow-hidden align-baseline"
          style={{ paddingBottom: '0.1em', marginBottom: '-0.1em' }}
        >
          <motion.span
            className={`inline-block ${
              accent ? 'font-serif italic text-primary font-normal' : ''
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={wordVariants}
            transition={{
              duration: 1.1,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 && ' '}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
