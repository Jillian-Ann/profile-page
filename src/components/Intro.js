import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheets/intro.css";

class Intro extends React.Component {
  render() {
    AOS.init({
      duration: 2000
    });
    return (
      <div data-aos="fade-down" className="mainIntro">
        <div className="introTitle">
          <h1 style={{ flex: "1" }}>
            <strong style={{ color: "#777777" }}>Hi, I'm </strong>
            Jillian.
          </h1>
          <div style={{ flex: "2", padding: "5%", fontSize: "20px" }} />
        </div>
        <h1>
          Environmentalist <strong style={{ color: "#777777" }}>turned</strong>{" "}
          software engineer{" "}
          <strong style={{ color: "#777777" }}>
            creating intuitive and dynamic{" "}
          </strong>
          UIs
          <strong style={{ color: "#777777" }}> inspired by </strong> nature.
        </h1>
      </div>
    );
  }
}

export default Intro;
