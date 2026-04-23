
export default function Footer() {
  return (
    <footer className="bg-[var(--bg-dark)] pt-[var(--section-py)] pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
          <h2 className="font-display text-[32px] text-white">Morphis Studio</h2>
          <p className="font-display italic text-[20px] text-[var(--text-muted-dk)]">"Where Vision Meets Structure"</p>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] mb-6">About</h3>
            <p className="text-[15px] text-[var(--text-muted)] leading-[1.8]">
              A luxury architecture and interior design firm based in Mumbai, India.
              Creating spaces that outlast trends.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] mb-6">Services</h3>
            <ul className="space-y-3">
              {['Architectural Design', 'Interior Design', 'Turnkey Solutions', 'Landscape Design'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-[15px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] mb-6">Portfolio</h3>
            <ul className="space-y-3">
              {['Residential', 'Commercial', 'Hospitality', 'Architecture'].map((category) => (
                <li key={category}>
                  <a href="#projects" className="text-[15px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.18em] text-[var(--accent)] mb-6">Contact</h3>
            <address className="not-italic text-[15px] text-[var(--text-muted)] space-y-2">
              <p>[Street Address]<br/>Mumbai, India</p>
              <p className="pt-2"><a href="tel:+91XXXXXXXXXX" className="hover:text-[var(--accent)] transition-colors">+91 XXXXX XXXXX</a></p>
              <p><a href="mailto:hello@morphis.studio" className="hover:text-[var(--accent)] transition-colors">hello@morphis.studio</a></p>
              <p className="pt-4 text-[13px] text-[var(--text-muted-dk)]">Mon–Sat 9:30–18:30</p>
            </address>
          </div>
        </div>

        {/* Social Row */}
        <div className="flex space-x-4 mb-16">
          {['Instagram', 'Facebook', 'LinkedIn', 'WhatsApp'].map((platform) => (
            <a
              key={platform}
              href="#"
              className="w-9 h-9 rounded-full border border-[var(--border-dark)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              aria-label={platform}
            >
              <span className="text-[12px] font-medium">{platform[0]}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[var(--border-dark)] mb-8" />

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[12px] text-[var(--text-muted-dk)] gap-4">
          <p>© 2025 Morphis Studio. All rights reserved.</p>
          <p>Crafted by Morphis Studio</p>
        </div>
      </div>
    </footer>
  );
}
