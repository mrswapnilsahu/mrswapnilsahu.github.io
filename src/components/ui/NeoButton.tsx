import React from 'react';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'dark';
    href?: string;
    target?: string;
    rel?: string;
}

const NeoButton: React.FC<NeoButtonProps> = ({
    children,
    onClick,
    className = "",
    variant = "primary",
    href,
    ...props
}) => {
    const bgColors = {
        primary: "bg-neo-red hover:bg-[#ff5252]",
        secondary: "bg-neo-teal hover:bg-[#45b7af]",
        dark: "bg-black text-white hover:bg-neutral-800"
    };

    const baseClasses = `
    ${bgColors[variant]} 
    ${variant === 'dark' ? 'border-white dark:border-white' : 'border-black dark:border-white'}
    border-4 
    px-6 py-3 
    font-bold text-lg uppercase tracking-wider
    shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]
    active:translate-x-[3px] active:translate-y-[3px] 
    active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]
    transition-all
    flex items-center justify-center gap-2
    ${className}
  `;

    if (href) {
        return (
            <a href={href} className={baseClasses} {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}>
                {children}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={baseClasses}
            {...props}
        >
            {children}
        </button>
    );
};

export default NeoButton;
