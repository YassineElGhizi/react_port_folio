import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-left sm:text-center px-4 sm:px-0">I am a software engineer with a passion for building beautiful and functional applications. I have experience with a variety of technologies, including React, TypeScript, Node.js, and more.</p>
      </div>
    </section>
  );
};

export default About;
