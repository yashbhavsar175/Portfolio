import React from 'react';
import Section from './Section';
import ExperienceItem from './ExperienceItem';

const Experience = ({ portfolioData }) => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="max-w-3xl mx-auto">
        {portfolioData.experience.map((item, i) => <ExperienceItem key={i} item={item} />)}
      </div>
    </Section>
  );
};

export default Experience; 