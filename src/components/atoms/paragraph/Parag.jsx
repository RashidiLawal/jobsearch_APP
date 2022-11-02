import React from "react";
import "./parag.scss";

const Parag = ({ text, wi, ds, as, ta, fw, fz, lh, co }) => {
  const styler = {
    width: wi,
    display: ds,
    alignSelf: as,
    textAlign: ta,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSeight: fw,
    fontSize: fz,
    lineHeight: lh,
    letterSpacing: "-0.025rem",
    color: co,
    mixBlendMode: "normal",
    opacity: "0.8",
  };
  return (
    <p className="parag" style={styler}>
      {text}
    </p>
  );
};

export default Parag;
