import Head from 'next/head';
import { useParallax } from '@/hooks/useParallax';

export default function About() {
  const parallax = useParallax(0.1);

  const pillars = [
    { title: "Design First", desc: "Aesthetics driven by proportion, light, and material honesty." },
    { title: "Function Always", desc: "Spaces that work as beautifully as they look." },
    { title: "Detail Obsessed", desc: "The micro-interactions that elevate a space from good to exceptional." }
  ];

  const milestones = [
    { year: "2004", desc: "Founded in Mumbai with a vision and a team of three." },
    { year: "2008", desc: "First major commercial project: 50,000 sq.ft tech campus, Pune." },
    { year: "2014", desc: "Entered hospitality; designed our first 5-star hotel project." },
    { year: "2019", desc: "Pan-India presence. 200+ projects milestone crossed." },
    { year: "2024", desc: "20th anniversary. 500+ projects. Still designing, still learning." }
  ];

  const team = [
    { name: "Rahul Sharma", role: "Principal Architect", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" },
    { name: "Priya Patel", role: "Senior Designer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800" },
    { name: "Amit Kumar", role: "Project Manager", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800" },
    { name: "Sneha Rao", role: "Landscape Lead", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800" }
  ];

  const accreditations = ["COA", "IIA", "GRIHA", "IGBC"];

  return (
    <>
      <Head>
        <title>About Us | Morphis Studio</title>
      </Head>

      {/* 1. HERO */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center px-[var(--gutter)] bg-[var(--bg-dark)]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800" alt="Luxurious modern living room at golden hour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 w-full max-w-[var(--container)] mx-auto reveal visible">
          <h1 className="font-display text-white mb-6 leading-none" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
            About Us
          </h1>
          <p className="font-body text-[18px] md:text-[22px] text-[var(--accent)] font-light max-w-2xl mx-auto">
            Twenty years of designing the spaces people call home.
          </p>
        </div>
      </section>

      {/* 2. FOUNDER SECTION */}
      <section className="bg-[var(--bg-light)] py-[var(--section-py)] px-[var(--gutter)] overflow-hidden">
        <div className="max-w-[var(--container)] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2 reveal-left">
            <div className="aspect-[3/4] overflow-hidden bg-[var(--bg-mid)]">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" 
                alt="Founder"
                className="w-full h-[120%] object-cover"
                style={{ transform: `translateY(${-parallax}px)` }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 reveal-right">
            <h2 className="font-display text-[40px] text-[var(--text-dark)] mb-2">Rahul Sharma</h2>
            <span className="block text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] mb-8">Principal Architect</span>
            <p className="font-body text-[16px] text-[var(--text-muted)] leading-[1.8] mb-8">
              I founded this practice with a singular belief: architecture must serve humanity before it serves the ego. Over the last two decades, our team has grown, our projects have scaled, but this core philosophy remains unchanged. We don't just build spaces; we craft environments that elevate the daily rituals of life.
            </p>
            <blockquote className="font-display italic text-[24px] text-[var(--text-dark)] leading-[1.4] border-l-[3px] border-[var(--accent)] pl-6">
              "Great design is an invisible hand that gently guides you through your day."
            </blockquote>
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY PILLARS */}
      <section className="bg-[var(--bg-white)] py-[var(--section-py)] px-[var(--gutter)]">
        <div className="max-w-[var(--container)] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((p, i) => (
              <div key={i} className="border border-[var(--border-light)] p-10 hover:border-[var(--accent)] transition-colors duration-300 reveal visible" data-delay={i+1}>
                {/* SVG Icon Placeholder */}
                <div className="w-10 h-10 mb-8 text-[var(--accent)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="font-display text-[24px] text-[var(--text-dark)] mb-4">{p.title}</h3>
                <p className="font-body text-[15px] text-[var(--text-muted)] leading-[1.6]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TIMELINE */}
      <section className="bg-[var(--bg-dark)] py-[var(--section-py)] px-[var(--gutter)] overflow-hidden">
        <div className="max-w-[var(--container)] mx-auto relative">
          
          <div className="hidden md:block absolute top-[24px] left-0 right-0 h-[1px] bg-[var(--border-dark)]" />
          <div className="md:hidden absolute top-0 bottom-0 left-[24px] w-[1px] bg-[var(--border-dark)]" />

          <div className="flex flex-col md:flex-row gap-12 md:gap-8">
            {milestones.map((m, i) => (
              <div key={i} className="relative flex-1 pl-16 md:pl-0 md:pt-16 reveal visible" data-delay={i+1}>
                {/* Node */}
                <div className="absolute left-[20px] md:left-0 top-[6px] md:top-[20px] w-2 h-2 rounded-full bg-[var(--accent)]" />
                
                <h4 className="font-display text-[28px] text-[var(--accent)] mb-4">{m.year}</h4>
                <p className="font-body text-[15px] text-white/80 leading-[1.6]">{m.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. TEAM GRID */}
      <section className="bg-[var(--bg-light)] py-[var(--section-py)] px-[var(--gutter)]">
        <div className="max-w-[var(--container)] mx-auto">
          <div className="text-center mb-16 reveal visible">
            <span className="text-[var(--accent)] text-[11px] uppercase tracking-[0.18em] font-medium mb-4 block">Leadership</span>
            <h2 className="font-display text-[40px] md:text-[48px] text-[var(--text-dark)]">The Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {team.map((member, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden reveal visible" data-delay={i%2+1}>
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-400 flex items-center justify-center">
                  <a href="#" className="w-12 h-12 rounded-full bg-[var(--accent)] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-400 delay-100">
                    in
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="font-display text-[28px] text-white mb-2">{member.name}</h3>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACCREDITATIONS */}
      <section className="bg-[var(--bg-white)] py-[80px] px-[var(--gutter)] border-t border-[var(--border-light)]">
        <div className="max-w-[var(--container)] mx-auto text-center reveal visible">
          <span className="text-[var(--text-muted)] text-[11px] uppercase tracking-[0.18em] font-medium mb-12 block">Our Memberships</span>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale">
            {accreditations.map((acc, i) => (
              <span key={i} className="font-display text-[24px] md:text-[32px] font-bold text-[var(--text-dark)]">{acc}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
