import React from 'react';
import { Download, FileText } from 'lucide-react';

const ResumeButton = ({ className = "" }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Yashbhavsar.pdf';
    link.download = 'Yash_Bhavsar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:scale-105 transform transition-all duration-300 shadow-lg ${className}`}
      title="Download Resume"
    >
      <FileText size={20} />
      <span>Download Resume</span>
      <Download size={16} />
    </button>
  );
};

export default ResumeButton; 