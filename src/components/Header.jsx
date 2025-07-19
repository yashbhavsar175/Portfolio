import React from 'react';
import { Code, Server } from 'lucide-react';

const Header = ({ isMenuOpen, setIsMenuOpen, navLinks, portfolioData }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white tracking-wider">{portfolioData.name}</a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-purple-400 transition-colors duration-300">{link}</a>
          ))}
        </nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50">
          {isMenuOpen ? <Code className="w-6 h-6 text-white" /> : <Server className="w-6 h-6 text-white" />}
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-gray-900/95 z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-2xl text-gray-300 hover:text-purple-400 transition-colors duration-300">{link}</a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header; 