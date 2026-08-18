import { Github, Linkedin, Download, ArrowDown } from 'lucide-react';
import { socialLinks } from '../data/content';

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* ── Subtle background texture ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(37,99,235,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(124,58,237,0.04) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center py-16 lg:py-0 min-h-[calc(100vh-4rem)]">

          {/* ── Left: Text content ── */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            {/* Eyebrow label */}
            <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <span className="flex items-center gap-1.5 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                <span className="w-6 h-px bg-blue-600 block" />
                Portfolio
              </span>
            </div>

            {/* Name */}
            <h1
              className="font-display text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold text-charcoal leading-tight mb-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Martha
              <br />
              <span className="text-blue-600">Ukange</span>
            </h1>

            {/* Role tags */}
            <div
              className="flex flex-wrap gap-2 mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              {['Creative Developer', 'Graphic Designer', 'Tech Educator'].map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 bg-charcoal-100 text-charcoal-600 text-xs font-medium rounded-full border border-charcoal-200"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Core statement */}
            <blockquote
              className="font-display text-xl sm:text-2xl lg:text-2xl font-medium text-charcoal italic mb-4 leading-snug opacity-0 animate-fade-up"
              style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
            >
              "Still learning. Still building. Still asking questions."
            </blockquote>

            {/* Supporting text */}
            <p
              className="text-charcoal-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg opacity-0 animate-fade-up"
              style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
            >
              I'm a Computer Science student and self-taught creator exploring the intersection of technology, creativity, and education.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center gap-3 mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
            >
              <a
                href="#work"
                onClick={(e) => { e.preventDefault(); handleScroll('#work'); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Explore My Work
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-charcoal-200 text-charcoal text-sm font-semibold rounded-lg hover:border-charcoal hover:bg-charcoal-100 transition-all duration-200"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div
              className="flex items-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.65s', animationFillMode: 'forwards' }}
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Martha's GitHub profile"
                className="flex items-center gap-2 text-charcoal-400 hover:text-charcoal text-sm font-medium transition-colors duration-200"
              >
                <Github size={16} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <span className="w-px h-4 bg-charcoal-200" aria-hidden="true" />
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Martha's LinkedIn profile"
                className="flex items-center gap-2 text-charcoal-400 hover:text-charcoal text-sm font-medium transition-colors duration-200"
              >
                <Linkedin size={16} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <div className="relative">
              {/* Decorative border frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-3xl border border-blue-200/60"
                style={{ transform: 'translate(8px, 8px)' }}
              />
              {/* Subtle accent dot */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-purple-100/70"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-blue-100/70"
              />

              {/* Photo container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px] xl:w-96 xl:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-charcoal-100">
                {/*
                  ─────────────────────────────────────────────────────
                  PHOTO PLACEHOLDER
                  Replace the img src below with Martha's actual photo.
                  Recommended: place image at /public/martha-ukange.jpg
                  Then update src to: src="/martha-ukange.jpg"
                  ─────────────────────────────────────────────────────
                */}
                <img
                  src="/martha-ukange.png"
                  alt="Martha Ukange — Creative Developer, Graphic Designer and Tech Educator"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder (hidden when photo loads) */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex-col items-center justify-center text-center p-8"
                  style={{ display: 'none' }}
                  aria-hidden="true"
                >
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <span className="font-display font-bold text-blue-600 text-3xl">M</span>
                  </div>
                  <p className="text-charcoal-400 text-sm leading-relaxed">
                    Add photo to{' '}
                    <code className="text-blue-600 font-mono text-xs">
                      /public/martha-ukange.jpg
                    </code>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Scroll cue ── */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-0 animate-fade-in"
          style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
          aria-hidden="true"
        >
          <span className="text-xs text-charcoal-400 tracking-widest uppercase font-medium">Scroll</span>
          <ArrowDown size={14} className="text-charcoal-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
