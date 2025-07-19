import React from 'react';

const Section = ({ id, title, children, className = '' }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white relative">
        {title}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-purple-500 rounded-full"></span>
      </h2>
      {children}
    </div>
  </section>
);

export default Section; 