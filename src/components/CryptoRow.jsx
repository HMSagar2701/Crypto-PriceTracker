import React from 'react';

const CryptoRow = ({ crypto, toggleFavorite, darkMode }) => {
  return (
    <tr
      key={crypto.id}
      className={`hover:bg-gray-200 transition duration-300 cursor-pointer ${
        darkMode ? 'hover:bg-gray-600' : ''
      }`}
    >
      <td className="border border-gray-400 p-4">
        <div className="flex items-center">
          <button onClick={() => toggleFavorite(crypto.id)} className="mr-2">
            {crypto.isFavorite ? '★' : '☆'}
          </button>
          <img src={crypto.image} alt={crypto.name} className="w-6 h-6 mr-2" />
          <span className="font-medium">{crypto.name}</span>
        </div>
      </td>
      <td
        className={`border border-gray-400 p-4 text-right ${
          darkMode ? 'bg-gray-800' : ''
        }`}
      >
        {/* Fallback to 'USD' if crypto.currency is undefined */}
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: (crypto.currency || 'USD').toUpperCase(),
        }).format(crypto.current_price || 0)}
      </td>
      <td
        className={`border border-gray-400 p-4 text-right ${
          darkMode ? 'bg-gray-800' : ''
        } ${crypto.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-600'}`}
      >
        {crypto.price_change_percentage_24h !== undefined &&
        crypto.price_change_percentage_24h !== null
          ? crypto.price_change_percentage_24h.toFixed(2) + '%'
          : 'N/A'}
      </td>
      <td
        className={`border border-gray-400 p-4 text-right ${
          darkMode ? 'bg-gray-800' : ''
        }`}
      >
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: (crypto.currency || 'USD').toUpperCase(),
        }).format(crypto.market_cap || 0)}
      </td>
      <td
        className={`border border-gray-400 p-4 text-right ${
          darkMode ? 'bg-gray-800' : ''
        }`}
      >
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: (crypto.currency || 'USD').toUpperCase(),
        }).format(crypto.total_volume || 0)}
      </td>
      <td
        className={`border border-gray-400 p-4 text-right ${
          darkMode ? 'bg-gray-800' : ''
        }`}
      >
        {new Intl.NumberFormat('en-US', {
          maximumFractionDigits: 2,
        }).format(crypto.circulating_supply || 0) +
          ' ' +
          (crypto.symbol || '').toUpperCase()}
      </td>
      <td
        className={`border border-gray-400 p-4 text-right ${
          darkMode ? 'bg-gray-800' : ''
        }`}
      >
        {crypto.last_updated
          ? new Date(crypto.last_updated).toLocaleString()
          : 'N/A'}
      </td>
    </tr>
  );
};

export default CryptoRow;
