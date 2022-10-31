import React from "react";
import FirstHeader from "../../atoms/header/FirstHeader";
import H2header from "../../atoms/header/H2header";
import Parag from "../../atoms/paragraph/Parag";
import UnorderedList from "../Unordered_list";
import Image from "../../atoms/images/Image";
import Button from "../../atoms/buttons";
import Span from "../../atoms/Span";
import './card.scss'

const Card = ({
  cardTitle,
  locatype,
  employment,
  compromise,
  amount,
  duration,
  company,
  nature,
  loation,
  logo,
  summary,
  sumDes,
  list,
  qualificationDesc,
  icon,
}) => {


const title = {
'font-family': 'Helvetica Neue',
'font-style': 'normal',
'font-weight': '500',
'font-size': '24px',
'line-height': '29px',
width: 'fit-content',
'letter-spacing': '0.5px',
color:' #00717D',
flex: 'none',
order: '0',
'flex-grow': '0',
}


const location = {
  "font-family": "Helvetica Neue",
  "font-style": "normal",
  "font-weight": "400",
  "font-size": "20px",
  "line-height": "24px",
  width: "fit-content",
  display: "flex",
  "align-items": "center",
  "letter-spacing": "0.5px",
  color: "#666666",
  flex: "none",
  order: "0",
  "flex-grow": "0",
};


const companyName = {
'font-family': 'Helvetica Neue',
'font-style': 'normal',
'font-weight': '700',
'font-size': '24px',
'line-height': '29px',
width: "fit-content",
display: 'flex',
'align-items': 'center',
'letter-spacing': '0.5px',

color: '#424242',
}


const profession = {
  "font-family": "Helvetica Neue",
  "font-style": "normal",
  "font-weight": 400,
  "font-size": "20px",
  "line-height": "24px",
  width: "fit-content",
  "letter-spacing": "0.5px",
  color: " #666666",
  display: 'absolute',
  right: '0',
};






  return (
    <section className="Cards_holdder">
      <>
        <section className="card_title">
          <div className="job_title">
            <FirstHeader style={title} words={cardTitle} />
            <H2header words={locatype} style={location} />
            <span className="briefy font-['Helvetica Neue']">
              <H2header words={employment} />
              <H2header words={compromise} />
              <H2header words={amount} />
              <H2header words={duration} />
            </span>
          </div>
          <div className="company_name">
            <FirstHeader words={company} style={companyName} />
            <H2header words={nature} style={profession} />
            <H2header words={loation} style={profession} />
          </div>
        </section>
        <section className="card_body">
          <div className="card_logo">
            <Image logoImage={logo} />
          </div>
          <section className="card_detail">
            <FirstHeader words={summary} />
            <Parag text={sumDes} />
            <section className="summary">
              <div className="requirement">
                <UnorderedList flow={list} />
                <Span wordings={qualificationDesc} />
              </div>
              <span className="shareBut">
                <Image logoImage={icon} />
                <Button title="See more" />
              </span>
            </section>
          </section>
        </section>
      </>
    </section>
  );
};

export default Card;
