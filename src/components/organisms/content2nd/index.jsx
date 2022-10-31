import React from "react";
import Image from "../../atoms/images/Image";
import FirstHeader from "../../atoms/header/FirstHeader";
import Parag from "../../atoms/paragraph/Parag";
import Button from "../../atoms/buttons";
import H2header from "../../atoms/header/H2header";
import "./content2.scss";

const Content2 = ({
  logo,
  company,
  location,
  occupation,
  description,
  desWord,
  requirement,
  reqWord,
  responsibilty,
  resWord,
}) => {
  const logoStyle = {
    width: "19.3125rem",
    "margin-left": "4.7125rem",
    "padding-top": "3.5625rem",
    "margin-bottom": ".5rem",
    "margin-right": "4.853125rem",
  };

  const head = {
    width: "186px",
    "margin-left": "6.3125rem",
    height: "33px",
    "font-family": "Helvetica Neue",
    "font-style": "normal",
    "font-weight": "500",
    "font-size": "32px",
    "line-height": "33px",
    color: "#00717D",
  };

  const text = {
    "font-family": "Poppins",
    "margin-left": "6.3125rem",
    "font-style": "normal",
    "font-weight": "400",
    "font-size": "1.375rem",
    "line-height": "2rem",
    color: "#272727",
    "mix-blend-mode": "normal",
    opacity: "0.6",
    width: "8.5625rem",
    "margin-top": "2rem",
    "margin-bottom": "2.125rem",
    "text-align": "left",
  };

  const but = {
    "margin-left": "6.3125rem",
    width: "16.375rem",
    background: "#00717D",
    "border-radius": "0.3125rem",
  };

  const grafic = {
    "margin-top": ".8rem",
    width: "16.3125rem",
    height: "2.0625rem",
    "font-family": "Helvetica Neue",
    "font-style": "normal",
    "font-weight": "500",
    "font-size": "2rem",
    "line-height": "2.0625rem",
    color: "#00717D",
  };

  const divSecond = {
    "padding-left": "4.853125rem",
    "padding-right": "5.771875rem",
    "padding-top": "4.1875rem",
    "padding-bottom": "4.8125rem",
  };

  const h2header = {
    "margin-top": "1.2375rem",
    width: "fit-content",
    "font-family": "Helvetica Neue",
    "font-style": "normal",
    "font-weight": "500",
    "font-size": "1.5rem",
    "line-height": "2.0625rem",
    color: "#00717D",
  };

  const paraText = {
    width: "fit-content",
    "font-family": "Poppins",
    "font-style": "normal",
    "font-weight": "400",
    "font-size": "22px",
    "line-height": "32px",
    "letter-spacing": "-0.4px",
    color: "#424242",
    "mix-blend-mode": "normal",
    "text-align": "left",
  };

  return (
    <section className="company">
      <div>
        <Image logoImage={logo} logo="codevillage logo" style={logoStyle} />
        <FirstHeader words={company} style={head} />
        <Parag text={location} style={text} />
        <Button title="More" style={but} />
      </div>
      <div style={divSecond}>
        <FirstHeader words={occupation} style={grafic} />

        <H2header words={description} style={h2header} />

        <Parag
          text={
            desWord
          }
          style={paraText}
        />

        <H2header words={requirement} style={h2header} />
        <Parag
          text={
            reqWord
          }
          style={paraText}
        />

        <H2header words={responsibilty} style={h2header} />
        <Parag
          text={
            resWord
          }
          style={paraText}
        />
      </div>
    </section>
  );
};

export default Content2;
