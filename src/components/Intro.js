import React from "react";

class Intro extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "block",
          margin: "10%",
          zIndex: 0
        }}
      >
        <p>Jillian McLaren</p>
        <div
          style={{
            position: "relative",
            top: "10%",
            // textTransform: "uppercase",
            fontSize: "30px",
            // lineHeight: "1em",
            zIndex: "3"
          }}
        >
          <h1>
            Environmentalist turned software engineer creating intuitive and
            dynamic UIs inspired by nature.
          </h1>
        </div>
      </div>
    );
  }
}

export default Intro;
