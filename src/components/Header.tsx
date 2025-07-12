import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/75 backdrop-blur-lg shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex flex-col md:flex-row md:justify-center items-center">
        <div className="md:hidden w-full flex justify-end">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6 fill-current text-gray-800" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.828-4.828-4.828a1 1 0 0 1 1.414-1.414l4.828 4.828 4.829-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
        <ul className={`w-full md:w-auto flex-col md:flex-row md:flex items-center md:space-x-6 ${isOpen ? 'flex' : 'hidden'}`}>
          <li className="my-2 md:my-0"><a href="#home" className="text-gray-800 hover:text-blue-500 transition duration-300">Home</a></li>
          <li className="my-2 md:my-0"><a href="#about" className="text-gray-800 hover:text-blue-500 transition duration-300">About</a></li>
          <li className="my-2 md:my-0"><a href="#skills" className="text-gray-800 hover:text-blue-500 transition duration-300">Skills</a></li>
          <li className="my-2 md:my-0"><a href="#education" className="text-gray-800 hover:text-blue-500 transition duration-300">Education</a></li>
          <li className="my-2 md:my-0"><a href="#experience" className="text-gray-800 hover:text-blue-500 transition duration-300">Experience</a></li>
          <li className="my-2 md:my-0"><a href="#projects" className="text-gray-800 hover:text-blue-500 transition duration-300">Projects</a></li>
          <li className="my-2 md:my-0"><a href="#contact" className="text-gray-800 hover:text-blue-500 transition duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
