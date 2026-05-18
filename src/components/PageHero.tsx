import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  meta?: string[];
  aside?: ReactNode;
}

/**
 * PageHero — immersive dark hero for every non-homepage page.
 * Dark bg-secondary with yellow glow, road-mark textures, film grain.
 */
export default function PageHero({
  eyebrow,
  title,
  accent,
  description,
  primaryCta,
  secondaryCta,
  meta,
  aside,
}: PageHeroProps) {
  return (
    <section className="relative bg-secondary text-white overflow-hidden pt-32 sm:pt-36 md:pt-44 pb-20 md:pb-32 px-6">
      {/* ── Decorative background ───────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Yellow ambient glow orbs */}
        <div className="absolute top-[20%] left-[15%] w-[450px] h-[450px] bg-primary/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[350px] h-[350px] bg-primary/6 rounded-full blur-[120px]" />

        {/* Horizontal road marking dashes */}
        <div className="absolute top-[32%] left-0 right-0 h-[2px] opacity-[0.035]"
          style={{ background: 'repeating-linear-gradient(to right, white 0 40px, transparent 40px 90px)' }}
        />
        <div className="absolute top-[58%] left-0 right-0 h-[2px] opacity-[0.025]"
          style={{ background: 'repeating-linear-gradient(to right, transparent 0 30px, white 30px 65px, transparent 65px 110px)' }}
        />
        <div className="absolute top-[80%] left-0 right-0 h-[2px] opacity-[0.02]"
          style={{ background: 'repeating-linear-gradient(to right, white 0 50px, transparent 50px 100px)' }}
        />

        {/* Film grain overlay */}
        <div className="cinematic-grain" />
      </div>

      <div
        className={`container mx-auto relative z-10 ${
          aside ? 'grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl' : 'max-w-5xl'
        }`}
      >
        <div className={aside ? 'lg:col-span-7 text-center lg:text-left' : 'text-center mx-auto'}>
          {/* ── 1. Eyebrow ──────────────────────────────────────────────── */}
          <div
            className={`hero-fade hero-fade-delay-1 flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 text-white/80 ${
              aside ? 'justify-center lg:justify-start' : 'justify-center'
            }`}
          >
            <span className="inline-block w-8 sm:w-10 h-px bg-white/20" aria-hidden="true" />
            <span className="font-accent text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.32em]">
              {eyebrow}
            </span>
            <span className="inline-block w-8 sm:w-10 h-px bg-white/20" aria-hidden="true" />
          </div>

          {/* ── 2 + 3. Headline ─────────────────────────────────────────── */}
          <h1 className="leading-[0.88] mb-6 sm:mb-8 md:mb-10">
            <span className="block overflow-hidden pb-[0.1em]">
              <span className="hero-line hero-line-1 block font-display uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] text-white/70 tracking-[0.02em]">
                {title}
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.1em]">
              <span
                className="hero-line hero-line-2 block font-display uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] text-primary tracking-[0.01em]"
              >
                {accent}
              </span>
            </span>
          </h1>

          {/* ── 4. Description ──────────────────────────────────────────── */}
          {description && (
            <p
              className={`hero-fade hero-fade-delay-2 text-base sm:text-lg text-white leading-relaxed max-w-xl mb-8 sm:mb-10 font-sans ${
                aside ? 'mx-auto lg:mx-0' : 'mx-auto'
              }`}
            >
              {description}
            </p>
          )}

          {/* ── 5. CTAs ─────────────────────────────────────────────────── */}
          {(primaryCta || secondaryCta) && (
            <div
              className={`hero-fade hero-fade-delay-3 flex items-center gap-3 flex-wrap ${
                aside ? 'justify-center lg:justify-start' : 'justify-center'
              }`}
            >
              {primaryCta && (
                /^(tel:|mailto:|http)/.test(primaryCta.href) ? (
                  <a
                    href={primaryCta.href}
                    className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-secondary font-accent font-bold uppercase tracking-[0.08em] rounded-sm text-sm hover:bg-primary-hover hover:shadow-yellow hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {primaryCta.label}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                ) : (
                  <Link
                    to={primaryCta.href}
                    className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-secondary font-accent font-bold uppercase tracking-[0.08em] rounded-sm text-sm hover:bg-primary-hover hover:shadow-yellow hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {primaryCta.label}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                )
              )}
              {secondaryCta && (
                /^(tel:|mailto:|http)/.test(secondaryCta.href) ? (
                  <a
                    href={secondaryCta.href}
                    className="px-8 py-3.5 rounded-sm border border-white/20 text-white font-accent font-semibold uppercase tracking-[0.08em] text-sm hover:bg-white/5 transition-colors duration-300"
                  >
                    {secondaryCta.label}
                  </a>
                ) : (
                  <Link
                    to={secondaryCta.href}
                    className="px-8 py-3.5 rounded-sm border border-white/20 text-white font-accent font-semibold uppercase tracking-[0.08em] text-sm hover:bg-white/5 transition-colors duration-300"
                  >
                    {secondaryCta.label}
                  </Link>
                )
              )}
            </div>
          )}

          {/* ── 6. Meta strip ───────────────────────────────────────────── */}
          {meta && meta.length > 0 && (
            <div
              className={`hero-fade hero-fade-delay-4 mt-12 sm:mt-14 md:mt-16 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7 text-[10px] sm:text-[11px] font-accent font-semibold uppercase tracking-[0.32em] text-white/70 ${
                aside ? 'justify-center lg:justify-start' : 'justify-center'
              }`}
            >
              {meta.map((m, i) => (
                <span key={i} className="flex items-center gap-x-5 sm:gap-x-7">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-primary/60" aria-hidden="true" />}
                  <span>{m}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {aside && (
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="hero-fade hero-fade-delay-2 relative max-w-[440px] mx-auto lg:ml-auto">
              {aside}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
