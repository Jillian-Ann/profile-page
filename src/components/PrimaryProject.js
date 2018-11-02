import React from "react";
import fullArtemis from "../images/fulls/artemis.jpg";

class PrimaryProject extends React.Component {
  render() {
    return (
      <img
        style={{
          transition: "transform 2s cubic",
          display: "block",
          border: "0",
          height: "auto",
          width: "95%",
          borderRadius: "1%"
        }}
        src={fullArtemis}
      />
    );
  }
}

export default PrimaryProject;
