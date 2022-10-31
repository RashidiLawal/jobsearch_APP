import React from 'react'
import './image.scss'

const Image = ({logoImage, logo, style}) => {
  return (
    <span>
      <img src={logoImage} alt={logo} style={style}/>
    </span>
  );
}

export default Image