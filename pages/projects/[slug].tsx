import { useState, useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { projects, Project } from '@/data/projects';

interface ProjectProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

export default function ProjectCaseStudy({ project, prevProject, nextProject }: ProjectProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev! + 1) % project.gallery.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev! - 1 + project.gallery.length) % project.gallery.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, project.gallery.length]);

  if (!project) return null;

  return (
    <>
      <Head>
        <title>{project.name} | Morphis Studio</title>
      </Head>

      {/* 1. HERO */}
      <section className="relative w-full h-[100dvh] flex items-end pb-24 px-[var(--gutter)] bg-[var(--bg-dark)]">
        <div className="absolute inset-0 z-0">
          <img src={project.coverImage} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        
        <Link href="/projects" className="absolute top-[120px] left-[var(--gutter)] z-20 text-white hover:text-[var(--accent)] transition-colors font-body text-[13px] uppercase tracking-[0.1em] font-medium flex items-center gap-2">
          ← All Projects
        </Link>
        
        <div className="relative z-10 w-full max-w-[var(--container)] mx-auto reveal visible">
          <span className="block text-[11px] text-[var(--accent)] uppercase tracking-[0.18em] mb-4 font-medium">
            {project.type}
          </span>
          <h1 className="font-display text-white leading-[1.05]" style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
            {project.name}
          </h1>
        </div>
      </section>

      {/* 2. METADATA BAR */}
      <div className="bg-[var(--bg-mid)] py-6 border-b border-[var(--border-dark)] overflow-x-auto hide-scrollbar">
        <div className="max-w-[var(--container)] mx-auto px-[var(--gutter)] flex flex-nowrap items-center min-w-max gap-8 md:gap-16">
          {[
            { l: 'Location', v: project.location },
            { l: 'Year', v: project.year },
            { l: 'Area', v: project.area },
            { l: 'Type', v: project.type },
            { l: 'Client Type', v: project.clientType }
          ].map((meta, i) => (
            <div key={meta.l} className={`flex flex-col ${i !== 0 ? 'pl-8 md:pl-16 border-l border-[var(--border-dark)]' : ''}`}>
              <span className="font-body text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)] mb-1">{meta.l}</span>
              <span className="font-body text-[14px] text-white/90">{meta.v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. STORY + SPECS */}
      <section className="bg-[var(--bg-white)] py-[var(--section-py)] px-[var(--gutter)]">
        <div className="max-w-[var(--container)] mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          
          {/* Left: Story */}
          <div className="w-full md:w-[60%] space-y-16">
            <div className="reveal visible">
              <h3 className="font-display text-[28px] text-[var(--text-dark)] mb-6">The Brief</h3>
              <p className="font-body text-[16px] text-[var(--text-muted)] leading-[1.8]">{project.brief}</p>
            </div>
            <div className="reveal visible">
              <h3 className="font-display text-[28px] text-[var(--text-dark)] mb-6">The Approach</h3>
              <p className="font-body text-[16px] text-[var(--text-muted)] leading-[1.8]">{project.approach}</p>
            </div>
            <div className="reveal visible">
              <h3 className="font-display text-[28px] text-[var(--text-dark)] mb-6">The Outcome</h3>
              <p className="font-body text-[16px] text-[var(--text-muted)] leading-[1.8]">{project.outcome}</p>
            </div>
          </div>

          {/* Right: Specs (Sticky) */}
          <div className="w-full md:w-[40%]">
            <div className="sticky top-[120px] bg-[var(--bg-light)] p-8 border border-[var(--border-light)]">
              <h4 className="font-display text-[24px] text-[var(--text-dark)] mb-8">Project Details</h4>
              <div className="space-y-4 mb-10">
                {[
                  { l: 'Project', v: project.name },
                  { l: 'Location', v: project.location },
                  { l: 'Size', v: project.area },
                  { l: 'Completion', v: project.year },
                ].map(item => (
                  <div key={item.l} className="flex justify-between items-center py-3 border-b border-[var(--border-light)]">
                    <span className="font-body text-[13px] text-[var(--text-muted)]">{item.l}</span>
                    <span className="font-body text-[14px] text-[var(--text-dark)] font-medium text-right">{item.v}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="block w-full text-center bg-[var(--accent)] text-[var(--bg-dark)] text-[13px] uppercase tracking-[0.18em] py-4 font-medium hover:bg-[var(--accent-hover)] transition-colors">
                Start Your Project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY */}
      <section className="bg-[var(--bg-white)] pb-[var(--section-py)] px-[var(--gutter)]">
        <div className="max-w-[var(--container)] mx-auto flex flex-col gap-4">
          {project.gallery.map((img, i) => {
            // Pattern: full, half, half, full, etc.
            const isPair = i % 3 === 1 || i % 3 === 2;
            const isFirstOfPair = i % 3 === 1;
            
            if (isFirstOfPair && i + 1 < project.gallery.length) {
              return (
                <div key={img} className="flex flex-col md:flex-row gap-4 w-full">
                  <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden cursor-pointer group" onClick={() => setLightboxIndex(i)}>
                    <img src={project.gallery[i]} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden cursor-pointer group" onClick={() => setLightboxIndex(i + 1)}>
                    <img src={project.gallery[i + 1]} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                </div>
              );
            } else if (i % 3 === 0) {
              return (
                <div key={img} className="w-full aspect-[21/9] min-h-[400px] overflow-hidden cursor-pointer group" onClick={() => setLightboxIndex(i)}>
                  <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              );
            }
            return null;
          })}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center">
          <button onClick={() => setLightboxIndex(null)} className="absolute top-6 right-6 text-white text-[32px] hover:text-[var(--accent)] z-50">×</button>
          
          <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! - 1 + project.gallery.length) % project.gallery.length); }} className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-[40px] hover:text-[var(--accent)] z-50">‹</button>
          
          <img src={project.gallery[lightboxIndex]} alt="" className="max-w-[90vw] max-h-[90vh] object-contain select-none" />
          
          <button onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! + 1) % project.gallery.length); }} className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-[40px] hover:text-[var(--accent)] z-50">›</button>
        </div>
      )}

      {/* 5. PREV/NEXT NAVIGATION */}
      <section className="bg-[var(--bg-white)] px-[var(--gutter)] border-t border-[var(--border-light)]">
        <div className="max-w-[var(--container)] mx-auto py-[48px] flex justify-between items-center relative">
          
          {prevProject ? (
            <Link href={`/projects/${prevProject.slug}`} className="group relative font-body text-[13px] uppercase tracking-[0.1em] text-[var(--text-dark)] hover:text-[var(--accent)] transition-colors">
              ← Previous Project
              <div className="absolute bottom-full left-0 mb-4 w-[200px] aspect-[4/3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden hidden md:block">
                <img src={prevProject.coverImage} className="w-full h-full object-cover" alt="" />
              </div>
            </Link>
          ) : <div/>}

          {nextProject ? (
            <Link href={`/projects/${nextProject.slug}`} className="group relative font-body text-[13px] uppercase tracking-[0.1em] text-[var(--text-dark)] hover:text-[var(--accent)] transition-colors">
              Next Project →
              <div className="absolute bottom-full right-0 mb-4 w-[200px] aspect-[4/3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden hidden md:block">
                <img src={nextProject.coverImage} className="w-full h-full object-cover" alt="" />
              </div>
            </Link>
          ) : <div/>}
          
        </div>
      </section>

      {/* 6. CTA STRIP */}
      <section className="bg-[var(--bg-dark)] py-[80px] px-[var(--gutter)] text-center">
        <h2 className="font-display text-[32px] md:text-[48px] text-white mb-10">Loved This Space? Let's Design Yours.</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="w-full sm:w-auto text-center bg-[var(--accent)] text-[var(--bg-dark)] text-[13px] uppercase tracking-[0.18em] px-10 py-[18px] font-medium hover:bg-[var(--accent-hover)] transition-colors">
            Get In Touch
          </Link>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center flex items-center justify-center gap-2 bg-[#25D366] text-white text-[13px] uppercase tracking-[0.18em] px-10 py-[18px] font-medium hover:bg-[#20bd5a] transition-colors">
            WhatsApp Now
          </a>
        </div>
      </section>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((p) => ({
    params: { slug: p.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const index = projects.findIndex(p => p.slug === slug);
  const project = projects[index];
  
  const prevProject = index > 0 ? projects[index - 1] : null;
  const nextProject = index < projects.length - 1 ? projects[index + 1] : null;

  return {
    props: {
      project,
      prevProject,
      nextProject
    }
  };
};
