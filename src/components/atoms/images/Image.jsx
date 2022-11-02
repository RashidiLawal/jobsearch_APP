import React from "react";
import "./image.scss";

const Image = ({ logoImage, logo, customClasses }) => {
  return (
    <img src={logoImage} alt={logo} className={`${customClasses}`} />
  );
};

export default Image;
