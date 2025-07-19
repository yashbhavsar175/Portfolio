import React from 'react';

const ProjectCard = ({ project }) => (
  <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
    <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((t, i) => (
        <span key={i} className="bg-purple-900/50 text-purple-300 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>
      ))}
    </div>
  </div>
);

export default ProjectCard; 