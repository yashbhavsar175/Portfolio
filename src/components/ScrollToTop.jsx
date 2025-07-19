import React from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = ({ isVisible, scrollToTop }) => {
  if (!isVisible) return null;

  return (
    <button 
      onClick={scrollToTop} 
      className="fixed bottom-5 right-5 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 z-50"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop; 