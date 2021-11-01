import React from "react";
import Aside from "./components/Aside";
import Formulaire from "./components/Formulaire";
import "./app.scss";

const App = () => {
  return (
    <div className="grid">
      <Aside />
      <Formulaire />
    </div>
  );
};

export default App;
