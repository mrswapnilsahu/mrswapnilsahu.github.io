import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission with an API call
    console.log('Form submitted:', formData);
    alert('Message sent! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's discuss your project"
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              I'm currently available for freelance work and full-time positions.
              If you have a project that needs some creative thinking,
              I'd love to help you with it.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                  <a 
                    href="mailto:contact@example.com"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                  <a 
                    href="tel:+11234567890"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none"
                />
              </div>
              
              <Button type="submit" className="w-full flex items-center justify-center gap-2">
                <Send size={16} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;