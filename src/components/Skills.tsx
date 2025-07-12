import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const categorizedSkills = {
    'Frontend': ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
    'Backend': ['Node.js'],
    'Data': [], // Example category
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('skills')}</h2>
        <div className="space-y-10">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            skills.length > 0 && (
              <div key={category}>
                <h3 className="text-2xl font-bold text-center mb-6">{category}</h3>
                <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
                  {skills.map(skill => (
                    <li key={skill} className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg">
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
