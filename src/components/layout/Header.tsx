import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`
        fixed w-full top-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-4' 
          : 'bg-transparent py-6'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold text-blue-600 dark:text-blue-500"
          >
            Swapnil <span className="text-gray-900 dark:text-white">Sahu</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500
                  font-medium transition-colors
                "
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </nav>

          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="text-gray-700 dark:text-gray-300 mr-4"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              onClick={handleMobileMenuToggle}
              aria-label="Toggle menu"
              className="text-gray-700 dark:text-gray-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500
                    font-medium py-2 transition-colors
                  "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;