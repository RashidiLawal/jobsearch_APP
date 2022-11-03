import React from "react";

const H2header = ({
  words,
  wi,
  ds,
  as,
  ta,
  fw,
  fz,
  lh,
  ls,
  co,
  mt,
  ml,
  mb,
}) => {
  const styler = {
    width: wi,
    display: ds,
    alignSelf: as,
    textAlign: ta,
    fontFamily: "Helvetica Neue",
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
  };

  return <h2 style={styler}>{words}</h2>;
};

export default H2header;
