import { ExternalLink } from 'lucide-react';
import { learningExperiences } from '../data/content';

export default function Learning() {
  return (
    <section id="learning" aria-labelledby="learning-heading" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="w-6 h-px bg-purple-600" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-widest text-purple-600 uppercase">Learning</span>
        </div>

        <h2
          id="learning-heading"
          className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight"
        >
          Learning, Made Interactive.
        </h2>

        <p className="reveal reveal-delay-1 text-charcoal-400 text-base sm:text-lg mb-14 max-w-xl">
          Web-based learning experiences I created while exploring technology and creative skills.
        </p>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningExperiences.map((exp, i) => (
            <article
              key={exp.id}
              className={`reveal reveal-delay-${i + 1} group bg-[#F8F7F4] rounded-2xl border border-charcoal-100 overflow-hidden hover:border-purple-200 hover:shadow-md transition-all duration-300`}
              aria-labelledby={`learning-${exp.id}-name`}
            >
              {/* Coloured top stripe */}
              <div
                className={`h-1 w-full ${
                  i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-purple-500' : 'bg-indigo-400'
                }`}
                aria-hidden="true"
              />

              <div className="p-6">
                {/* Icon area */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    i === 0
                      ? 'bg-blue-100 text-blue-600'
                      : i === 1
                      ? 'bg-purple-100 text-purple-600'
                      : 'bg-indigo-100 text-indigo-600'
                  }`}
                  aria-hidden="true"
                >
                  <span className="font-display font-bold text-lg">
                    {exp.name.charAt(0)}
                  </span>
                </div>

                <h3
                  id={`learning-${exp.id}-name`}
                  className="font-semibold text-lg text-charcoal mb-2 group-hover:text-blue-600 transition-colors duration-200"
                >
                  {exp.name}
                </h3>

                <p className="text-charcoal-400 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                <a
                  href={exp.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                    i === 0
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : i === 1
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-indigo-500 text-white hover:bg-indigo-600'
                  }`}
                >
                  <ExternalLink size={12} aria-hidden="true" />
                  View Experience
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
