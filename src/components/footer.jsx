import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`p-6 text-center transition-colors duration-300 ${
        darkMode ? 'bg-black text-gray-200' : 'bg-gray-700 text-gray-200'
      }`}
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Crypto Price Tracker. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
