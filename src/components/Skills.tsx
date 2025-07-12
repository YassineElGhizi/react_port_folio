import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const categorizedSkills = {
    'Programming Languages': ['Python', 'PHP', 'JavaScript', 'SQL'],
    'Web Frameworks': ['Django', 'Flask', 'FastAPI', 'Laravel', 'React'],
    'Databases (SQL & NoSQL)': ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'Redis', 'MongoDB'],
    'Data': ['ETL', 'Apache Superset', 'Apache Airflow', 'Data Visualization', 'Web Scraping'],
    'Cloud & Containerization': ['AWS', 'EC2', 'RDS', 'S3', 'API Gateway', 'Lambda', 'SNS', 'Docker'],
    'Systems': ['Shell', 'Git'],
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">{t('skills')}</h2>
        <div className="max-w-5xl mx-auto space-y-12">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            skills.length > 0 && (
              <div key={category}>
                <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-left">
                  {category}
                </h3>
                <ul className="flex flex-wrap justify-start gap-4">
                  {skills.map(skill => (
                    <li
                      key={skill}
                      className="bg-gray-800 text-gray-300 px-5 py-2 rounded-lg text-base font-medium border border-gray-700 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-blue-500 hover:border-blue-500 hover:text-white cursor-pointer"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
