import React from "react";

const Parag = ({
  text,
  wi,
  ds,
  as,
  ta,
  fw,
  fz,
  lh,
  co,
  mt,
  ml,
  mb,
  mr,
  ls,
}) => {
  const styler = {
    width: wi,
    display: ds,
    alignSelf: as,
    textAlign: ta,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: fw,
    fontSize: fz,
    lineHeight: lh,
    letterSpacing: ls,
    color: co,
    mixBlendMode: "normal",
    opacity: "0.8",
    marginTop: mt,
    marginLeft: ml,
    marginBottom: mb,
    marginRight: mr,
  };
  return (
    <p className="parag" style={styler}>
      {text}
    </p>
  );
};

export default Parag;
