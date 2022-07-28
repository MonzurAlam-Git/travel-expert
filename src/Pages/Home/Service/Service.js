import { Carousel } from "bootstrap";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, details } = service;
  const navigate = useNavigate();

  const navigateToServiceDetails = (id) => {
    navigate(`/service/${id}`);
    // navigate("/service/" + id);
  };

  return (
    <Card className="mb-5">
      <Card.Img style={{ height: "300px" }} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Button
          onClick={() => {
            navigateToServiceDetails(id);
          }}
          variant="primary"
        >
          Booking
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Service;
