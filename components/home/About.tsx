import { useParallax } from '@/hooks/useParallax';
import { useRef } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

export default function About() {
  const parallax = useParallax(0.1);
  const sectionRef = useRef<HTMLElement>(null);
  
  const experience = useCountUp(20, 1800, sectionRef);
  const projects = useCountUp(250, 1800, sectionRef);
  const clients = useCountUp(300, 1800, sectionRef);
  const awards = useCountUp(15, 1800, sectionRef);

  return (
    <section id="about" ref={sectionRef} className="bg-[#FAF9F6] py-[120px] px-[var(--gutter)] overflow-hidden">
      <div className="max-w-[var(--container)] mx-auto">
        
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-[100px]">
          
          {/* Left Column - Text */}
          <div className="w-full lg:w-1/2 reveal-left">
            <span className="text-[var(--accent)] text-[11px] uppercase tracking-[0.18em] font-medium mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-[40px] md:text-[56px] text-[#1A1A1A] mb-8 leading-[1.1]">
              About Morphis Studio
            </h2>
            
            <div className="space-y-6 font-body text-[16px] text-[#4A4A4A] leading-[1.8]">
              <p>
                Founded over twenty years ago, Morphis Studio was built on a singular vision: to craft spaces that elevate the daily rituals of life. We believe that true luxury lies not in excess, but in the perfect balance of proportion, light, and material honesty.
              </p>
              <p>
                Our design philosophy is rooted in functionality meeting timeless aesthetics. We don't just decorate rooms; we architect environments that seamlessly adapt to how people live, work, and interact. Every detail, from the structural layout to the custom joinery, is thoughtfully considered.
              </p>
              <p>
                We approach every client relationship as a collaborative partnership. By listening deeply to your aspirations and non-negotiables, we translate your lifestyle into a bespoke physical environment, managing every phase from concept to the final handover.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2 reveal-right">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--bg-mid)] rounded-sm shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800" 
                alt="Morphis Studio Interior"
                className="w-full h-[120%] object-cover"
                style={{ transform: `translateY(${-parallax}px)` }}
              />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#EAE8E3] text-center reveal visible" data-delay="1">
            <div className="font-display text-[48px] text-[var(--accent)] mb-2">{experience}+</div>
            <div className="font-body text-[13px] uppercase tracking-[0.1em] text-[#666]">Years of Experience</div>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#EAE8E3] text-center reveal visible" data-delay="2">
            <div className="font-display text-[48px] text-[var(--accent)] mb-2">{projects}+</div>
            <div className="font-body text-[13px] uppercase tracking-[0.1em] text-[#666]">Projects Completed</div>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#EAE8E3] text-center reveal visible" data-delay="3">
            <div className="font-display text-[48px] text-[var(--accent)] mb-2">{clients}+</div>
            <div className="font-body text-[13px] uppercase tracking-[0.1em] text-[#666]">Happy Clients</div>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#EAE8E3] text-center reveal visible" data-delay="4">
            <div className="font-display text-[48px] text-[var(--accent)] mb-2">{awards}</div>
            <div className="font-body text-[13px] uppercase tracking-[0.1em] text-[#666]">Design Awards</div>
          </div>
        </div>

      </div>
    </section>
  );
}
