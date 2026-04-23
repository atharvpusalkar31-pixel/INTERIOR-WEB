export default function TrustBar() {
  const stats = [
    { value: '9.4 / 10', label: 'Client Rating' },
    { value: '250+', label: 'Projects Delivered' },
    { value: '20+', label: 'Years of Excellence' },
    { value: 'Mumbai & Pan-India', label: '' },
  ];

  return (
    <div className="w-full bg-[var(--bg-mid)] border-b border-[var(--border-dark)] overflow-hidden">
      <div className="max-w-[var(--container)] mx-auto px-6 h-auto md:h-16 py-4 md:py-0 reveal visible" style={{ transitionDelay: '0.5s' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 h-full items-center gap-y-4 md:gap-y-0">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-center gap-1 sm:gap-3 
                ${i !== 0 && i !== 2 ? 'md:border-l md:border-[var(--border-dark)]' : ''} 
                ${i !== 0 ? 'md:border-l border-[var(--border-dark)]' : ''}
                ${i === 1 || i === 3 ? 'border-l border-[var(--border-dark)] pl-4 md:pl-0' : ''}
              `}
            >
              <span className="font-body font-medium text-[15px] text-white whitespace-nowrap">
                {stat.value}
              </span>
              {stat.label && (
                <span className="font-body text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted-dk)] whitespace-nowrap">
                  {stat.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
