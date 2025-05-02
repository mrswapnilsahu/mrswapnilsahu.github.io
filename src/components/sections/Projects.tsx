import React, { useState } from 'react';
import { projects } from '../../utils/data';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projects : projects.filter(project => project.featured);
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Projects"
          subtitle="Explore some of my recent work"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <Card key={project.id} hoverEffect className="h-full">
              <div className="aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 flex items-center gap-1"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 flex items-center gap-1 ml-4"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {!showAll && projects.length > displayedProjects.length && (
          <div className="mt-12 text-center">
            <Button onClick={() => setShowAll(true)}>
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;