import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const experienceData = (t('experience_list', { returnObjects: true }) || []) as Array<{
    title: string;
    company: string;
    period: string;
    location: string;
    description: string[];
    tags: string[];
    achievements_title?: string;
    achievements?: string[];
    clients_title?: string;
    clients?: string;
  }>;

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('experience')}</h2>
        <div className="max-w-4xl mx-auto">
          {experienceData.map((job, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md mb-8 border-l-4 border-blue-500">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
                  <p className="text-lg text-gray-600 font-semibold">{job.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-md text-gray-500">{job.period}</p>
                  <p className="text-sm text-gray-400">{job.location}</p>
                </div>
              </div>

              {/* Description */}
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Achievements */}
              {job.achievements && job.achievements.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-bold text-gray-800">{job.achievements_title}</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Clients */}
              {job.clients && (
                <div className="mt-4">
                  <h4 className="font-bold text-gray-800">{job.clients_title}</h4>
                  <p className="text-gray-700">{job.clients}</p>
                </div>
              )}

              {/* Tags */}
              {job.tags && job.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
