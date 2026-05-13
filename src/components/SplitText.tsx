import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  inView?: boolean;
}

/**
 * Splits a string by line break (\n) and reveals each line with a curtain mask.
 * Honors reduced-motion automatically via parent CSS reset.
 */
export default function SplitText({
  children,
  className = '',
  delay = 0,
  stagger = 0.08,
  as = 'span',
  inView = false,
}: SplitTextProps) {
  const lines = children.split('\n');
  const animateProp = inView ? undefined : { y: '0%' };
  const whileInViewProp = inView ? { y: '0%' } : undefined;

  const content: ReactNode = lines.map((line, i) => (
    <span key={i} className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
      <motion.span
        className="block will-change-transform"
        initial={{ y: '110%' }}
        animate={animateProp}
        whileInView={whileInViewProp}
        viewport={inView ? { once: true, amount: 0.4 } : undefined}
        transition={{
          duration: 1.0,
          ease: [0.16, 1, 0.3, 1],
          delay: delay + i * stagger,
        }}
      >
        {line || ' '}
      </motion.span>
    </span>
  ));

  if (as === 'h1') return <h1 className={className}>{content}</h1>;
  if (as === 'h2') return <h2 className={className}>{content}</h2>;
  if (as === 'h3') return <h3 className={className}>{content}</h3>;
  if (as === 'p') return <p className={className}>{content}</p>;
  return <span className={className}>{content}</span>;
}
