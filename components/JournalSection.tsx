
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import journal1 from '../assets/portfolio-11.jpg';
import journal2 from '../assets/portfolio-12.jpg';
import journal3 from '../assets/portfolio-13.jpg';

const JournalSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const posts = [
    { date: '02.25', title: 'Highline Expansion', cat: 'Series', img: journal1 },
    { date: '01.25', title: 'Large Format Optics', cat: 'Technical', img: journal2 },
    { date: '03.25', title: 'Brutalism Now', cat: 'Essay', img: journal3 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.journal-card').forEach((card) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 1.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          }
        });

        gsap.from(card.querySelector('.journal-img'), {
          scale: 1.2,
          duration: 2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="journal" ref={containerRef} className="py-80 px-8 md:px-12 bg-[#0B1222] border-t border-white/5 text-[#E7E5E4]">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex justify-between items-end mb-32 border-b border-white/10 pb-16">
          <h2 className="text-8xl font-brand font-bold tracking-tighter uppercase text-[#E7E5E4]">Journal</h2>
          <button className="mono text-[11px] font-bold text-[#0B1222] bg-[#E7E5E4] uppercase tracking-[0.3em] px-10 py-5 hover:bg-white transition-colors rounded-full">
            Archives
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {posts.map((post, i) => (
            <div key={i} className="journal-card group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-10 bg-zinc-900 shadow-xl rounded-2xl">
                <img
                  src={post.img}
                  alt={post.title}
                  className="journal-img w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="space-y-6">
                <div className="flex justify-between mono text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span>{post.cat}</span>
                </div>
                <h3 className="text-4xl font-brand font-bold tracking-tighter leading-none text-[#E7E5E4] group-hover:text-zinc-400 transition-colors">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
