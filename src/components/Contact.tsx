import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">{t('contact_me')}</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">{t('name')}</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg" placeholder={t('your_name') as string} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">{t('email')}</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg" placeholder={t('your_email') as string} />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">{t('message')}</label>
            <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-lg" placeholder={t('your_message') as string}></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              {t('send_message')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
