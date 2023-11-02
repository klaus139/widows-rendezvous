import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {AiOutlinePhone} from 'react-icons/ai'
import "./nav.css";
import { images } from "../../constants";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

const Nav =()=> {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
    <div className="upper-links">
      <div className="phone-links">
        <AiOutlinePhone /> UK : +447984648501 | NG: +2348177429702 | +2347088105985
      </div>
      <div className="navigation-button-wrap">
            <div className="nav-social-media-wrap">
              <a
                href="https://instagram.com/haybravosecurity?igshid=NGExMmI2YTkyZg=="
                className="social-media-link w-inline-block"
                ><img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc36ddb063a39e687b631_Insta-icon.svg"
                  loading="lazy"
                  alt="Instagram Icon"
                  className="social-icon" /></a
              ><a
                href="https://www.facebook.com/people/Hay-Bravo-international-Security-Consulting-Company-LTD/100083540643909/?paipv=0&eav=AfZk-s4y746llh98g-ucTA49Evlvof1CLxJFw7wUuMuxVa74Hh-VyyK0A-8yJhxdWHw&_rdr"
                className="social-media-link w-inline-block"
                ><img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc46c51c3425c77fb5dc3_fb-icon.svg"
                  loading="lazy"
                  alt="Facebook Icon"
                  className="social-icon" /></a
              ><a
                href="https://twitter.com/BravoHay13872?s=08"
                className="social-media-link w-inline-block"
                ><img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc54529c06503197e6691_twiter-icon.svg"
                  loading="lazy"
                  alt="Twitter Icon"
                  className="social-icon" /></a
              ><a
                href="https://www.linkedin.com/in/haybravo-international-limited-75b1a7283"
                className="social-media-link w-inline-block"
                ><img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc57ea43e8f10547bacad_linkedIn-icon.svg"
                  loading="lazy"
                  alt="LinkedIn Icon"
                  className="social-icon"
              /></a>
            </div>
           
          </div>


    </div>
      <nav className="navbar">

        <div className="nav-container">
         
          <NavLink exact to="/" className="nav-logo">
          <img src={images.logo} alt='logo' className="navigation-logo" />
            <span>Solomon's Haven</span>
            {/* <i className="fas fa-code"></i> */}
            {/* <span className="icon">
              <CodeIcon />
            </span> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

