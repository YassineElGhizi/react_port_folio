import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/YassineElGhizi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
            <FaGithub className="inline-block text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/yassine-el-ghizi/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
            <FaLinkedinIn className="inline-block text-2xl" />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
            <FaTwitter className="inline-block text-2xl" />
          </a> */}
        </div>
        <p>&copy; {new Date().getFullYear()} EL GHIZI Yassine. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
