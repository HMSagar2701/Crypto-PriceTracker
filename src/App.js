// src/App.js
import React from 'react';
import './index.css';
import CryptoTracker from './components/CryptoTracker';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <Header />
      <CryptoTracker />
      <Footer />
    </div>
  );
};

export default App;

