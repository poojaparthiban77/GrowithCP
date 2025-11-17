import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#F9F6F2] hover:bg-white/20 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#F9F6F2] hover:bg-white/20 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#F9F6F2] hover:bg-white/20 hover:scale-110 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:pooja@example.com"
              className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#F9F6F2] hover:bg-white/20 hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center space-y-2">
            <p className="text-[#F9F6F2]/80 text-sm flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-[#F9F6F2] fill-[#F9F6F2] animate-pulse" /> by Pooja
            </p>
            <p className="text-[#F9F6F2]/60 text-xs">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[#F9F6F2]/70 text-sm">
            <a href="#about" className="hover:text-[#F9F6F2] transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="hover:text-[#F9F6F2] transition-colors duration-300">
              Projects
            </a>
            <a href="#tech-stack" className="hover:text-[#F9F6F2] transition-colors duration-300">
              Tech Stack
            </a>
            <a href="#contact" className="hover:text-[#F9F6F2] transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
