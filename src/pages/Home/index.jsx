import React, { Children } from "react";
import Layout from "../../components/templates";
import Contents from "../../components/organisms/contents";
import Parag from "../../components/atoms/paragraph/Parag";
import FirstHeader from "../../components/atoms/header/FirstHeader";
import Button from "../../components/atoms/buttons";
import "./home.scss";
import { recentJobs } from "../../Data/objectData";
import Content2 from "../../components/organisms/content2nd";

const Home = () => {
  const buta = {
    display: "grid",
    "align-self": "center",
    width: "314.4px",
    color: "#00717D",
    background: "#FFFFFF",
    border: "1px solid #00717D",
    borderRadius: "5px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "30px",
    textAlign: "center",
    marginTop: "4.75rem",
    marginBottom: "8.5rem",
  };

  return (
    <Layout
      children={
        <section className="middlecontents">
          <Contents />
          <Parag
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec"
            wi="70.5rem"
            ds="flex"
            as="center"
            ta="left"
            fw="400"
            fz="1.5rem"
            lh="2.25rem"
            co="#00717D"
          />
          <FirstHeader
            words="Recently Posted Jobs"
            ml="22.875rem"
            mt="3.9375rem"
            wi="25.9375rem"
            fw="500"
            fz="2rem"
            lh="2.4375rem"
            tt="uppercase"
            co="#424242"
          />
          {recentJobs.map((recentJob, index) => (
            <Content2 key={index} {...recentJob} />
          ))}
          <Button title="More Updates" style={buta} />
        </section>
      }
    />
  );
};

export default Home;
