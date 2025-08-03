import React, { useEffect, useState } from "react";
import carData from "../../assets/data/carData"; 
import "./Filter.css";
import { Link } from "react-router-dom";

export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredcarData, setFilteredcarData] = useState(carData);

  const filters = ["Hatchback", "Sedan","SUV","MUV"];
  
  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      const filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filtercarData();
  }, [selectedFilters]);

  const filtercarData = () => {
    if (selectedFilters.length > 0) {
      const tempcarData = carData.filter((carData) => selectedFilters.every(filter => carData.category.includes(filter)));
      setFilteredcarData(tempcarData);
    } else {
      setFilteredcarData(carData);
    }
  };

  return (
    <div>
      <div className="buttons-container-Budget">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${selectedFilters.includes(category) ? "active" : ""}`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="carData-container-Budget">
        {filteredcarData.map((carData, idx) => (
          <div key={`carData-${idx}`} className="carData">
      <h4 class="section__title">{carData.carName}</h4>
  <table>
    <tbody>
      <tr>
        <td>Brand:</td>
        <td> {carData.brand}</td>
      </tr>
      <tr>
        <td>Rating:</td>
        <td>{carData.rating}</td>
      </tr>
      <tr>
        <td>Fuel:</td>
        <td>{carData.Fuel}</td>
      </tr>
      <tr>
        <td>Price:</td>
        <td>{carData.price}</td>
      </tr>
      <tr>
        <td>Mileage:</td>
        <td>{carData.Mileage}</td>
      </tr>
      <tr>
        <td>Seating Capacity:</td>
        <td>{carData.Seating_Capacity}</td>
      </tr>
    </tbody>
  </table>
  <h2 class="section__title">&nbsp;</h2>

  <img src={carData.imgUrl} alt={carData.carName} />
  <p className="category">
    {Array.isArray(carData.category) ? carData.category.join(", ") : ""}
  </p>
  <button>
    <Link to={`/cars/${carData.carName}`}>SEE MORE</Link>
  </button>
</div>
        ))}
      </div>
    </div>
  );
}
