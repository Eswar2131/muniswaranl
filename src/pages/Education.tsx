import React, { useEffect } from 'react';
import { GraduationCap, Calendar, MapPin, Star, BookOpen, Award } from 'lucide-react';

interface EducationProps {
  setCurrentPage: (page: string) => void;
}

const Education: React.FC<EducationProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage('education');
  }, [setCurrentPage]);

  const education = [
    {
      id: 1,
      degree: 'Master Of Computer Applications (MCA)',
      institution: 'Dayananda Sagar College of Arts, Science and Commerce',
      location: 'Bengaluru, Karnataka',
      period: 'Aug 2023 - Sep 2025',
      cgpa: '7.7',
      status: 'In Progress',
      level: 'Post Graduate',
      color: 'from-blue-600 to-purple-600',
      bgColor: 'from-blue-50 to-purple-50',
      borderColor: 'border-blue-200',
      highlights: [
        'Specialized in Data Analytics and Business Intelligence',
        'Advanced coursework in Database Management Systems',
        'Project-based learning with real-world applications',
        'Strong foundation in Software Engineering principles'
      ]
    },
    {
      id: 2,
      degree: 'Bachelor Of Computer Application (BCA)',
      institution: 'AVS College Of Arts and Science',
      location: 'Tamil Nadu',
      period: 'Aug 2020 - May 2023',
      cgpa: '7.4',
      status: 'Completed',
      level: 'Graduate',
      color: 'from-green-600 to-teal-600',
      bgColor: 'from-green-50 to-teal-50',
      borderColor: 'border-green-200',
      highlights: [
        'Comprehensive study of Computer Science fundamentals',
        'Programming languages: Java, C++, Python',
        'Web development technologies and frameworks',
        'Database design and management'
      ]
    },
    {
      id: 3,
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Anna Arivagam Hr Sec School',
      location: 'Tamil Nadu',
      period: 'June 2019 - Mar 2020',
      cgpa: '7.8',
      status: 'Completed',
      level: 'Secondary',
      stream: 'Maths - Biology',
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      highlights: [
        'Strong foundation in Mathematics and Biology',
        'Analytical thinking and problem-solving skills',
        'Scientific method and research principles',
        'Excellent academic performance'
      ]
    }
  ];

  const getGradeColor = (cgpa: string) => {
    const grade = parseFloat(cgpa);
    if (grade >= 8.0) return 'text-green-600 bg-green-100';
    if (grade >= 7.5) return 'text-blue-600 bg-blue-100';
    if (grade >= 7.0) return 'text-orange-600 bg-orange-100';
    return 'text-slate-600 bg-slate-100';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Education</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          My academic journey in computer science and data analytics
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-green-600 to-orange-600 hidden lg:block"></div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={edu.id} className="relative">
              {/* Timeline Dot */}
              <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${edu.color} rounded-full border-2 border-white shadow-lg hidden lg:block`}></div>

              <div className="lg:ml-16">
                <div className={`bg-white rounded-2xl shadow-lg border ${edu.borderColor} hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${edu.bgColor} border-b ${edu.borderColor} p-8`}>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                      <div className="mb-4 lg:mb-0 flex-1">
                        <div className="flex items-center mb-2">
                          <GraduationCap className={`w-6 h-6 mr-3 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`} />
                          <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                            {edu.level}
                          </span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                          {edu.degree}
                        </h2>
                        <div className="space-y-2">
                          <div className="flex items-center text-slate-700 font-semibold">
                            <BookOpen className="w-5 h-5 mr-2" />
                            {edu.institution}
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-slate-600">
                            <div className="flex items-center mb-2 sm:mb-0">
                              <Calendar className="w-4 h-4 mr-2" />
                              {edu.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              {edu.location}
                            </div>
                          </div>
                          {edu.stream && (
                            <div className="text-slate-600">
                              <strong>Stream:</strong> {edu.stream}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Grade and Status */}
                      <div className="lg:text-right space-y-3">
                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${getGradeColor(edu.cgpa)}`}>
                          <Star className="w-4 h-4 mr-2" />
                          CGPA: {edu.cgpa}
                        </div>
                        <div className="block">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                            edu.status === 'Completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                      <Award className="w-6 h-6 mr-2 text-slate-600" />
                      Key Highlights
                    </h3>
                    <ul className="space-y-3">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <div className={`w-2 h-2 bg-gradient-to-r ${edu.color} rounded-full mt-2 mr-4 flex-shrink-0`}></div>
                          <span className="text-slate-700 leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Achievements Summary */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Academic Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Current Degree</h3>
            <p className="text-slate-700 font-semibold">Master of Computer Applications</p>
            <p className="text-slate-600 text-sm">CGPA: 7.7 (In Progress)</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Specialization</h3>
            <p className="text-slate-700 font-semibold">Data Analytics</p>
            <p className="text-slate-600 text-sm">Business Intelligence Focus</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Overall Performance</h3>
            <p className="text-slate-700 font-semibold">Consistent Excellence</p>
            <p className="text-slate-600 text-sm">Strong Academic Record</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;