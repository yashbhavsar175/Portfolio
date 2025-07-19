import React, { useState } from 'react';
import { Mail, Copy, Check, X, ExternalLink } from 'lucide-react';

const EmailPopup = ({ email, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 1500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const openGmail = () => {
    const subject = encodeURIComponent('Hello from Portfolio');
    const body = encodeURIComponent('Hi Yash, I saw your portfolio and would like to connect!');
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-2xl max-w-sm w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">Contact Me</h3>
          <p className="text-gray-400 text-sm">Choose how you'd like to reach out</p>
        </div>

        {/* Email Display */}
        <div className="bg-gray-700/50 rounded-lg p-3 mb-6">
          <p className="text-purple-300 font-mono text-center">{email}</p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {/* Gmail Option */}
          <button
            onClick={openGmail}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            <span>Open Gmail</span>
            <ExternalLink size={16} />
          </button>

          {/* Copy Option */}
          <button
            onClick={copyToClipboard}
            className="w-full bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check size={20} className="text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={20} />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Cancel Button */}
        <button
          onClick={onClose}
          className="w-full mt-4 text-gray-400 hover:text-white transition-colors text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EmailPopup; 