import { useState } from 'react';
import Head from 'next/head';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Contact | Morphis Studio</title>
      </Head>

      {/* 1. HERO */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center text-center px-[var(--gutter)] bg-[var(--bg-dark)]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1800" alt="Design studio workspace" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 w-full max-w-[var(--container)] mx-auto reveal visible">
          <h1 className="font-display text-white mb-6 leading-none" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
            Contact Us
          </h1>
          <p className="font-body text-[18px] md:text-[22px] text-[var(--accent)] font-light max-w-2xl mx-auto">
            Let's bring your vision to life.
          </p>
        </div>
      </section>

      {/* 2. WHATSAPP SHORTCUT */}
      <section className="bg-[var(--bg-dark)] pb-[120px] px-[var(--gutter)] text-center">
        <div className="reveal visible" data-delay="1">
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white text-[15px] uppercase tracking-[0.1em] px-[32px] py-[16px] font-medium hover:bg-[#20bd5a] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp — Fastest Response
          </a>
          <p className="font-body text-[13px] text-[var(--text-muted-dk)] mt-4">Average response time: under 2 hours</p>
        </div>
      </section>

      {/* 3. TWO-COLUMN FORM SECTION */}
      <section className="bg-[var(--bg-white)] pb-[120px] px-[var(--gutter)]">
        <div className="max-w-[var(--container)] mx-auto flex flex-col lg:flex-row -mt-16 relative z-10 shadow-2xl">
          
          {/* Left Col - Form */}
          <div className="w-full lg:w-[60%] bg-[var(--bg-light)] p-8 md:p-[64px]">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 rounded-full bg-[var(--accent)] text-white flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <h3 className="font-display text-[32px] text-[var(--text-dark)] mb-4">Thank you.</h3>
                <p className="font-body text-[16px] text-[var(--text-muted)]">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-[32px] text-[var(--text-dark)] mb-8">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <input required type="text" placeholder="Full Name *" className="w-full bg-transparent border-0 border-b border-[var(--border-light)] py-3 px-0 font-body text-[15px] text-[var(--text-dark)] placeholder:text-[var(--text-muted)] focus:ring-0 focus:border-[var(--accent)] transition-colors outline-none" />
                  
                  <input required type="tel" placeholder="Phone Number * (+91...)" className="w-full bg-transparent border-0 border-b border-[var(--border-light)] py-3 px-0 font-body text-[15px] text-[var(--text-dark)] placeholder:text-[var(--text-muted)] focus:ring-0 focus:border-[var(--accent)] transition-colors outline-none" />
                  
                  <input required type="email" placeholder="Email Address *" className="w-full bg-transparent border-0 border-b border-[var(--border-light)] py-3 px-0 font-body text-[15px] text-[var(--text-dark)] placeholder:text-[var(--text-muted)] focus:ring-0 focus:border-[var(--accent)] transition-colors outline-none" />
                  
                  <select required className="w-full bg-transparent border-0 border-b border-[var(--border-light)] py-3 px-0 font-body text-[15px] text-[var(--text-muted)] focus:ring-0 focus:border-[var(--accent)] transition-colors outline-none cursor-pointer appearance-none">
                    <option value="" disabled selected>Project Type *</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Landscape">Landscape</option>
                    <option value="Other">Other</option>
                  </select>

                  <select className="w-full bg-transparent border-0 border-b border-[var(--border-light)] py-3 px-0 font-body text-[15px] text-[var(--text-muted)] focus:ring-0 focus:border-[var(--accent)] transition-colors outline-none cursor-pointer appearance-none">
                    <option value="" disabled selected>Budget Range</option>
                    <option value="Under ₹25L">Under ₹25L</option>
                    <option value="₹25L–₹75L">₹25L–₹75L</option>
                    <option value="₹75L–₹2Cr">₹75L–₹2Cr</option>
                    <option value="₹2Cr+">₹2Cr+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>

                  <textarea rows={4} placeholder="Message" className="w-full bg-transparent border-0 border-b border-[var(--border-light)] py-3 px-0 font-body text-[15px] text-[var(--text-dark)] placeholder:text-[var(--text-muted)] focus:ring-0 focus:border-[var(--accent)] transition-colors outline-none resize-none"></textarea>

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="mt-4 w-full h-[54px] bg-[var(--accent)] text-[var(--bg-dark)] text-[13px] uppercase tracking-[0.18em] font-medium hover:bg-[var(--accent-hover)] transition-colors flex items-center justify-center disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-[var(--bg-dark)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Sending...
                      </span>
                    ) : "Send Enquiry"}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right Col - Info */}
          <div className="w-full lg:w-[40%] bg-[var(--bg-dark)] p-8 md:p-[64px] flex flex-col text-white">
            <h3 className="font-display text-[32px] text-[var(--accent)] mb-8">Mumbai</h3>
            
            <div className="space-y-6 font-body text-[15px] text-white/90 mb-12 flex-1">
              <p>Morphis Studio HQ<br/>Lower Parel West<br/>Mumbai, Maharashtra 400013<br/>India</p>
              <p><a href="tel:+91XXXXXXXXXX" className="hover:text-[var(--accent)] transition-colors">+91 XXXXX XXXXX</a></p>
              <p><a href="mailto:hello@morphis.studio" className="hover:text-[var(--accent)] transition-colors">hello@morphis.studio</a></p>
              <p className="text-[var(--text-muted-dk)] pt-4">Mon–Sat 9:30–18:30</p>
            </div>

            <div className="w-full h-[240px] bg-[var(--bg-mid)] mb-10 flex items-center justify-center text-[var(--text-muted-dk)] text-[13px] uppercase tracking-[0.1em]">
              Google Maps Embed
            </div>

            <div className="flex gap-4">
              {['Ig', 'Fb', 'In', 'Wa'].map((social) => (
                <a key={social} href="#" className="w-9 h-9 rounded-full border border-[var(--border-dark)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-[12px] font-medium">
                  {social}
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
