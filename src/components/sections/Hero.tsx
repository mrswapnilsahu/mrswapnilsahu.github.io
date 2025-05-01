import React from "react";
import Button from "../ui/Button";
import { ArrowDown, Github as GitHub, Linkedin, FileDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="order-2 md:order-1 animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 relative">
                Code That Drives Real-World Impact
                <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200/50 dark:bg-blue-900/50 -z-10 transform -rotate-1"></span>
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
              From concept to deployment—building web products that are
              scalable, usable, and aligned with business goals.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Button href="#projects" size="lg" className="group">
                View My Work
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Button>
              <Button
                href="/resume-swapnil-sahu.pdf"
                download
                variant="outline"
                size="lg"
                className="group"
              >
                Grab My Resume
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/swapnilsahu27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/swapnilsahu27/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl transform hover:rotate-6 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Swapnil Sahu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a
            href="#about"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
