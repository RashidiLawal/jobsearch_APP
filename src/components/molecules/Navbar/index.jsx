import React from 'react'
import {NavLink, useNavigate, Link} from "react-router-dom"
import Button from '../../atoms/buttons';
import {useState} from 'react'
import './nav.scss'

const Navbar = () => {
  const [currentPath] = useState(window.location.pathname)


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
          <Link to={navItem.path} className={`${currentPath == navItem.path? 'text-[#00717D]':''} grinhome`}>{navItem.name}</Link>
        ))}
        <div className="contact">
          <Button title="Login" />
        </div>
      </section>
    </nav>
  );
}

export default Navbar