import { Github, ExternalLink, Star, Smartphone, Network, Cpu, Truck, Activity, Bell } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// --- Project Data (3-col grid cards) -----------------------------------------

const projects = [
  {
    id: 1,
    featured: true,
    icon: Smartphone,
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10',
    iconBorder: 'border-indigo-500/20',
    tag: '⭐ Featured · Mobile App',
    tagColor: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
    title: 'SwiftNotesMobile',
    subtitle: 'Cross-Platform · React Native & Expo',
    description:
      'A full-stack cross-platform mobile app built with React Native and Expo — delivering real business impact through secure Firebase Authentication, real-time Firestore sync, and a custom component-driven UI that works seamlessly across iOS and Android.',
    highlights: [
      'Cross-platform iOS & Android (RN + Expo)',
      'Secure Auth (Firebase Auth)',
      'Real-time Firestore sync',
      'Business-impact driven design',
    ],
    tech: ['React Native', 'Expo', 'Firebase', 'Tailwind CSS'],
    techColors: {
      'React Native': 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      'Expo':         'bg-slate-500/10 text-slate-300 border-slate-500/20',
      'Firebase':     'bg-amber-500/10 text-amber-300 border-amber-500/20',
      'Tailwind CSS': 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    },
    github: 'https://github.com/wachirafue/SwiftNotesMobile',
    gradient: 'from-indigo-900/30 via-slate-900/50 to-purple-900/20',
    border: 'border-indigo-500/30 hover:border-indigo-400/60',
    glowShadow: 'hover:shadow-indigo-500/10',
  },
  {
    id: 2,
    featured: false,
    icon: Network,
    iconColor: 'text-sky-400',
    iconBg: 'bg-sky-500/10',
    iconBorder: 'border-sky-500/20',
    tag: 'Network Engineering',
    tagColor: 'text-sky-300 bg-sky-500/10 border-sky-500/20',
    title: 'Enterprise Network Architecture',
    subtitle: 'Secure Corporate Infrastructure Simulation',
    description:
      'Designed and simulated a secure, scalable corporate network leveraging VLANs for segmentation, OSPF dynamic routing for inter-site communication, and VPN access for remote workforce connectivity.',
    highlights: [
      'VLAN Segmentation',
      'OSPF Dynamic Routing',
      'VPN Remote Access',
      'Enterprise-grade topology',
    ],
    tech: ['Cisco Packet Tracer', 'Linux'],
    techColors: {
      'Cisco Packet Tracer': 'bg-blue-500/10 text-blue-300 border-blue-500/20',
      'Linux':               'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    },
    github: 'https://github.com/wachirafue',
    gradient: 'from-sky-900/20 via-slate-900/50 to-blue-900/20',
    border: 'border-sky-500/20 hover:border-sky-400/50',
    glowShadow: 'hover:shadow-sky-500/10',
  },
  {
    id: 3,
    featured: false,
    icon: Cpu,
    iconColor: 'text-rose-400',
    iconBg: 'bg-rose-500/10',
    iconBorder: 'border-rose-500/20',
    tag: '🔩 IoT / Hardware',
    tagColor: 'text-rose-300 bg-rose-500/10 border-rose-500/20',
    title: 'Smart Cold Chain Logistics',
    subtitle: 'Raspberry Pi IoT Monitoring System',
    description:
      'A real-time cold chain monitoring platform using Raspberry Pi as the edge node. Collects temperature & humidity sensor data, streams it to Firebase via MQTT, and triggers automated alerts when thresholds are breached — designed for pharmaceutical and food logistics.',
    highlights: [
      'Raspberry Pi edge computing',
      'MQTT sensor data streaming',
      'Firebase real-time alerts',
      'Threshold breach detection',
    ],
    tech: ['Raspberry Pi', 'Python', 'Firebase', 'MQTT'],
    techColors: {
      'Raspberry Pi': 'bg-rose-500/10 text-rose-300 border-rose-500/20',
      'Python':       'bg-blue-500/10 text-blue-300 border-blue-500/20',
      'Firebase':     'bg-amber-500/10 text-amber-300 border-amber-500/20',
      'MQTT':         'bg-teal-500/10 text-teal-300 border-teal-500/20',
    },
    github: 'https://github.com/wachirafue',
    gradient: 'from-rose-900/20 via-slate-900/50 to-pink-900/20',
    border: 'border-rose-500/20 hover:border-rose-400/50',
    glowShadow: 'hover:shadow-rose-500/10',
  },
];

// --- Featured Omega Card (Project Omega - full width) -------------------------

function FeaturedOmegaCard() {
  const { ref, isVisible } = useScrollReveal();

  const omegaStats = [
    {
      label: 'Total Trucks',
      value: '3',
      Icon: Truck,
      color: 'text-emerald-300',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
    },
    {
      label: 'Active',
      value: '2',
      Icon: Activity,
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/20',
    },
    {
      label: 'Alerts',
      value: '0',
      Icon: Bell,
      color: 'text-amber-300',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
    },
  ];

  const omegaTech = [
    { name: 'JavaScript', color: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20' },
    { name: 'Node.js',    color: 'bg-green-500/10 text-green-300 border-green-500/20' },
    { name: 'Next.js',    color: 'bg-slate-500/10 text-slate-300 border-slate-500/20' },
    { name: 'Prisma',     color: 'bg-teal-500/10 text-teal-300 border-teal-500/20' },
    { name: 'MQTT',       color: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' },
  ];

  return (
    <div
      ref={ref}
      className={`relative group rounded-2xl border border-emerald-500/30 hover:border-emerald-400/60
                  bg-gradient-to-br from-emerald-900/30 via-slate-900/50 to-teal-900/20
                  p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionProperty: 'opacity, transform' }}
    >
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 pointer-events-none" />

      <div className="relative flex flex-col lg:flex-row gap-8">

        {/* Left: Content */}
        <div className="flex flex-col flex-1">
          {/* Header row */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-11 h-11 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center">
              <Truck size={22} className="text-emerald-400" />
            </div>
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/wachirafue"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                title="View on GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://smart-fleet-omega.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-200"
                title="View Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Tag */}
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border mb-3 w-fit text-emerald-300 bg-emerald-500/10 border-emerald-500/20">
            <Star size={11} className="fill-current" />
            New · Featured · IoT Dashboard
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-1">Smart Cold Chain Management System</h3>
          <p className="text-sm text-slate-500 mb-3 font-medium">Project Omega · Real-Time IoT Fleet Dashboard</p>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            A real-time IoT fleet and cold chain tracking dashboard featuring{' '}
            <span className="text-white">live telemetry data monitoring</span>,{' '}
            <span className="text-white">active truck status tracking</span>, and intelligent alert management —
            built for operational visibility and{' '}
            <span className="text-emerald-300">smart facility management</span> at scale.
          </p>

          {/* Highlights */}
          <ul className="grid grid-cols-2 gap-1.5 mb-4">
            {[
              'Live telemetry data monitoring',
              'Active truck status tracking',
              'Alert management system',
              'Real-time fleet analytics',
            ].map((h) => (
              <li key={h} className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            {omegaTech.map(({ name, color }) => (
              <span key={name} className={`px-2.5 py-1 text-xs font-mono font-medium rounded-full border ${color}`}>
                {name}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-auto">
            <a
              href="https://smart-fleet-omega.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold
                         text-emerald-900 bg-emerald-400 hover:bg-emerald-300
                         rounded-xl transition-colors duration-200"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
            <a
              href="https://github.com/wachirafue"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>

        {/* Right: Live Status Panel */}
        <div className="lg:w-60 lg:flex-shrink-0">
          <div className="rounded-xl border border-emerald-500/20 bg-slate-950/70 p-4 h-full flex flex-col">
            {/* Live header */}
            <div className="flex items-center gap-2 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-semibold text-emerald-400 tracking-widest uppercase">
                Live Dashboard
              </span>
            </div>

            {/* Stat rows */}
            <div className="space-y-2.5 flex-1">
              {omegaStats.map(({ label, value, Icon, color, bg, border }) => (
                <div
                  key={label}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${bg} border ${border}`}
                >
                  <div className="flex items-center gap-2">
                    <Icon size={13} className={color} />
                    <span className="text-xs text-slate-400">{label}</span>
                  </div>
                  <span className={`text-lg font-bold font-mono ${color}`}>{value}</span>
                </div>
              ))}
            </div>

            {/* Status tagline */}
            <p className="text-center text-xs font-mono text-slate-700 mt-5">
              fleet.status = <span className="text-emerald-600">operational</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Project Card -------------------------------------------------------------

function ProjectCard({ project, index }) {
  const { ref, isVisible } = useScrollReveal();
  const Icon = project.icon;

  return (
    <div
      ref={ref}
      className={`relative group flex flex-col rounded-2xl border bg-gradient-to-br
                  ${project.gradient} ${project.border}
                  p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${project.glowShadow}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{
        transitionDelay: `${index * 120}ms`,
        transitionProperty: 'opacity, transform',
      }}
    >
      {/* Subtle inner glow on featured */}
      {project.featured && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none" />
      )}

      {/* Header row */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-11 h-11 ${project.iconBg} ${project.iconBorder} border rounded-xl flex items-center justify-center flex-shrink-0`}>
          <Icon size={22} className={project.iconColor} />
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-500 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
          title="View on GitHub"
        >
          <Github size={18} />
        </a>
      </div>

      {/* Tag */}
      <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border mb-3 w-fit ${project.tagColor}`}>
        {project.featured && <Star size={11} className="fill-current" />}
        {project.tag}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
      <p className="text-sm text-slate-500 mb-3 font-medium">{project.subtitle}</p>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

      {/* Highlights */}
      <ul className="grid grid-cols-2 gap-1.5 mb-4">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-center gap-1.5 text-xs text-slate-500">
            <span className="w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className={`px-2.5 py-1 text-xs font-mono font-medium rounded-full border ${project.techColors[t]}`}
          >
            {t}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400
                   hover:text-indigo-300 transition-colors duration-200 group/link mt-auto"
      >
        <Github size={16} />
        View on GitHub
        <ExternalLink
          size={13}
          className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200"
        />
      </a>
    </div>
  );
}

// --- Section -----------------------------------------------------------------

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div
          ref={ref}
          className={`flex items-center gap-3 mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-mono text-indigo-400 text-sm">03.</span>
          <span className="font-mono text-slate-500 text-sm tracking-widest uppercase">Projects</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        <div
          className={`text-center mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="section-heading">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="section-subheading">
            Full-stack mobile apps, real-time IoT dashboards, enterprise networks, and hardware systems.
          </p>
        </div>

        {/* Featured Omega card — full width */}
        <div
          className={`mb-6 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <FeaturedOmegaCard />
        </div>

        {/* 3-column grid for remaining projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
