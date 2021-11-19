import React from "react";
import Aside from "../../components/Aside";
import Formulaire from "../../components/Formulaire";

const Contact = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "100vh",
      }}
    >
      <Aside />
      <Formulaire />
    </div>
  );
};

export default Contact;
