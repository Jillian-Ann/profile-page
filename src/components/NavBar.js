import React from "react";
import icon from "../images/icon.svg";

class Navbar extends React.Component {
  render() {
    return (
      <header
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
          <li style={styles.li}>Intro</li>
          <li style={styles.li}>Projects</li>
          <li style={styles.li}>Who I Am</li>
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
