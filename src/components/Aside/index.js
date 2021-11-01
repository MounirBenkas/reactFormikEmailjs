import React from "react";
import "./aside.scss";

const Aside = () => {
  return (
    <div className="fullBg">
      <div>
        <h2 className="text-white">
          Ameliorez l'image de votre entreprise
          <br /> dès aujourd'hui.
        </h2>
        <img src="/img/startup.png" alt="logo" />
      </div>
    </div>
  );
};

export default Aside;
