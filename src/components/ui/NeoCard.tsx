import React from 'react';

interface NeoCardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    color?: string;
}

const NeoCard: React.FC<NeoCardProps> = ({
    children,
    className = "",
    title,
    color = "bg-white"
}) => {
    return (
        <div className={`
      ${color} 
      border-4 border-black dark:border-white
      shadow-neo dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]
      p-6 
      transition-all duration-200 
      hover:translate-x-[4px] hover:translate-y-[4px] 
      hover:shadow-neo-sm dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]
      ${color === 'bg-white' ? 'dark:bg-black dark:text-white' : 'text-black'}
      ${className}
    `}>
            {title && (
                <div className="flex justify-between items-center mb-6 border-b-4 border-black dark:border-white pb-2">
                    <h3 className="font-black text-xl uppercase tracking-tighter">{title}</h3>
                    <div className="w-4 h-4 bg-black dark:bg-white"></div>
                </div>
            )}
            {children}
        </div>
    );
};

export default NeoCard;
