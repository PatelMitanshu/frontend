import React, { useEffect, useState } from 'react';

import "./slider.css";
var slider1 = require('./assets/farming.jpg');
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3; // Total number of slides

  // Function to update the slider position
  const updateSlider = (index) => {
    const slides = document.querySelector('.slides');
    if (slides) {
      const offset = -index * 100; // Calculate offset for transform
      slides.style.transform = `translateX(${offset}%)`;
    }
  };

  // Function to show the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Function to show the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Update the slider when the index changes
  useEffect(() => {
    updateSlider(currentIndex);
  }, [currentIndex]);

  return (
    <div className="slider">
      <div className="slides">
        <img
          src={slider1}
          alt="Slide 1"
          className="slide"
        />
        <img
          src="https://via.placeholder.com/1920x600/7fffd4/333"
          alt="Slide 2"
          className="slide"
        />
        <img
          src="https://via.placeholder.com/1920x600/ffd700/333"
          alt="Slide 3"
          className="slide"
        />
      </div>
      <div className="arrow left-arrow" onClick={prevSlide}>
        &#10094;
      </div>
      <div className="arrow right-arrow" onClick={nextSlide}>
        &#10095;
      </div>
    </div>
  );
};

export default Slider;
