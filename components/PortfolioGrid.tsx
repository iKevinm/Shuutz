
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { PORTFOLIO_WORKS } from '../constants';

import { useLanguage } from './LanguageContext';

const PortfolioItem: React.FC<{ work: any }> = ({ work }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="portfolio-item cursor-pointer" onClick={() => setRevealed(!revealed)}>
      <div className="relative aspect-[4/5] overflow-hidden border-0 outline-none ring-0 bg-transparent">
        <img
          src={work.url}
          alt={work.title}
          className={`w-full h-full object-cover transition-transform duration-1000 ease-in-out ${revealed ? 'scale-125' : 'scale-110'
            }`}
        />
        {/* Intense Multi-Directional Fading Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1222] via-transparent to-[#0B1222] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0B1222] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B1222] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0B1222] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#0B1222] to-transparent pointer-events-none" />

        {/* Soft vignette for extra integration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#0B1222_100%)] opacity-70 pointer-events-none" />
      </div>
      <div className="mt-6 flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-lg md:text-xl font-brand font-bold uppercase tracking-tighter text-[#E7E5E4]">
            {work.title}
          </h3>
          <p className="mono text-[10px] text-[#E7E5E4]/20 uppercase tracking-widest">
            {work.location} &mdash; {work.category}
          </p>
        </div>
        <span className="mono text-[10px] font-bold text-[#E7E5E4]/30 border border-white/10 px-2 py-1 rounded-full">
          {work.year}
        </span>
      </div>
    </div>
  );
};

const PortfolioGrid: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.portfolio-item').forEach((item) => {
        gsap.from(item, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 95%',
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-48 px-6 md:px-12 bg-[#0B1222] text-[#E7E5E4]">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-6 items-end mb-10 md:mb-12 border-b border-white/5 pb-8">
          <div>
            <span className="mono text-[10px] font-bold text-[#E7E5E4]/20 uppercase tracking-[0.4em]">{t('portfolio.badge')}</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-brand font-extrabold tracking-tighter uppercase mt-4 md:mt-6 leading-[0.9]">{t('portfolio.title')}</h2>
          </div>
          <div className="md:max-w-xs text-left md:text-right">
            <p className="text-[#E7E5E4]/40 text-sm font-light uppercase tracking-widest">{t('portfolio.desc')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 md:gap-y-24">
          {PORTFOLIO_WORKS.map((work) => (
            <PortfolioItem key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
