import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

interface ContactProps {
  className?: string;
}

import NeoButton from '../ui/NeoButton';
import { about } from '../../utils/data';

const Contact: React.FC<ContactProps> = ({ className = "" }) => {
  return (
    <div id="contact" className={`${className} bg-neo-red border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-black`}>
      <div>
        <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Let's Build Something<br />Ridiculous.</h2>
        <p className="font-bold text-xl border-l-8 border-black pl-4">
          Available for freelance projects.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-end">
        <NeoButton
          href={about.social.email}
          variant="primary"
          className="w-full md:w-auto bg-white hover:bg-gray-100"
        >
          <Mail strokeWidth={3} /> Email Me
        </NeoButton>
        <div className="flex gap-4 justify-center">
          <NeoButton href={about.social.github} variant="dark" className="p-3"><Github /></NeoButton>
          <NeoButton href={about.social.linkedin} variant="dark" className="p-3"><Linkedin /></NeoButton>
          <NeoButton href={about.social.twitter} variant="dark" className="p-3"><Twitter /></NeoButton>
        </div>
      </div>
    </div>
  );
};

export default Contact;