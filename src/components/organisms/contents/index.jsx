import React from 'react'
import Button from '../../atoms/buttons';
import Image from '../../atoms/images/Image';
import FirstHeader from '../../atoms/header/FirstHeader';
import Parag from '../../atoms/paragraph/Parag';
import Inputbutton from '../../atoms/imputs/Inputbutton';
import SmallImage from '../../atoms/images/SmallImage';
import './contents.scss'
import Search from '../../molecules/search/Search';



const Contents = () => {
  
  const buttyle = {
    "margin-top": "3rem",
    width: "22.875rem",
    "align-self": "center",
    "font-family": "Poppins",
  };

  const parasty = {
    color: "#00717D",
    "align-self": "center",
    "font-family": "Poppins",
    "font-style": "normal",
    "font-weight": "400",
    "font-size": "1.5rem",
    "line-height": "2rem",
    "letter-spacing": "0.025rem",
    "mix-blend-mode": "normal",
    opacity: "0.8",
    "margin-top": "3.75rem",
  };


  

  return (
    <section className="host">
      <div className="Homelogo">
        <Image logoImage="./pngegg (1) 1.png" logo="logo" />
        <span className="jobwords">
          <FirstHeader words="Jobs for every  GRADUATE" />
        </span>
      </div>
      <div className="leftop">
        <section className="inputhost">
          <section className="both">
            <div className="between">
              <Inputbutton placeholder="Company" type="text" />
            </div>
            <div className="firstsearch">
              <Inputbutton placeholder="Filter" type="text" />
              <SmallImage caret="./Vector.svg" filter="filter" />
            </div>
          </section>
          <Search
            caret="./Icon.png"
            logo="searchIcon"
            placeholder="Search the web"
          />
        </section>
        <Parag
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.   Mi pellentesque eros nec."
          style={parasty}
        />
        <Button title="Sign up" style={buttyle} />
      </div>
    </section>
  );
}

export default Contents