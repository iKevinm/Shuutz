
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LensAssembly: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.optics-element').forEach((el, i) => {
        gsap.to(el, {
          y: -100 * (i + 1),
          scale: 1 + i * 0.04,
          opacity: 0.3,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="optics" ref={containerRef} className="relative py-80 px-8 md:px-12 bg-[#0B1222] overflow-hidden border-t border-white/5">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        
        <div className="relative h-[750px] flex items-center justify-center rounded-3xl overflow-hidden bg-[#E7E5E4]/5 border border-white/5">
          <div className="optics-element absolute w-96 h-96 border border-white/10 rounded-full backdrop-blur-3xl z-10" />
          <div className="optics-element absolute w-72 h-72 border border-white/20 rounded-full z-20" />
          <div className="optics-element absolute w-48 h-48 border border-white/30 rounded-full z-30" />
        </div>

        <div>
          <h2 className="text-8xl md:text-9xl font-brand font-bold tracking-tighter uppercase mb-20 text-[#E7E5E4] leading-[0.8]">
            PURE<br />PRECISION
          </h2>
          
          <div className="space-y-20">
            {[
              { title: 'ASPHERICAL_GLASS', desc: 'Eliminating aberration at the frame boundaries for archival-grade documentation.' },
              { title: 'TRICHROMATIC_S', desc: 'Superior tonal reconstruction using high-bit depth monochromatic sensors.' },
              { title: 'GEOMETRIC_LOCKED', desc: 'Optical tilt-shift mechanics to ensure zero perspective distortion in-camera.' }
            ].map((spec, i) => (
              <div key={i} className="max-w-md">
                <h3 className="text-2xl font-bold uppercase tracking-widest mb-4 text-[#E7E5E4]">{spec.title}</h3>
                <p className="text-zinc-500 text-xl font-light leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LensAssembly;
