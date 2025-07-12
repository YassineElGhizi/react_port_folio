import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg sm:text-xl">I'm a passionate developer creating modern and responsive web applications.</p>
      </div>
    </section>
  );
};

export default Home;
