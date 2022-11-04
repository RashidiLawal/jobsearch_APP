import React from "react";
import Image from "../../atoms/images/Image";
import FirstHeader from "../../atoms/header/FirstHeader";
import Parag from "../../atoms/paragraph/Parag";
import "./footer.scss";

const Footer = () => {
  const footerara = {
    width: "18.1875rem",
    "margin-left": "7.5rem",
    "margin-right": "8.5625rem",
    "margin-bottom": "10.75rem",
    "font-family": "Inter",
    "font-weight": "400",
    "text-align": "start",
    "font-size": "1.25rem",
    "font-style": "normal",
    color: "#FFFFFF80",
    "line-height": "1.5rem",
    "letter-spacing": "0.0375rem",
  };

  return (
    <footer className="footer ">
      <section className="major">
        <section className="firstholder">
          <div className="fusta">
            <Image logoImage="/image 59 (Traced) (1).svg" logo="myjob" />
            <FirstHeader
              words="myJobs"
              co="#E5E5E5"
              fz="2.125475rem"
              wi="6.875rem"
              fw="500"
              pt=".5rem"
            />
          </div>
          <Parag
            text="myJobs provides real oppuniies for graduates and unemployed
          individuals to search and auquire jobs in their careers or areas of
          interest"
            wi="18.1875rem"
            ml="7.5rem"
            mr="8.5625rem"
            mb="10.75rem"
            fw="400"
            ta="start"
            fz="1.25rem"
            co="#FFFFFF80"
            lh="1.5rem"
            ls="0.0375rem"
          />
        </section>

        <sectional claasName="sectional">
          <span className="secondholder">
            <h3 className="big1">Recruitment</h3>
            <p className="secondholder1">
              <a href="/affliate" className="onit">
                Become Affiliate
              </a>
              <a href="unlimited" className="onit">
                Go Unlimited
              </a>
              <a href="services" className="onit">
                Services
              </a>
            </p>
          </span>
          <span className="thirdholder">
            <h3 className="big1">Major Careers</h3>
            <p className="thirdholder1">
              <a href="business" className="onit">
                Business Stories
              </a>
              <a href="digital" className="onit">
                Digital Store
              </a>
              <a href="learning" className="onit">
                Learning
              </a>
              <a href="social" className="onit">
                Social Media
              </a>
            </p>
          </span>
          <span className="forthholder">
            <h3 className="big1">Most recruiting companies</h3>
            <p className="forthholder1">
              <a href="designs" className="onit">
                Design Systems
              </a>
              <a href="themes" className="onit">
                Themes & Templates
              </a>
              <a href="mockups" className="onit">
                Mockups
              </a>
              <a href="presentation" className="onit">
                Presentations
              </a>
              <a href="frames" className="onit">
                Wireframes Kits
              </a>
              <a href="kits" className="onit">
                UI Kits
              </a>
            </p>
          </span>
          <span className="fifthholder">
            <h3 className="big1">Who got jobs here</h3>
            <p className="fifthholder1">
              <a href="licence" className="onit">
                License
              </a>
              <a href="policy" className="onit">
                Refund Policy
              </a>
              <a href="about" className="onit">
                About Us
              </a>
              <a href="contact" className="onit">
                Contacts
              </a>
            </p>
          </span>
        </sectional>
      </section>
      <div className="morespan">
        <p className="copyright"> Copyright &copy; 2022</p>
        <div className="social">
          <span className="sospan">
            <a href="https://www.facebook.com">
              <img src="/Path.svg" alt="facebook" className="mager" />
            </a>
          </span>
          <span className="sospan">
            <a href="https://www.instagram.com">
              <img src="/Combined Shape.svg" alt="intagram" className="mager" />
            </a>
          </span>
          <span className="sospan">
            <a href="https://www.twitter.com">
              <img src="/Path2.svg" alt="twiiter" className="mager" />{" "}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
