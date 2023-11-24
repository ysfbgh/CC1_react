import React from "react";
import Comp1 from "./components/comp1";
import Comp2 from "./components/comp2";
import Api from "./components/axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App4() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <Comp1 />
        </div>
        <div className="col-md-4">
          <Comp2 />
        </div>
        <div className="col-md-4">
          <Api />
        </div>
      </div>
    </div>
  );
}
