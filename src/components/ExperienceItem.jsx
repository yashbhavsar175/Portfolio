import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceItem = ({ item }) => (
  <div className="relative pl-8 md:pl-12 py-4 border-l-2 border-gray-700">
    <div className="absolute -left-4 top-4 w-8 h-8 bg-gray-800 rounded-full border-4 border-purple-500 flex items-center justify-center">
      <Briefcase className="w-4 h-4 text-purple-400" />
    </div>
    <p className="text-sm text-purple-400 mb-1">{item.duration}</p>
    <h3 className="text-xl font-bold text-white">{item.role}</h3>
    <p className="text-gray-400 font-medium mb-3">{item.company} - {item.location}</p>
    <ul className="list-disc list-inside text-gray-400 space-y-1">
      {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
    </ul>
  </div>
);

export default ExperienceItem; 