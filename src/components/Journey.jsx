import { journey } from '../data/content';

export default function Journey() {
  return (
    <section id="journey" aria-labelledby="journey-heading" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="w-6 h-px bg-purple-600" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-widest text-purple-600 uppercase">Journey</span>
        </div>

        <h2
          id="journey-heading"
          className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight"
        >
          From curiosity
          <br />
          <span className="text-purple-600">to creation.</span>
        </h2>

        <p className="reveal reveal-delay-1 text-charcoal-400 text-base sm:text-lg mb-16 max-w-xl">
          Every step in the journey has shaped how I think, build, and learn.
        </p>

        {/* ── Desktop: horizontal timeline ── */}
        <div className="hidden lg:block relative" aria-label="Journey timeline">
          {/* Horizontal line */}
          <div
            className="absolute top-[22px] left-0 right-0 h-px bg-gradient-to-r from-blue-200 via-purple-200 to-purple-400"
            aria-hidden="true"
          />

          <ol className="relative grid grid-cols-6 gap-4">
            {journey.map((step, i) => (
              <li key={step.number} className={`reveal reveal-delay-${i + 1} flex flex-col pt-0`}>
                {/* Step indicator */}
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={`relative z-10 w-11 h-11 rounded-full border-2 flex items-center justify-center shadow-sm transition-colors duration-300 ${
                      step.isLast
                        ? 'border-purple-500 bg-purple-500'
                        : i === 0
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-charcoal-200 bg-white hover:border-blue-400'
                    }`}
                  >
                    <span
                      className={`font-display font-bold text-xs ${
                        step.isLast || i === 0 ? 'text-white' : 'text-charcoal-400'
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className={`font-semibold text-base mb-2 ${
                      step.isLast
                        ? 'text-purple-600'
                        : i === 0
                        ? 'text-blue-600'
                        : 'text-charcoal'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-charcoal-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Mobile: vertical timeline ── */}
        <ol className="lg:hidden relative flex flex-col gap-0" aria-label="Journey timeline">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 left-[21px] w-px bg-gradient-to-b from-blue-200 via-purple-200 to-purple-400"
            aria-hidden="true"
          />

          {journey.map((step, i) => (
            <li
              key={step.number}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} relative flex gap-6 pb-10 last:pb-0`}
            >
              {/* Dot */}
              <div
                className={`relative z-10 flex-shrink-0 w-11 h-11 rounded-full border-2 flex items-center justify-center shadow-sm ${
                  step.isLast
                    ? 'border-purple-500 bg-purple-500'
                    : i === 0
                    ? 'border-blue-600 bg-blue-600'
                    : 'border-charcoal-200 bg-white'
                }`}
                aria-hidden="true"
              >
                <span
                  className={`font-display font-bold text-xs ${
                    step.isLast || i === 0 ? 'text-white' : 'text-charcoal-400'
                  }`}
                >
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3
                  className={`font-semibold text-base mb-1.5 ${
                    step.isLast
                      ? 'text-purple-600'
                      : i === 0
                      ? 'text-blue-600'
                      : 'text-charcoal'
                  }`}
                >
                  {step.title}
                </h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Quote */}
        <blockquote className="reveal mt-16 text-center max-w-2xl mx-auto">
          <p className="font-display text-2xl sm:text-3xl font-medium text-charcoal italic leading-snug">
            "Still learning. Still building. Still asking questions."
          </p>
          <footer className="mt-4 text-charcoal-400 text-sm font-medium">— Martha Ukange</footer>
        </blockquote>
      </div>
    </section>
  );
}
