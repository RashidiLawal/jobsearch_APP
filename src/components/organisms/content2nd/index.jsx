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
  return (
    <section className="company">
      <div>
        <Image logoImage={logo} logo="codevillage logo" customClasses="" />
        <FirstHeader
          words={company}
          wi="11.625rem"
          ml="2.1rem"
          fz="2rem"
          co="#00717D"
          lh="2.0625rem"
        />
        <Parag
          text={location}
          wi="8.5625rem"
          ml="2.1rem"
          mb="2.125rem"
          mt="2rem"
          ta="left"
          lh="2rem"
          co="#272727"
          fz="1.375rem"
        />
        <Button title="More" customClasses="but" />
      </div>
      <div className="divSecond">
        <FirstHeader
          words={occupation}
          mt=".8rem"
          wi="fit-content"
          fz="2rem"
          fw="500"
          lh="2.0625rem"
          co="#00717D"
        />

        <H2header
          words={description}
          wi="fit-content"
          mt="1.2375rem"
          fw="500"
          fz="1.5rem"
          lh="2.0625rem"
          co="#00717D"
        />

        <Parag
          text={desWord}
          wi="32.89rem"
          lh="2rem"
          fw="400"
          ta="left"
          co="#424242"
          fz="1.375rem"
          ls="0.025rem"
        />

        <H2header
          words={requirement}
          wi="fit-content"
          mt="1.2375rem"
          fw="500"
          fz="1.5rem"
          lh="2.0625rem"
          co="#00717D"
        />
        <Parag
          text={reqWord}
          wi="32.89rem"
          lh="2rem"
          fw="400"
          ta="left"
          co="#424242"
          fz="1.375rem"
          ls="0.025rem"
        />

        <H2header
          words={responsibilty}
          wi="fit-content"
          mt="1.2375rem"
          fw="500"
          fz="1.5rem"
          lh="2.0625rem"
          co="#00717D"
        />
        <Parag
          text={resWord}
          wi="32.89rem"
          lh="2rem"
          fw="400"
          ta="left"
          co="#424242"
          fz="1.375rem"
          ls="0.025rem"
        />
      </div>
    </section>
  );
};

export default Content2;
