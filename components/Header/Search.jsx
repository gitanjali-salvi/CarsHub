import React, { useState } from 'react';

const CarSearch = ({ carData }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to perform search and update results
  const handleSearch = (query) => {
    const filteredResults = carData.filter(car =>
      Object.values(car).some(value =>
        String(value).toLowerCase().includes(query.toLowerCase())
      )
    );
    setSearchResults(filteredResults);
  };

  // Event handler for input change
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search cars..."
        value={searchQuery}
        onChange={handleChange}
      />
      <div>
        {searchResults.length === 0 ? (
          <p>No matching cars found.</p>
        ) : (
          searchResults.map(car => (
            <div key={car.carName}>
              <h2>{car.carName}</h2>
              <p>Brand: {car.brand}</p>
              <p>Rating: {car.rating}</p>
              {/* Add more properties as needed */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CarSearch;
