import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="carousel__image"
          src="https://m.media-amazon.com/images/I/41o3odPQPVL._SX1500_.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel__image"
          src="https://m.media-amazon.com/images/I/71V0n5n9XQL._SX3000_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel__image"
          src="https://m.media-amazon.com/images/I/71sx3L4LiAL._SX3000_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
