import { useScrollReveal } from '../hooks/useScrollReveal';
import { BookOpen, Users, Cpu, Crosshair, Network } from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    label: '3rd Year',
    desc: 'Computer Engineering',
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
    label: 'Network Eng.',
    desc: 'System Analyst',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
  },
  {
    icon: Crosshair,
    label: 'Strategic',
    desc: 'Analytical Thinker',
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
                I&apos;m <span className="text-white font-medium">Wachira Fueakaew</span>, a{' '}
                <span className="text-white font-medium">3rd-year Computer Engineering student</span>{' '}
                with a deep passion for crafting clean, scalable, and impactful software. I operate
                across the full stack — from{' '}
                <span className="text-indigo-300 font-medium">mobile app development</span> and{' '}
                <span className="text-indigo-300 font-medium">cloud backend systems</span> to{' '}
                <span className="text-rose-300 font-medium">Raspberry Pi IoT hardware</span>{' '}
                and enterprise{' '}
                <span className="text-sky-300 font-medium">network architecture</span>.
              </p>
              <p>
                I&apos;ve worked hands-on as a{' '}
                <span className="text-white font-medium">System Analyst</span> and{' '}
                <span className="text-white font-medium">Network Engineer</span>, giving me a
                multi-dimensional view of how systems are designed, deployed, and maintained at scale.
              </p>
              <p>
                My domain expertise spans{' '}
                <span className="text-violet-300 font-medium">PropTech</span> and{' '}
                <span className="text-violet-300 font-medium">Smart Facility Management</span>, with
                hands-on experience in cold chain logistics, real-time IoT fleet tracking, and
                enterprise infrastructure design — bridging physical operations with intelligent
                software systems.
              </p>
              <p>
                Beyond the screen, competitive tactical simulations like{' '}
                <span className="text-indigo-300 font-medium">Squad</span> and{' '}
                <span className="text-indigo-300 font-medium">War Thunder</span>{' '}
                have sharpened my{' '}
                <span className="text-white">strategic thinking</span>,{' '}
                <span className="text-white">composure under pressure</span>, and{' '}
                <span className="text-white">team-first mindset</span> — the same traits I bring into
                every engineering challenge.
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
              { label: 'PropTech',               color: 'text-violet-300 bg-violet-500/10 border-violet-500/20' },
              { label: 'Smart Facility Management', color: 'text-violet-300 bg-violet-500/10 border-violet-500/20' },
              { label: 'Cold Chain Logistics',   color: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20' },
              { label: 'IoT Fleet Management',   color: 'text-teal-300 bg-teal-500/10 border-teal-500/20' },
              { label: 'Enterprise Networks',    color: 'text-sky-300 bg-sky-500/10 border-sky-500/20' },
              { label: 'Full-Stack Development', color: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20' },
              { label: 'Systems Analysis',       color: 'text-purple-300 bg-purple-500/10 border-purple-500/20' },
              { label: 'IoT Systems Architecture', color: 'text-rose-300 bg-rose-500/10 border-rose-500/20' },
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
