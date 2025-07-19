import React from 'react';
import Section from './Section';
import SkillBadge from './SkillBadge';

const Skills = ({ portfolioData }) => {
  return (
    <Section id="skills" title="My Skills">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Languages & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[...portfolioData.skills.languages, ...portfolioData.skills.frameworks].map(skill => <SkillBadge key={skill} skill={skill} />)}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Styling & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[...portfolioData.skills.styling, ...portfolioData.skills.tools].map(skill => <SkillBadge key={skill} skill={skill} />)}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills; 