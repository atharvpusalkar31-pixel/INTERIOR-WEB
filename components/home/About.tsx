import { useParallax } from '@/hooks/useParallax';
import { useRef } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

import { motion } from 'framer-motion';

export default function About() {
  const parallax = useParallax(0.1);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  const experience = useCountUp(20, 2500, statsRef);
  const projects = useCountUp(250, 2500, statsRef);
  const clients = useCountUp(300, 2500, statsRef);
  const awards = useCountUp(15, 2500, statsRef);

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
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: experience, label: 'Years of Experience', delay: 0.1, color: 'from-[#FDFBF7] to-[#F3EBE1]' },
            { value: projects, label: 'Projects Completed', delay: 0.2, color: 'from-[#F4F7F6] to-[#E3ECE9]' },
            { value: clients, label: 'Happy Clients', delay: 0.3, color: 'from-[#FAF6F3] to-[#F1E5DB]' },
            { value: awards, label: 'Design Awards', delay: 0.4, color: 'from-[#F9F7FA] to-[#EDE7F0]' }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-50px", amount: 0.2 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.4, delay: stat.delay }}
              className={`bg-gradient-to-br ${stat.color} p-8 rounded-2xl border border-white/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="font-display text-[48px] text-[var(--accent)] mb-2 relative z-10">{stat.value}{idx !== 3 ? '+' : ''}</div>
              <div className="font-body text-[13px] uppercase tracking-[0.1em] text-[#555] font-semibold relative z-10">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
