import React, { useEffect } from 'react';
import { Code, Database, BarChart, Users, Clock, Target } from 'lucide-react';

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage('about');
  }, [setCurrentPage]);

  const skills = {
    'Languages & Libraries': ['Python (Pandas, NumPy, Matplotlib, Seaborn)', 'SQL'],
    'Databases': ['MySQL', 'PostgreSQL'],
    'Visualization Tools': ['Power BI', 'Tableau', 'Excel (Pivot Tables, VLOOKUP, Charts)'],
    'Other Tools': ['Git', 'Jupyter Notebook', 'VS Code'],
    'Soft Skills': ['Data storytelling', 'Communication', 'Team collaboration', 'Forecasting', 'A/B Testing']
  };

  const languages = [
    { name: 'Tamil', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'Kannada', level: 'Intermediate' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">About Me</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Passionate data analyst with a strong foundation in transforming complex datasets into actionable business insights
        </p>
      </div>

      {/* Professional Summary */}
      <section className="mb-16">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-slate-900">Professional Summary</h2>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Entry-level Data Analyst with proven experience in data cleaning, ETL, transformation, and KPI analysis using SQL, Python, Power BI, and 
            Tableau. Skilled in automating reports, creating interactive dashboards, and performing exploratory data analysis (EDA) on large datasets. 
            Delivered insights that improved reporting efficiency by 40% and reduced manual work by 5+ hours weekly. Committed to solving business 
            problems through clear, data-driven insights in collaborative, fast-paced environments.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600">Tools and technologies I use to create data-driven solutions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => {
            const getIcon = (category: string) => {
              if (category.includes('Languages')) return Code;
              if (category.includes('Databases')) return Database;
              if (category.includes('Visualization')) return BarChart;
              if (category.includes('Soft')) return Users;
              return Clock;
            };
            
            const Icon = getIcon(category);
            
            return (
              <div key={category} className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-slate-900">{category}</h3>
                </div>
                <div className="space-y-2">
                  {skillList.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-slate-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Languages */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {languages.map((language, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md border border-slate-100 p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{language.name}</h3>
              <p className="text-blue-600 font-medium">{language.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Efficiency Improvement</h3>
            <p className="text-slate-700">Enhanced reporting speed and stakeholder visibility through interactive dashboards</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">5+ Hours</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Weekly Time Savings</h3>
            <p className="text-slate-700">Automated repetitive reporting processes, freeing up valuable team time</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">5,000+</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Data Rows Processed</h3>
            <p className="text-slate-700">Successfully cleaned and transformed large datasets for analysis</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">30%</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Travel Reduction</h3>
            <p className="text-slate-700">Reduced individual travel instances through efficient car pooling system</p>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section>
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Beyond the Data</h2>
          <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
            When I'm not diving deep into datasets, I enjoy exploring new technologies, contributing to open-source projects, 
            and staying updated with the latest trends in data science and analytics. I believe in continuous learning and 
            am always excited to take on new challenges that push the boundaries of what's possible with data.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;