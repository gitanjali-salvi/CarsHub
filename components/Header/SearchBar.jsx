import React, { useState } from "react";
import { Dropdown } from 'react-bootstrap';

const SearchBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    handleSearch(event.target.value);
  };

  const handleDropdownSelect = (value) => {
    setSearchQuery(value);
    handleSearch(value);
  };

  // Sample car parameters for dropdown suggestions
  const carParameters = [
    "brand",
    "rating",
    "carName",
    "Mileage",
    "price",
    "Fuel",
    "Seating_Capacity",
    "Transmission_type",
    "no_of_cylinder",
    "body_type",
    // Add more parameters as needed
  ];

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-search">
          <i className="ri-search-line"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {carParameters.map((parameter, index) => (
            <Dropdown.Item
              key={index}
              onSelect={() => handleDropdownSelect(parameter)}
            >
              {parameter}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div className="search__box">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <span>
          <i className="ri-search-line"></i>
        </span>
      </div>
    </>
  );
};

export default SearchBar;
