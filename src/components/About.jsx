import React from 'react';
import { GraduationCap } from 'lucide-react';
import Section from './Section';
import ResumeButton from './ResumeButton';

const About = ({ portfolioData }) => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-400 mb-8">{portfolioData.profile}</p>
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <GraduationCap className="w-12 h-12 text-purple-400" />
          <div>
            <h3 className="text-xl font-bold text-white">{portfolioData.education.degree}</h3>
            <p className="text-gray-400">{portfolioData.education.university}</p>
            <p className="text-sm text-purple-400">{portfolioData.education.duration}</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <ResumeButton className="text-lg py-3 px-6" />
        </div>
      </div>
    </Section>
  );
};

export default About; 