import React from 'react';
import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';

interface IFooterProps {
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  email?: string;
}

const Footer: React.FC<IFooterProps> = ({
  githubUrl = "https://github.com/swapnilsahu27",
  linkedinUrl = "https://www.linkedin.com/in/swapnilsahu27/",
  twitterUrl = "https://twitter.com/swapnilsahu27",
  email = "contact@swapnilsahu.com"
}) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#home" 
              className="text-xl font-bold text-blue-600 dark:text-blue-500"
            >
              Swapnil<span className="text-gray-900 dark:text-white"> Sahu</span>
            </a>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Full Stack Developer | Software Engineer | Building Scalable & Usable Web Applications
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={twitterUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href={`mailto:${email}`} 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Swapnil Sahu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
