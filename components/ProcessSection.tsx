
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { useLanguage } from './LanguageContext';

const ProcessSection: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    { title: t('process.step1.title'), desc: t('process.step1.desc') },
    { title: t('process.step2.title'), desc: t('process.step2.desc') },
    { title: t('process.step3.title'), desc: t('process.step3.desc') },
    { title: t('process.step4.title'), desc: t('process.step4.desc') }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.method-step', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.method-grid',
          start: 'top 85%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="py-20 md:py-48 px-6 md:px-12 bg-[#0B1222] text-[#E7E5E4]">
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-brand font-extrabold tracking-tighter uppercase leading-[0.9] text-[#E7E5E4] mb-8">
            {t('process.title')} <span className="italic opacity-30">{t('process.title_italic')}</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-[#E7E5E4]/60 leading-relaxed max-w-2xl">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="method-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-20">
          {steps.map((step, idx) => (
            <div key={idx} className="method-step border-t border-white/5 pt-8">
              <span className="mono text-[10px] font-bold text-[#E7E5E4]/20 uppercase tracking-widest block mb-4">0{idx + 1}</span>
              <h3 className="text-xl md:text-2xl font-brand font-bold uppercase tracking-tighter text-[#E7E5E4] mb-4 leading-tight">{step.title}</h3>
              <p className="text-[#E7E5E4]/40 text-sm md:text-base leading-relaxed font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
