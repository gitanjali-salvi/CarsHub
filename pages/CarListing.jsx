import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  const [sortBy, setSortBy] = useState("");

  const handleSortChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);

    // Redirect to the appropriate URL based on the selected option
    switch (selectedSortBy) {
      case "Budget":
        window.location.href = "/cars/Budget";
        break;
      case "FuelType":
        window.location.href = "/cars/FuelType";
        break;
      case "BodyType":
        window.location.href = "/cars/BodyType";
        break;
      case "SeatingCapacity":
        window.location.href = "/cars/SeatingCapacity";
        break;
      case "Transmission":
        window.location.href = "/cars/Transmission";
        break;
      default:
        // Handle default case
        break;
    }
  };

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i>Sort By 
                </span>

                <select value={sortBy} onChange={handleSortChange}>
                  <option value="">Select</option>
                  <option value="Budget">Budget</option>
                  <option value="FuelType">Fuel Type</option>
                  <option value="BodyType">Body Type</option>
                  <option value="SeatingCapacity">Seating Capacity</option>
                  <option value="Transmission">Transmission</option>
                </select>
              </div>
            </Col>
            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
