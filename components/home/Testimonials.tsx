import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    quote: "The team transformed our penthouse beyond anything we imagined. Every material, every detail was deliberate. Guests ask who designed the space within minutes of arriving.",
    name: "Rajesh Mehta",
    role: "MD, Mehta Realty Group",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150"
  },
  {
    quote: "What sets this firm apart is their discipline. Timelines were met, budget was respected, and the outcome was extraordinary. Rare combination in this industry.",
    name: "Priya Sheth",
    role: "Director, Sheth Developers",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150"
  },
  {
    quote: "They designed our hotel lobby and it became the most photographed space in the property. Guests check in and immediately reach for their cameras. That is the power of good design.",
    name: "Anjali Kapoor",
    role: "CEO, AK Hospitality Ventures",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section className="bg-[var(--bg-light)] py-[var(--section-py-mob)] md:py-[var(--section-py)] overflow-hidden">
      <div className="max-w-[var(--container)] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 reveal visible">
          <span className="text-[var(--accent)] text-[11px] uppercase tracking-[0.18em] font-medium mb-4 block">
            Client Voices
          </span>
          <h2 className="font-display text-[40px] md:text-[48px] text-[var(--text-dark)]">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards */}
          <div className="relative h-[400px] md:h-[320px] w-full">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 w-full transition-all duration-400 ease-out flex flex-col justify-center bg-white px-8 py-10 md:px-[56px] md:py-[48px] shadow-[0_2px_40px_rgba(0,0,0,0.06)]
                  ${idx === current ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 pointer-events-none z-0'}`}
              >
                {/* Stars */}
                <div className="text-[var(--accent)] text-[16px] tracking-[4px] mb-6">
                  ★★★★★
                </div>
                
                {/* Quote */}
                <p className="font-display italic text-[18px] text-[var(--text-dark)] leading-[1.75] mb-8">
                  "{t.quote}"
                </p>
                
                {/* Avatar/Meta */}
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={t.avatar} 
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover grayscale"
                  />
                  <div>
                    <h4 className="font-body text-[16px] font-medium text-[var(--text-dark)]">
                      {t.name}
                    </h4>
                    <span className="text-[12px] uppercase tracking-[0.1em] text-[var(--accent)]">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Arrows */}
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 border border-[var(--border-light)] flex items-center justify-center rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-[var(--text-muted)]"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 border border-[var(--border-light)] flex items-center justify-center rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-[var(--text-muted)]"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-[2px] transition-all duration-300 ${idx === current ? 'w-8 bg-[var(--accent)]' : 'w-4 bg-[var(--border-light)]'}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
