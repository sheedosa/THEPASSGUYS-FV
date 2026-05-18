import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SectionLabel from './ui/SectionLabel';

/**
 * Stylised abstract representation of the 10 Greater Manchester boroughs.
 * Not a geographic map — soft rounded shapes positioned roughly in GM layout.
 * Hover reveals borough name. Click routes to the postcode-specific page.
 */
type Borough = {
  id: string;
  name: string;
  /** Centre x, centre y on a 600x500 canvas */
  cx: number;
  cy: number;
  /** Shape path (relative path string starting from cx,cy with M offsets, or absolute) */
  path: string;
  href: string;
};

const BOROUGHS: Borough[] = [
  {
    id: 'wigan',
    name: 'Wigan',
    cx: 80, cy: 280,
    path: 'M 30 240 Q 25 220 50 215 L 120 220 Q 140 230 135 260 L 130 310 Q 120 335 90 335 L 50 330 Q 25 320 25 295 Z',
    href: '/areas',
  },
  {
    id: 'bolton',
    name: 'Bolton',
    cx: 175, cy: 180,
    path: 'M 130 140 Q 130 115 160 115 L 220 120 Q 245 130 240 160 L 235 210 Q 225 235 195 230 L 140 225 Q 125 215 128 195 Z',
    href: '/areas',
  },
  {
    id: 'bury',
    name: 'Bury',
    cx: 275, cy: 145,
    path: 'M 250 110 Q 250 90 275 90 L 310 95 Q 330 100 328 125 L 325 175 Q 318 200 290 195 L 255 190 Q 245 180 248 160 Z',
    href: '/areas',
  },
  {
    id: 'rochdale',
    name: 'Rochdale',
    cx: 365, cy: 120,
    path: 'M 340 85 Q 345 65 370 65 L 420 70 Q 445 80 440 110 L 435 155 Q 425 175 395 170 L 350 165 Q 335 155 338 135 Z',
    href: '/areas',
  },
  {
    id: 'oldham',
    name: 'Oldham',
    cx: 450, cy: 215,
    path: 'M 425 175 Q 430 160 455 160 L 505 165 Q 530 175 525 205 L 520 255 Q 510 280 480 275 L 440 270 Q 420 260 422 235 Z',
    href: '/areas',
  },
  {
    id: 'manchester',
    name: 'Manchester',
    cx: 310, cy: 260,
    path: 'M 270 220 Q 270 200 300 200 L 345 205 Q 365 215 360 245 L 358 295 Q 350 315 320 312 L 280 308 Q 265 300 268 280 Z',
    href: '/areas',
  },
  {
    id: 'salford',
    name: 'Salford',
    cx: 215, cy: 270,
    path: 'M 165 235 Q 165 220 190 220 L 250 225 Q 265 235 262 260 L 258 305 Q 250 320 225 318 L 180 315 Q 162 305 163 285 Z',
    href: '/areas',
  },
  {
    id: 'tameside',
    name: 'Tameside',
    cx: 425, cy: 295,
    path: 'M 395 270 Q 395 255 420 255 L 465 260 Q 485 270 482 290 L 478 330 Q 470 345 445 343 L 405 340 Q 392 330 393 315 Z',
    href: '/areas',
  },
  {
    id: 'stockport',
    name: 'Stockport',
    cx: 370, cy: 365,
    path: 'M 325 335 Q 325 320 355 320 L 410 325 Q 430 335 425 365 L 420 410 Q 410 430 380 427 L 335 423 Q 320 413 322 393 Z',
    href: '/areas',
  },
  {
    id: 'trafford',
    name: 'Trafford',
    cx: 230, cy: 365,
    path: 'M 180 335 Q 180 320 205 320 L 270 325 Q 290 335 287 360 L 282 405 Q 275 425 245 422 L 195 418 Q 178 408 178 388 Z',
    href: '/areas',
  },
];

export default function AreasCovered({ id }: { id?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id={id} className="py-20 md:py-32 bg-bg-page">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <SectionLabel number="05" label="Coverage" />
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95] mb-4"
          >
            We cover all of <span className="text-primary">Greater Manchester.</span>
          </motion.h2>
          <p className="text-secondary text-base md:text-lg max-w-xl mx-auto mt-4">
            <span className="hidden md:inline">Hover over a borough to highlight it. </span>
            <span className="md:hidden">Tap a borough to highlight it. </span>
            Pick any region to see local instructors.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full"
          >
            <svg
              viewBox="0 0 600 500"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              role="img"
              aria-label="Stylised map of Greater Manchester boroughs"
            >
              <defs>
                <filter id="map-soft" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="0.4" />
                </filter>
              </defs>

              {BOROUGHS.map((b, i) => {
                const isActive = active === b.id;
                return (
                  <motion.g
                    key={b.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setActive(b.id)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(b.id)}
                    onBlur={() => setActive(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    <Link to={b.href}>
                      <path
                        d={b.path}
                        fill={isActive ? 'rgba(0,210,111,0.18)' : 'rgba(45,52,54,0.04)'}
                        stroke={isActive ? '#00d26f' : 'rgba(45,52,54,0.18)'}
                        strokeWidth={isActive ? 1.5 : 1}
                        filter="url(#map-soft)"
                        style={{ transition: 'fill 0.6s ease, stroke 0.6s ease, stroke-width 0.6s ease' }}
                      />
                      {/* Centre dot */}
                      <circle
                        cx={b.cx}
                        cy={b.cy}
                        r={isActive ? 4 : 2.5}
                        fill={isActive ? '#00d26f' : 'rgba(45,52,54,0.4)'}
                        style={{ transition: 'all 0.4s ease' }}
                      />
                      {/* Always-on tiny label */}
                      <text
                        x={b.cx}
                        y={b.cy + 18}
                        textAnchor="middle"
                        fontSize="11"
                        fontWeight={isActive ? 600 : 500}
                        fill={isActive ? '#2D3436' : 'rgba(45,52,54,0.55)'}
                        style={{ transition: 'all 0.4s ease', pointerEvents: 'none' }}
                      >
                        {b.name}
                      </text>
                    </Link>
                  </motion.g>
                );
              })}
            </svg>
          </motion.div>

          {/* Active borough card / coverage list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-secondary/80 font-medium">
              <span className="inline-block w-8 h-px bg-secondary/20" />
              <span className="hidden md:inline">{active ? 'Borough' : 'All boroughs'}</span>
              <span className="md:hidden">Coverage</span>
            </div>
            <div className="min-h-[100px]">
              <p className="text-3xl md:text-5xl font-normal tracking-tighter text-secondary">
                {active ? BOROUGHS.find(b => b.id === active)?.name : 'All 10 boroughs.'}
              </p>
              <p className="text-secondary mt-3 text-base md:text-lg">
                {active
                  ? 'DVSA-approved instructors live in this borough and teach surrounding postcodes daily.'
                  : 'We operate across Manchester, Salford, Trafford, Stockport, Tameside, Oldham, Rochdale, Bury, Bolton, and Wigan.'}
              </p>
            </div>

            <Link
              to="/areas"
              className="group inline-flex items-center gap-2 text-secondary font-medium text-sm pb-1 border-b border-secondary/20 hover:border-primary hover:text-primary transition-colors duration-500"
            >
              See full coverage list
              <span aria-hidden="true" className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
