import { ExternalLink, Github, ArrowRight } from 'lucide-react';

/**
 * FeaturedProjectCard — large primary card for the hero project
 */
export function FeaturedProjectCard({ project }) {
  return (
    <article
      className="group relative bg-white rounded-2xl overflow-hidden border border-charcoal-100 shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-1"
      aria-labelledby={`project-${project.id}-name`}
    >
      <div className="grid lg:grid-cols-5 min-h-[340px]">
        {/* Preview panel */}
        <div className="lg:col-span-3 relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden min-h-[200px] lg:min-h-0">
          {/* Featured badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-2.5 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full tracking-wide">
              Featured
            </span>
          </div>

          {/* Preview iframe (lazy) */}
          <div className="absolute inset-0">
            <iframe
              src={project.liveUrl}
              title={`Preview of ${project.name}`}
              className="w-full h-full border-0 pointer-events-none scale-75 origin-top-left"
              style={{ width: '133%', height: '133%' }}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
              aria-hidden="true"
            />
            {/* Overlay to keep card clickable */}
            <div className="absolute inset-0 bg-transparent" aria-hidden="true" />
          </div>

          {/* Gradient overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent lg:hidden"
          />
        </div>

        {/* Content panel */}
        <div className="lg:col-span-2 p-7 lg:p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold tracking-widest text-charcoal-400 uppercase mb-3 block">
              {project.category}
            </span>
            <h3
              id={`project-${project.id}-name`}
              className="font-display text-2xl font-bold text-charcoal mb-3 leading-tight"
            >
              {project.name}
            </h3>
            <p className="text-charcoal-600 text-sm leading-relaxed mb-5">
              {project.description}
            </p>

            {/* What I learned */}
            <div className="bg-[#F8F7F4] rounded-xl p-4 mb-5">
              <p className="text-xs font-semibold text-charcoal-400 uppercase tracking-wide mb-1.5">
                What I learned
              </p>
              <p className="text-charcoal-600 text-xs leading-relaxed">
                {project.learned}
              </p>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-charcoal text-white text-xs font-semibold rounded-lg hover:bg-charcoal-800 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <ExternalLink size={12} />
              Live Demo
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} GitHub repository`}
                className="flex items-center gap-2 px-4 py-2.5 border border-charcoal-200 text-charcoal text-xs font-semibold rounded-lg hover:border-charcoal transition-colors duration-200"
              >
                <Github size={12} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

/**
 * SecondaryProjectCard — standard card for the secondary featured projects
 */
export function SecondaryProjectCard({ project }) {
  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden border border-charcoal-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
      aria-labelledby={`project-${project.id}-name`}
    >
      {/* Preview */}
      <div className="relative h-44 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden flex-shrink-0">
        <iframe
          src={project.liveUrl}
          title={`Preview of ${project.name}`}
          className="w-full h-full border-0 pointer-events-none scale-75 origin-top-left"
          style={{ width: '133%', height: '133%' }}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-transparent" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs font-semibold tracking-widest text-charcoal-400 uppercase mb-2 block">
          {project.category}
        </span>
        <h3
          id={`project-${project.id}-name`}
          className="font-display text-lg font-bold text-charcoal mb-2 leading-tight"
        >
          {project.name}
        </h3>
        <p className="text-charcoal-600 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* What I learned */}
        <div className="bg-[#F8F7F4] rounded-lg p-3 mb-4">
          <p className="text-xs font-semibold text-charcoal-400 uppercase tracking-wide mb-1">
            What I learned
          </p>
          <p className="text-charcoal-600 text-xs leading-relaxed line-clamp-3">
            {project.learned}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-purple-50 text-purple-700 text-xs font-medium rounded-full border border-purple-100"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-blue-600 text-xs font-semibold hover:text-blue-700 transition-colors duration-200"
          >
            <ExternalLink size={11} />
            Live Demo
          </a>
          {project.githubUrl && (
            <>
              <span className="w-px h-3 bg-charcoal-200" aria-hidden="true" />
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} GitHub repository`}
                className="flex items-center gap-1.5 text-charcoal-400 text-xs font-semibold hover:text-charcoal transition-colors duration-200"
              >
                <Github size={11} />
                Code
              </a>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

/**
 * SmallProjectCard — compact card for "More Projects"
 */
export function SmallProjectCard({ project }) {
  return (
    <article
      className="group bg-white rounded-xl border border-charcoal-100 p-5 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-4 items-start"
      aria-labelledby={`project-${project.id}-name`}
    >
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4 mb-1.5">
          <span className="text-xs font-semibold tracking-widest text-charcoal-400 uppercase">
            {project.category}
          </span>
        </div>
        <h3
          id={`project-${project.id}-name`}
          className="font-semibold text-base text-charcoal mb-1 group-hover:text-blue-600 transition-colors duration-200"
        >
          {project.name}
        </h3>
        <p className="text-charcoal-400 text-sm leading-relaxed mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-charcoal-100 text-charcoal-600 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.name} live`}
        className="flex-shrink-0 flex items-center gap-1.5 text-blue-600 text-xs font-semibold hover:text-blue-700 transition-colors duration-200 mt-1"
      >
        <span>View</span>
        <ArrowRight size={12} />
      </a>
    </article>
  );
}
