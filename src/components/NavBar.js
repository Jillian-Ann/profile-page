import React from "react";
import icon from "../images/icon.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheets/navbar.css";

class Navbar extends React.Component {
  render() {
    AOS.init({
      duration: 2000
    });
    return (
      <header data-aos="fade-in">
        <ul>
          <img className="icon" alt="icon" src={icon} />
          <li>
            <a href="#intro">Intro</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>Contact</li>
        </ul>
      </header>
    );
  }
}

export default Navbar;
