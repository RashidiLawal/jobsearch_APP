import React from 'react'
import './Button.scss'

const Button = ({title, outline, customClasses, ...props}) => {
  return (
    <button
      className={`Button ${outline ? "outline" : ""} ${customClasses}`}
      {...props}
    >
      {title}
    </button>
  );
}

export default Button;