import React, { useEffect } from "react";

import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";


const CarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="car_img" mt-3>
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                <p className="section__description">
                  {singleCarItem.key_features}
                </p>


                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.body_type}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.Transmission_type}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.Mileage}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.Fuel}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.Seating_Capacity}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
              <section>
              <a href={singleCarItem.url} class="btn btn-info" role="button" style={{ color: 'white' }}><b>MORE DETAILS</b></a>
              </section>

            </Col>
          </Row>


  <div class="container">
  <div class="row">
    <div class="col-md-6">
      <h2 class="section__title">Key Specifications of {singleCarItem.carName}</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="row">
            <div class="col-6"><b>Mileage</b></div>
            <div class="col-6 text-end">{singleCarItem.Mileage}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-6"><b>Engine Displacement</b></div>
            <div class="col-6 text-end">{singleCarItem.engine}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-6"><b>Max Power</b></div>
            <div class="col-6 text-end">{singleCarItem.max_power}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-6"><b>Seating Capacity</b></div>
            <div class="col-6 text-end">{singleCarItem.Seating_Capacity}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-6"><b>Fuel Tank Capacity</b></div>
            <div class="col-6 text-end">{singleCarItem.fuel_capacity}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-6"><b>Ground Clearance Unladen</b></div>
            <div class="col-6 text-end">{singleCarItem.ground}</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="col-md-6">
      {/* <!-- Second table container without heading --> */}
      <h2 class="section__title">&nbsp;</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="row">
            <div class="col-6"><b>Fuel Type</b></div>
            <div class="col-6 text-end">{singleCarItem.Fuel}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-6"><b>No. of Cylinders</b></div>
            <div class="col-6 text-end">{singleCarItem.no_of_cylinder}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-6"><b>Max Torque</b></div>
            <div class="col-6 text-end">{singleCarItem.max_torque}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-6"><b>Transmission Type</b></div>
            <div class="col-6 text-end">{singleCarItem.Transmission_type}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-6"><b>Body Type</b></div>
            <div class="col-6 text-end">{singleCarItem.body_type}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>



        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
