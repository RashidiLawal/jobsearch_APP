import React from 'react'
import {NavLink} from "react-router-dom"
import Button from '../../atoms/buttons';
import './nav.scss'

const Navbar = () => {

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "News",
      path: "/news",
    },
    {
      name: "Jobs",
      path: "/jobs",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <nav className="navbar">
      <section className="brand-title">
        <img
          src="/image 59 (Traced) (copy).svg"
          alt="logo"
          className="image-left"
        />
        <h1 className="jobspan">myJobs</h1>
      </section>
      <section className="navbar-links">
        {navItems.map((navItem, index) => (
          <NavLink to={navItem.path} key={index} className="grinhome">
            {navItem.name}
          </NavLink>
        ))}
        <div className="contact">
          <Button title="Login" />
        </div>
      </section>
    </nav>
  );
}

export default Navbar