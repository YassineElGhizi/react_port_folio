import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Professional Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold">Software Engineer</h3>
            <p className="text-lg text-gray-600">Tech Company | 2022 - Present</p>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>Developed and maintained web applications using React and TypeScript.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
              <li>Implemented new features and fixed bugs in existing applications.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Junior Developer</h3>
            <p className="text-lg text-gray-600">Another Company | 2020 - 2022</p>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>Assisted in the development of web applications.</li>
              <li>Learned and applied new technologies.</li>
              <li>Participated in code reviews and team meetings.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
