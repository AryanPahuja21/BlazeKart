import React, { useEffect, useState } from "react";

const ScratchCard = () => {
  const [prizeValue, setPrizeValue] = useState("$10"); // Default value

  useEffect(() => {
    const canvasElement = document.getElementById("scratch");
    const canvasContext = canvasElement.getContext("2d");

    const initializeCanvas = () => {
      const gradient = canvasContext.createLinearGradient(0, 0, 135, 135);
      gradient.addColorStop(0, "#d63031");
      gradient.addColorStop(1, "#fdcb6e");
      canvasContext.fillStyle = gradient;
      canvasContext.fillRect(0, 0, 500, 500);

      const prizeOptions = ["HAPPY HOURS", "DIWALI DHAMAKA"];
      const randomPrize =
        prizeOptions[Math.floor(Math.random() * prizeOptions.length)];
      setPrizeValue(randomPrize);
    };

    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;

    const eventTypes = {
      mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
      },
      touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
      },
    };

    let deviceType = "";

    const checkIfTouchDevice = () => {
      try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
      } catch (e) {
        deviceType = "mouse";
        return false;
      }
    };

    const getMouseCoordinates = (event) => {
      mouseX =
        (!checkIfTouchDevice() ? event.pageX : event.touches[0].pageX) -
        canvasElement.getBoundingClientRect().left;
      mouseY =
        (!checkIfTouchDevice() ? event.pageY : event.touches[0].pageY) -
        canvasElement.getBoundingClientRect().top;
    };

    checkIfTouchDevice();

    canvasElement.addEventListener(eventTypes[deviceType].down, (event) => {
      isDragging = true;
      getMouseCoordinates(event);
      scratch(mouseX, mouseY);
    });

    canvasElement.addEventListener(eventTypes[deviceType].move, (event) => {
      if (!checkIfTouchDevice()) {
        event.preventDefault();
      }
      if (isDragging) {
        getMouseCoordinates(event);
        scratch(mouseX, mouseY);
      }
    });

    canvasElement.addEventListener(eventTypes[deviceType].up, () => {
      isDragging = false;
    });

    canvasElement.addEventListener("mouseleave", () => {
      isDragging = false;
    });

    const scratch = (x, y) => {
      canvasContext.globalCompositeOperation = "destination-out";
      canvasContext.beginPath();
      canvasContext.arc(x, y, 12, 0, 2 * Math.PI);
      canvasContext.fill();
    };

    initializeCanvas();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="base absolute z-0">
        <h4 className="font-bold text-blue-500 relative">
          You won a coupon code of flat 10% discount on your order
          <p className="w-fit mx-auto text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-700">
            "{prizeValue}"
          </p>
        </h4>
      </div>
      <canvas
        id="scratch"
        width="500"
        height="400"
        style={{
          cursor:
            'url("https://media.geeksforgeeks.org/wp-content/uploads/20231030101751/bx-eraser-icon.png"), auto',
        }}
        className="z-10"
      ></canvas>
    </div>
  );
};

export default ScratchCard;
