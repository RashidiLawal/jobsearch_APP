import React from 'react'
import SmallImage from '../images/SmallImage';
import './input.scss'

const Inputbutton = ({type, placeholder, style}) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} className="inp"  style={style}/>
    </div>
  );
};

export default Inputbutton