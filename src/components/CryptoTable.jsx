import React from 'react';
import CryptoRow from './CryptoRow';

const CryptoTable = ({ currentData, toggleFavorite, darkMode }) => {
  return (
    <table className={`min-w-full border-collapse border ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
      <thead>
        <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
          <th className="border border-gray-400 p-4 text-left">Name</th>
          <th className="border border-gray-400 p-4 text-right">Price</th>
          <th className="border border-gray-400 p-4 text-right">24h %</th>
          <th className="border border-gray-400 p-4 text-right">Market Cap</th>
          <th className="border border-gray-400 p-4 text-right">Volume (24h)</th>
          <th className="border border-gray-400 p-4 text-right">Circulating Supply</th>
          <th className="border border-gray-400 p-4 text-right">Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((crypto) => (
          <CryptoRow key={crypto.id} crypto={crypto} toggleFavorite={toggleFavorite} darkMode={darkMode} />
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
