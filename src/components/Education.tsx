import React from 'react';
import { useTranslation } from 'react-i18next';

const Education: React.FC = () => {
  const { t } = useTranslation();
  const educationData = (t('education_list', { returnObjects: true }) || []) as Array<{
    degree: string;
    university: string;
    period: string;
    location: string;
  }>;

  return (
    <section id="education" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('education')}</h2>
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-lg text-gray-600">{edu.university}</p>
                </div>
                <div className="text-right">
                  <p className="text-md text-gray-500">{edu.period}</p>
                  <p className="text-sm text-gray-400">{edu.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

