import React from "react";

class Intro extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          height: "50vh",
          justifyContent: "flex-start",
          zIndex: 0
        }}
      >
        <p>Jillian McLaren</p>
        <div
          style={{
            // padding: ".5em",
            position: "absolute",
            top: "10%",
            left: "10%",
            color: "black",
            zIndex: "1",
            fontSize: "3vw",
            fontWeight: "400"
          }}
        >
          <p>
            Environmentalist turned software engineer <br />
            creating intuitive and dynamic <br />
            UIs inspired by nature.
          </p>
        </div>
      </div>
    );
  }
}

export default Intro;
