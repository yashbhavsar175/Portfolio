import React, { useState } from 'react';
import Section from './Section';
import EmailPopup from './EmailPopup';

const Contact = ({ portfolioData }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <Section id="contact" title="Get In Touch">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-gray-400 mb-8">
            I'm currently seeking new opportunities. If you have a project in mind or just want to connect, feel free to send me an email.
          </p>
          <button 
            onClick={openPopup}
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-purple-500/30"
          >
            Say Hello
          </button>
        </div>
      </Section>

      <EmailPopup 
        email={portfolioData.email} 
        isOpen={isPopupOpen} 
        onClose={closePopup} 
      />
    </>
  );
};

export default Contact; 