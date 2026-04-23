import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      name: "Residential Design",
      desc: "Transforming houses into personalized sanctuaries that reflect your lifestyle and aesthetic.",
      icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    },
    {
      name: "Commercial Interiors",
      desc: "Creating inspiring workspaces and retail environments that drive productivity and engagement.",
      icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6"
    },
    {
      name: "Space Planning",
      desc: "Optimizing layouts for maximum functionality, flow, and spatial harmony.",
      icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6"
    },
    {
      name: "Custom Furniture",
      desc: "Bespoke pieces designed and crafted to perfectly fit your space and vision.",
      icon: "M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9 M9 22V12h6v10 M2 10.6L12 2l10 8.6"
    },
    {
      name: "Renovation & Remodeling",
      desc: "Breathing new life into existing structures with thoughtful updates and complete transformations.",
      icon: "M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
    },
    {
      name: "Consultation",
      desc: "Expert guidance on materials, finishes, lighting, and overarching design direction.",
      icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    }
  ];

  const faqs = [
    { q: "How long does a typical interior project take?", a: "Most residential projects take 3–6 months from design sign-off to handover, depending on scope, custom items, and site conditions." },
    { q: "Do you manage government approvals?", a: "Yes. Our team handles all statutory approvals, NOCs, and documentation required for architectural projects." },
    { q: "What is your design fee structure?", a: "We work on a professional fee basis — either a percentage of project cost or a fixed fee agreed at the outset. Full transparency, no surprises." },
    { q: "Do you work outside Mumbai?", a: "Yes. We are active across Maharashtra and have delivered projects in Delhi, Bangalore, and Goa." },
    { q: "What is a turnkey project?", a: "We handle everything — design, procurement, execution, and handover. You receive keys to a finished, move-in-ready space." },
    { q: "Can I see similar completed projects before engaging?", a: "Absolutely. We arrange site visits to relevant completed projects and provide client references upon request." }
  ];

  return (
    <>
      <Head>
        <title>Our Services | Morphis Studio</title>
      </Head>

      {/* 1. HERO */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center px-[var(--gutter)] bg-[var(--bg-dark)]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1556910103-1c02745a8045?w=1800" alt="Sleek contemporary kitchen" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 w-full max-w-[var(--container)] mx-auto reveal visible">
          <h1 className="font-display text-white mb-6 leading-none" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
            Our Services
          </h1>
          <p className="font-body text-[18px] md:text-[22px] text-[var(--accent)] font-light max-w-2xl mx-auto">
            End-to-end design from concept to completion.
          </p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="bg-[var(--bg-light)] py-[120px] px-[var(--gutter)]">
        <div className="max-w-[var(--container)] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <div key={idx} className="bg-[var(--bg-white)] p-10 border border-[var(--border-light)] hover:border-[var(--accent)] transition-all duration-300 group reveal visible" data-delay={idx + 1}>
                <div className="w-14 h-14 bg-[var(--bg-light)] rounded-full flex items-center justify-center mb-8 group-hover:bg-[var(--accent)] transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-dark)] group-hover:text-white transition-colors duration-300">
                    <path d={svc.icon} />
                  </svg>
                </div>
                <h3 className="font-display text-[26px] text-[var(--text-dark)] mb-4">{svc.name}</h3>
                <p className="font-body text-[15px] text-[var(--text-muted)] leading-[1.6] mb-8">{svc.desc}</p>
                <Link href="/contact" className="inline-flex text-[13px] text-[var(--accent)] uppercase tracking-[0.18em] font-medium relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-[var(--accent)] after:opacity-0 hover:after:opacity-100 after:transition-opacity">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION */}
      <section className="bg-[var(--bg-light)] py-[120px] px-[var(--gutter)] border-t border-[var(--border-light)]">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16 reveal visible">
            <h2 className="font-display text-[40px] md:text-[48px] text-[var(--text-dark)]">Frequently Asked Questions</h2>
          </div>

          <div className="flex flex-col border-t border-[var(--border-light)]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-[var(--border-light)] reveal visible" data-delay={idx % 4 + 1}>
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
                  >
                    <span className="font-display text-[22px] text-[var(--text-dark)] pr-8">{faq.q}</span>
                    <span className={`text-[var(--accent)] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="font-body text-[16px] text-[var(--text-muted)] leading-[1.7]">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
