import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, MapPin, Phone, Mail, BarChart3, Database, TrendingUp } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage('home');
  }, [setCurrentPage]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                
                 
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Muniswaran L
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-slate-700">
                  Data Analyst & Insights Expert
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Transforming raw data into actionable insights using SQL, Python, Power BI, and Tableau. 
                  Passionate about solving business problems through data-driven decision making.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Bengaluru, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 8925369446</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>muniswaranmeswar@gmail.com</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a href="/cv.pdf" download>
  <button className="inline-flex items-center px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-200">
    <Download className="w-5 h-5 mr-2" />
    Download Resume
  </button>
</a>

              </div>
            </div>

            {/* Profile Image & Stats */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
                   <img
  src="/profile.jpg"
  alt="Profile"
  className="w-full h-full object-cover rounded-full"
/>

                  </div>
                </div>
              </div>

             

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-slate-200">
                <div className="flex items-center space-x-2">
                  <Database className="w-8 h-8 text-purple-600" />
                  <div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Competencies</h2>
            <p className="text-lg text-slate-600">Technologies and tools I work with daily</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Python', color: 'from-blue-500 to-blue-600' },
              { name: 'SQL', color: 'from-green-500 to-green-600' },
              { name: 'Power BI', color: 'from-yellow-500 to-yellow-600' },
              { name: 'Tableau', color: 'from-purple-500 to-purple-600' }
            ].map((skill, index) => (
              <div key={skill.name} className="group cursor-pointer">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-slate-100 group-hover:border-slate-200">
                  <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg mb-4 group-hover:scale-110 transition-transform`}></div>
                  <h3 className="font-semibold text-slate-800 group-hover:text-slate-900">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-slate-600">Certifications Earned</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">7.7</div>
              <div className="text-slate-600">CGPA (MCA)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;