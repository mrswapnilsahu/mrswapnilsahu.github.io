import React from "react";
import NeoButton from "../ui/NeoButton";
import { ArrowUpRight, Github, Linkedin, Twitter, Mail, ExternalLink, ArrowRight, Download, Eye } from "lucide-react";
import { about } from "../../utils/data";

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="home" className="mb-12 relative px-4 container mx-auto">

      {/* Desktop Layout */}
      {/* Removed pt-32, handled by Home wrapper. Added flex-col-reverse for responsive. */}
      <div className="hidden md:block bg-neo-yellow border-4 border-black p-6 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-6xl relative z-10 mx-auto text-black">
        <div className="flex justify-between items-center gap-8 lg:gap-12">
          <div className="flex-1 min-w-0">
            <div className="inline-block bg-black text-white px-4 py-1 font-mono text-sm mb-6 animate-pulse">
              ● STATUS: AVAILABLE FOR WORK
            </div>
            {/* Updated content for Developer Persona */}
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase break-words">
              I Build <br />
              <span className="text-white relative inline-block">
                {/* <span className="relative z-10" style={{ WebkitTextStroke: '1px black' }}>Software</span> */}
                <span className="hidden md:inline relative z-10" style={{ WebkitTextStroke: '3px black' }}>Applications</span>

                <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full z-20" viewBox="0 0 300 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 11C68.3033 4.22856 186.276 -4.84666 297 11" stroke="black" strokeWidth="4" className="md:stroke-[6]" strokeLinecap="round" />
                </svg>
              </span>
              <br />That Scales.
            </h1>
            {/* <p className="text-xl md:text-2xl font-bold max-w-2xl leading-relaxed mb-10 border-l-8 border-black pl-6">
              {about.bio}
            </p> */}
            <div className="flex flex-wrap gap-6">
              <NeoButton variant="secondary" href={about.social.linkedin} target="_blank">
                LinkedIn
                <Linkedin />
              </NeoButton>
              <NeoButton variant="dark" href={about.social.github}>
                Github
                <Github />
              </NeoButton>
              <NeoButton href={about.resumeUrl} target="_blank">
                Resume
                <Eye />
              </NeoButton>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:block relative shrink-0">
            <div className="w-64 h-64 xl:w-80 xl:h-80 border-4 border-black rotate-3 hover:rotate-0 transition-transform duration-300 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
              <img src={about.avatar} alt={about.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="absolute -bottom-12 -right-6 bg-white border-4 border-black px-4 py-2 font-black text-xl rotate-[-6deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-[200px] text-center">
              {about.role}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (Linktree Style) */}
      <div className="md:hidden flex flex-col items-center text-center mt-0 w-full max-w-full overflow-hidden px-4 pb-8">
        <div className="w-32 h-32 rounded-full border-4 border-black overflow-hidden mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white shrink-0">
          <img src={about.avatar} alt={about.name} className="w-full h-full object-cover" />
        </div>
        <h1 className="text-3xl font-black uppercase flex items-center gap-2 mb-2 dark:text-white">
          {about.name}
        </h1>
        <p className="font-bold text-lg mb-6 max-w-xs leading-tight dark:text-gray-300">
          Software Engineer <br />
        </p>

        <div className="flex gap-4 mb-8">
          <a href={about.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform dark:text-white"><Github size={24} /></a>
          <a href={about.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform dark:text-white"><Linkedin size={24} /></a>
          <a href={about.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 transition-transform dark:text-white"><Twitter size={24} /></a>
          <a href={about.social.email} aria-label="Email" className="hover:scale-110 transition-transform dark:text-white"><Mail size={24} /></a>
        </div>

        <div className="w-full space-y-4 max-w-sm">
          <NeoButton className="w-full justify-center bg-[#c996cc]" onClick={() => scrollTo('#experience')}>
            Work Experience
          </NeoButton>
          <NeoButton className="w-full justify-center bg-[#4ECDC4]" onClick={() => scrollTo('#projects')}>
            Projects
          </NeoButton>
          <NeoButton
            className="w-full justify-center bg-[#FF9F1C]"
            href={about.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </NeoButton>
          <NeoButton className="w-full justify-center bg-[#FF6B6B]" onClick={() => scrollTo('#contact')}>
            Contact
          </NeoButton>
        </div>
      </div>

    </header>
  );
};

export default Hero;
