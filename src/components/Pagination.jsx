import React from 'react';

const Pagination = ({ currentPage, totalPages, setCurrentPage, darkMode }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center mt-4">
      <button
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className={`p-2 border rounded ${darkMode ? 'border-gray-600 bg-gray-800 text-gray-200' : 'border-gray-400 bg-white text-gray-800'}`}
      >
        Previous
      </button>
      <span className="mx-4 my-auto">Page {currentPage} of {totalPages}</span>
      <button
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={`p-2 border rounded ${darkMode ? 'border-gray-600 bg-gray-800 text-gray-200' : 'border-gray-400 bg-white text-gray-800'}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
