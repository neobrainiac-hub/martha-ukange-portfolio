import { skills } from '../data/content';

const categories = [
  { key: 'development', label: 'Development', accentClass: 'bg-blue-50 text-blue-700 border-blue-100' },
  { key: 'creative', label: 'Creative', accentClass: 'bg-purple-50 text-purple-700 border-purple-100' },
  { key: 'other', label: 'Other', accentClass: 'bg-slate-50 text-slate-700 border-slate-200' },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-padding bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="w-6 h-px bg-blue-600" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Skills</span>
        </div>

        <h2
          id="skills-heading"
          className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight"
        >
          What I work with
        </h2>

        <p className="reveal reveal-delay-1 text-charcoal-400 text-base sm:text-lg mb-14 max-w-lg">
          A growing toolkit built through curiosity, self-directed learning, and real projects.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <div
              key={cat.key}
              className={`reveal reveal-delay-${ci + 1} bg-white rounded-2xl border border-charcoal-100 p-6 shadow-sm`}
            >
              <h3 className="font-semibold text-base text-charcoal mb-5 pb-4 border-b border-charcoal-100">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[cat.key].map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full border ${cat.accentClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Honest note */}
        <div className="reveal reveal-delay-4 mt-8 p-5 rounded-xl bg-blue-50 border border-blue-100 max-w-2xl">
          <p className="text-blue-700 text-sm leading-relaxed">
            <strong>Still growing.</strong> Every project, every lesson, and every question adds
            to this list. I believe in honest learning — showing what I know and building toward
            what I don't yet.
          </p>
        </div>
      </div>
    </section>
  );
}
