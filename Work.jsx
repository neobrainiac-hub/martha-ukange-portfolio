import { featuredProjects, moreProjects } from '../data/content';
import { FeaturedProjectCard, SecondaryProjectCard, SmallProjectCard } from './ProjectCard';

const [primaryProject, ...secondaryProjects] = featuredProjects;

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="section-padding bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="w-6 h-px bg-blue-600" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Work</span>
        </div>

        <div className="reveal mb-4">
          <h2
            id="work-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight"
          >
            Things I've Built
          </h2>
        </div>

        <p className="reveal reveal-delay-1 text-charcoal-400 text-base sm:text-lg mb-14 max-w-xl">
          Projects that reflect what I'm learning, exploring, and creating.
        </p>

        {/* ── Primary Featured Project ── */}
        <div className="reveal reveal-delay-2 mb-10">
          <FeaturedProjectCard project={primaryProject} />
        </div>

        {/* ── Secondary Featured Projects ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {secondaryProjects.map((project, i) => (
            <div
              key={project.id}
              className={`reveal reveal-delay-${i + 1}`}
            >
              <SecondaryProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* ── More Projects ── */}
        <div className="reveal">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold text-charcoal-400 uppercase tracking-widest">
              More Projects
            </span>
            <div className="flex-1 h-px bg-charcoal-100" aria-hidden="true" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {moreProjects.map((project, i) => (
              <div key={project.id} className={`reveal reveal-delay-${i + 1}`}>
                <SmallProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
