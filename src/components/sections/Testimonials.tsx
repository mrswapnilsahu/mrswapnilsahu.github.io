import React, { useState } from 'react';
import { testimonials } from '../../utils/data';
import SectionHeading from '../ui/SectionHeading';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Testimonials"
          subtitle="What people say about working with me"
          centered
        />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8 sm:p-10 relative">
            <Quote 
              size={40} 
              className="text-blue-200 dark:text-blue-900 absolute top-6 left-6" 
            />
            
            <div className="relative z-10">
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 italic mb-8">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex 
                      ? 'bg-blue-600 dark:bg-blue-500' 
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;