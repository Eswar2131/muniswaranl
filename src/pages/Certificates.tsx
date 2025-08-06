import React, { useEffect, useState } from 'react';
import { Award, Calendar, ExternalLink, Building2, CheckCircle } from 'lucide-react';
import PDFPreviewModal from '../components/PDFPreviewModal';

interface CertificatesProps {
  setCurrentPage: (page: string) => void;
}

const Certificates: React.FC<CertificatesProps> = ({ setCurrentPage }) => {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string;
    pdfUrl: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setCurrentPage('certificates');
  }, [setCurrentPage]);

  const handleViewCertificate = (certificate: { title: string; pdfUrl: string }) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const certificates = [
    {
      id: 1,
      title: 'Data Analytics',
      provider: 'NoviTech',
      date: 'Apr 2025',
      type: 'Professional Certificate',
      description: 'Comprehensive certification in data analytics covering statistical analysis, data visualization, and business intelligence.',
      skills: ['Statistical Analysis', 'Data Visualization', 'Business Intelligence', 'Python', 'SQL'],
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      icon: '📊',
      pdfUrl: '/certificates/da.pdf'
    },
    {
      id: 2,
      title: 'Power BI Workshop',
      provider: 'Tech Tip 24',
      date: 'Apr 2025',
      type: 'Workshop Certificate',
      description: 'Hands-on workshop covering advanced Power BI features, dashboard creation, and data modeling techniques.',
      skills: ['Power BI', 'Dashboard Design', 'Data Modeling', 'DAX', 'Report Building'],
      color: 'from-yellow-600 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-100',
      borderColor: 'border-yellow-200',
      icon: '⚡',
      pdfUrl: '/certificates/pww.pdf'
    },
    {
      id: 3,
      title: 'Data Processing and Visualization',
      provider: 'Accenture Future Skills',
      date: 'Apr 2025',
      type: 'Professional Certificate',
      description: 'Advanced certification focusing on data processing workflows and modern visualization techniques.',
      skills: ['Data Processing', 'ETL', 'Data Visualization', 'Tableau', 'Advanced Analytics'],
      color: 'from-purple-600 to-purple-700',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
      icon: '🎯',
      pdfUrl: '/certificates/dp.pdf'
    },
    {
      id: 4,
      title: 'Python Programming',
      provider: 'DataMites',
      date: 'Sep 2023',
      type: 'Programming Certificate',
      description: 'Comprehensive Python programming certification covering data manipulation, analysis, and visualization libraries.',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Analysis'],
      color: 'from-green-600 to-teal-600',
      bgColor: 'from-green-50 to-teal-100',
      borderColor: 'border-green-200',
      icon: '🐍',
      pdfUrl: '/certificates/py.pdf'
    },
    {
      id: 5,
      title: 'Machine Learning',
      provider: 'DataMites',
      date: 'Dec 2023',
      type: 'Professional Certificate',
      description: 'Advanced machine learning certification covering algorithms, model development, and predictive analytics.',
      skills: ['Machine Learning', 'Predictive Analytics', 'Model Development', 'Scikit-learn', 'Deep Learning'],
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'from-indigo-50 to-purple-100',
      borderColor: 'border-indigo-200',
      icon: '🤖',
      pdfUrl: '/certificates/ml.pdf'
    },
    {
      id: 6,
      title: 'Artificial Intelligence',
      provider: 'Tech Academy',
      date: 'Jan 2024',
      type: 'Professional Certificate',
      description: 'Comprehensive AI certification covering neural networks, natural language processing, and computer vision.',
      skills: ['Artificial Intelligence', 'Neural Networks', 'NLP', 'Computer Vision', 'TensorFlow'],
      color: 'from-pink-600 to-rose-600',
      bgColor: 'from-pink-50 to-rose-100',
      borderColor: 'border-pink-200',
      icon: '🧠',
      pdfUrl: '/certificates/ai.pdf'
    },
    {
      id: 7,
      title: 'AI Tools Workshop',
      provider: 'Tech Academy',
      date: 'Mar 2024',
      type: 'Workshop Certificate',
      description: 'Comprehensive workshop covering modern AI tools, automation techniques, and practical applications in data analysis.',
      skills: ['AI Tools', 'Automation', 'Data Analysis', 'Machine Learning', 'Productivity Tools'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-50 to-red-100',
      borderColor: 'border-orange-200',
      icon: '🤖',
      pdfUrl: '/certificates/aw.pdf'
    }
  ];

  const getCertificateTypeColor = (type: string) => {
    switch (type) {
      case 'Professional Certificate':
        return 'bg-blue-100 text-blue-800';
      case 'Workshop Certificate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Programming Certificate':
        return 'bg-green-100 text-green-800';
      case 'Analytics Certificate':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Certifications</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Professional certifications and continuous learning achievements in data analytics and technology
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
          <div className="text-slate-700 font-medium">Total Certificates</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">5</div>
          <div className="text-slate-700 font-medium">Different Providers</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">2025</div>
          <div className="text-slate-700 font-medium">Latest Certification</div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className={`bg-white rounded-2xl shadow-lg border ${cert.borderColor} hover:shadow-xl transition-all duration-300 overflow-hidden group`}
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${cert.bgColor} border-b ${cert.borderColor} p-6`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{cert.icon}</span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getCertificateTypeColor(cert.type)}`}>
                      {cert.type}
                    </span>
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                    {cert.title}
                  </h2>
                  <div className="flex items-center text-slate-700 font-semibold mb-2">
                    <Building2 className="w-4 h-4 mr-2" />
                    {cert.provider}
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {cert.date}
                  </div>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Description */}
              <p className="text-slate-700 leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  Skills Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 bg-gradient-to-r ${cert.bgColor} text-slate-700 rounded-full text-sm font-medium border ${cert.borderColor} hover:shadow-sm transition-shadow`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => handleViewCertificate({ title: cert.title, pdfUrl: cert.pdfUrl })}
                className="w-full flex items-center justify-center px-4 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors group"
              >
                <span>View Certificate</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Certification Path */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Learning Journey</h2>
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stage: 'Foundation', description: 'Python Programming', icon: '🏗️', color: 'text-blue-600' },
              { stage: 'Analytics', description: 'Data Analytics & Processing', icon: '📊', color: 'text-green-600' },
              { stage: 'Visualization', description: 'Power BI & Advanced Analytics', icon: '📈', color: 'text-purple-600' },
              { stage: 'Specialization', description: 'Google Analytics & Web Analytics', icon: '🎯', color: 'text-red-600' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className={`text-lg font-bold ${step.color} mb-2`}>{step.stage}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Continuous Learning</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            I believe in staying current with industry trends and continuously expanding my skill set through certifications and hands-on learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors">
              View All Credentials
              <ExternalLink className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors">
              Connect on LinkedIn
              <ExternalLink className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {selectedCertificate && (
        <PDFPreviewModal
          isOpen={isModalOpen}
          onClose={closeModal}
          pdfUrl={selectedCertificate.pdfUrl}
          certificateTitle={selectedCertificate.title}
        />
      )}
    </div>
  );
};

export default Certificates;