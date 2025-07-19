import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';

const Projects = ({ portfolioData }) => {
  return (
    <Section id="projects" title="My Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, i) => <ProjectCard key={i} project={project} />)}
      </div>
    </Section>
  );
};

export default Projects; 