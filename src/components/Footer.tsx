import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="hidden md:block bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Muniswaran L</h3>
            <p className="text-slate-300 mb-4">
              Entry-level Data Analyst passionate about transforming raw data into actionable insights. 
              Experienced in SQL, Python, Power BI, and Tableau.
            </p>
            <div className="flex items-center space-x-2 text-slate-300">
              <MapPin className="w-4 h-4" />
              <span>Bengaluru, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="/about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="/experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="/certificates" className="hover:text-white transition-colors">Certificates</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:muniswaranmeswar@gmail.com"
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>muniswaranmeswar@gmail.com</span>
              </a>
              <a 
                href="https://linkedin.com/in/muniswaran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Muniswaran L. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;