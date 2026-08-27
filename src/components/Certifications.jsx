import { Award, Cloud, Cpu, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certifications = [
  {
    id: 1,
    issuer: 'Amazon Web Services',
    issuerShort: 'AWS Academy',
    title: 'Machine Learning Foundations',
    badge: '🏅',
    badgeColor: 'from-amber-500/20 to-orange-500/10',
    badgeBorder: 'border-amber-500/30',
    accentColor: 'text-amber-400',
    bgColor: 'from-amber-900/10 via-slate-900/60 to-orange-900/10',
    cardBorder: 'border-amber-500/20 hover:border-amber-400/40',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'ML Pipelines', 'AWS SageMaker'],
    icon: Cloud,
    iconColor: 'text-amber-400',
    year: '2024',
    featured: true,
  },
];

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
          <span className="font-mono text-slate-500 text-sm tracking-widest uppercase">Certifications</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        <div className="text-center mb-12">
          <h2 className="section-heading">
            Credentials & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="section-subheading">
            Verified certifications that validate my technical expertise.
          </p>
        </div>

        {/* Featured Cert */}
        {certifications.map((cert) => {
          const Icon = cert.icon;
          return (
            <div
              key={cert.id}
              className={`max-w-2xl mx-auto rounded-2xl border bg-gradient-to-br ${cert.bgColor} ${cert.cardBorder}
                          p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/5`}
            >
              {/* Header */}
              <div className="flex items-start gap-5 mb-6">
                {/* Badge */}
                <div className={`relative flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${cert.badgeColor} border ${cert.badgeBorder}
                                flex flex-col items-center justify-center`}>
                  <span className="text-3xl">{cert.badge}</span>
                  <span className={`text-[9px] font-bold ${cert.accentColor} mt-0.5 tracking-widest uppercase`}>
                    AWS
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
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-slate-400">
                    <CheckCircle size={14} className="text-emerald-400" />
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
                      className="px-3 py-1 text-xs font-medium rounded-full
                                 bg-amber-500/10 text-amber-300 border border-amber-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-2">
                <Award size={16} className="text-amber-400" />
                <span className="text-sm text-slate-400">
                  AWS Academy Graduate — recognized for completing foundational machine learning curriculum.
                </span>
              </div>
            </div>
          );
        })}

        {/* "More coming" note */}
        <p className="text-center text-slate-600 text-sm mt-8 font-mono">
          // More certifications in progress...
        </p>
      </div>
    </section>
  );
}
