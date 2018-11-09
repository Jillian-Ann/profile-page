import React from "react";
import logo from "../images/logo.png";

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
          color: "#fff",
          backgroundColor: "rgba(37, 37, 37, .95)",
          zIndex: "4",
          borderBottom: "1px solid black"
        }}
      >
        <ul
          style={{
            width: "90%",
            listStyleType: "none",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <li style={{ margin: "0 2em" }}>Intro</li>
          <li style={{ margin: "0 2em" }}>Projects</li>
          <li style={{ margin: "0 2em" }}>Who I Am</li>
          <li style={{ margin: "0 2em" }}>Say Hello</li>
        </ul>
      </header>
    );
  }
}

export default Navbar;
