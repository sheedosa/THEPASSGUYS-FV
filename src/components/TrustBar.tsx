import { Zap, Wallet, MapPin, ShieldCheck, Car, Timer, Calendar, Sparkles } from 'lucide-react';

/**
 * Trust bar — slow continuous left-scroll marquee of credibility points.
 * The list is duplicated twice in the DOM so the seam is invisible as it loops.
 * Premium feel: always-on motion, reads as a wire ticker, not a marketing row.
 */
const ITEMS = [
  { icon: ShieldCheck, text: 'DVSA-approved instructors' },
  { icon: Zap, text: 'Pass in weeks, not months' },
  { icon: Timer, text: 'Matched in 7 days' },
  { icon: Wallet, text: 'No upfront blocks' },
  { icon: Car, text: 'Manual & automatic' },
  { icon: MapPin, text: 'Across Greater Manchester' },
  { icon: Calendar, text: 'Flexible weekday & weekend slots' },
  { icon: Sparkles, text: 'Modern dual-control cars' },
];

const Row = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <ul
    aria-hidden={ariaHidden}
    className="flex items-center gap-12 md:gap-16 pr-12 md:pr-16 shrink-0"
  >
    {ITEMS.map((item, i) => {
      const Icon = item.icon;
      return (
        <li
          key={i}
          className="flex items-center gap-3 text-white/80 whitespace-nowrap"
        >
          <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
          <span className="font-semibold uppercase tracking-wider text-xs md:text-sm">
            {item.text}
          </span>
        </li>
      );
    })}
  </ul>
);

export default function TrustBar() {
  return (
    <div
      className="bg-secondary py-6 md:py-7 overflow-hidden relative border-y border-white/5"
      role="region"
      aria-label="Why The Pass Guys"
    >
      {/* Edge fades — soft mask so items emerge & dissolve at viewport edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 z-10 bg-gradient-to-r from-secondary to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 z-10 bg-gradient-to-l from-secondary to-transparent"
      />

      <div className="trustbar-track flex w-max">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}
