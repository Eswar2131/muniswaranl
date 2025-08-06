import React, { useEffect } from 'react';
import { Building2, Calendar, MapPin, TrendingUp, Users, Database, BarChart3 } from 'lucide-react';

interface ExperienceProps {
  setCurrentPage: (page: string) => void;
}

const Experience: React.FC<ExperienceProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage('experience');
  }, [setCurrentPage]);

  const experience = {
    title: 'Data Analytics Intern',
    company: 'NoviTech',
    period: 'April 2025 – June 2025',
    location: 'Bengaluru, India',
    type: 'Internship',
    description: 'Gained hands-on experience analyzing real-world business datasets to support decision-making and performance tracking.',
    responsibilities: [
      'Designed and implemented interactive dashboards using Power BI and Tableau, improving reporting speed and stakeholder visibility by 40%',
      'Utilized SQL and Python (Pandas) to clean, manipulate, and transform over 5,000 rows of raw data for analysis',
      'Streamlined repetitive reporting processes through automation, saving the team over 5 hours per week',
      'Partnered with cross-functional teams to interpret business needs and deliver actionable insights through visual and statistical analysis'
    ],
    skills: [
      'Data Analysis', 'SQL', 'Python', 'Pandas', 'Power BI', 'Tableau', 
      'Data Visualization', 'ETL', 'Dashboard Creation', 'Process Automation'
    ],
    achievements: [
      { metric: '40%', description: 'Improvement in reporting speed' },
      { metric: '5000+', description: 'Rows of data processed' },
      { metric: '5+', description: 'Hours saved weekly' },
      { metric: '100%', description: 'Project completion rate' }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Work Experience</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Professional experience in data analytics and business intelligence
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

        {/* Experience Card */}
        <div className="relative">
          {/* Timeline Dot */}
          <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hidden md:block"></div>

          <div className="md:ml-16 bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-200 p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="mb-4 lg:mb-0">
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                    {experience.title}
                  </h2>
                  <div className="flex items-center text-blue-600 font-semibold text-lg mb-2">
                    <Building2 className="w-5 h-5 mr-2" />
                    {experience.company}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-slate-600">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      {experience.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {experience.location}
                    </div>
                  </div>
                </div>
                <div className="lg:text-right">
                  <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    {experience.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Description */}
              <div className="mb-8">
                <p className="text-lg text-slate-700 leading-relaxed">
                  {experience.description}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-blue-600" />
                  Key Responsibilities
                </h3>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-slate-700 leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                  Key Achievements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200 text-center hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {achievement.metric}
                      </div>
                      <div className="text-sm text-slate-600 font-medium">
                        {achievement.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Used */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Database className="w-6 h-6 mr-2 text-purple-600" />
                  Technologies & Skills Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {experience.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:from-blue-100 hover:to-purple-100 hover:text-slate-800 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* What I Learned */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <BarChart3 className="w-7 h-7 mr-3 text-blue-600" />
            What I Learned
          </h3>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Advanced data visualization techniques using industry-standard tools</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Process automation strategies that significantly improve efficiency</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Cross-functional collaboration in a fast-paced business environment</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Translating complex data insights into actionable business recommendations</span>
            </li>
          </ul>
        </div>

        {/* Impact Created */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <TrendingUp className="w-7 h-7 mr-3 text-green-600" />
            Impact Created
          </h3>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Enabled faster decision-making through real-time dashboard insights</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Reduced manual reporting workload, allowing team focus on strategic tasks</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Improved data quality and consistency across business processes</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Enhanced stakeholder confidence through accurate and timely reporting</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;