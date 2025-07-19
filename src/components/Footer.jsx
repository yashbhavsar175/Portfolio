import React from 'react';

const Footer = ({ portfolioData }) => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 