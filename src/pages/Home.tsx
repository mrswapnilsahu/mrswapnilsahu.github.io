import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 pt-12 md:pt-32 pb-20 relative z-10 w-full">
            {/* Background Pattern */}
            <div className="fixed inset-0 pointer-events-none opacity-5 -z-10"
                style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
            </div>

            <Hero />

            {/* Bento / Grid Layout for Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="min-h-screen md:min-h-0 flex flex-col justify-center lg:col-span-2">
                    <Skills />
                </div>
                <div className="min-h-screen md:min-h-0 flex flex-col justify-center lg:col-span-1">
                    <About />
                </div>
                <div className="min-h-screen md:min-h-0 flex flex-col justify-center lg:col-span-2">
                    <Projects />
                </div>
                <div className="min-h-screen md:min-h-0 flex flex-col lg:col-span-1">
                    <Experience />
                </div>
                <div className="min-h-screen md:min-h-0 flex flex-col justify-center lg:col-span-3">
                    <Contact />
                </div>
            </div>
        </main>
    );
};

export default Home;