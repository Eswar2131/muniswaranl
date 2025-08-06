import React, { useEffect } from 'react';
import { ExternalLink, Github, Calendar, Users, TrendingUp, Database } from 'lucide-react';

interface ProjectsProps {
  setCurrentPage: (page: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage('projects');
  }, [setCurrentPage]);

  const projects = [
    {
      id: 1,
      title: 'Car Pooling System',
      period: 'Jan 2025 – Apr 2025',
      description: 'Developed a full-stack ride-sharing web application using React.js, PHP, and MySQL, enabling users to list and book rides based on real-time location data.',
      achievements: [
        'Integrated user login authentication',
        'Implemented real-time ride-matching logic', 
        'Automated database updates for efficient ride bookings',
        'Reduced individual travel instances by 30%'
      ],
      technologies: ['React.js', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      github: 'https://github.com/Eswar2131/carrpolling',
      demo: '#'
    },
    {
      id: 2,
      title: 'Interactive Business Dashboard',
      period: 'Feb 2025 – Mar 2025',
      description: 'Created executive-level dashboards in Power BI and Tableau to visualize KPIs from over 10,000 real-world sales records.',
      achievements: [
        'Applied complex SQL queries for data preprocessing',
        'Identified trends and evaluated performance metrics',
        'Automated recurring reporting tasks',
        'Enhanced workflow efficiency saving 5+ hours weekly'
      ],
      technologies: ['Power BI', 'Tableau', 'SQL', 'Python', 'Excel'],
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      github: 'https://github.com',
      demo: '#'
    },
    {
      id: 3,
      title: 'Hospital Management System',
      period: 'Mar 2024 – June 2024',
      description: 'Built a comprehensive web-based hospital information system to handle patient data, appointments, billing, and inventory management.',
      achievements: [
        'Enhanced system performance by 50%',
        'Optimized database structure and SQL queries',
        'Implemented secure record-keeping system',
        'Created user-friendly interface for medical staff'
      ],
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      github: 'https://github.com',
      demo: '#'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">My Projects</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Explore my portfolio of data analysis and web development projects that showcase problem-solving skills and technical expertise
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-12">
        {projects.map((project, index) => {
          const Icon = project.icon;
          
          return (
            <div 
              key={project.id} 
              className={`group ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-8 bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300`}
            >
              {/* Project Info */}
              <div className="flex-1 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h2>
                    <div className="flex items-center text-slate-600 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.period}
                    </div>
                  </div>
                </div>

                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Achievements:</h3>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Project Visual */}
              <div className={`flex-1 bg-gradient-to-br ${project.bgColor} p-8 lg:p-12 flex items-center justify-center`}>
                <div className="w-full max-w-md">
                  <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-center text-slate-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-center text-slate-600 text-sm">
                      {project.period}
                    </p>
                    <div className="mt-6 space-y-2">
                      <div className="h-2 bg-slate-200 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-3/4"></div>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-5/6"></div>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Interested in collaborating?</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm always excited to work on new projects and solve challenging problems with data
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-lg"
          >
            Get In Touch
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;