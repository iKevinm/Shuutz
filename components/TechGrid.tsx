
import React from 'react';

const TechGrid: React.FC = () => {
  const specs = [
    { label: 'Sensor', val: '151MP Trichromatic' },
    { label: 'Optics', val: 'Rodenstock HR' },
    { label: 'Dynamic Range', val: '15 Stops' },
    { label: 'Output', val: '16-bit RAW' },
  ];

  return (
    <section className="bg-[#0B1222] py-48 px-10 text-[#E7E5E4]">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          {specs.map((spec, i) => (
            <div key={i}>
              <span className="mono text-[11px] font-bold text-zinc-600 uppercase tracking-widest">{spec.label}</span>
              <p className="text-3xl mt-4 font-bold tracking-tight">{spec.val}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-48 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <h2 className="text-7xl md:text-8xl font-brand font-bold leading-[0.9] tracking-tighter uppercase italic">Precision is our baseline.</h2>
          <div className="flex flex-col justify-end">
            <p className="text-zinc-500 text-3xl leading-tight font-light max-w-lg">
              Preserving nuance for architectural archival standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechGrid;
