// App.js

import React from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import App1 from "./components/tp1/App";
import App3 from "./components/tp3/App";
import App4 from "./components/tp4/App";
import App5 from "./components/tp5/TP_multilang/src/App";
import Slider from "./components/Slider/src/Slider";
import "./App.css";

const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/App5" element={<App5 />} />
        <Route path="/App1" element={<App1 />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/App3" element={<App3 />} />
        <Route path="/App4" element={<App4 />} />
      </Routes>
    </div>
  );
};

export default App;
