import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { Code2, Server, Database, Cloud } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Learn more about my journey and what drives me"
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a results-driven Full Stack Developer with experience delivering robust solutions across domains like e-commerce, IT services, and custom software development. I specialize in building scalable web applications using technologies such as React, Node.js, TypeScript, and AWS.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              My projects range from large-scale digital storefronts and B2B platforms to internal tools and cloud-based services. I bring a strong focus on performance, security, and user experience throughout the development lifecycle.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              Whether designing intuitive frontends or architecting efficient backends, I take pride in writing clean, maintainable code and continuously learning to stay ahead of modern development trends.
            </p>

            <div className="pt-4">
              <Button href="#contact">Let's Connect</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <Code2 size={36} className="text-blue-600 dark:text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Modern Frontend</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Developing responsive, accessible interfaces using React, TypeScript, and Tailwind CSS.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <Server size={36} className="text-green-600 dark:text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Robust Backend</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building scalable REST APIs and services with Node.js, Express, and secure architecture.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <Database size={36} className="text-amber-600 dark:text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Database Expertise</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Designing performant schemas and queries using PostgreSQL, MySQL, and MongoDB.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <Cloud size={36} className="text-purple-600 dark:text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Deploying cloud-native apps using AWS, CI/CD pipelines, and containerized environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
