import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  // Programming Languages
  SiJavascript,
  SiPython,
  SiCplusplus,
  // Mobile & Frontend
  SiReact,
  SiExpo,
  SiTailwindcss,
  // Backend & Cloud
  SiFirebase,
  SiMysql,
  SiAmazon,          // SiAmazonwebservices does NOT exist — SiAmazon is correct
  SiNodedotjs,       // SiNodejs does NOT exist — SiNodedotjs is correct
  // Networking & Systems
  SiCisco,
  SiLinux,
  SiUbuntu,
  SiDebian,
  // Hardware & IoT
  SiRaspberrypi,
  SiArduino,
  // Tools & Workflow
  SiGit,
  SiGithub,
  SiVisualstudiocode, // SiVscode does NOT exist — SiVisualstudiocode is correct
} from 'react-icons/si';

// ─── All icon names verified against react-icons@4.12.0/si/index.d.ts ────────

const techCategories = [
  {
    id: 'languages',
    category: 'Programming Languages',
    emoji: '💻',
    accentColor: 'text-indigo-400',
    gradientFrom: 'from-indigo-500/10',
    borderColor: 'border-indigo-500/20',
    dotColor: 'bg-indigo-500',
    techs: [
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Python',     Icon: SiPython,     color: '#3776AB' },
      { name: 'C / C++',   Icon: SiCplusplus,  color: '#00599C' },
    ],
  },
  {
    id: 'frontend',
    category: 'Mobile & Frontend',
    emoji: '📱',
    accentColor: 'text-purple-400',
    gradientFrom: 'from-purple-500/10',
    borderColor: 'border-purple-500/20',
    dotColor: 'bg-purple-500',
    techs: [
      { name: 'React Native', Icon: SiReact,       color: '#61DAFB' },
      { name: 'Expo',         Icon: SiExpo,        color: '#FFFFFF' },
      { name: 'React',        Icon: SiReact,       color: '#61DAFB' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    id: 'backend',
    category: 'Backend & Cloud',
    emoji: '☁️',
    accentColor: 'text-cyan-400',
    gradientFrom: 'from-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    dotColor: 'bg-cyan-500',
    techs: [
      { name: 'Firebase', Icon: SiFirebase,  color: '#FFCA28' },
      { name: 'SQL / MySQL', Icon: SiMysql,     color: '#4479A1' },
      { name: 'AWS Services', Icon: SiAmazon,    color: '#FF9900' },
      { name: 'Node.js',  Icon: SiNodedotjs, color: '#339933' },
    ],
  },
  {
    id: 'networking',
    category: 'Networking & Systems',
    emoji: '🌐',
    accentColor: 'text-sky-400',
    gradientFrom: 'from-sky-500/10',
    borderColor: 'border-sky-500/20',
    dotColor: 'bg-sky-500',
    techs: [
      { name: 'Cisco',  Icon: SiCisco,  color: '#1BA0D7' },
      { name: 'Linux',  Icon: SiLinux,  color: '#FCC624' },
      { name: 'Ubuntu', Icon: SiUbuntu, color: '#E95420' },
      { name: 'Debian', Icon: SiDebian, color: '#A81D33' },
    ],
  },
  {
    id: 'hardware',
    category: 'Hardware & IoT',
    emoji: '🔩',
    accentColor: 'text-rose-400',
    gradientFrom: 'from-rose-500/10',
    borderColor: 'border-rose-500/20',
    dotColor: 'bg-rose-500',
    techs: [
      { name: 'Raspberry Pi', Icon: SiRaspberrypi, color: '#A22846' },
      { name: 'Arduino',      Icon: SiArduino,     color: '#00979D' },
    ],
  },
  {
    id: 'tools',
    category: 'Tools & Workflow',
    emoji: '🛠️',
    accentColor: 'text-emerald-400',
    gradientFrom: 'from-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    dotColor: 'bg-emerald-500',
    techs: [
      { name: 'Git',     Icon: SiGit,             color: '#F05032' },
      { name: 'GitHub',  Icon: SiGithub,           color: '#FFFFFF' },
      { name: 'VS Code', Icon: SiVisualstudiocode, color: '#007ACC' },
    ],
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function TechPill({ name, Icon, color }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-xl
                 bg-slate-900/60 border border-slate-800
                 hover:border-slate-600 hover:bg-slate-800/70
                 hover:-translate-y-0.5 transition-all duration-200
                 cursor-default group"
    >
      <Icon
        size={16}
        style={{ color }}
        className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-200"
      />
      <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors duration-200 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function CategoryCard({ id, category, emoji, accentColor, gradientFrom, borderColor, dotColor, techs, delay, isVisible }) {
  return (
    <div
      className={`flex flex-col p-5 rounded-2xl
                  bg-gradient-to-b ${gradientFrom} to-transparent
                  border ${borderColor}
                  transition-all duration-500
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Category header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-base leading-none select-none">{emoji}</span>
        <h3 className={`text-sm font-semibold ${accentColor} leading-tight`}>{category}</h3>
      </div>

      {/* Tech pills — wrapping flex */}
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <TechPill key={`${id}-${tech.name}`} {...tech} />
        ))}
      </div>
    </div>
  );
}

// ─── Role badges strip ────────────────────────────────────────────────────────

const roles = [
  { label: 'Software Developer',     dot: 'bg-indigo-500'  },
  { label: 'System Analyst',         dot: 'bg-purple-500'  },
  { label: 'Network Engineer',       dot: 'bg-sky-500'     },
  { label: 'IoT / Hardware Engineer',dot: 'bg-rose-500'    },
];

// ─── Section ─────────────────────────────────────────────────────────────────

export default function TechStack() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="stack" className="py-28 px-4 sm:px-6 relative">
      {/* Top divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px
                      bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div
        ref={ref}
        className="max-w-6xl mx-auto"
      >
        {/* Section label */}
        <div className={`flex items-center gap-3 mb-4 transition-all duration-700
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="font-mono text-indigo-400 text-sm">02.</span>
          <span className="font-mono text-slate-500 text-sm tracking-widest uppercase">Tech Stack</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        {/* Heading */}
        <div className={`text-center mb-12 transition-all duration-700 delay-100
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="section-heading">
            Tools I <span className="text-gradient">Build With</span>
          </h2>
          <p className="section-subheading">
            A curated set of technologies spanning software, cloud, networking, and hardware.
          </p>
        </div>

        {/*
          ── Responsive 6-card grid ────────────────────────────────────────────
          Mobile  (< sm):  1 column
          Tablet  (sm):    2 columns  →  3 rows of 2
          Desktop (lg):    3 columns  →  2 rows of 3
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              {...cat}
              delay={i * 80}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Role badges */}
        <div className={`mt-10 flex flex-wrap justify-center gap-3
                        transition-all duration-700
                        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
             style={{ transitionDelay: '560ms' }}>
          {roles.map(({ label, dot }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium
                         text-slate-400 bg-slate-900/60 border border-slate-800 rounded-full"
            >
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
