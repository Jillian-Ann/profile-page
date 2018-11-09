import React from "react";

class Intro extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "block",
          margin: "15% 10% 10% 10%",
          zIndex: 0
        }}
      >
        <div
          style={{
            position: "relative",
            top: "10%",
            // textTransform: "uppercase",
            fontSize: "30px",
            // lineHeight: "1em",
            zIndex: "3",
            letterSpacing: "0.1em"
          }}
        >
          <h1>
            Environmentalist{" "}
            <strong style={{ color: "#777777" }}>turned</strong> software
            engineer{" "}
            <strong style={{ color: "#777777" }}>
              creating intuitive and dynamic{" "}
            </strong>
            UIs
            <strong style={{ color: "#777777" }}> inspired by </strong> nature.
          </h1>
        </div>
      </div>
    );
  }
}

export default Intro;
