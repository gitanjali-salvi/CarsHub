import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl, carName, Transmission_type, Mileage, price, Fuel } = props.item;

  return (
    <Col lg="3" md="6" sm="6" className="mb-4">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="car__img" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-">
            <b>{price} </b>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-2">
            <span className="d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {Fuel}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {Transmission_type}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {Mileage}
            </span>
          </div>
          
          <button className="w-100 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}><b>SEE MORE</b></Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
