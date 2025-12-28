import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { about } from '../../utils/data';
import { useTheme } from '../../context/ThemeContext';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isHidden, setIsHidden] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    // Scroll Logic to hide navbar on mobile when at the top (Hero section)
    const handleScroll = () => {
      // Calculate isHidden based on scroll position regardless of viewport.
      // We will control the actual visibility using responsive CSS classes.
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        // If rect.bottom > 100, we are mostly in hero.
        if (rect.bottom > 100) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    scrollTo(href);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`block fixed top-0 left-0 right-0 z-50 px-3 py-4 sm:p-6 pointer-events-none transition-transform duration-300 w-full max-w-[100vw] overflow-x-hidden ${isHidden && !mobileMenuOpen ? '-translate-y-full md:translate-y-0' : 'translate-y-0'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto w-full">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="bg-white dark:bg-black border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] p-2 font-black text-base md:text-2xl tracking-tighter transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer block text-black dark:text-white no-underline shrink-0"
          >
            {about.name.toUpperCase()}
          </a>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex gap-4 items-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="bg-white dark:bg-black dark:text-white border-4 border-black dark:border-white px-6 py-2 font-bold hover:bg-neo-yellow dark:hover:bg-neo-yellow dark:hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-y-1 active:shadow-none transition-all"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="bg-white dark:bg-black text-black dark:text-white border-4 border-black dark:border-white p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-y-1 active:shadow-none transition-all"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>

          {/* Mobile Menu Toggle & Actions */}
          <div className="md:hidden pointer-events-auto flex gap-2 shrink-0">
            <div className={`flex gap-2 transition-opacity duration-200 ${mobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="bg-white dark:bg-black text-black dark:text-white border-4 border-black dark:border-white p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:translate-y-1 active:shadow-none transition-all"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                className="bg-white dark:bg-black text-black dark:text-white border-4 border-black dark:border-white p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:translate-y-1 active:shadow-none transition-all"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Portal */}
      {mobileMenuOpen && ReactDOM.createPortal(
        <div className="md:hidden fixed inset-0 z-[100] bg-white dark:bg-black flex flex-col p-6 pointer-events-auto overflow-y-auto w-full h-full">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile menu"
              className="bg-white dark:bg-black text-black dark:text-white border-4 border-black dark:border-white p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-y-1 active:shadow-none transition-all"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-6 w-full">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="bg-white dark:bg-black dark:text-white border-4 border-black dark:border-white px-6 py-4 font-black text-2xl hover:bg-neo-yellow dark:hover:bg-neo-yellow dark:hover:text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] active:translate-y-1 active:shadow-none transition-all w-full max-w-sm text-center uppercase"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 font-bold underline dark:text-white"
            >
              Close Menu
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Header;