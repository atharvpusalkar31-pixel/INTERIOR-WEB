import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Scroll Spy
      const sections = ['home', 'about', 'projects', 'services', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            if (activeSection !== section) {
              setActiveSection(section);
              // Update URL hash without jumping
              if (window.history.replaceState) {
                window.history.replaceState(null, '', `#${section}`);
              }
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const links = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Services', path: '#services' },
    { name: 'Contact', path: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-400 ease-in-out ${
          scrolled 
            ? 'bg-[var(--bg-dark)]/95 backdrop-blur-md border-b border-[var(--border-dark)] py-0' 
            : 'bg-transparent py-2'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')} 
            className="font-display font-medium text-[20px] text-white z-[101]"
          >
            Morphis Studio
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`font-body text-[12px] uppercase tracking-[0.12em] transition-colors duration-200 hover:text-[var(--accent)] ${
                    activeSection === link.path.replace('#', '')
                      ? 'text-[var(--accent)] border-b-2 border-[var(--accent)] pb-1' 
                      : 'text-white pb-1 border-b-2 border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--accent)] text-[var(--bg-dark)] text-[11px] uppercase tracking-[0.18em] px-5 py-2.5 font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-[101]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`bg-white h-[2px] w-6 rounded-sm transition-all duration-300 ease-out ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`} />
            <span className={`bg-white h-[2px] w-6 rounded-sm transition-all duration-300 ease-out my-0.5 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`bg-white h-[2px] w-6 rounded-sm transition-all duration-300 ease-out ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[var(--bg-dark)] z-[100] flex flex-col justify-center items-center transition-opacity duration-400 ease-in-out md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {links.map((link, i) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={`font-display text-[32px] hover:text-[var(--accent)] transition-all duration-500 ease-out transform ${
                activeSection === link.path.replace('#', '') ? 'text-[var(--accent)]' : 'text-white'
              } ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className={`mt-8 bg-[var(--accent)] text-[var(--bg-dark)] text-[13px] uppercase tracking-[0.18em] px-8 py-4 font-medium transition-all duration-500 ease-out transform ${
              mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: `${links.length * 100}ms` }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
