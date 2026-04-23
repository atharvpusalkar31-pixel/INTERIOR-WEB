import { useRef } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const years = useCountUp(25, 1800, sectionRef);
  const projects = useCountUp(320, 1800, sectionRef);
  const clients = useCountUp(400, 1800, sectionRef);
  const sqft = useCountUp(2.5, 1800, sectionRef); // Note: 2.5 is float, hook handles int, so we will use 25 and divide by 10

  const sqftVal = useCountUp(25, 1800, sectionRef);

  return (
    <section ref={sectionRef} className="bg-[var(--bg-mid)] py-[80px] px-[var(--gutter)] border-y border-[var(--border-dark)] overflow-hidden">
      <div className="max-w-[var(--container)] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:gap-0">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center text-center relative">
            <div className="font-display text-white leading-none mb-2" style={{ fontSize: 'clamp(56px, 7vw, 88px)' }}>
              {years}+
            </div>
            <div className="font-body text-[12px] uppercase tracking-[0.18em] text-[var(--text-muted-dk)] mt-2">
              Years of Practice
            </div>
            {/* Divider */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-2/3 bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-30" />
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center text-center relative">
            <div className="font-display text-white leading-none mb-2" style={{ fontSize: 'clamp(56px, 7vw, 88px)' }}>
              {projects}+
            </div>
            <div className="font-body text-[12px] uppercase tracking-[0.18em] text-[var(--text-muted-dk)] mt-2">
              Projects Completed
            </div>
            {/* Divider */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-2/3 bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-30" />
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center text-center relative">
            <div className="font-display text-white leading-none mb-2" style={{ fontSize: 'clamp(56px, 7vw, 88px)' }}>
              {clients}+
            </div>
            <div className="font-body text-[12px] uppercase tracking-[0.18em] text-[var(--text-muted-dk)] mt-2">
              Happy Clients
            </div>
            {/* Divider */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-2/3 bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-30" />
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="font-display text-white leading-none mb-2" style={{ fontSize: 'clamp(56px, 7vw, 88px)' }}>
              {sqftVal / 10}M+
            </div>
            <div className="font-body text-[12px] uppercase tracking-[0.18em] text-[var(--text-muted-dk)] mt-2">
              Sq.ft Designed
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
