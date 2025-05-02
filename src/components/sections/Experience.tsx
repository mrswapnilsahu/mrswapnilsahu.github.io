import React from 'react';
import { experiences } from '../../utils/data';
import SectionHeading from '../ui/SectionHeading';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey"
          centered
        />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900 transform md:-translate-x-1/2 md:left[2%]" />
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                <div 
                  className={`
                    flex flex-col md:flex-row items-start md:gap-8 
                    ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                  `}
                >
                  {/* Timeline bullet */}
                  <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-blue-600 dark:bg-blue-500 rounded-full transform -translate-y-1/2 md:-translate-x-1/2 z-10" />
                  
                  {/* Date - Mobile (always on top) */}
                  <div className="md:hidden mb-4 font-medium text-blue-600 dark:text-blue-500">
                    {exp.duration}
                  </div>
                  
                  {/* Date - Desktop (alternating sides) */}
                  <div className={`
                    hidden md:block w-full md:w-1/2 pl-8 md:pl-0 md:pr-8 
                    ${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:pl-8'}
                  `}>
                    <div className="font-medium text-blue-600 dark:text-blue-500">
                      {exp.duration}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="pl-8 md:pl-0 md:w-1/2 md:pr-0 md:pl-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg font-medium text-blue-600 dark:text-blue-500 mb-4">
                        {exp.company}
                      </h4>
                      
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;