import React from "react";
import FirstHeader from "../../atoms/header/FirstHeader";
import H2header from "../../atoms/header/H2header";
import Parag from "../../atoms/paragraph/Parag";
import UnorderedList from "../Unordered_list";
import Image from "../../atoms/images/Image";
import Button from "../../atoms/buttons";
import Span from "../../atoms/Span";
import "./card.scss";

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
  return (
    <section className="Cards_holdder">
      <>
        <section className="card_title">
          <div className="job_title">
            <FirstHeader
              words={cardTitle}
              fw="500"
              fz="1.5rem"
              lh="1.8125rem"
              wi="fit-content"
              co="#00717D"
            />
            <H2header
              words={locatype}
              fw="400"
              fz="1.25rem"
              lh="1.5rem"
              wi="fit-content"
              co="#666666"
            />
            <span className="briefy font-['Helvetica Neue']">
              <H2header words={employment} />
              <H2header words={compromise} />
              <H2header words={amount} />
              <H2header words={duration} />
            </span>
          </div>
          <div className="company_name">
            <FirstHeader
              words={company}
              fz="1.5rem"
              fw="700"
              co="#424242"
              lh="1.8125rem"
              wi="fit-cotent"
            />
            <H2header
              words={nature}
              fw="400"
              fz="1.25rem"
              lh="1.5rem"
              wi="fit-content"
              co="#666666"
            />
            <H2header
              words={loation}
              fw="400"
              fz="1.25rem"
              lh="1.5rem"
              wi="fit-content"
              co="#666666"
            />
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
    //  <div className="under"></div>
  );
};

export default Card;
