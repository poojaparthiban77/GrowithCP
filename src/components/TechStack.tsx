import { Server, Database, Cloud, Code2, Lock, Layers, GitBranch, Package } from 'lucide-react';

const techCategories = [
  {
    icon: Server,
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'NestJS', 'Fastify'],
    color: 'from-[#F9F6F2]/20 to-[#F9F6F2]/10'
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
    color: 'from-[#F9F6F2]/20 to-[#F9F6F2]/10'
  },
  {
    icon: Code2,
    title: 'API Development',
    skills: ['REST APIs', 'GraphQL', 'WebSockets', 'gRPC'],
    color: 'from-[#F9F6F2]/20 to-[#F9F6F2]/10'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    color: 'from-[#F9F6F2]/20 to-[#F9F6F2]/10'
  },
  {
    icon: Lock,
    title: 'Security',
    skills: ['JWT', 'OAuth2', 'Encryption', 'Rate Limiting'],
    color: 'from-[#F9F6F2]/20 to-[#F9F6F2]/10'
  },
  {
    icon: Layers,
    title: 'Architecture',
    skills: ['Microservices', 'Serverless', 'Event-Driven', 'MVC'],
    color: 'from-[#F9F6F2]/20 to-[#F9F6F2]/10'
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
    color: 'from-[#F9F6F2]/20 to-[#F9F6F2]/10'
  },
  {
    icon: Package,
    title: 'Testing & Quality',
    skills: ['Jest', 'Mocha', 'Supertest', 'ESLint'],
    color: 'from-[#F9F6F2]/20 to-[#F9F6F2]/10'
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F9F6F2] mb-4">Tech Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F9F6F2] to-transparent mx-auto rounded-full"></div>
          <p className="text-[#F9F6F2]/80 mt-6 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build robust backend solutions
          </p>
        </div>

        <div className="mb-16 backdrop-blur-xl bg-white/10 rounded-[2rem] p-8 sm:p-12 border border-white/20 shadow-xl text-center animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Server className="w-16 h-16 text-[#F9F6F2]" />
          </div>
          <h3 className="text-3xl font-bold text-[#F9F6F2] mb-4">Node.js</h3>
          <p className="text-[#F9F6F2]/80 text-lg max-w-3xl mx-auto leading-relaxed">
            My primary expertise lies in Node.js ecosystem, building scalable, high-performance backend applications
            that handle millions of requests with optimal efficiency and reliability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group backdrop-blur-xl bg-white/10 rounded-[2rem] p-6 border border-white/20 shadow-xl hover:bg-white/15 hover:scale-105 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-[#F9F6F2]" />
                </div>

                <h3 className="text-lg font-bold text-[#F9F6F2] mb-3 group-hover:text-white transition-colors">
                  {category.title}
                </h3>

                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center gap-2 text-[#F9F6F2]/80 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-[#F9F6F2] rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
