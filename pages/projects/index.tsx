import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const tabs = ['All', 'Residential', 'Commercial', 'Hospitality', 'Architecture', 'Landscape'];

  return (
    <>
      <Head>
        <title>Our Work | Morphis Studio</title>
      </Head>
      
      <div className="bg-[var(--bg-white)] min-h-screen pb-[120px]">
        {/* Hero */}
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center px-[var(--gutter)] bg-[var(--bg-dark)]">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800" alt="Penthouse interior at dusk" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative z-10 w-full max-w-[var(--container)] mx-auto reveal visible">
            <h1 className="font-display text-white mb-6 leading-none" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
              Our Projects
            </h1>
            <p className="font-body text-[18px] md:text-[22px] text-[var(--accent)] font-light max-w-2xl mx-auto">
              Transforming visions into living spaces.
            </p>
          </div>
        </section>

        {/* Sticky Filter Tabs */}
        <div className="sticky top-[72px] bg-[var(--bg-white)]/95 backdrop-blur-md z-[50] border-b border-[var(--border-light)] py-4 px-[var(--gutter)] mb-12">
          <div className="max-w-[var(--container)] mx-auto flex overflow-x-auto hide-scrollbar gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`font-body text-[13px] tracking-[0.05em] transition-colors duration-200 pb-1 border-b-2 whitespace-nowrap ${
                  filter === tab 
                    ? 'text-[var(--accent)] border-[var(--accent)]' 
                    : 'text-[var(--text-muted)] border-transparent hover:text-[var(--text-dark)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="max-w-[var(--container)] mx-auto px-[var(--gutter)]">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {projects.map((project) => {
              const isMatch = filter === 'All' || project.type === filter;
              return (
                <div 
                  key={project.slug}
                  className={`relative overflow-hidden break-inside-avoid group cursor-pointer transition-opacity duration-400 ${
                    isMatch ? 'opacity-100 pointer-events-auto' : 'opacity-20 pointer-events-none'
                  }`}
                >
                  <Link href={`/projects/${project.slug}`} className="block">
                    <img 
                      src={project.coverImage} 
                      alt={project.name}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-transparent group-hover:bg-[rgba(14,14,12,0.75)] transition-colors duration-400 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                        <span className="block text-[11px] text-[var(--accent)] uppercase tracking-[0.18em] mb-2 font-medium">
                          {project.type}
                        </span>
                        <h2 className="font-display text-[22px] text-white mb-1">
                          {project.name}
                        </h2>
                        <div className="flex items-center justify-between">
                          <span className="font-body text-[13px] text-[var(--text-muted-dk)]">
                            {project.location}
                          </span>
                          <span className="text-[var(--accent)] text-[16px]">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}
