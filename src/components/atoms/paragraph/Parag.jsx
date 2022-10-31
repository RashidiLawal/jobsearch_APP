import React from 'react'
import './parag.scss'

const Parag = ({ text, style,}) => {
  return (
    <p className="parag" style={style}>
      {text}
    </p>
  );
};

export default Parag