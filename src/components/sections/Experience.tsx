import React from 'react';
import { experiences } from '../../utils/data';
import NeoCard from '../ui/NeoCard';

interface ExperienceProps {
  className?: string;
}

const Experience: React.FC<ExperienceProps> = ({ className = "" }) => {
  return (
    <div id="experience" className={className}>
      <NeoCard title="Experience" color="bg-[rgb(255,159,28)]">
        <ul className="space-y-6 text-black">
          {experiences.map((exp, index) => (
            <li key={exp.id} className={`relative pl-6 border-l-4 border-black ${index > 0 ? "opacity-90" : ""}`}>
              <div className="absolute -left-[10px] top-0 w-4 h-4 bg-black"></div>
              <div className="font-black text-lg leading-none uppercase">{exp.role}</div>
              <div className="font-mono text-sm font-bold">{exp.company}</div>
              <div className="font-mono text-sm font-bold">{exp.duration}</div>
              <p className="text-sm font-bold opacity-80 line-clamp-2 md:line-clamp-none">
                {exp.description[0]}
              </p>
              <p className="text-sm font-bold opacity-80 line-clamp-2 md:line-clamp-none">
                {exp.description[1]}
              </p>
            </li>
          ))}
        </ul>
      </NeoCard>
    </div>
  );
};

export default Experience;