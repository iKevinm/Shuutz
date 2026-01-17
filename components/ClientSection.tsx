
import React from 'react';

const ClientSection: React.FC = () => {
  const clients = ['Architectural Digest', 'BIG Group', 'Foster + Partners', 'MoMA Archive', 'Tadao Ando Associates', 'Zaha Hadid Architects'];

  return (
    <section className="py-64 px-10 bg-[#0B1222] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-20 gap-y-16 grayscale opacity-40 hover:opacity-100 transition-opacity duration-1000">
          {clients.map((client) => (
            <div key={client} className="flex items-center justify-center text-center">
              <span className="mono text-[11px] font-bold tracking-tighter uppercase whitespace-nowrap hover:text-[#E7E5E4] transition-colors cursor-default">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;