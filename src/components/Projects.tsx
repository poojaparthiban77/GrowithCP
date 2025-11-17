import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce REST API',
    description: 'Scalable e-commerce backend with payment integration, inventory management, and order processing. Built with microservices architecture.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'Redis'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Real-Time Chat Application',
    description: 'High-performance chat system with WebSocket support, message encryption, and presence tracking for thousands of concurrent users.',
    tags: ['Node.js', 'Socket.io', 'PostgreSQL', 'JWT'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Task Management API',
    description: 'RESTful API for project and task management with team collaboration, role-based access control, and real-time notifications.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'AWS'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Authentication Service',
    description: 'Secure authentication microservice with OAuth2, JWT tokens, refresh tokens, and multi-factor authentication support.',
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'OAuth2'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Analytics Dashboard Backend',
    description: 'High-performance data aggregation service processing millions of events daily with real-time analytics and reporting.',
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    github: '#',
    demo: '#'
  },
  {
    title: 'File Upload Service',
    description: 'Scalable file upload and processing service with image optimization, video transcoding, and cloud storage integration.',
    tags: ['Node.js', 'AWS S3', 'FFmpeg', 'MongoDB'],
    github: '#',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F9F6F2] mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F9F6F2] to-transparent mx-auto rounded-full"></div>
          <p className="text-[#F9F6F2]/80 mt-6 text-lg max-w-2xl mx-auto">
            A showcase of my recent work building scalable backend systems and APIs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group backdrop-blur-xl bg-white/10 rounded-[2rem] p-6 border border-white/20 shadow-xl hover:bg-white/15 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-bold text-[#F9F6F2] mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#F9F6F2]/80 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[#F9F6F2] text-xs font-medium border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F9F6F2] text-[#6A0DAD] rounded-xl font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center px-4 py-2.5 bg-white/10 backdrop-blur-sm text-[#F9F6F2] rounded-xl font-semibold text-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
