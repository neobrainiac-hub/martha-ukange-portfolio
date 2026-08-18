import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../data/content';

const contactMethods = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@neobrainiac-hub',
    href: socialLinks.github,
    description: 'See what I\'m building',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Martha Ukange',
    href: socialLinks.linkedin,
    description: 'Connect professionally',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'Send a message',
    /*
      ─────────────────────────────────────────────────────────
      Replace the href below with Martha's actual email address
      e.g. href: 'mailto:martha@example.com'
      ─────────────────────────────────────────────────────────
    */
    href: socialLinks.email,
    description: 'Drop me a line',
  },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-padding bg-charcoal">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="w-6 h-px bg-blue-400" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Contact</span>
        </div>

        <h2
          id="contact-heading"
          className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
        >
          Let's build something
          <br />
          <span className="text-blue-400">meaningful.</span>
        </h2>

        <p className="reveal reveal-delay-1 text-white/60 text-base sm:text-lg mb-14 max-w-xl">
          Whether you have a project, an opportunity, or just want to connect — I'd love to hear from you.
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {contactMethods.map((method, i) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className={`reveal reveal-delay-${i + 1} group flex flex-col gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                  <Icon size={18} className="text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-0.5">{method.label}</p>
                  <p className="text-white/50 text-xs mb-1">{method.handle}</p>
                  <p className="text-blue-400 text-xs font-medium group-hover:text-blue-300 transition-colors duration-200">
                    {method.description} →
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
