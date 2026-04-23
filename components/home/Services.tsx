import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const [activeService, setActiveService] = useState<any>(null);
  const [showBackBtn, setShowBackBtn] = useState(false);
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeService || !detailRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBackBtn(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(detailRef.current);
    return () => observer.disconnect();
  }, [activeService]);

  const services = [
    {
      name: "Residential Design",
      desc: "Transforming houses into personalized sanctuaries that reflect your lifestyle and aesthetic.",
      icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800",
      details: "Our residential design process is deeply personal. We collaborate closely with homeowners to understand their daily rhythms, aspirations, and aesthetic preferences. From structural changes to the final layer of styling, we ensure every corner feels curated, comfortable, and uniquely yours.",
      features: [
        "Comprehensive space planning and layout optimization",
        "Bespoke furniture and custom joinery design",
        "Material, finish, and lighting specification",
        "Art curation and final styling"
      ]
    },
    {
      name: "Commercial Interiors",
      desc: "Creating inspiring workspaces and retail environments that drive productivity and engagement.",
      icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800",
      details: "We design commercial spaces that embody your brand's identity while optimizing for operational efficiency. Whether it's a corporate headquarters, a boutique hotel, or a flagship retail store, we create environments that inspire employees and captivate customers.",
      features: [
        "Brand translation into physical environments",
        "Ergonomic workspace planning",
        "Acoustic and lighting design for productivity",
        "Commercial-grade material specification"
      ]
    },
    {
      name: "Space Planning",
      desc: "Optimizing layouts for maximum functionality, flow, and spatial harmony.",
      icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800",
      details: "Effective space planning is the foundation of any successful interior. We analyze the architectural footprint and your functional requirements to create layouts that maximize flow, natural light, and usability, ensuring no space is wasted.",
      features: [
        "Traffic flow and circulation analysis",
        "Zoning and spatial division strategies",
        "2D drafting and 3D spatial visualization",
        "Structural feasibility assessments"
      ]
    },
    {
      name: "Custom Furniture",
      desc: "Bespoke pieces designed and crafted to perfectly fit your space and vision.",
      icon: "M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9 M9 22V12h6v10 M2 10.6L12 2l10 8.6",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1800",
      details: "When off-the-shelf solutions fall short, our custom furniture design service bridges the gap. We design and manufacture bespoke pieces—from built-in wardrobes to statement dining tables—that perfectly match your project's exact dimensions and design language.",
      features: [
        "Concept sketching and 3D modeling",
        "Material and upholstery sourcing",
        "Ergonomic prototyping",
        "Liaison with master craftsmen"
      ]
    },
    {
      name: "Renovation & Remodeling",
      desc: "Breathing new life into existing structures with thoughtful updates and complete transformations.",
      icon: "M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1800",
      details: "We specialize in uncovering the hidden potential of older properties. Our renovation services range from cosmetic updates to full gut remodels. We manage the delicate balance of preserving architectural heritage while introducing modern conveniences and aesthetics.",
      features: [
        "Demolition and structural modification planning",
        "MEP (Mechanical, Electrical, Plumbing) updates",
        "Building regulation compliance",
        "End-to-end project management"
      ]
    },
    {
      name: "Consultation",
      desc: "Expert guidance on materials, finishes, lighting, and overarching design direction.",
      icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1800",
      details: "For clients who prefer a hands-on approach but need professional direction, our consultation service provides expert advice. We help you avoid costly mistakes by guiding your decisions on color palettes, materials, spatial arrangements, and purchasing.",
      features: [
        "In-home or virtual design strategy sessions",
        "Color palette and material mood boards",
        "Vendor and supplier recommendations",
        "Troubleshooting design dilemmas"
      ]
    }
  ];

  const handleServiceClick = (service: any) => {
    setActiveService(service);
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBack = () => {
    setActiveService(null);
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="bg-[var(--bg-light)] py-[120px] min-h-screen border-y border-[var(--border-light)] relative">
      
      {activeService ? (
        /* --- DETAIL VIEW --- */
        <div className="w-full animate-fade-in" ref={detailRef}>
          <button 
            onClick={handleBack}
            className={`fixed top-24 left-6 md:left-[var(--gutter)] z-50 bg-[var(--bg-dark)] text-white px-6 py-3 text-[13px] uppercase tracking-[0.1em] font-medium hover:bg-[var(--accent)] transition-all duration-500 shadow-xl flex items-center gap-2 ${
              showBackBtn ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            ← Back to Services
          </button>

          <div className="max-w-[var(--container)] mx-auto px-[var(--gutter)] py-12">
            <div className="bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col lg:flex-row">
              {/* Image Side */}
              <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative">
                <img src={activeService.image} alt={activeService.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              
              {/* Content Side */}
              <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                <div className="w-16 h-16 bg-[var(--bg-light)] rounded-full flex items-center justify-center mb-8">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)]">
                    <path d={activeService.icon} />
                  </svg>
                </div>
                
                <h2 className="font-display text-[40px] md:text-[48px] text-[var(--text-dark)] mb-6 leading-[1.1]">
                  {activeService.name}
                </h2>
                
                <p className="font-body text-[16px] text-[var(--text-muted)] leading-[1.8] mb-10">
                  {activeService.details}
                </p>
                
                <h3 className="font-display text-[24px] text-[var(--text-dark)] mb-6">What's Included</h3>
                <ul className="space-y-4 mb-12">
                  {activeService.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 font-body text-[15px] text-[var(--text-dark)]">
                      <span className="text-[var(--accent)] mt-1">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="self-start bg-[var(--accent)] text-[var(--bg-dark)] px-8 py-4 text-[13px] uppercase tracking-[0.18em] font-medium hover:bg-[var(--accent-hover)] transition-colors rounded-sm"
                >
                  Get Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* --- MAIN LIST VIEW --- */
        <div className="max-w-[var(--container)] mx-auto px-[var(--gutter)] animate-fade-in">
          <div className="text-center mb-16 reveal visible">
            <span className="text-[var(--accent)] text-[11px] uppercase tracking-[0.18em] font-medium mb-4 block">
              Our Offerings
            </span>
            <h2 className="font-display text-[40px] md:text-[56px] text-[var(--text-dark)] leading-none">
              Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => {
              const bgGradients = [
                'from-[#FDFBF7] to-[#F3EBE1]',
                'from-[#F4F7F6] to-[#E3ECE9]',
                'from-[#FAF6F3] to-[#F1E5DB]',
                'from-[#F9F7FA] to-[#EDE7F0]',
                'from-[#FDFBF7] to-[#F1F3E9]',
                'from-[#F5F2EE] to-[#E6E0D8]'
              ];
              const gradient = bgGradients[idx % bgGradients.length];

              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px", amount: 0.2 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: idx * 0.1 }}
                  onClick={() => handleServiceClick(svc)}
                  className={`bg-gradient-to-br ${gradient} p-10 rounded-2xl shadow-lg border border-white/60 hover:shadow-2xl hover:-translate-y-2 hover:border-[var(--accent)] transition-all duration-300 group cursor-pointer relative overflow-hidden`} 
                >
                  <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center mb-8 group-hover:bg-[var(--accent)] transition-colors duration-300 shadow-sm relative z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent)] group-hover:text-white transition-colors duration-300">
                      <path d={svc.icon} />
                    </svg>
                  </div>
                  <h3 className="font-display text-[26px] text-[var(--text-dark)] mb-4 group-hover:text-[var(--accent)] transition-colors relative z-10">{svc.name}</h3>
                  <p className="font-body text-[15px] text-[#555] leading-[1.6] mb-8 relative z-10">{svc.desc}</p>
                  <div className="inline-flex text-[13px] text-[var(--accent)] uppercase tracking-[0.18em] font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[var(--accent)] after:opacity-0 hover:after:opacity-100 after:transition-opacity z-10">
                    Explore Service →
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
