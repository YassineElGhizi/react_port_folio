import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">{t('experience')}</h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold">{t('software_engineer')}</h3>
            <p className="text-lg text-gray-600">{t('tech_company')}</p>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>{t('swe_task_1')}</li>
              <li>{t('swe_task_2')}</li>
              <li>{t('swe_task_3')}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">{t('junior_developer')}</h3>
            <p className="text-lg text-gray-600">{t('another_company')}</p>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>{t('jd_task_1')}</li>
              <li>{t('jd_task_2')}</li>
              <li>{t('jd_task_3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
