import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {subtitle}
        </p>
      )}
      <div 
        className={`h-1 w-20 bg-blue-600 dark:bg-blue-500 mt-4 ${centered ? 'mx-auto' : ''}`}
      />
    </div>
  );
};

export default SectionHeading;