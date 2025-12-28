import React from 'react';
import { projects } from '../../utils/data';
import NeoButton from '../ui/NeoButton';

interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className = "" }) => {
  // Use first featured project as main, or just list them all differently?
  // New design has "Featured Project" big card.
  // I will make it so that it iterates over projects and shows them in this style.

  return (
    <div id="projects" className={`${className} flex flex-col gap-8`}>
      <div className="bg-neo-yellow border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-4xl uppercase tracking-tighter text-center font-black text-black">Featured Projects</h2>
      </div>
      {projects.map((project) => (
        <div key={project.id} className="bg-black text-white border-4 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3)] p-8 relative overflow-hidden group transition-transform hover:-translate-y-1">
          {project.featured && (
            <div className="absolute top-0 right-0 bg-neo-red text-black font-black text-xs px-2 py-1 border-b-4 border-l-4 border-black z-20">
              FEATURED
            </div>
          )}
          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-2 uppercase text-neo-yellow">{project.title}</h3>
            <p className="font-mono text-gray-300 mb-6 max-w-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="bg-white text-black px-2 py-1 font-bold text-xs border-2 border-white">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.liveUrl && (
                <NeoButton variant="primary" className="text-sm" href={project.liveUrl}>
                  View Live
                </NeoButton>
              )}
              {project.githubUrl && (
                <NeoButton variant="dark" className="text-sm border-white" href={project.githubUrl}>
                  GitHub
                </NeoButton>
              )}
            </div>
          </div>
          {/* Abstract UI Representation / Image */}
          <div className="hidden sm:block absolute -right-10 -bottom-20 w-80 h-60 bg-white border-4 border-gray-500 transform -rotate-12 group-hover:-rotate-6 transition-transform duration-300">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;