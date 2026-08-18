import { aboutProgression } from '../data/content';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="w-6 h-px bg-blue-600" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">About</span>
        </div>

        <h2
          id="about-heading"
          className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-16 max-w-2xl leading-tight"
        >
          Curious by nature.<br />
          <span className="text-blue-600">Building by choice.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-start">

          {/* ── Left: Photo + progression ── */}
          <div className="reveal reveal-delay-1 flex flex-col items-center lg:items-start">
            {/* Photo */}
            <div className="relative w-full max-w-sm">
              {/* Accent behind photo */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 translate-x-4 translate-y-4"
              />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border border-charcoal-100">
                <img
                  src="/martha-ukange.png"
                  alt="Martha Ukange"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex-col items-center justify-center"
                  style={{ display: 'none' }}
                  aria-hidden="true"
                >
                  <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                    <span className="font-display font-bold text-blue-600 text-4xl">M</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual progression steps */}
            <div className="mt-10 w-full max-w-sm" aria-label="Martha's journey progression">
              <p className="text-xs font-semibold tracking-widest text-charcoal-400 uppercase mb-5">The journey</p>
              <ol className="relative">
                {aboutProgression.map((step, i) => (
                  <li key={step} className="flex items-start gap-4 mb-4 last:mb-0 group">
                    {/* Connector line */}
                    <div className="flex flex-col items-center flex-shrink-0 mt-0.5">
                      <div
                        className={`w-2 h-2 rounded-full border-2 transition-colors duration-300 ${
                          i === 0
                            ? 'border-blue-600 bg-blue-600'
                            : i === aboutProgression.length - 1
                            ? 'border-purple-600 bg-purple-600'
                            : 'border-charcoal-200 bg-white group-hover:border-blue-400'
                        }`}
                      />
                      {i < aboutProgression.length - 1 && (
                        <div className="w-px h-5 bg-charcoal-100 mt-1" />
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium leading-none ${
                        i === 0
                          ? 'text-blue-600'
                          : i === aboutProgression.length - 1
                          ? 'text-purple-600'
                          : 'text-charcoal-400'
                      }`}
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* ── Right: Story ── */}
          <div className="reveal reveal-delay-2 flex flex-col justify-center">
            <div className="prose prose-lg max-w-none">
              <p className="text-charcoal text-lg sm:text-xl leading-relaxed font-medium mb-6">
                I'm Martha Ukange, a creative developer and graphic designer with a passion for exploring, building, and communicating through technology.
              </p>
              <p className="text-charcoal-600 text-base sm:text-lg leading-relaxed mb-6">
                My journey into tech started with curiosity. I asked questions, explored ideas, and taught myself through resources like YouTube. I began with frontend development, learning how to turn ideas into functional and beautiful websites, before expanding into graphic design and other areas of digital creativity.
              </p>
              <p className="text-charcoal-600 text-base sm:text-lg leading-relaxed mb-6">
                Today, I enjoy exploring different sides of technology—from building interactive web experiences and creating digital content to teaching others what I've learned. I'm especially interested in how technology can be used to solve real problems and create meaningful experiences.
              </p>
              <p className="text-charcoal-600 text-base sm:text-lg leading-relaxed mb-10">
                I'm still learning, still building, and still asking questions. My goal is to see how far technology can take me and ultimately build innovative systems that make the world work better.
              </p>
            </div>

            {/* Core values grid */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-charcoal-100">
              {[
                { label: 'Self-taught', sub: 'Driven by curiosity' },
                { label: 'Creator', sub: 'Building real projects' },
                { label: 'Educator', sub: 'Sharing knowledge' },
                { label: 'Explorer', sub: 'Always learning' },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-[#F8F7F4] border border-charcoal-100">
                  <p className="text-sm font-semibold text-charcoal mb-0.5">{item.label}</p>
                  <p className="text-xs text-charcoal-400">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
