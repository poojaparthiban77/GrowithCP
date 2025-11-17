import { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F9F6F2] mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F9F6F2] to-transparent mx-auto rounded-full"></div>
          <p className="text-[#F9F6F2]/80 mt-6 text-lg max-w-2xl mx-auto">
            Let's discuss how I can help build your next backend project
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="backdrop-blur-xl bg-white/10 rounded-[2rem] p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 animate-slide-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#F9F6F2]" />
                </div>
                <div>
                  <h3 className="text-[#F9F6F2] font-semibold text-lg mb-1">Email</h3>
                  <p className="text-[#F9F6F2]/80 text-sm">pooja@example.com</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/10 rounded-[2rem] p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 animate-slide-left delay-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#F9F6F2]" />
                </div>
                <div>
                  <h3 className="text-[#F9F6F2] font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-[#F9F6F2]/80 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/10 rounded-[2rem] p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 animate-slide-left delay-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#F9F6F2]" />
                </div>
                <div>
                  <h3 className="text-[#F9F6F2] font-semibold text-lg mb-1">Location</h3>
                  <p className="text-[#F9F6F2]/80 text-sm">Available Remote</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-white/10 rounded-[2rem] p-8 border border-white/20 shadow-xl animate-slide-right">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#F9F6F2] font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-[#F9F6F2] placeholder-[#F9F6F2]/50 focus:outline-none focus:border-[#F9F6F2]/50 focus:bg-white/15 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#F9F6F2] font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-[#F9F6F2] placeholder-[#F9F6F2]/50 focus:outline-none focus:border-[#F9F6F2]/50 focus:bg-white/15 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#F9F6F2] font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-[#F9F6F2] placeholder-[#F9F6F2]/50 focus:outline-none focus:border-[#F9F6F2]/50 focus:bg-white/15 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#F9F6F2] text-[#6A0DAD] rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {status && (
                  <div className="p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-[#F9F6F2] text-center animate-fade-in">
                    {status}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
