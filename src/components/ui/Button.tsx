import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  download?: boolean;  // New prop added to enable download functionality
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  disabled = false,
  type = 'button',
  download = false
}) => {
  // Base styles
  const baseStyles = 'font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md';
  
  // Size styles
  const sizeStyles = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-2.5',
    lg: 'text-lg px-8 py-3',
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700',
    secondary: 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white dark:from-purple-500 dark:to-purple-600 dark:hover:from-purple-600 dark:hover:to-purple-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-900/20',
  };
  
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  // If `href` is passed, render a link
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonStyles}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        download={download ? true : undefined}  // Conditionally add download attribute
      >
        {children}
      </a>
    );
  }
  
  // Otherwise, render a button
  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
