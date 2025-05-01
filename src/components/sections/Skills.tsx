import React from "react";
import { skills } from "../../utils/data";
import SectionHeading from "../ui/SectionHeading";
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
  SiSass,
} from 'react-icons/si';


const Skills: React.FC = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (skill.category) {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
    }
    return acc;
  }, {} as Record<string, typeof skills>);

  const hasValidCategories = Object.keys(skillsByCategory).length > 0;

  const categoryNames: Record<string, string> = {
    frontend: "Frontend Development",
    backend: "Backend Development",
    database: "Databases",
    devops: "Cloud & DevOps",
    other: "Tools & Workflow",
  };

  const renderSkillCard = (skill: (typeof skills)[number]) => (
    <div
      key={skill.name}
      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center transition-transform hover:-translate-y-1 duration-300"
    >
      <div className="text-4xl mb-2 text-blue-600 dark:text-blue-400 flex items-center justify-center">
        {getIconForSkill(skill.name)}
      </div>

      <h4 className="font-medium text-gray-900 dark:text-white">
        {skill.name}
      </h4>

      {skill.proficiency ? (
        <div className="mt-2 flex justify-center">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full mx-0.5 ${
                i < skill.proficiency
                  ? "bg-blue-600 dark:bg-blue-500"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies I work with"
          centered
        />

        <div className="space-y-12">
          {hasValidCategories ? (
            Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category}>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {categoryNames[category] || category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {categorySkills.map(renderSkillCard)}
                </div>
              </div>
            ))
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {skills.map(renderSkillCard)}
            </div>
          )}
        </div>
      </div>
    </section>
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
    'REST APIs': <SiApachenetbeanside />, // Placeholder icon
  };

  return iconMap[skillName] || <SiApachenetbeanside />; // Default icon
}


export default Skills;
