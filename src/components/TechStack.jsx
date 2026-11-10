import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Brain,
  Sparkles,
  Cpu,
  Server,
  Code,
  Database,
  Network,
  ShieldCheck,
  Layers,
  Radio,
  Award,
  Key,
  Lock,
} from 'lucide-react';
import {
  // Programming Languages
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiOpenjdk,
  // Web & Mobile Development
  SiReact,
  SiNextdotjs,
  SiExpo,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  // IoT, Hardware & Industrial Control
  SiRaspberrypi,
  SiEspressif,
  SiArduino,
  SiMqtt,
  SiNodered,
  // Databases
  SiPostgresql,
  SiSqlite,
  SiMariadb,
  SiFirebase,
  SiPrisma,
  SiPhpmyadmin,
  // Cloud & DevOps
  SiDocker,
  SiGit,
  SiGithub,
  SiRender,
  SiVercel,
  SiLinux,
  SiNginx,
  SiVirtualbox,
  SiVisualstudiocode,
  // Networking
  SiCisco,
} from 'react-icons/si';

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
      { name: 'Python',     Icon: SiPython,      color: '#3776AB' },
      { name: 'C++',        Icon: SiCplusplus,   color: '#00599C' },
      { name: 'JavaScript', Icon: SiJavascript,  color: '#F7DF1E' },
      { name: 'Java',       Icon: SiOpenjdk,     color: '#ED8B00' },
      { name: 'SQL',        Icon: Database,      color: '#4479A1' },
    ],
  },
  {
    id: 'web-mobile',
    category: 'Web & Mobile Development',
    emoji: '🌐',
    accentColor: 'text-cyan-400',
    gradientFrom: 'from-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    dotColor: 'bg-cyan-500',
    techs: [
      { name: 'React',        Icon: SiReact,        color: '#61DAFB' },
      { name: 'Next.js',      Icon: SiNextdotjs,    color: '#FFFFFF' },
      { name: 'React Native', Icon: SiReact,        color: '#61DAFB' },
      { name: 'Expo',         Icon: SiExpo,         color: '#FFFFFF' },
      { name: 'Node.js',      Icon: SiNodedotjs,    color: '#339933' },
      { name: 'Express',      Icon: SiExpress,      color: '#FFFFFF' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss,  color: '#06B6D4' },
      { name: 'NativeWind',   Icon: Code,           color: '#38BDF8' },
    ],
  },
  {
    id: 'ai-ml',
    category: 'AI & Machine Learning',
    emoji: '🤖',
    accentColor: 'text-violet-400',
    gradientFrom: 'from-violet-500/10',
    borderColor: 'border-violet-500/20',
    dotColor: 'bg-violet-500',
    note: 'Certified: AWS Academy Gen AI & ML',
    techs: [
      { name: 'CiRA CORE AI',                         Icon: Brain,    color: '#A78BFA' },
      { name: 'Edge AI Processing',                   Icon: Cpu,      color: '#C084FC' },
      { name: 'Local LLM (Ollama)',                   Icon: Server,   color: '#E2E8F0' },
      { name: 'Prompt Engineering (Claude, Antigravity)', Icon: Sparkles, color: '#C4B5FD' },
    ],
  },
  {
    id: 'iot-hardware',
    category: 'IoT, Hardware & Industrial Control',
    emoji: '🔩',
    accentColor: 'text-amber-400',
    gradientFrom: 'from-amber-500/10',
    borderColor: 'border-amber-500/20',
    dotColor: 'bg-amber-500',
    colSpan: 'lg:col-span-2',
    techs: [
      { name: 'Raspberry Pi 5',        Icon: SiRaspberrypi, color: '#A22846' },
      { name: 'ESP32',                 Icon: SiEspressif,   color: '#E7352C' },
      { name: 'Arduino',               Icon: SiArduino,     color: '#00979D' },
      { name: 'MPU6050',               Icon: Cpu,           color: '#FB923C' },
      { name: 'IR Sensors',            Icon: Radio,         color: '#F87171' },
      { name: 'Pneumatic Actuators',   Icon: Cpu,           color: '#94A3B8' },
      { name: 'Barcode Scanners',      Icon: Code,          color: '#38BDF8' },
      { name: 'MQTT (Mosquitto)',      Icon: SiMqtt,        color: '#C77DFF' },
      { name: 'Modbus TCP/Serial',     Icon: Network,       color: '#38BDF8' },
      { name: 'Node-RED',              Icon: SiNodered,     color: '#EF4444' },
      { name: 'Wokwi',                 Icon: Cpu,           color: '#22C55E' },
      { name: 'WECON PLC / Pi Studio', Icon: Server,        color: '#F59E0B' },
    ],
  },
  {
    id: 'databases',
    category: 'Databases',
    emoji: '🗄️',
    accentColor: 'text-emerald-400',
    gradientFrom: 'from-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    dotColor: 'bg-emerald-500',
    techs: [
      { name: 'PostgreSQL',  Icon: SiPostgresql, color: '#4169E1' },
      { name: 'SQLite',      Icon: SiSqlite,     color: '#0EA5E9' },
      { name: 'MariaDB',     Icon: SiMariadb,    color: '#003545' },
      { name: 'Firebase',    Icon: SiFirebase,   color: '#FFCA28' },
      { name: 'Prisma',      Icon: SiPrisma,     color: '#5A67D8' },
      { name: 'phpMyAdmin',  Icon: SiPhpmyadmin, color: '#F29111' },
    ],
  },
  {
    id: 'cloud-devops',
    category: 'Cloud, DevOps & System Administration',
    emoji: '☁️',
    accentColor: 'text-blue-400',
    gradientFrom: 'from-blue-500/10',
    borderColor: 'border-blue-500/20',
    dotColor: 'bg-blue-500',
    colSpan: 'lg:col-span-2',
    techs: [
      { name: 'Docker',              Icon: SiDocker,            color: '#2496ED' },
      { name: 'Git',                 Icon: SiGit,               color: '#F05032' },
      { name: 'GitHub',              Icon: SiGithub,            color: '#FFFFFF' },
      { name: 'Render',              Icon: SiRender,            color: '#46E3B7' },
      { name: 'Vercel',              Icon: SiVercel,            color: '#FFFFFF' },
      { name: 'Linux (Debian, Kali)', Icon: SiLinux,             color: '#FCC624' },
      { name: 'Nginx',               Icon: SiNginx,             color: '#009639' },
      { name: 'VirtualBox',          Icon: SiVirtualbox,        color: '#60A5FA' },
      { name: 'SSH Keypair',         Icon: Key,                 color: '#FBBF24' },
      { name: 'UFW Firewall',        Icon: ShieldCheck,         color: '#F87171' },
      { name: 'VS Code',             Icon: SiVisualstudiocode,  color: '#007ACC' },
    ],
  },
  {
    id: 'networking-security',
    category: 'Networking & Security',
    emoji: '🛡️',
    accentColor: 'text-rose-400',
    gradientFrom: 'from-rose-500/10',
    borderColor: 'border-rose-500/20',
    dotColor: 'bg-rose-500',
    techs: [
      { name: 'Cisco Packet Tracer', Icon: SiCisco,     color: '#1BA0D7' },
      { name: 'RADIUS AAA',          Icon: ShieldCheck, color: '#34D399' },
      { name: 'IPsec VPN',           Icon: Lock,        color: '#60A5FA' },
      { name: 'OSPF',                Icon: Network,     color: '#A78BFA' },
      { name: 'VLAN Segmentation',   Icon: Layers,      color: '#F43F5E' },
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
      {Icon && (
        <Icon
          size={16}
          style={color ? { color } : undefined}
          className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-200"
        />
      )}
      <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors duration-200 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function CategoryCard({
  id,
  category,
  emoji,
  accentColor,
  gradientFrom,
  borderColor,
  techs,
  note,
  colSpan = '',
  delay,
  isVisible,
}) {
  return (
    <div
      className={`flex flex-col justify-between p-5 rounded-2xl
                  bg-gradient-to-b ${gradientFrom} to-transparent
                  border ${borderColor}
                  transition-all duration-500
                  ${colSpan}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div>
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

      {/* Optional certification / highlight note */}
      {note && (
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2">
          <Award size={14} className="text-amber-400 flex-shrink-0" />
          <span className="text-xs font-medium text-amber-400/90 tracking-wide">
            {note}
          </span>
        </div>
      )}
    </div>
  );
}

// ─── Role badges strip ────────────────────────────────────────────────────────

const roles = [
  { label: 'Software Engineer Intern', dot: 'bg-indigo-500'  },
  { label: 'Full-Stack Developer',     dot: 'bg-purple-500'  },
  { label: 'Cloud & IoT Engineer',     dot: 'bg-cyan-500'    },
  { label: 'AI/ML Enthusiast',         dot: 'bg-violet-500'  },
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
            A curated set of technologies spanning AI/ML, software, cloud, networking, and hardware.
          </p>
        </div>

        {/* Responsive grid */}
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
             style={{ transitionDelay: '480ms' }}>
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
