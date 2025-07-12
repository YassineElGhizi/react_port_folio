import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projectData = (t('project_list', { returnObjects: true }) || []) as Array<{
    title: string;
    description?: string;
    image?: string;
    link?: string;
  }>;

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{t('projects')}</h2>
        <div className="flex overflow-x-auto space-x-8 pb-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2"
            >
              {project.image && (
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
              )}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                {project.description && (
                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
