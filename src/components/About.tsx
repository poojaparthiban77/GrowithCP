import { Code2, Database, Server, Cloud } from 'lucide-react';

const skills = [
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'REST APIs',
  'Authentication',
  'Deployment',
  'Docker',
  'AWS',
  'TypeScript',
  'GraphQL',
  'Redis'
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F9F6F2] mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F9F6F2] to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="backdrop-blur-xl bg-white/10 rounded-[2rem] p-8 border border-white/20 shadow-xl animate-slide-left">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <Server className="w-8 h-8 text-[#F9F6F2] mb-3" />
                <h3 className="text-[#F9F6F2] font-semibold text-lg">Backend</h3>
                <p className="text-[#F9F6F2]/70 text-sm mt-1">Expert</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <Database className="w-8 h-8 text-[#F9F6F2] mb-3" />
                <h3 className="text-[#F9F6F2] font-semibold text-lg">Databases</h3>
                <p className="text-[#F9F6F2]/70 text-sm mt-1">Advanced</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <Code2 className="w-8 h-8 text-[#F9F6F2] mb-3" />
                <h3 className="text-[#F9F6F2] font-semibold text-lg">APIs</h3>
                <p className="text-[#F9F6F2]/70 text-sm mt-1">Expert</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <Cloud className="w-8 h-8 text-[#F9F6F2] mb-3" />
                <h3 className="text-[#F9F6F2] font-semibold text-lg">Cloud</h3>
                <p className="text-[#F9F6F2]/70 text-sm mt-1">Advanced</p>
              </div>
            </div>

            <p className="text-[#F9F6F2]/90 leading-relaxed text-lg">
              I'm a passionate Node.js developer with expertise in building scalable, high-performance backend systems.
              I specialize in creating RESTful APIs, microservices architectures, and full-stack applications that
              power modern web experiences. With a strong foundation in database design, authentication systems,
              and cloud deployment, I turn complex requirements into elegant, maintainable solutions.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 rounded-[2rem] p-8 border border-white/20 shadow-xl animate-slide-right">
            <h3 className="text-2xl font-bold text-[#F9F6F2] mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-5 py-2.5 backdrop-blur-sm bg-white/10 rounded-full border border-white/20 text-[#F9F6F2] font-medium text-sm hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: 'fadeIn 0.5s ease-out forwards'
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10">
              <h4 className="text-[#F9F6F2] font-semibold text-lg mb-3">Core Strengths</h4>
              <ul className="space-y-2 text-[#F9F6F2]/80">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F9F6F2] rounded-full"></span>
                  Backend Engineering & Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F9F6F2] rounded-full"></span>
                  API Design & Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F9F6F2] rounded-full"></span>
                  Database Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F9F6F2] rounded-full"></span>
                  Cloud Deployment & DevOps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
