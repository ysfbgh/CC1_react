
import React, { useState } from "react";

export default function Task({ txt, onDelete }) {
  const [style, setStyle] = useState("btn-success");
  const [input, setInput] = useState("Modifier");
  const [readonly, setReadOnly] = useState(true);
  const [txt1, setTxt1] = useState(txt);

  const handleModify = () => {
    if (style === "btn-success") {
      setInput("Submit");
      setStyle("btn-warning");
      setReadOnly(false);
      setTxt1(txt);
    } else {
      setInput("Modifier");
      setStyle("btn-success");
      setReadOnly(true);
    }
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        value={txt1}
        className="form-control"
        readOnly={readonly}
        onChange={(e) => setTxt1(e.target.value)}
      />
      <button type="button" onClick={onDelete} className="btn btn-danger mx-2 mt-3">
        Supprimer
      </button>
      <button type="button" onClick={handleModify} className={`btn ${style} mt-3` } >
        {input}
      </button>
    </div>
  );
}
