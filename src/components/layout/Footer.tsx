import React from 'react';
import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';
import { about } from '../../utils/data';

interface IFooterProps {
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  email?: string;
}

const Footer: React.FC<IFooterProps> = ({
  githubUrl = about.social.github,
  linkedinUrl = about.social.linkedin,
  twitterUrl = about.social.twitter,
  email = about.social.email
}) => {
  return (
    <footer className="border-t-4 border-black pt-8 pb-12 flex flex-col md:flex-row justify-between items-center gap-4 font-mono font-bold uppercase container mx-auto px-4">
      <div className="flex items-center gap-2">
        <span>© {new Date().getFullYear()} Swapnil Sahu</span>
      </div>
      <div className="flex gap-6 flex-wrap justify-center">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-black hover:text-white px-2 transition-colors flex items-center gap-2"
        >
          <GitHub size={20} /> Github
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-black hover:text-white px-2 transition-colors flex items-center gap-2"
        >
          <Linkedin size={20} /> LinkedIn
        </a>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-black hover:text-white px-2 transition-colors flex items-center gap-2"
        >
          <Twitter size={20} /> Twitter
        </a>
        <a
          href={email}
          className="hover:bg-black hover:text-white px-2 transition-colors flex items-center gap-2"
        >
          <Mail size={20} /> Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
