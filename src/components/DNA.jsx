import { useScrollReveal } from '../hooks/useScrollReveal';
import { Crosshair, Car, Dumbbell, Plane, Wrench, Zap } from 'lucide-react';

// ─── Card data ───────────────────────────────────────────────────────────────

const dnaCards = [
  {
    id: 'gaming',
    Icon: Crosshair,
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10',
    iconBorder: 'border-indigo-500/20',
    accentColor: 'text-indigo-400',
    gradient: 'from-indigo-900/25 via-slate-900/60 to-purple-900/15',
    border: 'border-indigo-500/25 hover:border-indigo-400/50',
    glowColor: 'hover:shadow-indigo-500/10',
    label: 'Tactical & Strategic Mindset',
    sublabel: 'Gaming as cognitive training',
    body: [
      'I pilot fixed-wing aircraft and command infantry units in full-scale military simulations that demand the same cognitive toolkit as elite engineering: ',
      'situational awareness, real-time resource management, and coordinated execution under pressure.',
    ],
    bodyHighlights: ['situational awareness', 'real-time resource management', 'coordinated execution under pressure'],
    detail:
      'Flying an F-16 Fighting Falcon or an F/A-18 Hornet in War Thunder at 900 km/h while managing radar locks, countermeasures, and wingman comms is not downtime — it\'s training.',
    tags: [
      { label: 'Squad',              color: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' },
      { label: 'War Thunder',        color: 'bg-purple-500/10 text-purple-300 border-purple-500/20' },
      { label: 'F-16 Fighting Falcon', color: 'bg-slate-500/10 text-slate-300 border-slate-500/20' },
      { label: 'F/A-18 Hornet',     color: 'bg-slate-500/10 text-slate-300 border-slate-500/20' },
      { label: 'Infantry Command',   color: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' },
      { label: 'Team Coordination',  color: 'bg-purple-500/10 text-purple-300 border-purple-500/20' },
    ],
    skills: ['Strategic Planning', 'Composure Under Pressure', 'Rapid Decision-Making', 'Team Leadership'],
    extraIcon: Plane,
    layout: 'featured', // spans wider
  },
  {
    id: 'automotive',
    Icon: Car,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
    iconBorder: 'border-amber-500/20',
    accentColor: 'text-amber-400',
    gradient: 'from-amber-900/20 via-slate-900/60 to-orange-900/10',
    border: 'border-amber-500/20 hover:border-amber-400/45',
    glowColor: 'hover:shadow-amber-500/10',
    label: 'Automotive & Mechanical Curiosity',
    sublabel: 'Engineering beyond the screen',
    body: [
      'A genuine passion for high-performance car culture, chassis dynamics, and the mechanical artistry behind vehicle modification.',
    ],
    detail:
      'Understanding how suspension geometry, torque curves, and aero forces interact translates directly to how I think about system constraints and performance optimization in software.',
    tags: [
      { label: 'Chassis Tuning',      color: 'bg-amber-500/10 text-amber-300 border-amber-500/20' },
      { label: 'Performance Builds',  color: 'bg-orange-500/10 text-orange-300 border-orange-500/20' },
      { label: 'Vehicle Mods',        color: 'bg-amber-500/10 text-amber-300 border-amber-500/20' },
      { label: 'High-Performance Culture', color: 'bg-slate-500/10 text-slate-300 border-slate-500/20' },
    ],
    skills: ['Systems Thinking', 'Performance Optimization', 'Mechanical Intuition'],
    extraIcon: Wrench,
    layout: 'normal',
  },
  {
    id: 'fitness',
    Icon: Dumbbell,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    iconBorder: 'border-emerald-500/20',
    accentColor: 'text-emerald-400',
    gradient: 'from-emerald-900/20 via-slate-900/60 to-teal-900/10',
    border: 'border-emerald-500/20 hover:border-emerald-400/45',
    glowColor: 'hover:shadow-emerald-500/10',
    label: 'Physical Discipline',
    sublabel: 'Adaptability & consistency',
    body: [
      'I maintain a consistent bodyweight fitness routine engineered for limited room space — zero excuses, maximum adaptability.',
    ],
    detail:
      'No gym needed. A structured push/pull/legs calisthenics program proves that constraints aren\'t blockers — they\'re design challenges. The same mindset I apply to every engineering problem.',
    tags: [
      { label: 'Calisthenics',   color: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' },
      { label: 'Push · Pull · Legs', color: 'bg-teal-500/10 text-teal-300 border-teal-500/20' },
      { label: 'Bodyweight',     color: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' },
      { label: 'Consistency',    color: 'bg-slate-500/10 text-slate-300 border-slate-500/20' },
    ],
    skills: ['Self-Discipline', 'Adaptability', 'Constraint-Driven Thinking'],
    extraIcon: Zap,
    layout: 'normal',
  },
];

// ─── Featured Card (Gaming) ───────────────────────────────────────────────────

function FeaturedCard({ card, isVisible }) {
  const { Icon, extraIcon: ExtraIcon, iconColor, iconBg, iconBorder, accentColor,
    gradient, border, glowColor, label, sublabel, body, detail, tags, skills } = card;

  return (
    <div
      className={`relative rounded-2xl border bg-gradient-to-br ${gradient} ${border}
                  p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${glowColor}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  md:col-span-2`}
      style={{ transitionDelay: '0ms', transitionProperty: 'opacity, transform' }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-5">
        <div className={`w-12 h-12 ${iconBg} ${iconBorder} border rounded-xl flex items-center justify-center`}>
          <Icon size={24} className={iconColor} />
        </div>
        <div className={`w-9 h-9 bg-slate-800/60 border border-slate-700 rounded-lg flex items-center justify-center opacity-40`}>
          <ExtraIcon size={16} className="text-slate-400" />
        </div>
      </div>

      {/* Label */}
      <span className={`text-xs font-mono font-semibold tracking-widest uppercase ${accentColor} mb-2 block`}>
        {sublabel}
      </span>
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{label}</h3>

      {/* Two-column layout on sm+ */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <p className="text-slate-400 text-sm leading-relaxed mb-3">
            I pilot fixed-wing aircraft and command infantry units in full-scale military simulations
            that demand the same cognitive toolkit as elite engineering:{' '}
            <span className="text-white">situational awareness</span>,{' '}
            <span className="text-white">real-time resource management</span>, and{' '}
            <span className="text-white">coordinated execution under pressure</span>.
          </p>
          <p className="text-slate-500 text-xs leading-relaxed italic">
            &ldquo;{detail}&rdquo;
          </p>
        </div>

        <div>
          {/* Skills gained */}
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-2">
            Skills Transferred to Engineering
          </p>
          <ul className="space-y-2 mb-4">
            {skills.map((s) => (
              <li key={s} className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map(({ label: t, color }) => (
          <span key={t} className={`px-2.5 py-1 text-xs font-medium rounded-full border ${color}`}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Normal Card ──────────────────────────────────────────────────────────────

function NormalCard({ card, delay, isVisible }) {
  const { Icon, extraIcon: ExtraIcon, iconColor, iconBg, iconBorder, accentColor,
    gradient, border, glowColor, label, sublabel, body, detail, tags, skills } = card;

  return (
    <div
      className={`relative rounded-2xl border bg-gradient-to-br ${gradient} ${border}
                  p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${glowColor}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms`, transitionProperty: 'opacity, transform' }}
    >
      {/* Icon row */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-11 h-11 ${iconBg} ${iconBorder} border rounded-xl flex items-center justify-center`}>
          <Icon size={22} className={iconColor} />
        </div>
        <div className="w-8 h-8 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center opacity-30">
          <ExtraIcon size={14} className="text-slate-400" />
        </div>
      </div>

      <span className={`text-xs font-mono font-semibold tracking-widest uppercase ${accentColor} mb-1.5 block`}>
        {sublabel}
      </span>
      <h3 className="text-lg font-bold text-white mb-3">{label}</h3>

      <p className="text-slate-400 text-sm leading-relaxed mb-3">{body[0]}</p>
      <p className="text-slate-600 text-xs leading-relaxed italic mb-4">&ldquo;{detail}&rdquo;</p>

      {/* Skills */}
      <ul className="space-y-1.5 mb-4">
        {skills.map((s) => (
          <li key={s} className="flex items-center gap-2 text-xs text-slate-500">
            <span className={`w-1 h-1 rounded-full ${iconBg.replace('bg-', 'bg-').replace('/10', '')} flex-shrink-0`}
              style={{ backgroundColor: iconColor.replace('text-', '') }} />
            {s}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map(({ label: t, color }) => (
          <span key={t} className={`px-2 py-0.5 text-xs font-medium rounded-full border ${color}`}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function DNA() {
  const { ref, isVisible } = useScrollReveal();
  const featuredCard = dnaCards.find((c) => c.layout === 'featured');
  const normalCards  = dnaCards.filter((c) => c.layout === 'normal');

  return (
    <section id="dna" className="py-28 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-indigo-600/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-amber-600/4 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-indigo-400 text-sm">05.</span>
          <span className="font-mono text-slate-500 text-sm tracking-widest uppercase">Beyond the Screen</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        <div className="text-center mb-12">
          <h2 className="section-heading">
            My <span className="text-gradient">DNA</span>
          </h2>
          <p className="section-subheading">
            The habits, passions, and disciplines that shape how I think as an engineer.
          </p>
        </div>

        {/* Bento grid: Featured card (2-col) + 2 normal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured gaming card */}
          <FeaturedCard card={featuredCard} isVisible={isVisible} />

          {/* Two normal cards stacked */}
          {normalCards.map((card, i) => (
            <NormalCard key={card.id} card={card} delay={(i + 1) * 120} isVisible={isVisible} />
          ))}
        </div>

        {/* Bottom tagline */}
        <p className="text-center text-slate-700 text-xs font-mono mt-10">
          // These aren&apos;t hobbies. They&apos;re how I train to think.
        </p>
      </div>
    </section>
  );
}
