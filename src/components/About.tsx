import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ whiteSpace: 'pre-line' }} >{t('about_me')}</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-left sm:text-center px-4 sm:px-0" style={{ whiteSpace: 'pre-line' }}>{t('about_me_description')}</p>
      </div>
    </section>
  );
};

export default About;
