import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import EmailPopup from './EmailPopup';

const EmailButton = ({ email, className = "" }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <button 
        onClick={openPopup}
        className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
        title="Contact Options"
      >
        <Mail size={28} />
      </button>
      
      <EmailPopup 
        email={email} 
        isOpen={isPopupOpen} 
        onClose={closePopup} 
      />
    </>
  );
};

export default EmailButton; 