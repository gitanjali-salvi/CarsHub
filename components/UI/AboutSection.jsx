import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/audi.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "50px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to CarsHub services</h2>
              <p className="section__description">
              Simplify your car buying experience with our expert car filtering service. 
              From selecting the ebst cars in each category to covering up all specifications required to find THE BEST CAR, we handle every step of the process. Say goodbye to paperwork headaches and hello to your dream car!
              </p>

              <table className="about__section-table">
  <tbody>
    <tr>
      <td>
        <div className="about__section-item d-flex align-items-center">
          <p className="section__description d-flex align-items-center gap-2">
            <i className="ri-checkbox-circle-line"></i> Cars Sorting                  
          </p>
        </div>
      </td>
      <td>
        <div className="about__section-item d-flex align-items-center">
          <p className="section__description d-flex align-items-center gap-2">
            <i className="ri-checkbox-circle-line"></i> Detailed Car Information
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="about__section-item d-flex align-items-center">
          <p className="section__description d-flex align-items-center gap-2">
            <i className="ri-checkbox-circle-line"></i> Filters for each Specification
          </p>
        </div>
      </td>
      <td>
        <div className="about__section-item d-flex align-items-center">
          <p className="section__description d-flex align-items-center gap-2">
            <i className="ri-checkbox-circle-line"></i> Articles and Updates
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
