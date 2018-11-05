import React from "react";
import fullArtemis from "../images/fulls/artemis.jpg";
import Stepper from "./Stepper";
import ActionGTranslate from "material-ui/SvgIcon";
import { Parallax } from "react-parallax";

class Projects extends React.Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <section style={styles.section}>
          <div style={styles.div}>
            <h2 style={styles.title}>My Projects</h2>
            <section style={styles.section}>
              <div style={styles.projectDiv}>
                <img src={fullArtemis} style={styles.projectPic} />
                <div style={styles.description}>
                  <h1>TITLE</h1>
                  <h3>little descriptiom</h3>
                  <Stepper style={styles.stepper} />
                </div>
                <div style={styles.box} />
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

const styles = {
  section: {
    display: "block",
    // verticalAlign: "baseline",
    color: "#232323"
    // height: "100vh"
  },
  div: {
    right: "1%",
    position: "absolute",
    padding: "0 32px",
    maxWidth: "1184px",
    margin: "0 auto"
  },
  title: {
    textTransform: "uppercase",
    fontSize: "64px",
    lineHeight: "1em",
    position: "relative",
    zIndex: "3"
  },
  projectDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  projectPic: {
    width: "50%",
    flex: "1",
    marginLeft: "48px",
    position: "relative",
    zIndex: "2",
    borderRadius: "1%"
  },
  description: {
    flex: "1",
    width: "431px",
    zIndex: "2",
    padding: "10%"
  },
  box: {
    height: "100%",
    transform: "translate(-220px,-80px)",
    position: "absolute",
    alignSelf: "end",
    top: "10%",
    right: "-250px",
    width: "70%",
    zIndex: "1",
    display: "block",
    backgroundColor: "#f1e0d3",
    borderRadius: "1%"
  }
};
export default Projects;
