import React from 'react';

const Skills: React.FC = () => {
  const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML/CSS', 'Tailwind CSS'];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {skills.map(skill => (
            <li key={skill} className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
