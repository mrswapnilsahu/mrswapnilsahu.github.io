import React, { useState, useEffect } from 'react';
import NeoCard from '../ui/NeoCard';
import { about } from '../../utils/data';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = "" }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="about" className={className}>
      <NeoCard title="Personal Info" color="bg-neo-teal">
        <div className="space-y-6 font-mono font-bold">
          <div className="flex justify-between border-b-2 border-black pb-2">
            <span>LOCATION</span>
            <span>{about.location}</span>
          </div>
          <div className="flex justify-between border-b-2 border-black pb-2">
            <span>EXPERIENCE</span>
            <span>{about.experience}</span>
          </div>
          <div className="flex justify-between border-b-2 border-black pb-2">
            <span>PROJECTS</span>
            <span>{about.projectsCount}</span>
          </div>
          <div className="flex justify-between border-b-2 border-black pb-2">
            <span>LOCAL TIME</span>
            <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: 'numeric' })}</span>
          </div>
          <div className="pt-2">
            <p className="text-sm font-sans leading-relaxed opacity-90">
              Software Engineer with 6 years of experience building scalable, high‑performance web applications and design systems. Skilled in React,
              TypeScript, Redux Toolkit, and modern bundlers, with expertise in web performance optimization, responsive design, and CI/CD integration.
              Proven track record in fintech and e‑commerce, delivering impactful features and mentoring teams.
            </p>
          </div>
        </div>
      </NeoCard>
    </div>
  );
};

export default About;
