
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import heroImg from '../assets/portfolio-1.jpg';

import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background reveal animation
      gsap.fromTo('.hero-img',
        { scale: 1.1, filter: 'grayscale(1) brightness(0.2) blur(10px)' },
        { scale: 1, filter: 'grayscale(1) brightness(0.1) blur(5px)', duration: 3, ease: 'expo.out' }
      );

      // Simple character reveal
      const chars = containerRef.current?.querySelectorAll('.char');
      if (chars) {
        gsap.set(chars, { yPercent: 100, opacity: 0 });
        gsap.to(chars, {
          yPercent: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1.5,
          ease: 'expo.out',
          delay: 0.5
        });
      }

      // Metadata fade in
      gsap.from('.hero-meta', {
        opacity: 0,
        y: 20,
        duration: 1.5,
        ease: 'power3.out',
        delay: 1.5
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const titleLine = "SHUUTZ";
  const titleLine2 = t('hero.studio');

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] w-full flex flex-col justify-end overflow-hidden bg-[#0B1222] pb-12 md:pb-24 px-6 md:px-12 cursor-pointer"
      onClick={() => setRevealed(!revealed)}
    >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden border-0 outline-none ring-0 bg-transparent">
        <img
          src={heroImg}
          alt="Shuutz"
          className={`hero-img w-full h-full object-cover transition-transform duration-1000 ease-in-out ${revealed ? 'scale-110' : 'scale-100'
            }`}
        />
        {/* Intense Multi-Directional Fading Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1222] via-transparent to-[#0B1222] opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1222] via-transparent to-[#0B1222] opacity-80 pointer-events-none" />

        {/* Large Corner/Side Softeners */}
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#0B1222] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#0B1222] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#0B1222] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#0B1222] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        <div className="mb-6 md:mb-12">
          <h1 className="text-[13vw] xs:text-6xl md:text-8xl lg:text-[11vw] leading-[1] md:leading-[0.8] font-brand font-extrabold tracking-tighter text-[#E7E5E4] uppercase flex flex-wrap gap-x-4 md:gap-x-8">
            <span className="flex">
              {titleLine.split('').map((c, i) => (
                <span key={i} className="char inline-block">{c}</span>
              ))}
            </span>
            <span className="flex italic opacity-20">
              {titleLine2.split('').map((c, i) => (
                <span key={i} className="char inline-block">{c}</span>
              ))}
            </span>
          </h1>
        </div>

        <div className="hero-meta border-t border-white/5 pt-6 md:pt-10 flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8">
          <p className="text-base md:text-2xl lg:text-3xl font-light text-[#E7E5E4]/60 leading-tight max-w-xl">
            {t('hero.subtext')}
          </p>
          <div className="flex flex-col items-start md:items-end gap-2 text-left md:text-right">
            <span className="mono text-[10px] font-bold text-[#E7E5E4]/40 uppercase tracking-widest">
              {t('hero.location')}
            </span>
            <span className="text-xs text-[#E7E5E4]/40 uppercase tracking-[0.2em]">
              {t('hero.tap')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
