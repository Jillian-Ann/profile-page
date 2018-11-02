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
        <div
          style={{
            padding: ".5em",
            position: "absolute",
            // top: "2vh",
            color: "black",
            zIndex: "1",
            fontSize: "4.3vw",
            fontWeight: "400"
          }}
        >
          <p>
            Environmentalist turned software engineer creating intuitive and
            dynamic UIs inspired by nature.
          </p>
          {/* <p style={{ fontSize: "2vw" }}>
              Specializing in JavaScript and the NERD stack. <br />
              Proficient: JavaScript, Node/Express, React, React-Redux,
              Sequelize/PostgreSQL, Git, GitHub, CSS, HTML5, Material-UI <br />
              Knowledgable: React-Native, React-Native-Navigation, jQuery,
              Socket.io, SQL, Mocha, Jasmine, Chai, Heroku, Bootstrap
            </p> */}
        </div>
      </div>
    );
  }
}

export default Intro;
