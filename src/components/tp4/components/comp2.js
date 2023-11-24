
import React, { useEffect, useState } from "react";

export default function Comp2() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch("https://archive.org/metadata/TheAdventuresOfTomSawyer_201303")
      .then((response) => response.json())
      .then((data) => {
        setArr(data.files);
      });
  }, []);

  return (
    <div className="card text-center mb-3">
      <div className="card-body">
        <h1 className="card-title">API Return Array</h1>
        <ul className="list-group">
          {arr.map((f, index) => (
            <li key={index} className="list-group-item">
              Name: {f.name} --- Format: {f.format}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
