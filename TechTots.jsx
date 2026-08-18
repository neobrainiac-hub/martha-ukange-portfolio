import { BookOpen, Users, PenTool, Calendar, Monitor, Heart } from 'lucide-react';

const iconMap = {
  BookOpen, Users, PenTool, Calendar, Monitor, Heart,
};

const highlights = [
  {
    icon: 'BookOpen',
    label: 'Technology Education',
    description: 'Exploring how technology can be made accessible and engaging for young learners.',
  },
  {
    icon: 'Users',
    label: 'Teaching',
    description: 'Supporting and facilitating learning experiences alongside others.',
  },
  {
    icon: 'PenTool',
    label: 'Content Creation',
    description: 'Creating digital content to communicate ideas and support learning.',
  },
  {
    icon: 'Calendar',
    label: 'Event Support',
    description: 'Helping plan and support technology-focused events and activities.',
  },
  {
    icon: 'Monitor',
    label: 'Digital Experiences',
    description: 'Building interactive web tools designed for TechTots activities.',
  },
  {
    icon: 'Heart',
    label: 'Community Building',
    description: 'Contributing to a positive, encouraging space for young people in tech.',
  },
];

export default function TechTots() {
  return (
    <section id="techtots" aria-labelledby="techtots-heading" className="section-padding bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="w-6 h-px bg-blue-400" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">TechTots</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <div>
            <h2
              id="techtots-heading"
              className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            >
              Technology is better
              <br />
              <span className="text-blue-400">when it's shared.</span>
            </h2>
          </div>
          <div className="reveal reveal-delay-1 flex items-center">
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              Beyond building for myself, I've had the opportunity to explore technology through
              teaching, content creation, and community-focused projects with TechTots.
            </p>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {highlights.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.label}
                className={`reveal reveal-delay-${(i % 3) + 1} group bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300`}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                  <Icon size={18} className="text-blue-400" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-white text-base mb-1.5">{item.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Photo placeholder band — ready for real TechTots photos */}
        <div className="reveal rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div
              className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-400/20 flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              <Monitor size={28} className="text-blue-400" />
            </div>
            <div>
              <p className="text-white/80 text-sm font-medium mb-1">Gallery coming soon</p>
              <p className="text-white/40 text-sm leading-relaxed max-w-md">
                This space is ready for photos, highlights, and moments from TechTots events
                and activities. Add your images to bring this section to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
