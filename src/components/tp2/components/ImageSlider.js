import React, { useState } from "react";
import "./ImageSlider.css"; 

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundImage: `url(${slides[currentIndex].URL})`,
  };

  return (
    <div className="slider-container">
      <div className="arrow left-arrow" onClick={goToPrevious}>
        ❰
      </div>
      <div className="arrow right-arrow" onClick={goToNext}>
        ❱
      </div>
      <div className="slide" style={slideStylesWidthBackground}></div>
      <div className="dots-container">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`dot ${slideIndex === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
