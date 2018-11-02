import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <header
        style={{
          display: "flex",
          position: "fixed",
          padding: "10px",
          width: "100vw",
          color: "#fff",
          backgroundColor: "rgba(37, 37, 37, 0.8)",
          zIndex: "2"
        }}
      >
        <ul
          style={{
            width: "90%",
            listStyleType: "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <li>Intro</li>
          <li>What I Do</li>
          <li>Who I Am</li>
          <li>My Work</li>
          <li>Say Hello</li>
        </ul>
      </header>
    );
  }
}

export default Navbar;
