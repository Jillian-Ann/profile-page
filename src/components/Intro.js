import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import avatar from "../images/profile.jpg";

class Intro extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // componentDidMount() {
  //   AOS.init({
  //     duration: 3000
  //   });
  // }
  render() {
    AOS.init({
      duration: 2000
    });
    return (
      <div
        data-aos="slide-down"
        style={{
          display: "block",
          padding: "50px 10% 50px 10%",
          zIndex: 0,
          height: "100%",
          minHeight: "100vh",
          margin: "10% 0% 0% 0%"
          // backgroundImage: avatar
        }}
      >
        {/* <img
          style={{
            margin: "0px 100px 0px 0px",
            alignSelf: "center",
            width: "auto",
            height: "40%",
            borderRadius: "1%",
            zIndex: "1",
            flex: "1"
          }}
          src={avatar}
        /> */}
        <div
          style={{
            position: "relative",
            // top: "10%",
            alignSelf: "center",
            // textTransform: "uppercase",
            fontSize: "30px",
            // lineHeight: "1em",
            zIndex: "3",
            letterSpacing: "0.1em",
            flex: "2"
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
