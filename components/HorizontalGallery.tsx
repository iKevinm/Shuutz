import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_WORKS } from '../constants';

import { useLanguage } from './LanguageContext';

const GalleryItem: React.FC<{ item: any; mainTl: gsap.core.Timeline | null }> = ({ item, mainTl }) => {
  const [revealed, setRevealed] = useState(false);
  const plateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax disabled to ensure seamless edge integration
  }, [mainTl]);

  return (
    <div className="flex-shrink-0 w-[80vw] md:w-[60vw] relative cursor-pointer" onClick={() => setRevealed(!revealed)}>
      <div ref={plateRef} className="relative aspect-[16/10] overflow-hidden cursor-pointer border-0 outline-none ring-0 bg-transparent">
        <img
          src={item.url}
          alt={item.title}
          className={`w-full h-full object-cover transition-transform duration-1000 ease-in-out ${revealed ? 'scale-125' : 'scale-110'
            }`}
        />
        {/* Intense Multi-Directional Fading Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1222] via-transparent to-[#0B1222] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0B1222] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B1222] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#0B1222] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#0B1222] to-transparent pointer-events-none" />

        {/* Radial vignette for extra depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_10%,#0B1222_100%)] opacity-80 pointer-events-none" />
      </div>

      <div className="mt-8 border-t border-white/5 pt-6 flex justify-between items-baseline">
        <h3 className="text-xl md:text-3xl font-brand font-bold uppercase tracking-tighter text-[#E7E5E4]">{item.title}</h3>
        <span className="mono text-[11px] font-bold text-[#E7E5E4]/20 uppercase tracking-widest">{item.location} // {item.year}</span>
      </div>
    </div>
  );
};

const HorizontalGallery: React.FC = () => {
  const { t } = useLanguage();
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mainTl, setMainTl] = useState<gsap.core.Timeline | null>(null);

  const featureWorks = PORTFOLIO_WORKS.slice(0, 5);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 1,
        }
      });

      tl.to(sectionRef.current, {
        xPercent: -70,
        ease: 'none'
      });

      setMainTl(tl);
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={triggerRef} className="relative overflow-hidden bg-[#0B1222] text-[#E7E5E4]">
      <div className="h-screen flex items-center">
        <div ref={sectionRef} className="flex gap-8 md:gap-[10vw] items-center pl-6 md:pl-12 pr-[80vw]">

          <div className="flex-shrink-0 w-[280px] md:w-[400px]">
            <span className="mono text-[10px] font-bold text-[#E7E5E4]/20 uppercase tracking-[0.5em] mb-4 md:mb-6 block">{t('gallery.badge')}</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-brand font-extrabold tracking-tighter uppercase leading-[0.9] italic mb-8 md:mb-10 whitespace-pre-line">
              {t('gallery.title')}
            </h2>
            <p className="text-[#E7E5E4]/40 text-base md:text-lg font-light leading-relaxed">
              {t('gallery.desc')}
            </p>
          </div>

          {featureWorks.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[85vw] md:w-[60vw]">
              <GalleryItem item={item} mainTl={mainTl} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
