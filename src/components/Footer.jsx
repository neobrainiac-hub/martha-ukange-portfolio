import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../data/content';

const year = new Date().getFullYear();

export default function Footer() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer role="contentinfo" className="bg-[#111111] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">

          {/* Brand */}
          <div className="max-w-xs">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleScroll('#home'); }}
              className="inline-flex items-center gap-2.5 mb-4 group"
              aria-label="Back to top"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-200">
                <span className="font-display font-bold text-white text-sm">M</span>
              </div>
              <span className="font-semibold text-white text-sm">Martha Ukange</span>
            </a>

            <p className="text-white/40 text-xs mb-3">
              Creative Developer · Graphic Designer · Tech Educator
            </p>
            <p className="text-white/30 text-xs italic">
              "Still learning. Still building. Still asking questions."
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Github size={15} aria-hidden="true" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Linkedin size={15} aria-hidden="true" />
              </a>
              <a
                href={socialLinks.email}
                aria-label="Email Martha"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Mail size={15} aria-hidden="true" />
              </a>
            </div>
            <p className="text-white/20 text-xs">© {year} Martha Ukange. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
