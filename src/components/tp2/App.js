
import React from "react";
import ImageSlider from "./components/ImageSlider";
import image1 from "./components/6512eb15010a6.jpeg";
import image2 from "./components/skysports-khabib-nurmagomedov_5116546.jpg";
import image3 from "./components/16771948460814.jpg";

const slides = [
  { URL: image1, title: "jon jhones" },
  { URL: image2, title: "conor" },
  { URL: image3, title: "khamzat" },
];

const containerStyles = {
  width: "550px",
  height: "450px",
  margin: "0 auto",
};

const bodyStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const h1Styles = {
  color: "var(--slider_text_color)",
  textAlign: "center",
};

const App2 = () => {
  return (
    <div style={{ ...bodyStyles }}>
      <h1 style={{ ...h1Styles }}>Slider</h1>
      <div style={{ ...containerStyles }}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App2;
