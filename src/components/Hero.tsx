import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#F9F6F2] rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F9F6F2] rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="backdrop-blur-xl bg-white/10 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-white/20 shadow-2xl animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <p className="text-[#F9F6F2] text-sm font-medium tracking-wide">Available for Hire</p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#F9F6F2] mb-6 leading-tight animate-slide-up">
            Hi, I'm <span className="bg-gradient-to-r from-[#F9F6F2] to-white bg-clip-text text-transparent">Pooja</span> —<br />
            Node.js Developer
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-[#F9F6F2]/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
            I build high-performance backend systems, APIs, and scalable full-stack apps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-300">
            <a
              href="#projects"
              className="group px-8 py-4 bg-[#F9F6F2] text-[#6A0DAD] rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-[#F9F6F2] rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Hire Me
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#about" className="inline-block">
            <div className="w-8 h-12 border-2 border-[#F9F6F2]/50 rounded-full p-2">
              <div className="w-1.5 h-3 bg-[#F9F6F2]/70 rounded-full mx-auto animate-scroll"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
