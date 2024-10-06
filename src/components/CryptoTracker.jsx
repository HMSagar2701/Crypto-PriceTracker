import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PriceChart from './PriceChart';
import SearchAndFilter from './SearchAndFilter';
import CryptoTable from './CryptoTable';
import Pagination from './Pagination';

const CryptoTracker = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currency, setCurrency] = useState('usd');
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('market_cap');
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  // Fetch cryptocurrency data
  const fetchCryptoData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: currency,
          order: 'market_cap_desc',
          per_page: 250,
          page: 1,
          sparkline: false,
        },
      });
      setCryptoData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, [currency]);

  // Filter and sort data
  const filteredData = cryptoData.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === 'price') return b.current_price - a.current_price;
    if (sortBy === 'market_cap') return b.market_cap - a.market_cap;
    return b.price_change_percentage_24h - a.price_change_percentage_24h;
  });

  // Toggle favorite status
  const toggleFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const currentData = sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Loading state
  if (loading) {
    return <div className="text-center text-xl font-bold">Loading...</div>;
  }

  return (
    <div className={`container mx-auto p-6 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'} rounded-lg shadow-lg transition-colors duration-300`}>
      <SearchAndFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        currency={currency}
        setCurrency={setCurrency}
        sortBy={sortBy}
        setSortBy={setSortBy}
        fetchCryptoData={fetchCryptoData}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <CryptoTable currentData={currentData} toggleFavorite={toggleFavorite} darkMode={darkMode} />

      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        setCurrentPage={setCurrentPage} 
        darkMode={darkMode} 
      />

      {selectedCrypto && <PriceChart coinId={selectedCrypto} />}
    </div>
  );
};

export default CryptoTracker;
