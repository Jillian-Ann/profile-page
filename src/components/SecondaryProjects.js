import React from "react";
import fullArtemis from "../images/fulls/artemis.jpg";

class SecondaryProject extends React.Component {
  render() {
    return (
      <div
        style={{
          transition: "transform 2s cubic",
          display: "flex",
          border: "0",
          height: "auto",
          width: "95%",
          borderRadius: "1%"
        }}
      >
        <img
          style={{
            transition: "transform 2s cubic",
            flex: "1",
            border: "0",
            height: "auto",
            width: "40%",
            borderRadius: "1%"
          }}
          src={fullArtemis}
        />
        <img
          style={{
            transition: "transform 2s cubic",
            display: "block",
            border: "0",
            height: "auto",
            width: "40%",
            borderRadius: "1%"
          }}
          src={fullArtemis}
        />
      </div>
    );
  }
}

export default SecondaryProject;
