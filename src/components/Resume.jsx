import { Download } from 'lucide-react';

export default function Resume() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="section-padding bg-[#F8F7F4]"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">

        {/* Label */}
        <div className="reveal flex items-center justify-center gap-3 mb-4">
          <span className="w-6 h-px bg-blue-600" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Resume</span>
          <span className="w-6 h-px bg-blue-600" aria-hidden="true" />
        </div>

        <h2
          id="resume-heading"
          className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight"
        >
          Want to see the full journey?
        </h2>

        <p className="reveal reveal-delay-1 text-charcoal-400 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Download my resume to explore my education, skills, experience, and projects.
        </p>

        {/*
          ────────────────────────────────────────────────────────
          Resume CTA button
          To add the resume:
            1. Place Martha's resume PDF at /public/resume.pdf
            2. The download link below will work automatically.
          ────────────────────────────────────────────────────────
        */}
        <div className="reveal reveal-delay-2">
          <a
            href="/resume.pdf"
            download="Martha_Ukange_Resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white text-sm font-semibold rounded-xl hover:bg-charcoal-800 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Download size={16} aria-hidden="true" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
