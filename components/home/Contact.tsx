import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="bg-[var(--bg-white)] py-[120px] px-[var(--gutter)]">
      <div className="max-w-[var(--container)] mx-auto">
        <div className="text-center mb-16 reveal visible">
          <span className="text-[var(--accent)] text-[11px] uppercase tracking-[0.18em] font-medium mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-[40px] md:text-[56px] text-[var(--text-dark)] leading-none">
            Contact Us
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row shadow-2xl rounded-sm overflow-hidden border border-[var(--border-light)] reveal visible">
          
          {/* Left Col - Form */}
          <div className="w-full lg:w-[60%] bg-white p-8 md:p-[64px]">
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
                <h3 className="font-display text-[28px] text-[var(--text-dark)] mb-8">Send Us a Message</h3>
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

                  <textarea rows={4} placeholder="Message" className="w-full bg-transparent border-0 border-b border-[var(--border-light)] py-3 px-0 font-body text-[15px] text-[var(--text-dark)] placeholder:text-[var(--text-muted)] focus:ring-0 focus:border-[var(--accent)] transition-colors outline-none resize-none"></textarea>

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="mt-4 w-full h-[54px] bg-[var(--accent)] text-[var(--bg-dark)] text-[13px] uppercase tracking-[0.18em] font-medium hover:bg-[var(--accent-hover)] transition-colors flex items-center justify-center disabled:opacity-70 rounded-sm"
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
            <h3 className="font-display text-[28px] text-[var(--accent)] mb-8">Mumbai</h3>
            
            <div className="space-y-6 font-body text-[15px] text-white/90 mb-12 flex-1">
              <p>Morphis Studio HQ<br/>Lower Parel West<br/>Mumbai, Maharashtra 400013<br/>India</p>
              <p><a href="tel:+91XXXXXXXXXX" className="hover:text-[var(--accent)] transition-colors">+91 XXXXX XXXXX</a></p>
              <p><a href="mailto:hello@morphis.studio" className="hover:text-[var(--accent)] transition-colors">hello@morphis.studio</a></p>
              <p className="text-[var(--text-muted-dk)] pt-4">Mon–Sat 9:30–18:30</p>
            </div>

            <div className="w-full h-[240px] bg-[var(--bg-mid)] mb-10 flex items-center justify-center text-[var(--text-muted-dk)] text-[13px] uppercase tracking-[0.1em] rounded-sm">
              Google Maps Embed
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
