import React from 'react';

const Header = ({ darkMode }) => {
  return (
    <header
      className={`p-6 text-center shadow-lg transition-colors duration-300 ${
        darkMode
          ? 'bg-black text-gray-100'  // Black background for dark mode
          : 'bg-white text-gray-800'   // White background for light mode
      }`}
    >
      <h1 className="text-3xl font-extrabold tracking-tight">
        Crypto Price Tracker
      </h1>
      <p className="mt-2 text-lg font-light">
        Stay updated with the latest cryptocurrency prices
      </p>
    </header>
  );
};

export default Header;
