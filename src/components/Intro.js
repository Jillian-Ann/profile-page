import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import avatar from "../images/profile.jpg";

class Intro extends React.Component {
  render() {
    AOS.init({
      duration: 2000
    });
    return (
      <div
        data-aos="fade-down"
        style={{
          display: "block",
          padding: "50px 10% 50px 10%",
          zIndex: 0,
          height: "100%",
          minHeight: "100vh",
          margin: "20% 0% 0% 0%"
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
            // alignSelf: "center",
            fontSize: "30px",
            zIndex: "3",
            display: "flex",
            alignItems: "flex-end"
            // height: "50vh"
          }}
        >
          <h1 style={{ flex: "1" }}>
            <strong style={{ color: "#777777" }}>Hi, I'm </strong>
            Jillian.
          </h1>
          <div style={{ flex: "2", padding: "5%", fontSize: "20px" }}>
            {/* <img
              style={{
                // margin: "0px 100px 0px 0px",
                // alignSelf: "flex-start",
                width: "auto",
                height: "10%",
                borderRadius: "1%",
                zIndex: "1",
                flex: "1"
              }}
              src={avatar}
            /> */}
          </div>
          {/* <h1>
            Environmentalist{" "}
            <strong style={{ color: "#777777" }}>turned</strong> software
            engineer{" "}
            <strong style={{ color: "#777777" }}>
              creating intuitive and dynamic{" "}
            </strong>
            UIs
            <strong style={{ color: "#777777" }}> inspired by </strong> nature.
          </h1> */}
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
