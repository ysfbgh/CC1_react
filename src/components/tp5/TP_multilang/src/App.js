import React from "react";
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext";

function App5() {
  return (
    <ContextProvider>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 ">
            <ToggleLangs />
            <Contenu />
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App5;
