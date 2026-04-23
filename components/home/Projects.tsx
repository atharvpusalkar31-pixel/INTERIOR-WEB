import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { projects, Project } from '@/data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showBackBtn, setShowBackBtn] = useState(false);
  const detailRef = useRef<HTMLDivElement>(null);

  const tabs = ['All', 'Residential', 'Commercial', 'Hospitality', 'Architecture', 'Landscape'];

  useEffect(() => {
    if (!activeProject || !detailRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only show the back button when the user is scrolled PAST the very top of the section
        // Or we can just show it if the section is intersecting
        setShowBackBtn(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(detailRef.current);
    return () => observer.disconnect();
  }, [activeProject]);

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBack = () => {
    setActiveProject(null);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter the projects array directly so layout updates cleanly
  const displayedProjects = projects.filter(p => filter === 'All' || p.type === filter);

  return (
    <section id="projects" className="bg-[var(--bg-white)] py-[120px] min-h-screen relative">
      
      {/* --- DETAIL VIEW --- */}
      {activeProject ? (
        <div className="w-full animate-fade-in" ref={detailRef}>
          <button 
            onClick={handleBack}
            className={`fixed top-24 left-6 md:left-[var(--gutter)] z-50 bg-[var(--bg-dark)] text-white px-6 py-3 text-[13px] uppercase tracking-[0.1em] font-medium hover:bg-[var(--accent)] transition-all duration-500 shadow-xl flex items-center gap-2 ${
              showBackBtn ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            ← Back to Projects
          </button>
          
          <div className="relative w-full h-[60vh] md:h-[70vh]">
            <img src={activeProject.coverImage} alt={activeProject.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-[var(--container)] mx-auto text-white">
              <span className="block text-[11px] text-[var(--accent)] uppercase tracking-[0.18em] mb-4 font-medium">{activeProject.type}</span>
              <h2 className="font-display text-[48px] md:text-[80px] leading-none mb-4">{activeProject.name}</h2>
              <div className="flex flex-wrap gap-8 font-body text-[14px] text-white/80 uppercase tracking-[0.1em]">
                {activeProject.location && <span>{activeProject.location}</span>}
                {activeProject.year && <span>{activeProject.year}</span>}
                {activeProject.area && <span>{activeProject.area}</span>}
              </div>
            </div>
          </div>

          <div className="max-w-[var(--container)] mx-auto px-[var(--gutter)] py-24 flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h3 className="font-display text-[32px] text-[var(--text-dark)] mb-6">The Concept</h3>
              <p className="font-body text-[16px] text-[var(--text-muted)] leading-[1.8] mb-12">{activeProject.brief}</p>
              
              <h3 className="font-display text-[32px] text-[var(--text-dark)] mb-6">Execution</h3>
              <p className="font-body text-[16px] text-[var(--text-muted)] leading-[1.8]">{activeProject.approach}</p>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-[var(--bg-light)] p-8 border border-[var(--border-light)] sticky top-32">
                <h4 className="font-display text-[24px] text-[var(--text-dark)] mb-8">Quick Facts</h4>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-[var(--border-light)] pb-4">
                    <span className="text-[var(--text-muted)] text-[13px]">Client Type</span>
                    <span className="text-[var(--text-dark)] font-medium text-[14px]">{activeProject.clientType || 'Private'}</span>
                  </div>
                  <div className="flex justify-between border-b border-[var(--border-light)] pb-4">
                    <span className="text-[var(--text-muted)] text-[13px]">Outcome</span>
                    <span className="text-[var(--text-dark)] font-medium text-[14px] text-right max-w-[200px] truncate">{activeProject.outcome || 'Completed'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {activeProject.gallery && activeProject.gallery.length > 0 && (
            <div className="max-w-[var(--container)] mx-auto px-[var(--gutter)] pb-24">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {activeProject.gallery.map((img, i) => (
                   <img key={i} src={img} alt="" className="w-full h-[400px] object-cover" />
                 ))}
               </div>
            </div>
          )}
        </div>
      ) : (
        /* --- MAIN LIST VIEW --- */
        <div className="animate-fade-in">
          {/* Header */}
          <div className="max-w-[var(--container)] mx-auto px-[var(--gutter)] text-center mb-12 reveal visible">
            <span className="text-[var(--accent)] text-[11px] uppercase tracking-[0.18em] font-medium mb-4 block">
              Our Projects
            </span>
            <h2 className="font-display text-[40px] md:text-[56px] text-[var(--text-dark)] leading-none">
              Selected Works
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="max-w-[var(--container)] mx-auto px-[var(--gutter)] flex justify-center flex-wrap gap-6 md:gap-8 mb-12 reveal visible" data-delay="1">
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

          {/* Grid */}
          <div className="max-w-[var(--container)] mx-auto px-[var(--gutter)]">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {displayedProjects.map((project, idx) => (
                <motion.div 
                  key={project.slug}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-50px", amount: 0.2 }}
                  transition={{ duration: 0.7, type: "spring", bounce: 0.4, delay: (idx % 3) * 0.1 }}
                  onClick={() => handleProjectClick(project)}
                  className="relative overflow-hidden rounded-2xl break-inside-avoid group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="block overflow-hidden relative">
                    <img 
                      src={project.coverImage} 
                      alt={project.name}
                      className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,14,12,0.95)] via-[rgba(14,14,12,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-8">
                      <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100">
                        <span className="block text-[11px] text-[var(--accent)] uppercase tracking-[0.18em] mb-2 font-bold">
                          {project.type}
                        </span>
                        <h3 className="font-display text-[26px] text-white mb-2">
                          {project.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="font-body text-[13px] text-[#ddd]">
                            {project.location}
                          </span>
                          <span className="text-[var(--accent)] text-[20px] font-light group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
