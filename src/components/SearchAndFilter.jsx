import React from 'react';

const SearchAndFilter = ({ searchTerm, setSearchTerm, currency, setCurrency, sortBy, setSortBy, fetchCryptoData }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center mb-4">
      <input
        type="text"
        placeholder="Search Cryptocurrency..."
        className="p-2 border rounded w-full md:w-1/2 focus:outline-none border-gray-400 bg-white text-gray-800 focus:ring focus:ring-blue-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex items-center md:ml-4 mt-2 md:mt-0">
        <select
          className="p-2 border rounded mr-2 border-gray-400 bg-white text-gray-800 focus:outline-none"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
          <option value="inr">INR</option>
        </select>

        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded mr-2 border-gray-400 bg-white text-gray-800 focus:outline-none"
        >
          <option value="market_cap">Sort by Market Cap</option>
          <option value="price">Sort by Price</option>
          <option value="change">Sort by 24h Change</option>
        </select>

        <button
          onClick={fetchCryptoData}
          className="p-2 border rounded border-gray-400 bg-white text-gray-800"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default SearchAndFilter;
