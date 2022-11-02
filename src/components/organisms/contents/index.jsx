import React from "react";
import Button from "../../atoms/buttons";
import Image from "../../atoms/images/Image";
import FirstHeader from "../../atoms/header/FirstHeader";
import Parag from "../../atoms/paragraph/Parag";
import Inputbutton from "../../atoms/imputs/Inputbutton";
import SmallImage from "../../atoms/images/SmallImage";
import "./contents.scss";
import Search from "../../molecules/search/Search";

const Contents = () => {


  return (
    <section className="host">
      <div className="Homelogoer">
        <Image logoImage="./pngegg (1) 1.png" customClasses="Homelogo" />
        <FirstHeader words="Jobs for every  GRADUATE" />
      </div>
      <div className="leftop">
        <section className="inputhost">
          <section className="both">
              <Inputbutton placeholder="Company" type="text" customClasses="between" />

            <div className="firstsearch">
              <select className="select">
                <option value="Filter">Filter</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Techy">Techy</option>
                <option value="Automobile">Automobile</option>
              </select>
            </div>
          </section>
          <Search />
        </section>
        <Parag
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.   Mi pellentesque eros nec."
          co="#00717D"
          as="center"
          fw="400"
          fz="1.5rem"
          lh="2rem"
          mt="3.75rem"
          wi="30.5rem"
          ls="0.025rem"
        />
        <Button title="Sign up" customClasses="buttyle" />
      </div>
    </section>
  );
};

export default Contents;