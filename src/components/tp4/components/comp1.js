
import React, { useEffect, useState } from "react";

export default function Comp1() {
  const [img, setImg] = useState();

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        setImg(data[0].url);
      });
  }, []);

  return (
    <div className="card text-center mb-3">
      <div className="card-body">
        <h1 className="card-title">Exemple API return image</h1>
        <img
          src={img}
          className="card-img-top img-fluid rounded"
          style={{ maxWidth: "300px", maxHeight: "300px" }}
          alt="Cat API"
        />
      </div>
    </div>
  );
}
