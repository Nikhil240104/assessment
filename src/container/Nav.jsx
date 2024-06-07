import React from 'react';
import "./Nav.css";
import logo from "../images/logo.png"

function Nav() {
  return (
    <header className="header">
        <div className="logo"><img src={logo}/></div>
        <div className="nav">
          <ul >
            <li>Home</li>
            <li>About us</li>
            <li>Learning Science</li>
            <li>Learning Vedic Maths</li>
            <li>Learning Bespoke</li>
          </ul>
        </div>
        <button className="contact-btn">Contact Us</button>

      </header>
  );
}

export default Nav;