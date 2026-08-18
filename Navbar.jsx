import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Learning', href: '#learning' },
  { label: 'TechTots', href: '#techtots' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Active section tracker ── */
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* ── Lock body when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F8F7F4]/95 backdrop-blur-md shadow-sm border-b border-charcoal-100/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
              className="flex items-center gap-2.5 group"
              aria-label="Martha Ukange — Home"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors duration-200">
                <span className="font-display font-bold text-white text-sm leading-none">M</span>
              </div>
              <span className="hidden sm:block font-semibold text-charcoal text-sm tracking-tight">
                Martha Ukange
              </span>
            </a>

            {/* Desktop nav */}
            <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-charcoal-600 hover:text-charcoal'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2.5 bg-charcoal text-white text-sm font-medium rounded-lg hover:bg-charcoal-800 transition-colors duration-200 shadow-sm"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-charcoal-100 transition-colors duration-200"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#F8F7F4] shadow-2xl transition-transform duration-300 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-charcoal-100">
            <span className="font-semibold text-sm text-charcoal">Navigation</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-charcoal-100 transition-colors duration-200"
            >
              <X size={18} />
            </button>
          </div>

          {/* Links */}
          <nav aria-label="Mobile navigation" className="px-4 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-charcoal-600 hover:bg-charcoal-100 hover:text-charcoal'
                  }`}
                  style={{
                    transitionDelay: open ? `${i * 30}ms` : '0ms',
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile CTA */}
          <div className="px-4 pt-2 border-t border-charcoal-100 mx-4">
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 w-full px-4 py-3 mt-4 bg-charcoal text-white text-sm font-medium rounded-lg hover:bg-charcoal-800 transition-colors duration-200"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
