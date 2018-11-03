import React from "react";
import fullArtemis from "../images/fulls/artemis.jpg";

class PrimaryProject extends React.Component {
  render() {
    return (
      <img
        style={{
          margin: "0 5% 0 5%",
          transition: "transform 2s cubic",
          display: "block",
          border: "0",
          height: "auto",
          width: "90%",
          borderRadius: "1%"
        }}
        src={fullArtemis}
      />
    );
  }
}

export default PrimaryProject;
