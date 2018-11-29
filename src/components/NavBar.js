import React from "react";
import icon from "../images/icon.svg";
import AOS from "aos";
import "aos/dist/aos.css";

class Navbar extends React.Component {
  render() {
    AOS.init({
      duration: 2000
    });
    return (
      <header
        data-aos="fade-in"
        style={{
          top: "0",
          display: "flex",
          position: "fixed",
          padding: "10px",
          width: "100vw",
          color: "black",
          backgroundColor: "white",
          zIndex: "4",
          borderBottom: "1px solid #f0f0f0"
        }}
      >
        <ul
          style={{
            height: "20px",
            left: "15%",
            width: "90%",
            listStyleType: "none",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <img
            style={{ alignSelf: "center", height: "250%", margin: "0 2em" }}
            src={icon}
          />
          <li style={styles.li}>
            <a href="#intro">Intro</a>
          </li>
          <li style={styles.li}>
            <a href="#projects">Projects</a>
          </li>
          <li style={styles.li}>
            <a href="#about">Who I Am</a>
          </li>
          <li style={styles.li}>Say Hello</li>
        </ul>
      </header>
    );
  }
}

const styles = {
  li: {
    margin: "0 2em",
    fontWeight: "bold"
  }
};

export default Navbar;
