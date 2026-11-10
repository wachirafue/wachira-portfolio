import { Award, Cloud, Cpu, CheckCircle, GraduationCap, BookOpen } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// ─── Education ───────────────────────────────────────────────────────────────

const education = {
  institution: 'Srinakharinwirot University (SPU)',
  degree: 'Bachelor of Engineering — Computer Engineering',
  gpa: '3.24',
  period: '2023 – Present',
};

// ─── Certifications ──────────────────────────────────────────────────────────

const certifications = [
  {
    id: 1,
    issuer: 'Huawei ICT Academy',
    issuerShort: 'Huawei ICT',
    issuerLabel: 'HUAWEI',
    title: 'HCIA-IoT V3.0 Course Completion',
    badge: '🏅',
    badgeColor: 'from-red-500/20 to-rose-500/10',
    badgeBorder: 'border-red-500/30',
    accentColor: 'text-red-400',
    bgColor: 'from-red-900/10 via-slate-900/60 to-rose-900/10',
    cardBorder: 'border-red-500/20 hover:border-red-400/40',
    shadowColor: 'hover:shadow-red-500/5',
    skills: ['IoT Architecture', 'MQTT Protocol', 'Sensor Networks', 'Huawei Cloud IoT'],
    skillColor: 'bg-red-500/10 text-red-300 border border-red-500/20',
    icon: Cpu,
    year: '2026',
    summary: 'Huawei ICT Academy Graduate — recognized for completing the HCIA-IoT V3.0 curriculum.',
  },
  {
    id: 2,
    issuer: 'Amazon Web Services',
    issuerShort: 'AWS Academy',
    issuerLabel: 'AWS',
    title: 'AWS Academy Graduate — Generative AI Foundations',
    badge: '🏅',
    badgeColor: 'from-violet-500/20 to-purple-500/10',
    badgeBorder: 'border-violet-500/30',
    accentColor: 'text-violet-400',
    bgColor: 'from-violet-900/10 via-slate-900/60 to-purple-900/10',
    cardBorder: 'border-violet-500/20 hover:border-violet-400/40',
    shadowColor: 'hover:shadow-violet-500/5',
    skills: ['Generative AI', 'Foundation Models', 'Amazon Bedrock', 'Responsible AI'],
    skillColor: 'bg-violet-500/10 text-violet-300 border border-violet-500/20',
    icon: Cloud,
    year: '2026',
    summary: 'AWS Academy Graduate — recognized for completing the Generative AI Foundations curriculum.',
  },
  {
    id: 3,
    issuer: 'Amazon Web Services',
    issuerShort: 'AWS Academy',
    issuerLabel: 'AWS',
    title: 'AWS Academy Graduate — Machine Learning Foundations',
    badge: '🏅',
    badgeColor: 'from-amber-500/20 to-orange-500/10',
    badgeBorder: 'border-amber-500/30',
    accentColor: 'text-amber-400',
    bgColor: 'from-amber-900/10 via-slate-900/60 to-orange-900/10',
    cardBorder: 'border-amber-500/20 hover:border-amber-400/40',
    shadowColor: 'hover:shadow-amber-500/5',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'ML Pipelines', 'AWS SageMaker'],
    skillColor: 'bg-amber-500/10 text-amber-300 border border-amber-500/20',
    icon: Cloud,
    year: '2025',
    summary: 'AWS Academy Graduate — recognized for completing the Machine Learning Foundations curriculum.',
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Certifications() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certifications" className="py-28 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-indigo-400 text-sm">04.</span>
          <span className="font-mono text-slate-500 text-sm tracking-widest uppercase">
            Education &amp; Certifications
          </span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        <div className="text-center mb-12">
          <h2 className="section-heading">
            Credentials &amp; <span className="text-gradient">Achievements</span>
          </h2>
          <p className="section-subheading">
            Academic background and verified certifications that validate my technical expertise.
          </p>
        </div>

        {/* ── Education Card ─────────────────────────────────────────────── */}
        <div className="mb-10">
          <p className="text-xs font-mono font-semibold text-slate-600 uppercase tracking-widest mb-4">
            Education
          </p>
          <div className="glass-card p-6 border border-indigo-500/20
                          bg-gradient-to-br from-indigo-900/10 via-slate-900/60 to-purple-900/10
                          transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/5">
            <div className="flex items-start gap-5">
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20
                              flex items-center justify-center">
                <GraduationCap size={26} className="text-indigo-400" />
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                    {education.institution}
                  </span>
                  <span className="text-slate-700">·</span>
                  <span className="text-xs text-slate-600 font-mono">{education.period}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{education.degree}</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5 text-sm text-slate-400">
                    <CheckCircle size={14} className="text-emerald-400" />
                    <span>Currently Enrolled</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold
                                   rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    <BookOpen size={11} />
                    GPA {education.gpa}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Certifications Grid ────────────────────────────────────────── */}
        <p className="text-xs font-mono font-semibold text-slate-600 uppercase tracking-widest mb-4">
          Certifications
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.id}
                className={`rounded-2xl border bg-gradient-to-br ${cert.bgColor} ${cert.cardBorder}
                            p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${cert.shadowColor}`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  {/* Badge */}
                  <div className={`relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.badgeColor} border ${cert.badgeBorder}
                                  flex flex-col items-center justify-center`}>
                    <span className="text-2xl">{cert.badge}</span>
                    <span className={`text-[8px] font-bold ${cert.accentColor} mt-0.5 tracking-widest uppercase`}>
                      {cert.issuerLabel}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold uppercase tracking-widest ${cert.accentColor}`}>
                        {cert.issuerShort}
                      </span>
                      <span className="text-slate-700">·</span>
                      <span className="text-xs text-slate-600 font-mono">{cert.year}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 leading-snug">{cert.title}</h3>
                    <div className="flex items-center gap-1.5 text-sm text-slate-400">
                      <CheckCircle size={13} className="text-emerald-400" />
                      <span>Verified · {cert.issuer}</span>
                    </div>
                  </div>
                </div>

                {/* Skills covered */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                    Topics Covered
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 text-xs font-medium rounded-full ${cert.skillColor}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center gap-2">
                  <Award size={14} className={cert.accentColor} />
                  <span className="text-xs text-slate-400">{cert.summary}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* "More coming" note */}
        <p className="text-center text-slate-600 text-sm mt-8 font-mono">
          // More certifications in progress...
        </p>
      </div>
    </section>
  );
}
