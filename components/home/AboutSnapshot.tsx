import Link from 'next/link';
import { useParallax } from '@/hooks/useParallax';

export default function AboutSnapshot() {
  const parallaxOffset = useParallax(0.1);

  return (
    <section className="bg-[var(--bg-light)] py-[var(--section-py-mob)] md:py-[var(--section-py)] overflow-hidden">
      <div className="max-w-[var(--container)] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-[80px] items-center">
          
          {/* Left - Image */}
          <div className="w-full md:w-[55%] reveal-left">
            <div 
              className="relative aspect-[3/4] w-full border-l-[4px] border-[var(--accent)] overflow-hidden bg-[var(--bg-mid)]"
            >
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900" 
                alt="Interior design" 
                className="absolute inset-0 w-full h-[120%] object-cover"
                style={{ transform: `translateY(${-parallaxOffset}px)` }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right - Text */}
          <div className="w-full md:w-[45%] flex flex-col justify-center reveal-right">
            <span className="text-[var(--accent)] text-[11px] uppercase tracking-[0.18em] font-medium mb-6">
              Our Story
            </span>
            
            <h2 className="font-display text-[40px] md:text-[48px] text-[var(--text-dark)] leading-[1.1] whitespace-pre-line mb-8">
              {"Designing Spaces\nThat Outlast Trends"}
            </h2>
            
            <p className="font-body text-[16px] text-[var(--text-muted)] leading-[1.8] mb-8">
              For over two decades, we have shaped the architectural landscape of Mumbai. 
              Our practice is rooted in a deep understanding of spatial proportion, 
              materiality, and the nuances of how people live and work.
            </p>
            
            <blockquote className="font-display italic text-[20px] text-[var(--accent)] border-l-[3px] border-[var(--accent)] pl-[20px] my-[32px] leading-[1.4]">
              "Design is not decoration — it is the architecture of human aspiration."
            </blockquote>
            
            <div className="mt-4">
              <Link 
                href="/about"
                className="text-[13px] uppercase tracking-[0.18em] text-[var(--text-dark)] font-medium hover:text-[var(--accent)] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-[var(--accent)] after:opacity-0 hover:after:opacity-100 after:transition-opacity"
              >
                Discover Our Story →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
