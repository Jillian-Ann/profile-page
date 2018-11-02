import React from "react";

import avatar from "../images/avatar.jpg";

class Header extends React.Component {
  render() {
    return (
      <header
        style={{
          textAlign: "end",
          height: "100%",
          width: "24.2%",
          position: "fixed",
          zIndex: "1",
          top: "0",
          left: "0",
          overflowX: "hidden",
          backgroundColor: "rgba(37, 37, 37, 0.9)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="avatar" style={{ right: "0" }}>
          <img
            src={avatar}
            alt=""
            style={{
              margin: "100px 75px 0px 100px",
              verticalAlign: "middle",
              width: "40%",
              height: "40%",
              borderRadius: "50%"
            }}
          />
          <h1
            style={{
              margin: "50px 75px 0px 80px"
            }}
          >
            I am <strong style={{ color: "#f1e0d3" }}>Jillian</strong>. <br />a
            <strong style={{ color: "#f1e0d3" }}> software developer</strong>
            <br /> based in <strong style={{ color: "#f1e0d3" }}>NYC</strong>.
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
