import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t('welcome')}</h1>
        <p className="text-lg sm:text-xl">{t('welcome_subtitle')}</p>
      </div>
    </section>
  );
};

export default Home;
