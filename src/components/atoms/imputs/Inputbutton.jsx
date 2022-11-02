import React from 'react'
import SmallImage from '../images/SmallImage';
import './input.scss'

const Inputbutton = ({type, placeholder, customClasses}) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} className={`${customClasses}`} />
    </div>
  );
};

export default Inputbutton