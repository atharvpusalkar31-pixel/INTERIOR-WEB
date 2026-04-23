import { useState } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  const [filter, setFilter] = useState('All');
  
  const tabs = ['All', 'Residential', 'Commercial', 'Hospitality', 'Architecture'];
  
  // Show first 3 projects initially or filter them
  const displayProjects = projects
    .filter(p => filter === 'All' || p.type === filter)
    .slice(0, 3);

  return (
    <section className="bg-[var(--bg-white)] py-[var(--section-py-mob)] md:py-[var(--section-py)] overflow-hidden">
      <div className="max-w-[var(--container)] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 reveal visible text-center md:text-left">
          <span className="text-[var(--accent)] text-[11px] uppercase tracking-[0.18em] font-medium mb-4 block">
            Our Work
          </span>
          <h2 className="font-display text-[40px] md:text-[48px] text-[var(--text-dark)]">
            Selected Projects
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 mb-16 reveal visible data-delay='1'">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`font-body text-[13px] tracking-[0.05em] transition-colors duration-200 pb-1 border-b-2 ${
                filter === tab 
                  ? 'text-[var(--accent)] border-[var(--accent)]' 
                  : 'text-[var(--text-muted)] border-transparent hover:text-[var(--text-dark)]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Editorial Rows */}
        <div className="flex flex-col gap-[80px]">
          {displayProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={project.slug} 
                className="flex flex-col md:flex-row items-stretch min-h-[520px] group transition-opacity duration-300"
              >
                {/* Image Col */}
                <div 
                  className={`w-full md:w-[60%] h-[400px] md:h-[520px] overflow-hidden ${
                    isEven ? 'md:order-1 reveal-left' : 'md:order-2 reveal-right'
                  }`}
                >
                  <Link href={`/projects/${project.slug}`} className="block w-full h-full">
                    <img 
                      src={project.coverImage} 
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </Link>
                </div>

                {/* Text Col */}
                <div 
                  className={`w-full md:w-[40%] flex flex-col justify-center px-0 py-8 md:px-[48px] md:py-0 ${
                    isEven ? 'md:order-2 reveal-right' : 'md:order-1 reveal-left'
                  }`}
                >
                  <span className="text-[var(--accent)] text-[11px] uppercase tracking-[0.18em] font-medium mb-4">
                    {project.type}
                  </span>
                  
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="font-display text-[32px] text-[var(--text-dark)] mb-4 hover:text-[var(--accent)] transition-colors">
                      {project.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-4 text-[13px] text-[var(--text-muted)] font-body mb-8">
                    <span>{project.location}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--text-muted-dk)] opacity-50" />
                    <span>{project.area}</span>
                  </div>

                  <Link 
                    href={`/projects/${project.slug}`}
                    className="inline-flex text-[13px] text-[var(--accent)] uppercase tracking-[0.18em] font-medium relative self-start after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-[var(--accent)] after:opacity-0 hover:after:opacity-100 after:transition-opacity"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-20 text-center reveal visible data-delay='3'">
          <Link 
            href="/projects"
            className="inline-block border border-[var(--accent)] text-[var(--accent)] text-[13px] uppercase tracking-[0.18em] px-8 py-4 font-medium hover:bg-[var(--accent)] hover:text-white transition-colors"
          >
            View All Projects →
          </Link>
        </div>

      </div>
    </section>
  );
}
