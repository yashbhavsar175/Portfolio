import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import EmailButton from './EmailButton';

const Hero = ({ portfolioData }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{portfolioData.name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">{portfolioData.title}</p>
        <div className="flex justify-center space-x-6">
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300"><Linkedin size={28} /></a>
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300"><Github size={28} /></a>
          <EmailButton email={portfolioData.email} />
        </div>
      </div>
    </section>
  );
};

export default Hero; 