import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="relative bg-[var(--bg-dark)] py-[140px] px-[var(--gutter)] overflow-hidden">
      
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-[var(--container)] mx-auto text-center">
        
        <div className="reveal visible">
          <h2 
            className="font-display text-white mb-4 leading-[1.1]"
            style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
          >
            Ready to Design Your Space?
          </h2>
        </div>

        <div className="reveal visible" data-delay="1">
          <p className="font-body text-[18px] text-[var(--text-muted)]">
            Let's start a conversation about what's possible.
          </p>
        </div>

        <div className="reveal visible mt-10" data-delay="2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="w-full sm:w-auto text-center bg-[var(--accent)] text-[var(--bg-dark)] text-[13px] uppercase tracking-[0.18em] px-10 py-[18px] font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              Get In Touch
            </Link>
            
            <a 
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center flex items-center justify-center gap-2 bg-[#25D366] text-white text-[13px] uppercase tracking-[0.18em] px-10 py-[18px] font-medium hover:bg-[#20bd5a] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              WhatsApp Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
