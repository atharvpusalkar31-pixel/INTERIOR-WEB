export default function Process() {
  const steps = [
    { num: "01", title: "Discovery", desc: "We listen deeply to understand your vision, lifestyle, and non-negotiables." },
    { num: "02", title: "Concept", desc: "Mood boards, spatial concepts, and design directions for your review." },
    { num: "03", title: "Design", desc: "Detailed drawings, 3D renders, material palettes, full documentation." },
    { num: "04", title: "Execution", desc: "Our site team manages vendors, timelines, quality at every stage." },
    { num: "05", title: "Handover", desc: "A walkthrough of your finished space — exactly as designed, on schedule." },
  ];

  return (
    <section className="bg-[var(--bg-dark)] py-[var(--section-py-mob)] md:py-[var(--section-py)] overflow-hidden">
      <div className="max-w-[var(--container)] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center md:text-left mb-20 reveal visible">
          <span className="text-[var(--accent)] text-[11px] uppercase tracking-[0.18em] font-medium mb-4 block">
            How We Work
          </span>
          <h2 className="font-display text-[40px] md:text-[48px] text-white">
            Our Process
          </h2>
        </div>

        {/* Stepper */}
        <div className="flex flex-col md:flex-row relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[28px] left-0 w-full h-[1px] bg-[var(--border-dark)] z-0" />

          {steps.map((step, idx) => (
            <div 
              key={step.num}
              className="relative flex-1 group pb-12 md:pb-0 reveal visible"
              data-delay={idx + 1}
            >
              {/* Connector Highlight (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-[28px] left-0 w-full h-[1px] bg-[var(--accent)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />
              )}

              {/* Large Background Number */}
              <div className="absolute top-[-20px] left-0 font-display text-[80px] text-white opacity-5 select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-10 z-0">
                {step.num}
              </div>

              {/* Content */}
              <div className="relative z-20 pt-8 pr-8">
                {/* Mobile Connector (Vertical) */}
                <div className="md:hidden absolute left-0 top-0 w-[1px] h-full bg-[var(--border-dark)] -z-10" />
                
                <span className="inline-block text-[var(--accent)] text-[11px] uppercase tracking-[0.18em] font-medium mb-3 relative bg-[var(--bg-dark)] pr-2">
                  {step.num} /
                </span>
                
                <h3 className="font-body text-[18px] font-medium text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="font-body text-[14px] text-[var(--text-muted-dk)] leading-[1.7] max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
