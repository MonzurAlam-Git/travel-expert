import Carousel from "react-bootstrap/Carousel";
import React from "react";
import banner1 from "../../../../src/images/Rectangle1.png";
import banner2 from "../../../../src/images/Sajek.png";
import banner3 from "../../../../src/images/Sreemongol.png";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="w-50 " src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-25 " src={banner3} alt="First slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-25 " src={banner2} alt="First slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
