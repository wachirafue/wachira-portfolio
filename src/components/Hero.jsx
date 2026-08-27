import { Github, ArrowDown, Terminal } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99, 102, 241, 0.04) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(99,102,241,0.18)_0%,_transparent_60%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content — vertically centered, with bottom padding to leave room for the scroll indicator */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pb-24">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8
                        bg-indigo-500/10 border border-indigo-500/20 rounded-full
                        text-indigo-300 text-sm font-medium animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
          </span>
          Open to opportunities
        </div>

        {/* Greeting */}
        <p
          className="font-mono text-indigo-400 text-lg mb-3 animate-fade-in-up opacity-0-init"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          <Terminal className="inline mr-2 mb-0.5" size={16} />
          Hi, I&apos;m Wachira Fueakaew
        </p>

        {/* Main headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6
                     animate-fade-in-up opacity-0-init"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          <span className="text-gradient">Computer Engineering</span>
          <br />
          <span className="text-white">Student</span>
          <span className="text-slate-500"> | </span>
          <span className="text-gradient-subtle">Aspiring</span>
          <br />
          <span className="text-white">Software Engineer</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed
                     animate-fade-in-up opacity-0-init"
          style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}
        >
          Passionate about building{' '}
          <span className="text-indigo-300 font-medium">full-stack mobile applications</span>,{' '}
          <span className="text-purple-300 font-medium">enterprise backend systems</span>, and
          learning <span className="text-cyan-300 font-medium">AI/ML</span>.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4
                     animate-fade-in-up opacity-0-init"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <button onClick={scrollToProjects} className="btn-primary text-base">
            View My Work
            <ArrowDown size={18} />
          </button>
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

      {/* Scroll indicator — lives at the section level so it anchors to the viewport bottom */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10
                   animate-fade-in opacity-0-init"
        style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
      >
        <div className="flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-indigo-500/60 to-transparent animate-float" />
        </div>
      </div>
    </section>
  );
}
