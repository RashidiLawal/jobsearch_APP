import React, { Children } from 'react'
import Layout from '../../components/templates'
import Contents from '../../components/organisms/contents';
import Parag from '../../components/atoms/paragraph/Parag';
import FirstHeader from '../../components/atoms/header/FirstHeader';
import Button from '../../components/atoms/buttons';
import './home.scss'
import { recentJobs } from '../../Data/objectData';
import Content2 from '../../components/organisms/content2nd';


const Home = () => {

  const style = {
    width: "70.5rem",
    display: "flex",
    "align-self": "center",
    "text-align": "left",
    "font-family": "Poppins",
    "font-style": "normal",
    "font-weight": "400",
    "font-size": "1.5rem",
    "line-height": "2.25rem",
    "letter-spacing": "-0.025rem",
    color: "#00717D",
    "mix-blend-mode": "normal",
    opacity: "0.8",
  };


  const jobPost = {
    'margin-left': '22.875rem',
    'margin-top':'3.9375rem',
     width: "25.9375rem",
    "font-family": "Helvetica Neue",
    "font-style": "normal",
    "font-weight": "500",
    "font-size": "2rem",
    "line-height": "2.4375rem",
    "letter-spacing": "0.0625rem",
    "text-transform": "uppercase",
    color: "#424242",
    "mix-blend-mode": "normal",
  };


  const buta = {
    display: "grid",
    "align-self": "center",
    width: "314.4px",
    color: "#00717D",
    background: "#FFFFFF",
    border: "1px solid #00717D",
    "border-radius": "5px",
    "font-family": "Poppins",
    "font-style": "normal",
    "font-weight": "500",
    "font-size": "20px",
    "line-height": "30px",
    "text-align": "center",
    "margin-top": "4.75rem",
    "margin-bottom": "8.5rem",
  };

  return (
    <Layout
      isLoggedIn={true}
      children={
        <section className="middlecontents">
          <Contents />
          <Parag
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec"
            style={style}
          />
          <FirstHeader words="Recently Posted Jobs" style={jobPost} />
          {recentJobs.map((recentJob, index) => (
            <Content2 key={index} {...recentJob}/>
          ))}
          <Button title="More Updates" style={buta} />
        </section>
      }
    />
  );
      };

export default Home