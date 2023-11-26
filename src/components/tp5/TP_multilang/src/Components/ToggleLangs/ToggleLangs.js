import React, { useContext } from "react";
import FrenchFlag from "../../assets/france.svg";
import SpanishFlag from "../../assets/spain.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";
import PalestineFlag from "../../assets/ps.svg";
import "./ToggleLangs.css";
import { Context } from "../../context/langContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ToggleLangs() {
  const { setLang } = useContext(Context);

  return (
    <div className="container-langs">
      <img
        className="lang-flag img-fluid"
        onClick={() => setLang("FR")}
        src={FrenchFlag}
        alt="French Flag"
      />
      <img
        className="lang-flag img-fluid"
        onClick={() => setLang("EN")}
        src={EnglishFlag}
        alt="English Flag"
      />
      <img
        className="lang-flag img-fluid"
        onClick={() => setLang("ES")}
        src={SpanishFlag}
        alt="Spanish Flag"
      />
      <img
        className="lang-flag img-fluid"
        onClick={() => setLang("PL")}
        src={PalestineFlag}
        alt="Palestine Flag"
      />
    </div>
  );
}
