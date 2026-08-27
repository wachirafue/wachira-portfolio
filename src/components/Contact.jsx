import { Mail, Github, ArrowUpRight, Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative pt-28 pb-12 px-4 sm:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-48 bg-indigo-600/5 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto relative z-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-indigo-400 text-sm">06.</span>
          <span className="font-mono text-slate-500 text-sm tracking-widest uppercase">Contact</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        {/* CTA Block */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Let&apos;s Build Something{' '}
            <span className="text-gradient">Great Together</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            I&apos;m currently open to internships, part-time roles, and interesting side projects.
            My inbox is always open — feel free to say hello!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:wachira.fue@gmail.com"
              className="btn-primary text-base"
            >
              <Mail size={18} />
              Send an Email
              <ArrowUpRight size={16} />
            </a>
            <a
              href="https://github.com/wachirafue"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-base"
            >
              <Github size={18} />
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/60 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <span className="font-mono text-slate-600 text-sm">
              &lt;Wachira /&gt;
            </span>

            {/* Credit */}
            <p className="text-slate-700 text-xs flex items-center gap-1.5 font-mono">
              Built with
              <Heart size={11} className="text-red-500 fill-red-500" />
              using React &amp; Tailwind CSS · {currentYear}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:wachira.fue@gmail.com"
                className="text-slate-600 hover:text-indigo-400 transition-colors duration-200"
                title="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://github.com/wachirafue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-indigo-400 transition-colors duration-200"
                title="GitHub"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
