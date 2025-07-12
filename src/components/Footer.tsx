import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-blue-500 transition duration-300">GitHub</a>
          <a href="#" className="hover:text-blue-500 transition duration-300">LinkedIn</a>
          <a href="#" className="hover:text-blue-500 transition duration-300">Twitter</a>
        </div>
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
