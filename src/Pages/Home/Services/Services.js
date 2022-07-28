import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="container mt-5">
      <h4 className="fw-bold">Services</h4>
      <Row>
        {services.map((service) => (
          <Col xs={12} sm={12} md={6} lg={4}>
            <Service key={service.id} service={service}></Service>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
