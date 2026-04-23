export default function PressMarquee() {
  const logos = [
    "Architectural Digest",
    "Vogue Living",
    "Society Interiors",
    "GQ India",
    "Wallpaper*",
    "Mid-Day",
    "Decor Journal"
  ];

  const awards = [
    "IFJ Award 2023",
    "Society Interiors Top 50",
    "Best Luxury Firm — Mumbai 2022"
  ];

  return (
    <section className="bg-[var(--bg-dark)] py-[80px] px-[var(--gutter)] overflow-hidden border-b border-[var(--border-dark)]">
      
      <div className="text-center mb-10 reveal visible">
        <span className="text-[var(--accent)] text-[11px] uppercase tracking-[0.18em] font-medium">
          As Featured In
        </span>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden flex group reveal visible data-delay='1'">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, idx) => (
            <div 
              key={idx}
              className="flex items-center justify-center min-w-[200px] px-8"
            >
              <span className="font-display text-[24px] text-white opacity-40 whitespace-nowrap transition-all duration-300 hover:opacity-85 hover:[filter:brightness(1.2)_sepia(0.3)_saturate(3)] cursor-default">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Award Tags */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 reveal visible data-delay='2'">
        {awards.map((award, i) => (
          <div 
            key={i}
            className="border border-[var(--border-dark)] rounded-full px-5 py-2.5 text-[12px] uppercase tracking-[0.1em] text-[var(--text-muted-dk)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
          >
            {award}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
