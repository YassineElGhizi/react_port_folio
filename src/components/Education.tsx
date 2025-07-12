import React from 'react';
import { useTranslation } from 'react-i18next';

const Education: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="education" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">{t('education')}</h2>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold">{t('university')}</h3>
          <p className="text-lg text-gray-700">{t('degree')}</p>
          <p className="text-md text-gray-500 mt-2">2018 - 2022</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
