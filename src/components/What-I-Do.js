import React from "react";
import fullArtemis from "../images/fulls/artemis.jpg";

class WhatIDo extends React.Component {
  render() {
    return (
      <section style={styles.section}>
        <div style={styles.div}>
          <h2 style={styles.title}>My Background</h2>
          <section style={styles.section}>
            <div style={styles.projectDiv}>
              <div style={styles.description}>
                <h1>TITLE</h1>
                <h3>little descriptiom</h3>
              </div>
              <img src={fullArtemis} style={styles.projectPic} />
              <div style={styles.box} />
            </div>
          </section>
        </div>
      </section>
    );
  }
}

const styles = {
  section: {
    display: "block",
    // verticalAlign: "baseline",
    color: "#232323"
    // top: "1000px"
  },
  div: {
    right: "1%",
    position: "absolute",
    padding: "10% 32px",
    maxWidth: "1184px",
    margin: "0 auto"
  },
  title: {
    left: "-200px",
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: "64px",
    lineHeight: "1em",
    position: "relative",
    zIndex: "3"
  },
  projectDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  projectPic: {
    width: "50%",
    flex: "1",
    left: "-200px",
    position: "relative",
    zIndex: "2",
    borderRadius: "1%"
  },
  description: {
    marginLeft: "-10%",
    flex: "1",
    width: "300px",
    zIndex: "2",
    padding: "10% 0% 10% 10%"
  },
  box: {
    height: "70%",
    transform: "translate(-100%)",
    position: "absolute",
    alignSelf: "end",
    top: "10%",
    right: "-250px",
    width: "70%",
    zIndex: "1",
    display: "block",
    backgroundColor: "#dbe9ff",
    borderRadius: "1%"
  }
};

export default WhatIDo;
