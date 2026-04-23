
export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[100dvh] overflow-hidden flex items-center bg-[var(--bg-dark)]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80)' }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(160deg, rgba(14,14,12,0.6) 0%, rgba(14,14,12,0.3) 50%, rgba(14,14,12,0.75) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[var(--container)] mx-auto px-6 md:pl-[8vw] text-center md:text-left pt-20">
        <div className="reveal visible" style={{ transitionDelay: '0s' }}>
          <span className="block text-[11px] text-[var(--accent)] uppercase tracking-[0.18em] mb-6 font-medium">
            EST. 2004 — MUMBAI, INDIA
          </span>
        </div>
        
        <div className="reveal visible" style={{ transitionDelay: '0.12s' }}>
          <h1 
            className="font-display font-normal text-white whitespace-pre-line mb-6"
            style={{ fontSize: 'clamp(56px, 8vw, 104px)', lineHeight: '1.04' }}
          >
            {"Where Vision\nMeets Structure"}
          </h1>
        </div>
        
        <div className="reveal visible" style={{ transitionDelay: '0.24s' }}>
          <p className="font-body font-light text-[17px] text-white/70 tracking-[0.05em] max-w-xl mx-auto md:mx-0">
            Architecture & Interior Design
          </p>
        </div>
        
        <div className="reveal visible mt-10" style={{ transitionDelay: '0.36s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a 
              href="#projects"
              className="w-full sm:w-auto text-center bg-[var(--accent)] text-[var(--bg-dark)] text-[13px] uppercase tracking-[0.18em] px-8 py-4 font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              View Our Projects
            </a>
            <a 
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center border border-white/50 text-white text-[13px] uppercase tracking-[0.18em] px-8 py-4 font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              WhatsApp Us ↗
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-40 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
