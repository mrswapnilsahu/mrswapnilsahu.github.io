import React from "react";
import { skills } from "../../utils/data";
import NeoCard from "../ui/NeoCard";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiRedux,
  SiJira,
  SiFirebase,
  SiWebpack,
  SiApachenetbeanside,
  SiLinux,
  SiPython,
  SiSass
} from 'react-icons/si';
import { FaGolang } from "react-icons/fa6";

interface SkillsProps {
  className?: string;
}

const Skills: React.FC<SkillsProps> = ({ className = "" }) => {
  // Use existing skills data
  const colors = [
    "bg-[#FF6B6B]",
    "bg-[#4ECDC4]",
    "bg-[#FFE66D]",
    "bg-[#FF9F1C]",
    "bg-[#C7F9CC]",
    "bg-[#FFD93D]",
  ];

  const renderSkillCard = (skill: (typeof skills)[number], index: number) => {
    const randomColor = colors[index % colors.length];
    return (
      <div
        key={skill.name}
        className={`${randomColor} border-2 border-black p-4 flex flex-col items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform text-black`}
      >
        <div className="text-3xl">
          {getIconForSkill(skill.name)}
        </div>
        <span className="font-bold uppercase text-xs text-center">{skill.name}</span>
      </div>
    );
  };

  return (
    <div id="skills" className={className}>
      <NeoCard title="Tech Arsenal" color="bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, idx) => renderSkillCard(skill, idx))}
        </div>
      </NeoCard>
    </div>
  );
};

function getIconForSkill(skillName: string): JSX.Element {
  const iconMap: Record<string, JSX.Element> = {
    React: <SiReact />,
    NextJS: <SiNextdotjs />,
    TypeScript: <SiTypescript />,
    JavaScript: <SiJavascript />,
    HTML: <SiHtml5 />,
    CSS: <SiCss3 />,
    TailwindCSS: <SiTailwindcss />,
    NodeJS: <SiNodedotjs />,
    Express: <SiExpress />,
    MongoDB: <SiMongodb />,
    PostgreSQL: <SiPostgresql />,
    SQL: <SiMysql />,
    Docker: <SiDocker />,
    Git: <SiGit />,
    Redux: <SiRedux />,
    Jira: <SiJira />,
    Firebase: <SiFirebase />,
    Webpack: <SiWebpack />,
    Linux: <SiLinux />,
    Python: <SiPython />,
    SCSS: <SiSass />,
    Go: <FaGolang />,
    'REST APIs': <SiApachenetbeanside />,
  };

  return iconMap[skillName] || <SiApachenetbeanside />;
}

export default Skills;
