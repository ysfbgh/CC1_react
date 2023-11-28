// Slider.js
import React, { useState } from "react";
import "./Slider.css";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";

export default function Slider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % dataSlider.length);
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + dataSlider.length) % dataSlider.length
    );
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, i) => (
        <div key={obj.id} className={`slide ${i === index ? "active" : ""}`}>
          <h1 className="ysf">{index + 1}</h1>
          <img src={obj.imagePath} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
    </div>
  );
}
