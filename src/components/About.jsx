import { useScrollReveal } from '../hooks/useScrollReveal';
import { BookOpen, Cpu, Crosshair, Network } from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    label: '4th Year',
    desc: 'Computer Engineering, SPU',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    icon: Cpu,
    label: 'Full-Stack',
    desc: 'Mobile · Backend · IoT',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: Network,
    label: 'Cloud & IoT',
    desc: 'Infrastructure · MQTT · AWS',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
  },
  {
    icon: Crosshair,
    label: 'Intern-Ready',
    desc: 'Available for Internship',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-28 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-indigo-400 text-sm">01.</span>
          <span className="font-mono text-slate-500 text-sm tracking-widest uppercase">About Me</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Building software with{' '}
              <span className="text-gradient">precision &amp; purpose</span>
            </h2>

            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>
                I am a{' '}
                <span className="text-white font-medium">4th-year Computer Engineering student</span>{' '}
                who loves{' '}
                <span className="text-indigo-300 font-medium">end-to-end development</span>. I have
                hands-on experience across{' '}
                <span className="text-indigo-300 font-medium">Full-Stack Web &amp; Mobile</span>,{' '}
                <span className="text-rose-300 font-medium">Hardware/IoT</span>, and{' '}
                <span className="text-sky-300 font-medium">Network &amp; Infrastructure</span>.
              </p>
              <p>
                I thrive in{' '}
                <span className="text-white font-medium">tech-agnostic environments</span>, possess
                strong{' '}
                <span className="text-violet-300 font-medium">systematic problem-solving skills</span>
                , and{' '}
                <span className="text-emerald-300 font-medium">communicate effectively in teams</span>.
              </p>
            </div>
          </div>

          {/* Stats / highlights */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc, color, bg, border }) => (
              <div
                key={label}
                className={`glass-card p-5 border ${border} hover:scale-105 transition-transform duration-200`}
              >
                <div className={`w-10 h-10 ${bg} ${border} border rounded-xl flex items-center justify-center mb-3`}>
                  <Icon size={20} className={color} />
                </div>
                <p className="text-white font-semibold text-sm">{label}</p>
                <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Knowledge & Core Competencies */}
        <div className="mt-12 pt-8 border-t border-slate-800/60">
          <p className="text-xs font-mono font-semibold text-slate-600 uppercase tracking-widest mb-4 text-center">
            Domain Knowledge &amp; Core Competencies
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: 'Full-Stack Development',   color: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20' },
              { label: 'Mobile (React Native)',     color: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20' },
              { label: 'Cloud & IoT',               color: 'text-sky-300 bg-sky-500/10 border-sky-500/20' },
              { label: 'Cold Chain Logistics',      color: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20' },
              { label: 'IoT Fleet Management',      color: 'text-teal-300 bg-teal-500/10 border-teal-500/20' },
              { label: 'Enterprise Networks',       color: 'text-sky-300 bg-sky-500/10 border-sky-500/20' },
              { label: 'AI / Machine Learning',     color: 'text-violet-300 bg-violet-500/10 border-violet-500/20' },
              { label: 'Systems Analysis',          color: 'text-purple-300 bg-purple-500/10 border-purple-500/20' },
              { label: 'AWS Cloud',                 color: 'text-amber-300 bg-amber-500/10 border-amber-500/20' },
            ].map(({ label, color }) => (
              <span key={label} className={`px-3 py-1.5 text-xs font-medium rounded-full border ${color}`}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
