import React from 'react';

const SkillBadge = ({ skill }) => (
  <div className="bg-gray-700/50 text-purple-300 py-2 px-4 rounded-lg text-sm font-medium transform hover:scale-105 transition-transform duration-300">
    {skill}
  </div>
);

export default SkillBadge; 