import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';
import MagneticButton from './MagneticButton';

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
    <section className="relative bg-bg-page text-secondary overflow-hidden pt-20 sm:pt-24 pb-12 md:pb-20">
      <div className="absolute top-[68px] sm:top-[80px] left-0 right-0 h-px bg-secondary/10 z-[5]" />

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative">
        <div className={`grid grid-cols-1 ${aside ? 'lg:grid-cols-12 gap-10 lg:gap-12' : ''} items-center pt-6 md:pt-10`}>
          <div className={aside ? 'lg:col-span-7' : ''}>
            <div className="hero-fade hero-fade-delay-1 flex items-center gap-3 mb-6 md:mb-8">
              <span className="block w-10 h-px bg-primary" />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-secondary/60">
                {eyebrow}
              </span>
            </div>

            <h1 className="font-black uppercase tracking-tighter leading-[0.86] mb-6 md:mb-8 text-[clamp(2.5rem,7.5vw,7rem)]">
              <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                <span className="block hero-line hero-line-1">{title}</span>
              </span>
              <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                <span className="block italic text-primary hero-line hero-line-2">{accent}</span>
              </span>
            </h1>

            {description && (
              <p className="hero-fade hero-fade-delay-2 text-base md:text-lg text-secondary/70 font-medium max-w-xl leading-relaxed mb-8 md:mb-10 text-balance">
                {description}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="hero-fade hero-fade-delay-3 flex flex-col sm:flex-row gap-3 sm:gap-4">
                {primaryCta && (
                  <MagneticButton>
                    <Link
                      to={primaryCta.href}
                      className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 bg-secondary text-white font-black uppercase tracking-widest text-xs sm:text-sm rounded-full hover:bg-primary hover:text-secondary transition-colors duration-500"
                    >
                      {primaryCta.label}
                      <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </Link>
                  </MagneticButton>
                )}
                {secondaryCta && (
                  <MagneticButton>
                    <Link
                      to={secondaryCta.href}
                      className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 border border-secondary/15 text-secondary font-black uppercase tracking-widest text-xs sm:text-sm rounded-full hover:bg-secondary/5 transition-colors duration-500"
                    >
                      {secondaryCta.label}
                    </Link>
                  </MagneticButton>
                )}
              </div>
            )}

            {meta && meta.length > 0 && (
              <div className="hero-fade hero-fade-delay-4 mt-10 md:mt-12 pt-5 md:pt-6 border-t border-secondary/10 flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-secondary/40">
                {meta.map((m, i) => (
                  <span key={i} className="flex items-center gap-x-5 sm:gap-x-7">
                    {i > 0 && <span className="w-1 h-1 rounded-full bg-primary/60" />}
                    <span>{m}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {aside && (
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="hero-fade hero-fade-delay-2 relative max-w-[420px] mx-auto lg:ml-auto">
                {aside}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
