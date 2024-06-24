import { useState, useEffect } from "react";
import Image1 from "./assets/image1.png";
import Image2 from "./assets/image2.png";
import Image3 from "./assets/image3.png";

function Carousel() {
  const [index, setIndex] = useState(0);

  // Function to handle manual slide selection
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Function to handle auto-play
  const handleAutoPlay = () => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1)); // Adjust the condition based on the number of images
    }, 3000); // Adjust the interval (in milliseconds) based on your preference

    return () => clearInterval(interval); // Clear interval on component unmount
  };

  useEffect(() => {
    handleAutoPlay(); // Start auto-play on component mount
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative w-full bg-black/90 mt-8"
      data-carousel="slide"
    >
      <div className="relative h-48 overflow-hidden md:h-96 lg:h-[500px]">
        {" "}
        {/* Adjusted height to fit content */}
        <div
          className={`duration-700 ease-in-out ${index === 0 ? "" : "hidden"}`}
          data-carousel-item
        >
          <img
            src={Image1}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
            alt="..."
          />
        </div>
        <div
          className={`duration-700 ease-in-out ${index === 1 ? "" : "hidden"}`}
          data-carousel-item
        >
          <img
            src={Image2}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <div
          className={`duration-700 ease-in-out ${index === 2 ? "" : "hidden"}`}
          data-carousel-item
        >
          <img
            src={Image3}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${
            index === 0 ? "bg-white" : "bg-gray-300"
          }`}
          aria-current={index === 0}
          aria-label="Slide 1"
          data-carousel-slide-to="0"
          onClick={() => handleSelect(0)}
        ></button>
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${
            index === 1 ? "bg-white" : "bg-gray-300"
          }`}
          aria-current={index === 1}
          aria-label="Slide 2"
          data-carousel-slide-to="1"
          onClick={() => handleSelect(1)}
        ></button>
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${
            index === 2 ? "bg-white" : "bg-gray-300"
          }`}
          aria-current={index === 2}
          aria-label="Slide 3"
          data-carousel-slide-to="2"
          onClick={() => handleSelect(2)}
        ></button>
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() => handleSelect(index === 0 ? 2 : index - 1)} // Adjusted logic for previous button
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={() => handleSelect(index === 2 ? 0 : index + 1)} // Adjusted logic for next button
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
