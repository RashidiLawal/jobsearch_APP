import React from "react";
import Parag from "../../atoms/paragraph/Parag";
import FirstHeader from "../../atoms/header/FirstHeader";
// import { elegants } from "../../../Data/objectData";

const Aside = ({ letters, update, elegant }) => {
  const styler = {
    background: "#00717D",
    border: "1px solid #FFFFFF",
    color: " #FFFFFF",
    "mix-blend-mode": "normal",
    "padding-left": "1.5rem",
    "padding-bottom": "2.375rem",
    width: "fit-content",
  };
  return (
    <aside style={styler}>
      <FirstHeader words={update} />
      <ul>
        <li>{elegant}</li>
      </ul>
    </aside>
  );
};

export default Aside;
