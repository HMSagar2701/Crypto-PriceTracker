import React from 'react';

const Header = () => {
  return (
    <header
      className="p-6 text-center shadow-lg bg-gray-700 text-white transition-colors duration-300" // Dark gray background with white text
    >
      <h1 className="text-3xl font-extrabold tracking-tight">
        Crypto Price Tracker
      </h1>
    </header>
  );
};

export default Header;
