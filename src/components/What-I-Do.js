import React from "react";
import Stepper from "./Stepper";
import fullArtemis from "../images/fulls/artemis.jpg";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import fullstack from "../images/fullstack.jpg";
import salesanalyst from "../images/salesanalyst.jpg";
import ucsb from "../images/ucsb.png";

import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    label: "Grace-Hopper",
    imgPath: fullstack,
    id: "1",
    shortDesc: "Grace Hopper",
    fullDesc:
      "I am a teaching fellow at Fullstack Academy, an immersive software engineering bootcamp. The program focuses on JavaScript, Node, Sequelize/PostgreSQL, Express, React, Redux, data structures and algorithms, system architecture, and test-driven development. As a fellow, I mentor and hold reviews for students on these concepts, lead group projects, and conduct technical interviews for prospective students.",
    title: "Software Engineering Fellow"
  },
  {
    label: "Sales Analyst",
    imgPath: salesanalyst,
    id: "5",
    shortDesc: "Sales Data Analyst",
    fullDesc:
      "As a Sales Analyst at Sheehan Family Companies, a beverage distributor, I gathered and manipulate marketing and sales data for valuable insights. Throughout my time there, I mastered many new softwares, including their CRM Karma software, SAP Concur, and other sales reporting tools on VIP. I became advanced in excel and used VBA to program macros and improve the efficiency of running reports.",
    title: "Sales Data Analyst"
  },
  {
    label: "UCSB",
    imgPath: ucsb,
    id: "5",
    shortDesc:
      "E-commerce platform for books. Users can search by title, author or genre to find their next read. Local storage and stripe are used to hold a cart and provide secure checkout. Admin functionality for editing and adding inventory and viewing all orders and order statuses.",
    fullDesc:
      "I am a total foodie and an environmentalist with a passion for local, organic, sustainable, and responsibly sourced food. Thus, I studied environmental science with a focus in world agriculture and food production at the University of California, Santa Barbara. Upon graduating in June of 2016, I landed a job in the food and beverage industry. I started as a media assistant  and worked my way to a sales analyst role.",
    title: "Environmentalist"
  }
];

class WhatIDo extends React.Component {
  constructor() {
    super();
    this.state = {
      currentProject: 0
    };
    this.changeProject = this.changeProject.bind(this);
    this.nextProject = this.nextProject.bind(this);
    this.previousProject = this.previousProject.bind(this);
  }

  nextProject() {
    this.setState(prevState => ({
      currentProject: prevState.currentProject + 1
    }));
  }

  previousProject() {
    this.setState(prevState => ({
      currentProject: prevState.currentProject - 1
    }));
  }

  changeProject = currentProject => {
    this.setState({ currentProject });
  };

  render() {
    AOS.init({
      duration: 1000
    });
    return (
      <div
        data-aos="fade-right"
        style={{
          zIndex: 0,
          height: "100%",
          minHeight: "100vh"
        }}
      >
        <div style={styles.div}>
          <h2 style={styles.title}>
            My <strong style={{ color: "black" }}>Background</strong>
          </h2>
          <section style={styles.section}>
            <div style={styles.projectDiv}>
              <div style={styles.description}>
                <h1>{projects[this.state.currentProject].title}</h1>
                <IconButton aria-label="website">
                  <FontAwesomeIcon icon={faLink} />
                </IconButton>
                <IconButton aria-label="git-repo">
                  <FontAwesomeIcon icon={faGithub} />
                </IconButton>
                <IconButton aria-label="youtube">
                  <FontAwesomeIcon icon={faYoutubeSquare} />
                </IconButton>
                <div
                  style={{
                    width: "20em",
                    height: "35%",
                    overflow: "auto"
                  }}
                >
                  <p
                    style={styles.descParagraph}
                    // style={{
                    //   ":hover": { visibility: "visible" },
                    //   ":focus": { visibility: "visible" },
                    //   color: "#777777"
                    // }}
                  >
                    {projects[this.state.currentProject].fullDesc}
                  </p>
                </div>
              </div>
              <Stepper
                changeProject={this.changeProject}
                previousProject={this.previousProject}
                nextProject={this.nextProject}
                projects={projects}
              />
              <div style={styles.box} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const styles = {
  "@media screen and (max-width: 850px)": {
    position: "relative",
    padding: "0 32px 0 32px"
  },
  section: {
    display: "block"
  },
  div: {
    position: "relative",
    padding: "0 32px 0 32px"
  },
  title: {
    color: "#777777",
    letterSpacing: "0.3em",
    top: "30px",
    right: "-20%",
    textTransform: "uppercase",
    fontSize: "6vw",
    lineHeight: "1em",
    position: "relative",
    zIndex: "3"
  },
  projectDiv: {
    display: "flex"
  },
  projectPic: {
    backgroundColor: "white",
    width: "50%",
    flex: "1",
    position: "relative",
    zIndex: "2",
    borderRadius: "1%"
  },
  description: {
    direction: "rtl",
    textAlign: "right",
    justifyContent: "flex-end",
    flex: "1.5",
    width: "50%",
    zIndex: "2",
    padding: "0% 5% 0% 0%"
  },
  box: {
    height: "90%",
    position: "absolute",
    top: "-1vh",
    left: "0",
    width: "70%",
    zIndex: "1",
    display: "block",
    backgroundColor: "#dbe9ff",
    borderRadius: "1%"
  },
  descParagraph: {
    color: "#777777",
    padding: "0 5% 0 0"
  }
};

// const styles = {
//   section: {
//     // position: "absolute",
//     display: "block",
//     // verticalAlign: "baseline",
//     color: "#232323"
//     // top: "1000px"
//   },
//   div: {
//     right: "1%",
//     position: "absolute",
//     padding: "10% 32px",
//     maxWidth: "1184px",
//     margin: "0 auto"
//   },
//   title: {
//     left: "-200px",
//     textAlign: "right",
//     textTransform: "uppercase",
//     fontSize: "64px",
//     lineHeight: "1em",
//     position: "relative",
//     zIndex: "3"
//   },
//   projectDiv: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "flex-end",
//     justifyContent: "flex-end"
//   },
//   projectPic: {
//     width: "50%",
//     flex: "1",
//     left: "-200px",
//     position: "relative",
//     zIndex: "2",
//     borderRadius: "1%"
//   },
//   description: {
//     marginLeft: "-10%",
//     flex: "1",
//     width: "300px",
//     zIndex: "2",
//     padding: "10% 0% 10% 10%"
//   },
//   box: {
//     height: "70%",
//     transform: "translate(-110%)",
//     position: "absolute",
//     alignSelf: "end",
//     top: "10%",
//     right: "-250px",
//     width: "65%",
//     zIndex: "1",
//     display: "block",
//     backgroundColor: "#dbe9ff",
//     borderRadius: "1%"
//   }
// };

export default WhatIDo;
