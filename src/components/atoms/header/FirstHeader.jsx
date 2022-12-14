import React from "react";

const FirstHeader = ({ words, ml, mt, wi, fw, fz, lh, tt, co, pt, pb }) => {
  const styler = {
    marginLeft: ml,
    marginTop: mt,
    width: wi,
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: fw,
    fontSize: fz,
    lineHeight: lh,
    letterSpacing: "0.0625rem",
    textTransform: tt,
    color: co,
    "mix-blend-mode": "normal",
    paddingTop: pt,
    paddingBottpm: pb,
  };
  return <h1 style={styler}>{words}</h1>;
};

export default FirstHeader;
