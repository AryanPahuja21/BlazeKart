import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "./assets/image1.jpg";
import Image2 from "./assets/image1.jpg";
import Image3 from "./assets/image1.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={2000}
      className="z-0"
    >
      <Carousel.Item>
        <img
          src={Image1}
          className="d-block w-[95vw] mx-auto h-auto bg-[#EEEEEE]"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Image2}
          className="d-block w-[95vw] mx-auto h-auto"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Image3}
          className="d-block w-[95vw] mx-auto h-auto"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
